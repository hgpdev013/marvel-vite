import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Layout, List } from "../../components";
import { getCommonData } from "../../services";
import { OrderBy } from "../../types";
import {
  FormattedDataProps,
  GET_LIMIT,
  PAGE_TYPES_KEY,
  formatData,
} from "../../utils/common-data";

export default function ListsPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<FormattedDataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [orderBy, setOrderBy] = useState<"name" | "modified">("name");
  const [startsWith, setStartsWith] = useState(undefined);
  const [abortController, setAbortController] = useState(new AbortController());

  const fetchDataPerType = useCallback(
    async (
      offset: number,
      typeToFetch: PAGE_TYPES_KEY,
      orderBy?: OrderBy,
      startsWith?: string,
      isDesc?: boolean
    ) => {
      setIsLoading(true);
      const controller = new AbortController();
      setAbortController(controller);

      try {
        const { data } = await getCommonData({
          limit: GET_LIMIT,
          offset: offset,
          type: typeToFetch as PAGE_TYPES_KEY,
          orderBy,
          startsWith,
          isDesc,
          signal: controller.signal,
        });

        const dataFormatted = data.results.map((value) =>
          formatData(value, typeToFetch as PAGE_TYPES_KEY, data.total)
        );

        setData((prev) => [...prev, ...dataFormatted]);
        setOffset(offset);
      } catch (error: any) {
        if (error?.name === "CanceledError") return;
        if (error?.response?.status === 429) {
          toast.error(
            "You have exceeded the request limit. Please try again later."
          );
          return;
        }

        toast.error("The type you tried to list doesn't exist.");
        navigate("/home");
      }
      setIsLoading(false);
    },
    [setData, navigate]
  );

  useEffect(() => {
    setData([]);
    setOffset(0);
    setOrderBy("name");
    setStartsWith(undefined);

    abortController.abort();

    fetchDataPerType(0, type as PAGE_TYPES_KEY, orderBy, startsWith);
  }, [type, fetchDataPerType, orderBy, startsWith]);

  return (
    <Layout showNavigation={false}>
      <List
        data={data}
        fetchData={fetchDataPerType}
        offset={offset}
        isLoading={isLoading}
        type={type as PAGE_TYPES_KEY}
      />
    </Layout>
  );
}
