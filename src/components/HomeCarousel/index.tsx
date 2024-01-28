import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { HomeLoading } from "..";
import { Results } from "../../types";
import { PAGE_TYPES_KEY, formatData } from "../../utils/common-data";
import * as Styles from "./styles";

interface HomeCarouselProps {
  data: { [key in PAGE_TYPES_KEY]: Results[] };
  isLoading: { [key in PAGE_TYPES_KEY]: boolean };
}

export const HomeCarousel = ({ data, isLoading }: HomeCarouselProps) => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <Styles.Container>
      <Slider {...settings}>
        {Object.keys(data).map((key) => (
          <Styles.SlideContainer key={key}>
            {!isLoading[key as PAGE_TYPES_KEY] ? (
              <Styles.SlideContent>
                <Styles.Image
                  src={
                    formatData(
                      data[key as PAGE_TYPES_KEY][0],
                      key as PAGE_TYPES_KEY
                    ).image
                  }
                  loading="lazy"
                />
                <Styles.SlideSubContent>
                  <Styles.Group>
                    <Styles.Title>
                      {
                        formatData(
                          data[key as PAGE_TYPES_KEY][0],
                          key as PAGE_TYPES_KEY
                        ).name
                      }
                    </Styles.Title>
                    <Styles.Description>
                      {formatData(
                        data[key as PAGE_TYPES_KEY][0],
                        key as PAGE_TYPES_KEY
                      ).description || "No description available"}
                    </Styles.Description>
                  </Styles.Group>
                  <Styles.Group>
                    <Styles.Button
                      onClick={() =>
                        navigate(
                          `/${key}/${
                            formatData(
                              data[key as PAGE_TYPES_KEY][0],
                              key as PAGE_TYPES_KEY
                            ).id
                          }`
                        )
                      }
                    >
                      See details
                    </Styles.Button>
                    <Styles.Button onClick={() => navigate(`/${key}`)}>
                      Go to {key} list
                    </Styles.Button>
                  </Styles.Group>
                </Styles.SlideSubContent>
              </Styles.SlideContent>
            ) : (
              <HomeLoading />
            )}
          </Styles.SlideContainer>
        ))}
      </Slider>
    </Styles.Container>
  );
};
