import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
        {Object.keys(data).map((key) => {
          if (
            !isLoading[key as PAGE_TYPES_KEY] &&
            data[key as PAGE_TYPES_KEY].length > 0
          ) {
            const formattedData = formatData(
              data[key as PAGE_TYPES_KEY][0],
              key as PAGE_TYPES_KEY
            );
            return (
              <Styles.SlideContainer key={key + formattedData.id}>
                <Styles.SlideContent>
                  <Styles.Image src={formattedData.image} />
                  <Styles.SlideSubContent>
                    <Styles.Group>
                      <Styles.Title>{formattedData.name}</Styles.Title>
                      <Styles.Description>
                        {formattedData.description ||
                          "No description available"}
                      </Styles.Description>
                    </Styles.Group>
                    <Styles.Group>
                      <Styles.Button
                        onClick={() =>
                          navigate(`/characters/${formattedData.id}`)
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
              </Styles.SlideContainer>
            );
          }

          return (
            //insert skeleton or spinner here
            <Styles.SlideContainer>
              <div key={key}>
                <h1>{key}</h1>
                <span>Loading...</span>
              </div>
            </Styles.SlideContainer>
          );
        })}
      </Slider>
    </Styles.Container>
  );
};
