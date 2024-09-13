import { Container, Row, Col, Card } from "react-bootstrap";
import "./AboutSection.css";
import videoFrame from "./../../assets/img/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faFlask, faHospital, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import MainTitle from "../MainTitle/MainTitle";

const AboutSection = () => {
  // titleData
  const aboutData = {
    img: videoFrame,
    caption:
      "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
    par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    par2: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
  };
  const listData = [
    {
      text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    },
    {
      text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <MainTitle title={"About Us"} par={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
      </Row>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <img className="w-100" src={aboutData.img} alt="" />
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
        <Col md={3} sm={6} className="mb-4">
          <Card className="border-0 shadow">
            <Card.Body>
              <FontAwesomeIcon icon={faUserDoctor} />
              <h4 className="mb-0">25</h4>
              <p className="text-muted">Doctors</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="border-0 shadow">
            <Card.Body>
            <FontAwesomeIcon icon={faHospital} />
              <h4 className="mb-0">15</h4>
              <p className="text-muted">Departments</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="border-0 shadow">
            <Card.Body>
              <FontAwesomeIcon icon={faFlask} />
              <h4 className="mb-0">8</h4>
              <p className="text-muted">Research Labs</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="border-0 shadow">
            <Card.Body>
              <FontAwesomeIcon icon={faAward} />
              <h4 className="mb-0">150</h4>
              <p className="text-muted">Awards</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
