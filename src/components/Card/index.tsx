import * as Styles from "./styles";

interface CardProps {
  data: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  type: "comic" | "creator" | "character";
}

export const Card = ({ data }: CardProps) => {
  return (
    <Styles.Container>
      <img src={data.image} alt={data.name} />
      <Styles.Content>
        <Styles.Title>{data.name}</Styles.Title>
        {/* {data.description && <span>{data.description}</span>} */}
      </Styles.Content>
    </Styles.Container>
  );
};
