import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import FormControl from './../FormControl/FormControl'; 
import MainTitle from '../MainTitle/MainTitle';

const fields = [
  { type: 'text', placeholder: 'Enter your name', name: 'name' },
  { type: 'email', placeholder: 'Enter your email', name: 'email' },
  { type: 'text', placeholder: 'Enter your phone number', name: 'phone' },
  { type: 'date', name: 'date' },
  {
    type: 'select',
    name: 'department',
    options: [
      { label: 'Select Department', value: '' },
      { label: 'Cardiology', value: 'cardiology' },
      { label: 'Neurology', value: 'neurology' },
      { label: 'Orthopedics', value: 'orthopedics' },
    ],
  },
  {
    type: 'select',
    name: 'doctor',
    options: [
      { label: 'Select Doctor', value: '' },
      { label: 'Dr. Smith', value: 'dr-smith' },
      { label: 'Dr. Johnson', value: 'dr-johnson' },
      { label: 'Dr. Brown', value: 'dr-brown' },
    ],
  },
  { type: 'textarea', placeholder: 'Enter your message', name: 'message' },
];

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    doctor: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container>
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
            <Button variant="primary" type="submit">
              Make an Appointment
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AppointmentForm;
