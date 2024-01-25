import { useCallback, useEffect, useState } from "react";
import { List } from "../../components";
import { GetCreators } from "../../services";
import { GET_LIMIT } from "../../utils/common-data";

interface Creator {
  id: number;
  name: string;
  description: string;
  image: string;
  totalData: number;
}

export default function CreatorsPage() {
  const [offset, setOffset] = useState(0);
  const [creators, setCreators] = useState<Creator[]>([]);

  const fetchCreators = useCallback(
    async (offset: number) => {
      const { data } = await GetCreators({ limit: GET_LIMIT, offset: offset });

      const creatorsFormatted = data.results.map((creator) => {
        return {
          id: creator.id,
          name: creator.fullName,
          description: creator.description,
          image: `${creator.thumbnail.path}.${creator.thumbnail.extension}`,
          totalData: data.total,
        };
      });

      setCreators((prev) => [...prev, ...creatorsFormatted]);
      setOffset(offset);
    },
    [offset, setCreators]
  );

  useEffect(() => {
    fetchCreators(0);
  }, []);

  return (
    <List
      data={creators}
      fetchData={fetchCreators}
      offset={offset}
      type="creator"
    />
  );
}
