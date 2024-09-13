import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FeaturesSection.css';

const FeaturesSection = ({featuresData, features}) => {
  
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <img src={featuresData.imageUrl} alt="Features" className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <h3 className="mb-4">{featuresData.title}</h3>
          <p className="text-muted mb-4">{featuresData.description}</p>
          <ul className="list-unstyled">
            {featuresData.features.map((feature, index) => (
              <li className="mb-4" key={index}>
                {feature.icon}
                <span className="fs-5">{feature.title}</span>
                <p className="text-muted">{feature.description}</p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesSection;
