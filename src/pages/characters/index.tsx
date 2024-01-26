import { useCallback, useEffect, useState } from "react";
import { List } from "../../components";
import { GetCharacter } from "../../services";
import { GET_LIMIT } from "../../utils/common-data";

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
    <List
      data={characters}
      fetchData={fetchCharacters}
      offset={offset}
      type="characters"
    />
  );
}
