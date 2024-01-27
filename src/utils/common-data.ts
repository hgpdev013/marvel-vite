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
