import { Carousel } from "react-bootstrap";

const Hero = ({ carouselData }) => {
  return (
    <Carousel fade>
      {carouselData.map((element, index) => {
        return (
          <Carousel.Item key={index}>
            <img src={element.img} alt="" />
            <Carousel.Caption>
              <h3>{element.heroCaption}</h3>
              <p>{element.heropar}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}

    </Carousel>
  );
};

export default Hero;
