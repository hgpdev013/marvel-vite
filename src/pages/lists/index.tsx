import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Layout, List } from "../../components";
import { getCommonData } from "../../services";
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

  const fetchDataPerType = useCallback(
    async (offset: number) => {
      try {
        const { data } = await getCommonData({
          limit: GET_LIMIT,
          offset: offset,
          type: type as PAGE_TYPES_KEY,
        });

        const dataFormatted = data.results.map((value) =>
          formatData(value, type as PAGE_TYPES_KEY, data.total)
        );

        setData((prev) => [...prev, ...dataFormatted]);
        setOffset(offset);
      } catch (error) {
        toast.error("The type you tried to list doesn't exists.");
        navigate("/home");
      }
    },
    [offset, setData]
  );
  
  useEffect(() => {
    fetchDataPerType(0);
  }, []);

  return (
    <Layout showNavigation={false}>
      <List
        data={data}
        fetchData={fetchDataPerType}
        offset={offset}
        type={type as PAGE_TYPES_KEY}
      />
    </Layout>
  );
}
