import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as Styles from "./styles";

export const HomeLoading = () => {
  return (
    <Styles.Container>
      <Styles.Content>
        <Skeleton height={300} width={300} baseColor="#ccc" />
        <Styles.SubContent>
          <Styles.Group>
            <Skeleton height={30} width={300} baseColor="#ccc" />
            <Skeleton height={20} count={4} width={300} baseColor="#ccc" />
          </Styles.Group>
        </Styles.SubContent>
      </Styles.Content>
    </Styles.Container>
  );
};
