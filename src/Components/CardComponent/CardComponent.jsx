import { Card, Row, Col } from 'react-bootstrap';
import './CardComponent.css';

const CardComponent = ({ cardData }) => {
  

  return (
    <section className='cardsSection d-flex justify-content-center align-items-center my-5'>
      <Row className='w-100'>
        {cardData.map((element, index) => (
          <Col xs={12} md={6} xl={3} xxl={3} key={index}>
            <Card className='border-0 shadow-lg w-100 mb-4 cardsection'>
              <Card.Body className='ms-2'>
                {element.icon}
                <Card.Subtitle className="mb-2 fs-4">{element.cardtitle}</Card.Subtitle>
                <Card.Text className='mb-3'>
                  {element.cardpar}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CardComponent;
