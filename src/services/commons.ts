import { setupAPIClient } from ".";
import { GetResponse } from "../types";
import { PAGE_TYPES } from "../utils/common-data";

const api = setupAPIClient();

export async function getDetails(
  type: keyof typeof PAGE_TYPES,
  id: number
): Promise<GetResponse> {
  const { data } = await api.get(`/${type}/${id}`);

  return data;
}
