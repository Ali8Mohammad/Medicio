import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './NavInfo.css';

function NavInfo({ navInfoData }) {
  return (
    <Navbar className='navInfo w-100'>
      <Container className='p-0'>
        <Row className="d-flex justify-content-between align-items-center w-100">
          {navInfoData.map((element, index) => {
            return (
              <Col
                key={index}
                xs={10}
                sm={6}  
                className={`text-left d-flex align-items-center ${element.class} navInfoCol`}
              >
                <Navbar.Text className={'text-light'}>
                  {element.icon} {element.text}
                </Navbar.Text>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavInfo;
