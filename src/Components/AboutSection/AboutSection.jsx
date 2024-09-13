import { Container, Row, Col, Card } from "react-bootstrap";
import "./AboutSection.css";
import MainTitle from "../MainTitle/MainTitle";

const AboutSection = ({aboutData , listData, aboutCard}) => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <MainTitle title={"About Us"} par={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
      </Row>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0 position-relative">
          <img className="w-100 videoFrame" src={aboutData.img} alt="" />
          <span className="iconframe d-flex justify-content-center align-items-center">
          {aboutData.icon}
          </span>
        </Col>
        <Col md={6}>
          <h3 className="mb-4">{aboutData.caption}</h3>
          <p className="text-muted">
            {aboutData.par}
          </p>
          <ul className="list-unstyled">
            {listData.map((element, index) => {
              return (
                <li className="mb-2" key={index}>
                  <svg
              className="doubleCheck fs-5 me-1"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M464 128 240 384l-96-96m0 96-96-96m320-160L232 284"
              ></path>
            </svg>
                  {element.text}
                </li>
              );
            })}
          </ul>
          <p className="text-muted">{aboutData.par2}</p>
        </Col>
      </Row>

      <Row className="text-center mt-5">
        {aboutCard.map((element, index) => {
          return (
            <Col key={index} xxl={3} xl={3} md={6} sm={12} className="my-2" >
            <Card className="border-0 shadow py-3">
              <Card.Body className="d-flex justify-content-center align-items-center gap-4">
                {element.icon}
                <div className="d-flex justify-content-center align-items-start flex-column">
                  <h4 className="mb-0 h1">{element.number}</h4>
                  <p className="text-muted fs-4">{element.category}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          )
        })}
      </Row>
    </Container>
  );
};

export default AboutSection;
