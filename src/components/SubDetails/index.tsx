import { Card } from "..";
import { Results } from "../../types";
import { PAGE_TYPES_KEY } from "../../utils/common-data";
import * as Styles from "./styles";

interface SubDetailsProps {
  subType: PAGE_TYPES_KEY;
  data: Results[];
}

const NAME_TYPES = {
  comics: "title",
  characters: "name",
  creators: "fullName",
} as const;

export const SubDetails = ({ data, subType }: SubDetailsProps) => {
  const formattedData = data.map((value) => ({
    id: value.id,
    name: value[NAME_TYPES[subType]],
    description: value.description,
    image: value.thumbnail
      ? `${value.thumbnail.path}.${value.thumbnail.extension}`
      : "",
  }));

  return (
    <Styles.Container>
      {subType}
      {formattedData?.map(({ name, id, description, image }) => {
        return <Card data={{ name, id, description, image }} type={subType} />;
      })}
    </Styles.Container>
  );
};
