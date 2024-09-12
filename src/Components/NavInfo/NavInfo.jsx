import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './NavInfo.css'

function NavInfo({ navInfoData }) {
  return (
    <Navbar className='navInfo'>
      <Container>
        <Row className="w-100">
          {navInfoData.map((element, index) => {
            return (
              <Col key={index} xs={5} className="text-left">
              <Navbar.Text className='text-light'>
                {element.icon} {element.text}
              </Navbar.Text>
            </Col>
            )
          })}
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavInfo;
