import { CommonParams, GetResponse } from "../types";
import { setupAPIClient } from "./api";

const api = setupAPIClient();

export async function GetComics({
  limit,
  offset,
}: CommonParams): Promise<GetResponse> {
  const { data } = await api.get("/comics", {
    params: {
      limit,
      offset,
    },
  });

  return data;
}