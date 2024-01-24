import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "../../components/Card";
import { GetCreators } from "../../services";
import { GET_LIMIT } from "../../utils/common-data";
import * as Styles from "./styles";

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
    <Styles.Container>
      <InfiniteScroll
        dataLength={creators.length}
        next={() => fetchCreators(offset + GET_LIMIT)}
        scrollThreshold={0.9}
        hasMore={creators.length < creators[0]?.totalData}
        loader={""}
        scrollableTarget="scrollableDiv"
      >
        <Styles.Content id="scrollableDiv">
          {creators.map((creator) => (
            <Card key={creator.id} data={creator} />
          ))}
        </Styles.Content>
      </InfiniteScroll>
    </Styles.Container>
  );
}
