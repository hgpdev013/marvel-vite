import { setupAPIClient } from ".";
import { CommonParams, GetResponse } from "../types";
import { PAGE_TYPES } from "../utils/common-data";

const api = setupAPIClient();

export async function getDetails(
  type: keyof typeof PAGE_TYPES,
  id: number
): Promise<GetResponse> {
  const { data } = await api.get(`/${type}/${id}`);

  return data;
}

export async function getSubDetails({
  limit,
  offset,
  type,
  id,
  subType,
}: CommonParams & {
  type: keyof typeof PAGE_TYPES;
  id: number;
  subType: keyof typeof PAGE_TYPES;
}): Promise<GetResponse> {
  const { data } = await api.get(`/${type}/${id}/${subType}`, {
    params: {
      limit,
      offset,
    },
  });

  return data;
}
