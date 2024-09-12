import { Container, Row, Col, Button } from 'react-bootstrap';
import './Helpsection.css'
const HelpSection = ({helpSectionData}) => {

  return (
    <>
    <Container fluid className="helpSection text-white py-5 text-center">
      <Row>
        <Col className='helpSectionCol'>
          <h2>{helpSectionData.title}</h2>
          <p className="my-4">{helpSectionData.par}</p>
          <Button variant="outline-light" size="lg">{helpSectionData.btn}</Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default HelpSection