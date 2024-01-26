import { useCallback, useEffect, useState } from "react";
import { List } from "../../components";
import { GetComics } from "../../services";
import { GET_LIMIT } from "../../utils/common-data";

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
    <List data={comics} fetchData={fetchComics} offset={offset} type="comics" />
  );
}
