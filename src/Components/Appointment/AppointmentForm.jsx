import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import FormControl from './../FormControl/FormControl'; 
import MainTitle from '../MainTitle/MainTitle';


const AppointmentForm = ({fields, formData , handleChange, handleSubmit}) => {

  return (
    <Container fluid className='second-bgcolor my-5 py-5'>
      <MainTitle title={'MAKE AN APPOINTMENT'} par={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}/>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-4">
          {fields.slice(0, 3).map((field, index) => (
            <Col md={4} key={index} className="mb-3">
              <FormControl
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={formData[field.name]}
                options={field.options || []}
                onChange={handleChange}
              />
            </Col>
          ))}
        </Row>
        <Row className="mb-4">
          {fields.slice(3, 6).map((field, index) => (
            <Col md={4} key={index} className="mb-3">
              <FormControl
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={formData[field.name]}
                options={field.options || []}
                onChange={handleChange}
              />
            </Col>
          ))}
        </Row>
        <Row className="mb-4">
          <Col>
            <FormControl
              type="textarea"
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button className='main-bgcolor border-0' type="submit">
              Make an Appointment
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AppointmentForm;
