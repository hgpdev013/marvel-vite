import { setupAPIClient } from "./api";
import { CommonParams, GetCharacterParams, GetResponse } from "../types";

const api = setupAPIClient();

export async function GetCharacter({
  name,
  nameStartsWith,
  orderBy,
  limit,
  offset,
}: CommonParams & GetCharacterParams) {
  const { data } = await api.get<GetResponse>("/characters", {
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