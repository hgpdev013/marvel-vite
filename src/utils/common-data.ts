import { Results } from "../types";

export const GET_LIMIT = 25;

export const PAGE_TYPES = {
  characters: "characters",
  comics: "comics",
  creators: "creators",
  stories: "stories",
  events: "events",
  series: "series",
} as const;

export const NAME_TYPES = {
  comics: "title",
  characters: "name",
  creators: "fullName",
  stories: "title",
  events: "title",
  series: "title",
} as const;

export type PAGE_TYPES_KEY = keyof typeof PAGE_TYPES;

export interface FormattedDataProps {
  id: number;
  name: string;
  description: string;
  image: string;
  totalData: number;
}

export const formatData = (
  data: Results,
  type: PAGE_TYPES_KEY,
  total?: number
): FormattedDataProps => {
  return {
    id: data.id,
    name: data[NAME_TYPES[type]] || "Unknown",
    description: data.description || "Unknown description",
    image: data.thumbnail
      ? data.thumbnail.path !==
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
        ? `${data.thumbnail.path}.${data.thumbnail.extension}`
        : "https://fakeimg.pl/1000x1000?text=Unknown"
      : "https://fakeimg.pl/1000x1000?text=Unknown",
    totalData: total || 0,
  };
};
