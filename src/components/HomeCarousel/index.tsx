import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Results } from "../../types";
import { PAGE_TYPES_KEY, formatData } from "../../utils/common-data";
import * as Styles from "./styles";

interface HomeCarouselProps {
  data: { [key in PAGE_TYPES_KEY]: Results[] };
  isLoading: { [key in PAGE_TYPES_KEY]: boolean };
}

export const HomeCarousel = ({ data, isLoading }: HomeCarouselProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    defaultAnimation: {
      duration: 1000,
    },
  });

  return (
    <Styles.SlideContainer ref={ref} className="keen-slider">
      {Object.keys(data).map((key, index) => {
        if (
          !isLoading[key as PAGE_TYPES_KEY] &&
          data[key as PAGE_TYPES_KEY].length > 0
        ) {
          const formattedData = formatData(
            data[key as PAGE_TYPES_KEY][0],
            key as PAGE_TYPES_KEY
          );
          return (
            <div
              className={`keen-slider__slide number-slide${index + 1}`}
              key={key}
            >
              <h1>{key}</h1>
              <img src={formattedData.image} alt={formattedData.name} />
              <span>{formattedData.name}</span>
            </div>
          );
        }

        return (
          //insert skeleton or spinner here
          <div
            className={`keen-slider__slide number-slide${index + 1}`}
            key={key}
          >
            <h1>{key}</h1>
            <span>Loading...</span>
          </div>
        );
      })}
    </Styles.SlideContainer>
  );
};
