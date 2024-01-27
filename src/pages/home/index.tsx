import { useCallback, useEffect, useState } from "react";
import { getCommonData } from "../../services";
import { Results } from "../../types";
import { PAGE_TYPES, PAGE_TYPES_KEY } from "../../utils/common-data";
import * as Styles from "./styles";

export default function HomePage() {
  const [carouselData, setCarouselData] = useState<{
    [key in PAGE_TYPES_KEY]: Results[];
  }>({} as { [key in PAGE_TYPES_KEY]: Results[] });

  const fetchRandomData = useCallback(
    async (type: PAGE_TYPES_KEY) => {
      const { data } = await getCommonData({
        limit: 1,
        type,
        offset: Math.floor(Math.random() * 100),
      });

      setCarouselData((prev) => ({
        ...prev,
        [type]: data.results,
      }));
    },
    [setCarouselData]
  );

  useEffect(() => {
    Object.keys(PAGE_TYPES).forEach((key) => {
      fetchRandomData(key as PAGE_TYPES_KEY);
    });
  }, [fetchRandomData]);

  console.log(carouselData);

  return (
    <Styles.Container>
      <Styles.Title>Hello World!</Styles.Title>
    </Styles.Container>
  );
}
