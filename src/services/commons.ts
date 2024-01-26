import { setupAPIClient } from ".";
import { CommonParams, GetResponse } from "../types";
import { PAGE_TYPES_KEY } from "../utils/common-data";

const api = setupAPIClient();

export async function getHomeData({
  limit,
  offset,
  type,
}: CommonParams & { type: PAGE_TYPES_KEY }): Promise<GetResponse> {
  const { data } = await api.get(`/${type}`, {
    params: {
      limit,
      offset,
    },
  });

  return data;
}

export async function getDetails(
  type: PAGE_TYPES_KEY,
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
  type: PAGE_TYPES_KEY;
  id: number;
  subType: PAGE_TYPES_KEY;
}): Promise<GetResponse> {
  const { data } = await api.get(`/${type}/${id}/${subType}`, {
    params: {
      limit,
      offset,
    },
  });

  return data;
}
