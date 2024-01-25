import * as Styles from "./styles";

interface CardProps {
  data: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  type: 'comic' | 'creator' | 'character';
}

export const Card = ({ data }: CardProps) => {
  return (
    <Styles.Container>
      <img src={data.image} alt={data.name} />
      <h1>{data.name}</h1>
      <span>{data.description}</span>
    </Styles.Container>
  );
};
