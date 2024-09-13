import { Carousel, Container } from 'react-bootstrap';
import galleryData from './../../Data/GalleryData';
import './GallerySlider.css'
import MainTitle from '../MainTitle/MainTitle';
const GallerySlider = () => {
  return (
    <Container>
        <MainTitle title={'Gallery'} par={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}/>
        <Carousel
      indicators={true}
      interval={3000}
      className="custom-carousel"
      >
      {galleryData.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.alt}
            style={{ objectFit: 'cover', height: '300px' }}
            />
        </Carousel.Item>
      ))}
    </Carousel>
      </Container>
  );
};

export default GallerySlider;
