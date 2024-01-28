import Slider from "react-slick";
import { Card } from "..";
import { FormattedDataProps, PAGE_TYPES_KEY } from "../../utils/common-data";
import * as Styles from "./styles";

interface DetailsCarouselProps {
  data: FormattedDataProps[];
  type: PAGE_TYPES_KEY;
  // isLoading: { [key in PAGE_TYPES_KEY]: boolean };
}

export const DetailsCarousel = ({ data, type }: DetailsCarouselProps) => {
  const slidesToShow = data.length >= 7 ? 7 : data.length;

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    initialSlide: 0,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1720,
        settings: {
          slidesToShow: data.length >= 6 ? 6 : data.length,
          slidesToScroll: data.length >= 6 ? 6 : data.length,
        },
      },
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: data.length >= 5 ? 5 : data.length,
          slidesToScroll: data.length >= 5 ? 5 : data.length,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: data.length >= 4 ? 4 : data.length,
          slidesToScroll: data.length >= 4 ? 4 : data.length,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: data.length >= 3 ? 3 : data.length,
          slidesToScroll: data.length >= 3 ? 3 : data.length,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: data.length >= 2 ? 2 : data.length,
          slidesToScroll: data.length >= 2 ? 2 : data.length,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: data.length >= 1 ? 1 : data.length,
          slidesToScroll: data.length >= 1 ? 1 : data.length,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Styles.Container>
      <Slider {...settings}>
        {data.map(({ id, name, description, image }) => {
          return (
            <Styles.CardContainer key={id}>
              <Card
                key={id}
                data={{ name, id, description, image }}
                type={type}
              />
            </Styles.CardContainer>
          );
        })}
      </Slider>
    </Styles.Container>
  );
};
