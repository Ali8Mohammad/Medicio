import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './FooterSection.css'
const FooterSection = () => {
  return (
    <footer className="footer py-5 second-bgcolor text-black">
      <Container>
        <Row className='firstfooterrow position-relative'>
          <Col md={3}>
            <h5>Medicio</h5>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>Phone: +1 5589 55488 55</p>
            <p>Email: info@example.com</p>
            <div className="social-icons mt-3">
              <FontAwesomeIcon icon={faFacebookF} className="mr-3" size="lg" />
              <FontAwesomeIcon icon={faInstagram} className="mr-3" size="lg" />
              <FontAwesomeIcon icon={faTwitter} className="mr-3" size="lg" />
              <FontAwesomeIcon icon={faLinkedinIn} className="mr-3" size="lg" />
            </div>
          </Col>

          <Col md={1}></Col>
          <Col md={2}>
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-black">Home</a></li>
              <li><a href="#about" className="text-black">About us</a></li>
              <li><a href="#services" className="text-black">Services</a></li>
              <li><a href="#terms" className="text-black">Terms of service</a></li>
              <li><a href="#privacy" className="text-black">Privacy policy</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="#webdesign" className="text-black">Web Design</a></li>
              <li><a href="#webdevelopment" className="text-black">Web Development</a></li>
              <li><a href="#productmanagement" className="text-black">Product Management</a></li>
              <li><a href="#marketing" className="text-black">Marketing</a></li>
              <li><a href="#graphicdesign" className="text-black">Graphic Design</a></li>
            </ul>
          </Col>

          <Col md={2}>
            <h5>Hic Solutasetp</h5>
            <ul className="list-unstyled">
              <li><a href="#item1" className="text-black">Molestiae accusamus iure</a></li>
              <li><a href="#item2" className="text-black">Excepturi dignissimos</a></li>
              <li><a href="#item3" className="text-black">Suscipit distinctio</a></li>
              <li><a href="#item4" className="text-black">Dilecta</a></li>
              <li><a href="#item5" className="text-black">Sit quas consectetur</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Nobis Illum</h5>
            <ul className="list-unstyled">
              <li><a href="#item6" className="text-black">Ipsam</a></li>
              <li><a href="#item7" className="text-black">Laudantium dolorum</a></li>
              <li><a href="#item8" className="text-black">Dinera</a></li>
              <li><a href="#item9" className="text-black">Trodelas</a></li>
              <li><a href="#item10" className="text-black">Flexo</a></li>
            </ul>
          </Col>
        </Row>
        <Row className='d-flex flex-column justify-content-center align-items-center w-100 text-center mt-5'>
            <p>© Copyright Medicio All Rights Reserved</p>
            <p>Designed by <a href="3">BootstrapMade</a></p>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
