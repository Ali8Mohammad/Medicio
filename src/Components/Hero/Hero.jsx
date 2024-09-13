import { Carousel } from "react-bootstrap";
import './Hero.css'
const Hero = ({ carouselData }) => {
  return (
    <Carousel className="position-relative mb-5" fade>
      {carouselData.map((element, index) => {
        return (
          <Carousel.Item key={index} className="d-flex justify-content-center align-items-center herocarousel">
            <img className="imgSlide" src={element.img} alt="" />
            <Carousel.Caption className="position-absolute top-50 start-50 translate-middle carousel-caption bg-light d-flex justify-content-center flex-column gap-3 border-top border-primary-subtle border-5">
              <h3 className="pt-2">{element.heroCaption}</h3>
              <p>{element.heropar}</p>
              <button className="main-bgcolor border-0 px-4 py-2 rounded w-25 m-auto text-light">Read More</button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}

    </Carousel>
  );
};

export default Hero;
