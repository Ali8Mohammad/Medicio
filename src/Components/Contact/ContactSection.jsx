import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainTitle from "../MainTitle/MainTitle";

const ContactSection = () => {
  return (
    <Container className="my-5">
      <MainTitle title={'Contact'} par={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}/>
      <Row className="mb-4">
        <Col>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509349!2d144.95592831531594!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e7f8dc1e5e64!2sA108+Adam+St%2C+New+York%2C+NY+535022!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body className="d-flex align-items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="mr-3" />
              <div>
                <h5>Address</h5>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPhone} size="2x" className="mr-3" />
              <div>
                <h5>Call Us</h5>
                <p>+1 5589 55488 55</p>
              </div>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body className="d-flex align-items-center">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="mr-3" />
              <div>
                <h5>Email Us</h5>
                <p>info@example.com</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
              
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
              
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formSubject">
              
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              
              <Form.Control as="textarea" rows={5} placeholder="Write your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
