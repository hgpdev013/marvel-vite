import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { SubDetails } from "../../components";
import { getDetails, getSubDetails } from "../../services";
import { Results } from "../../types";
import {
  FormattedDataProps,
  PAGE_TYPES,
  PAGE_TYPES_KEY,
  formatData,
} from "../../utils/common-data";
import * as Styles from "./styles";

const SUB_LIMIT = 8;

export default function DetailsPage() {
  const { id, type } = useParams();
  const navigate = useNavigate();

  const [fetchedData, setFetchedData] = useState<Results>({} as Results);
  const [formattedData, setFormattedData] = useState<FormattedDataProps>(
    {} as FormattedDataProps
  );

  const [nestedLists, setNestedLists] = useState<{
    [key in PAGE_TYPES_KEY]: Results[];
  }>({} as { [key in PAGE_TYPES_KEY]: Results[] });

  const [offset, setOffset] = useState<{
    [key in PAGE_TYPES_KEY]: number;
  }>({
    comics: 0,
    characters: 0,
    creators: 0,
    events: 0,
    stories: 0,
    series: 0,
  } as { [key in PAGE_TYPES_KEY]: number });

  async function fetchDataByIdAndType(typeToFetch: PAGE_TYPES_KEY, id: number) {
    setFetchedData({} as Results);
    setFormattedData({} as FormattedDataProps);
    setNestedLists({} as { [key in PAGE_TYPES_KEY]: Results[] });
    setOffset({
      comics: 0,
      characters: 0,
      creators: 0,
      events: 0,
      stories: 0,
      series: 0,
    });
    try {
      const { data } = await getDetails(typeToFetch, id);

      setFetchedData(data.results[0]);

      const preFormattedData = formatData(
        data.results[0],
        typeToFetch,
        data.total
      );

      setFormattedData(preFormattedData);
    } catch (error) {
      toast.error("The item you tried to access does not exist.");
      navigate(`/${typeToFetch}`);
    }
  }

  async function fetchSubTypeData(
    typeToFetch: PAGE_TYPES_KEY,
    id: number,
    subType: PAGE_TYPES_KEY
  ) {
    const { data: subData } = await getSubDetails({
      type: typeToFetch,
      id,
      subType: subType as PAGE_TYPES_KEY,
      limit: SUB_LIMIT,
      offset: offset[subType as PAGE_TYPES_KEY],
    });

    setOffset((prev) => ({
      ...prev,
      [subType]: prev[subType as PAGE_TYPES_KEY] + SUB_LIMIT,
    }));

    setNestedLists((prev) => ({
      ...prev,
      [subType]: subData.results,
    }));
  }

  useEffect(() => {
    if (!id || !type) return;
    fetchDataByIdAndType(type as PAGE_TYPES_KEY, Number(id));
  }, [id, type]);

  useEffect(() => {
    if (!id || !type || !fetchedData) return;
    Object.keys(fetchedData).forEach(async (key) => {
      if (
        key !== PAGE_TYPES[key as PAGE_TYPES_KEY] ||
        fetchedData[key as PAGE_TYPES_KEY]?.items.length === 0
      )
        return;
      if (fetchedData[key as PAGE_TYPES_KEY]?.items.length > 0) {
        fetchSubTypeData(
          type as PAGE_TYPES_KEY,
          Number(id),
          key as PAGE_TYPES_KEY
        );
      }
    });
  }, [fetchedData]);

  return (
    <Styles.Container>
      <div>
        <button onClick={() => navigate(-1)}></button>
        <h1>{formattedData.name}</h1>
      </div>
      {Object.keys(nestedLists).map((key) => {
        return (
          <SubDetails
            key={key}
            subType={key as PAGE_TYPES_KEY}
            data={nestedLists[key as PAGE_TYPES_KEY]}
          />
        );
      })}
    </Styles.Container>
  );
}
