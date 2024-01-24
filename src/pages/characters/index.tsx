import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "../../components/Card";
import { GetCharacter } from "../../services";
import { GET_LIMIT } from "../../utils/common-data";
import * as Styles from "./styles";

interface Character {
  id: number;
  name: string;
  description: string;
  image: string;
  totalData: number;
}

export default function CharactersPage() {
  const [offset, setOffset] = useState(0);
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = useCallback(
    async (offset: number) => {
      const { data } = await GetCharacter({ limit: GET_LIMIT, offset: offset });

      const charactersFormatted = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          description: character.description,
          image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          totalData: data.total,
        };
      });

      setCharacters((prev) => [...prev, ...charactersFormatted]);
      setOffset(offset);
    },
    [offset, setCharacters]
  );

  useEffect(() => {
    fetchCharacters(0);
  }, []);

  return (
    <Styles.Container>
      <InfiniteScroll
        dataLength={characters.length}
        next={() => fetchCharacters(offset + GET_LIMIT)}
        scrollThreshold={0.9}
        hasMore={characters.length < characters[0]?.totalData}
        loader={""}
        scrollableTarget="scrollableDiv"
      >
        <Styles.Content id="scrollableDiv">
          {characters.map((character) => (
            <Card key={character.id} data={character} />
          ))}
        </Styles.Content>
      </InfiniteScroll>
    </Styles.Container>
  );
}
