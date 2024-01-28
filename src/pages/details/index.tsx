import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Layout, SubDetails } from "../../components";
import { getDetails, getSubDetails } from "../../services";
import { Results } from "../../types";
import {
  FormattedDataProps,
  PAGE_TYPES,
  PAGE_TYPES_KEY,
  formatData,
} from "../../utils/common-data";
import * as Styles from "./styles";

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

  async function fetchDataByIdAndType(typeToFetch: PAGE_TYPES_KEY, id: number) {
    setFetchedData({} as Results);
    setFormattedData({} as FormattedDataProps);
    setNestedLists({} as { [key in PAGE_TYPES_KEY]: Results[] });
    try {
      const { data } = await getDetails(typeToFetch, id);

      setFetchedData(data.results[0]);

      const preFormattedData = formatData(
        data.results[0],
        typeToFetch,
        data.total
      );

      setFormattedData(preFormattedData);
    } catch (error: any) {
      if (error.response.status === 429) {
        toast.error(
          "You have exceeded the request limit. Please try again later."
        );
        navigate("/home");
        return;
      }
      toast.error("The item you tried to access does not exist.");
      navigate(`/${typeToFetch}`);
    }
  }

  async function fetchSubTypeData(
    typeToFetch: PAGE_TYPES_KEY,
    id: number,
    subType: PAGE_TYPES_KEY,
    offset: number,
    limit: number
  ) {
    const { data: subData } = await getSubDetails({
      type: typeToFetch,
      id,
      subType: subType as PAGE_TYPES_KEY,
      offset: offset,
      limit: limit,
    });

    setNestedLists((prev) => ({
      ...prev,
      [subType]: subData.results,
    }));

    if (subData.total > subData.offset + subData.limit) {
      await fetchSubTypeData(typeToFetch, id, subType, offset + limit, limit);
    }
  }

  useEffect(() => {
    if (!id || !type) return;
    fetchDataByIdAndType(type as PAGE_TYPES_KEY, Number(id));
  }, [id, type]);

  useEffect(() => {
    if (!id || !type || !fetchedData) return;

    Object.keys(fetchedData).map(async (key) => {
      if (!fetchedData[key as PAGE_TYPES_KEY]) return;
      if (
        key === PAGE_TYPES[key as PAGE_TYPES_KEY] &&
        fetchedData[key as PAGE_TYPES_KEY]?.items.length > 0 &&
        fetchedData[key as PAGE_TYPES_KEY]?.returned > 0
      ) {
        await fetchSubTypeData(
          type as PAGE_TYPES_KEY,
          Number(id),
          key as PAGE_TYPES_KEY,
          0,
          fetchedData[key as PAGE_TYPES_KEY]?.returned
        );
      }
    });
  }, [fetchedData]);

  return (
    <Layout showNavigation>
      <Styles.Container>
        <Styles.Content>
          <Styles.Image src={formattedData.image} />
          <Styles.SubContent>
            <Styles.Title>{formattedData.name || "UNKNOWN NAME"}</Styles.Title>
            <Styles.Description>
              {formattedData.description || "No description available"}
            </Styles.Description>
            <div></div>
          </Styles.SubContent>
        </Styles.Content>
        <Styles.SubDetailsContainer>
          {Object.keys(nestedLists).map((key) => {
            return (
              <SubDetails
                key={key}
                subType={key as PAGE_TYPES_KEY}
                data={nestedLists[key as PAGE_TYPES_KEY]}
              />
            );
          })}
        </Styles.SubDetailsContainer>
      </Styles.Container>
    </Layout>
  );
}
