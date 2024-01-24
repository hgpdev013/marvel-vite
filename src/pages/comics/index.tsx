import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "../../components/Card";
import { GetComics } from "../../services";
import { GET_LIMIT } from "../../utils/common-data";
import * as Styles from "./styles";

interface Comic {
  id: number;
  name: string;
  description: string;
  image: string;
  totalData: number;
}

export default function ComicsPage() {
  const [offset, setOffset] = useState(0);
  const [comics, setComics] = useState<Comic[]>([]);

  const fetchComics = useCallback(
    async (offset: number) => {
      const { data } = await GetComics({ limit: GET_LIMIT, offset: offset });

      const comicsFormatted = data.results.map((comic) => {
        return {
          id: comic.id,
          name: comic.title,
          description: "",
          image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
          totalData: data.total,
        };
      });

      setComics((prev) => [...prev, ...comicsFormatted]);
      setOffset(offset);
    },
    [offset, setComics]
  );

  useEffect(() => {
    fetchComics(0);
  }, []);

  return (
    <Styles.Container>
      <InfiniteScroll
        dataLength={comics.length}
        next={() => fetchComics(offset + GET_LIMIT)}
        scrollThreshold={0.9}
        hasMore={comics.length < comics[0]?.totalData}
        loader={""}
        scrollableTarget="scrollableDiv"
      >
        <Styles.Content id="scrollableDiv">
          {comics.map((comic) => (
            <Card key={comic.id} data={comic} />
          ))}
        </Styles.Content>
      </InfiniteScroll>
    </Styles.Container>
  );
}
