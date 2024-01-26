import * as Styles from "./styles";
import { PAGE_TYPES } from "../../utils/common-data";
import { useNavigate } from "react-router-dom";

interface CardProps {
  data: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  type: keyof typeof PAGE_TYPES;
}

export const Card = ({ data, type }: CardProps) => {
  const navigate = useNavigate();
  return (
    <Styles.Container onClick={() => navigate(`/${type}/${data.id}`)}>
      <img src={data.image} alt={data.name} />
      <Styles.Content>
        <Styles.Title>{data.name}</Styles.Title>
        {/* {data.description && <span>{data.description}</span>} */}
      </Styles.Content>
    </Styles.Container>
  );
};
