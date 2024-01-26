import { CommonParams, GetResponse } from "../types";
import { setupAPIClient } from "./api";

const api = setupAPIClient();

export async function GetCreators({
  limit,
  offset,
}: CommonParams): Promise<GetResponse> {
  const { data } = await api.get("/creators", {
    params: {
      limit,
      offset,
    },
  });

  return data;
}
