import { CarouselLoading, DetailsCarousel } from "..";
import { Results } from "../../types";
import {
  PAGES_NAMES,
  PAGE_TYPES_KEY,
  formatData,
} from "../../utils/common-data";
import * as Styles from "./styles";

interface SubDetailsProps {
  subType: PAGE_TYPES_KEY;
  data: Results[];
  isLoading: boolean;
}

export const SubDetails = ({ data, subType, isLoading }: SubDetailsProps) => {
  const formattedData = data.map((value) => formatData(value, subType));

  return (
    <Styles.Container>
      <h1>{PAGES_NAMES[subType]}</h1>
      {!isLoading ? (
        <DetailsCarousel data={formattedData} type={subType} />
      ) : (
        <CarouselLoading isWrappable={false} />
      )}
    </Styles.Container>
  );
};
