import { Container, Row, Col } from 'react-bootstrap';
import './ServicesSection.css'; 
import MainTitle from '../MainTitle/MainTitle';

const ServicesSection = ({ services }) => {
  return (
    <Container className="my-5">
      <MainTitle title={'Services'} par={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}/>
      <Row>
        {services.map((service, index) => (
          <Col md={4} className="mb-4 text-center" key={index}>
            <div className="icon mb-3">
              {service.icon}
            </div>
            <h5 className="mb-3">{service.title}</h5>
            <p className="text-muted">{service.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesSection;
