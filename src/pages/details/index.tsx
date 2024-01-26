import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SubDetails } from "../../components";
import { getDetails, getSubDetails } from "../../services";
import { Results } from "../../types";
import {
  NAME_TYPES,
  PAGE_TYPES,
  PAGE_TYPES_KEY,
} from "../../utils/common-data";
import * as Styles from "./styles";

const SUB_LIMIT = 8;

interface FormattedDataProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default function DetailsPage() {
  const { id, type } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<Results>({} as Results);
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
  } as { [key in PAGE_TYPES_KEY]: number });

  async function fetchDataByIdAndType(typeToFetch: PAGE_TYPES_KEY, id: number) {
    setData({} as Results);
    setFormattedData({} as FormattedDataProps);
    setNestedLists({} as { [key in PAGE_TYPES_KEY]: Results[] });
    setOffset({
      comics: 0,
      characters: 0,
      creators: 0,
    });
    try {
      const { data } = await getDetails(typeToFetch, id);

      setData(data.results[0]);
      setFormattedData({
        id: data.results[0].id,
        name: data.results[0][NAME_TYPES[typeToFetch]],
        description: data.results[0].description,
        image: data.results[0].thumbnail
          ? `${data.results[0].thumbnail.path}.${data.results[0].thumbnail.extension}`
          : "",
      });
    } catch (error) {
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
    if (!id || !type || !data) return;
    Object.keys(data).forEach(async (key) => {
      if (
        key !== PAGE_TYPES[key as PAGE_TYPES_KEY] ||
        data[key as PAGE_TYPES_KEY]?.items.length === 0
      )
        return;
      if (data[key as PAGE_TYPES_KEY]?.items.length > 0) {
        fetchSubTypeData(
          type as PAGE_TYPES_KEY,
          Number(id),
          key as PAGE_TYPES_KEY
        );
      }
    });
  }, [data]);

  return (
    <Styles.Container>
      <div>
        <button onClick={() => navigate(`/${type}`)}></button>
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
