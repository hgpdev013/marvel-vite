import { useCallback, useEffect, useState } from "react";
import { getHomeData } from "../../services";
import { Results } from "../../types";
import { PAGE_TYPES_KEY } from "../../utils/common-data";
import * as Styles from "./styles";

const types = ["characters", "comics", "creators"] as PAGE_TYPES_KEY[];

export default function HomePage() {
  const [carouselData, setCarouselData] = useState<{
    [key in PAGE_TYPES_KEY]: Results[];
  }>({} as { [key in PAGE_TYPES_KEY]: Results[] });

  const fetchRandomData = useCallback(
    async (type: PAGE_TYPES_KEY) => {
      const { data } = await getHomeData({
        limit: 1,
        type,
        offset: Math.floor(Math.random() * 100),
      });

      setCarouselData((prev) => ({
        ...prev,
        [type]: data.results,
      }));

      console.log(carouselData);
    },
    [types]
  );

  useEffect(() => {
    types.forEach((type) => {
      fetchRandomData(type);
    });
  }, [fetchRandomData, types]);

  return (
    <Styles.Container>
      <Styles.Title>Hello World!</Styles.Title>
    </Styles.Container>
  );
}
