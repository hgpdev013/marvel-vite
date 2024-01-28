import { setupAPIClient } from ".";
import { CommonParams, GetResponse } from "../types";
import { PAGE_TYPES_KEY } from "../utils/common-data";

const api = setupAPIClient();

const REQUEST_NAME_FILTER = {
  comics: "titleStartsWith",
  characters: "nameStartsWith",
  creators: "nameStartsWith",
  events: "nameStartsWith",
  series: "titleStartsWith",
};

interface CommonDataFilters {
  type: PAGE_TYPES_KEY;
  startsWith?: string;
  orderBy?: string;
}

export async function getCommonData({
  limit,
  offset,
  type,
  startsWith,
  orderBy,
}: CommonParams & CommonDataFilters): Promise<GetResponse> {
  const { data } = await api.get(`/${type}`, {
    params: {
      limit,
      offset,
      [REQUEST_NAME_FILTER[type]]: startsWith,
      orderBy,
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
