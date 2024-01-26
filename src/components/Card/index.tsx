import { useNavigate } from "react-router-dom";
import { PAGE_TYPES_KEY } from "../../utils/common-data";
import * as Styles from "./styles";

interface CardProps {
  data: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  type: PAGE_TYPES_KEY;
}

export const Card = ({ data, type }: CardProps) => {
  const navigate = useNavigate();
  return (
    <Styles.Container onClick={() => navigate(`/${type}/${data.id}`)}>
      <img src={data.image} alt={data.name} loading="lazy" />
      <Styles.Content>
        <Styles.Title>{data.name}</Styles.Title>
        {/* {data.description && <span>{data.description}</span>} */}
      </Styles.Content>
    </Styles.Container>
  );
};
