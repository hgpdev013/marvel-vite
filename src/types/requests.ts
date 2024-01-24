type CommonParams = {
  limit: number;
  offset: number;
};

type GetCharacterParams = {
  name?: string;
  nameStartsWith?: string;
  orderBy?: "name" | "-name" | "modified" | "-modified";
};

export type { CommonParams, GetCharacterParams };
