import { api } from "./api";
import {
  CommonParams,
  GetCharacterParams,
  GetCharacterResponse,
} from "../types";

export async function GetCharacter({
  name,
  nameStartsWith,
  orderBy,
  limit,
  offset,
}: CommonParams & GetCharacterParams) {
  const { data } = await api.get<GetCharacterResponse>("/characters", {
    params: {
      name,
      nameStartsWith,
      orderBy,
      limit,
      offset,
    },
  });

  return data;
}

export async function GetCharacterById(characterId: number) {
  const { data } = await api.get<GetCharacterResponse>("/characters", {
    params: {
      characterId,
    },
  });

  return data;
}
