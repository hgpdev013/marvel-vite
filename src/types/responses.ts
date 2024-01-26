type Thumbnail = {
  path: string;
  extension: "jpg" | "png" | "gif" | "jpeg" | "webp";
};

type Item = {
  resourceURI: string;
  name: string;
};

type Url = {
  type: string;
  url: string;
};

type Subtopics = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

export type Results = {
  id: number;
  fullName: string;
  title: string;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  thumbnail: Thumbnail;
  characters: Subtopics;
  creators: Subtopics;
  comics: Subtopics;
  series: Subtopics;
  stories: Subtopics;
  events: Subtopics;
  urls: Url[];
};

type GetResponse = {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Results[];
    etag: string;
  };
};

export type { GetResponse };
