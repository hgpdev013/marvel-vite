type CommonParams = {
  limit: number;
  offset: number;
};

type OrderBy =
  | "name"
  | "title"
  | "firstName"
  | "modified"
  | "-name"
  | "-title"
  | "-firstName"
  | "-modified";

type GetCharacterParams = {
  name?: string;
  nameStartsWith?: string;
  orderBy?: "name" | "-name" | "modified" | "-modified";
};

export type { CommonParams, GetCharacterParams, OrderBy };
