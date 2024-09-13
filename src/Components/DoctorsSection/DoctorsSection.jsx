
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DoctorCard from '../DoctorCard/DoctorCard';
import doctorsData from './../../Data/DoctorsData';
import MainTitle from '../MainTitle/MainTitle';

const DoctorsSection = () => {
  return (
    <Container>
        <MainTitle title={'Doctors'} par={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}/>
      <Row>
        {doctorsData.map((doctor) => (
          <Col key={doctor.id} xs={12} sm={6} md={4} lg={3}>
            <DoctorCard
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctor.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorsSection;
