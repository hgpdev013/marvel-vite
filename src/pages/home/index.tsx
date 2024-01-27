import { useCallback, useEffect, useState } from "react";
import { HomeCarousel, Layout } from "../../components";
import { getCommonData } from "../../services";
import { Results } from "../../types";
import { PAGE_TYPES, PAGE_TYPES_KEY } from "../../utils/common-data";
import * as Styles from "./styles";

export default function HomePage() {
  const [carouselData, setCarouselData] = useState<{
    [key in PAGE_TYPES_KEY]: Results[];
  }>({} as { [key in PAGE_TYPES_KEY]: Results[] });

  const [isLoading, setIsLoading] = useState<{
    [key in PAGE_TYPES_KEY]: boolean;
  }>({
    characters: true,
    comics: true,
    creators: true,
    events: true,
    series: true,
    stories: true,
  });

  const fetchRandomData = useCallback(
    async (type: PAGE_TYPES_KEY) => {
      setIsLoading((prev) => ({ ...prev, [type]: true }));

      const { data } = await getCommonData({
        limit: 1,
        type,
        offset: Math.floor(Math.random() * 50),
      });

      setCarouselData((prevData) => ({
        ...prevData,
        [type]: data.results,
      }));

      setIsLoading((prev) => ({ ...prev, [type]: false }));
    },
    [setCarouselData, setIsLoading]
  );

  useEffect(() => {
    Object.keys(PAGE_TYPES).forEach((key) => {
      fetchRandomData(key as PAGE_TYPES_KEY);
    });
  }, [fetchRandomData]);

  return (
    <Layout showNavigation>
      <Styles.Container>
        <HomeCarousel data={carouselData} isLoading={isLoading} />
      </Styles.Container>
    </Layout>
  );
}
