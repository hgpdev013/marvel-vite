import { useCallback, useEffect, useState } from "react";
import { HomeCarousel, Layout, HomeLoading } from "../../components";
import { getCommonData } from "../../services";
import { Results } from "../../types";
import { PAGE_TYPES, PAGE_TYPES_KEY } from "../../utils/common-data";
import * as Styles from "./styles";
import { toast } from "react-toastify";

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
  });

  const fetchRandomData = useCallback(
    async (type: PAGE_TYPES_KEY) => {
      setIsLoading((prev) => ({ ...prev, [type]: true }));

      try {
        const { data } = await getCommonData({
          limit: 1,
          type,
          offset: Math.floor(Math.random() * 50),
        });

        setCarouselData((prevData) => ({
          ...prevData,
          [type]: data.results,
        }));
      } catch (error: any) {
        if (error?.response?.status === 429) {
          toast.error(
            "You have exceeded the request limit. Please try again later.",
            { toastId: "429" }
          );
          return;
        }

        toast.error("Your credentials are invalid. Please try again.", {
          toastId: "401/409",
        });
      }

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
        {Object.values(isLoading).filter((value) => !value).length >= 2 ? (
          <HomeCarousel data={carouselData} isLoading={isLoading} />
        ) : (
          <HomeLoading />
        )}
      </Styles.Container>
    </Layout>
  );
}
