import { Card } from "..";
import { Results } from "../../types";
import { NAME_TYPES, PAGE_TYPES_KEY } from "../../utils/common-data";
import * as Styles from "./styles";

interface SubDetailsProps {
  subType: PAGE_TYPES_KEY;
  data: Results[];
}

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
      <h1>{subType}</h1>
      {formattedData?.map(({ name, id, description, image }) => {
        return <Card data={{ name, id, description, image }} type={subType} />;
      })}
    </Styles.Container>
  );
};
