import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FeaturesSection.css';

const FeaturesSection = ({featuresData, features}) => {
  
  return (
    <Container className="my-5">
      <Row className="align-items-start justify-content-center">
        <Col lg={6} xxl={6} xl={6} md={12} className="mb-4 mb-md-0">
          <img src={featuresData.imageUrl} alt="Features" className="img-fluid rounded" />
        </Col>
        <Col lg={6} xxl={6} xl={6} md={12}>
          <h3 className="mb-4">{featuresData.title}</h3>
          <p className="text-muted mb-4">{featuresData.description}</p>
          <ul className="list-unstyled">
            {featuresData.features.map((feature, index) => (
              <div className="mb-4 d-flex justify-content-center align-items-start gap-4 cardRow" key={index}>
                <span className='iconBackGround d-flex justify-content-center align-items-center rounded-2 '>{feature.icon}</span>
                <div className='d-flex justify-content-center align-items-start flex-column'>
                  <span className="fs-5 titleAboutCard fw-bold">{feature.title}</span>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesSection;
