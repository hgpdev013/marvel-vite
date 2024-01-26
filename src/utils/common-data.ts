export const GET_LIMIT = 25;

export const PAGE_TYPES = {
  characters: "characters",
  comics: "comics",
  creators: "creators",
} as const;

export const NAME_TYPES = {
  comics: "title",
  characters: "name",
  creators: "fullName",
} as const;

export type PAGE_TYPES_KEY = keyof typeof PAGE_TYPES;
