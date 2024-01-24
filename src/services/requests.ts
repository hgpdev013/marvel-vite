import { setupAPIClient } from "./api";
import {
  CommonParams,
  GetCharacterParams,
  GetCharacterResponse,
} from "../types";

const api = setupAPIClient();

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
  const { data } = await api.get<GetCharacterResponse>(
    `/characters/${characterId}`
  );

  return data;
}
