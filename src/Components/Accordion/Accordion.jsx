import { useState } from "react";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import "./Accordion.css";
import accordionData from "../../Data/AccordionData";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainTitle from "../MainTitle/MainTitle";

const AccordionSection = ({ data }) => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Container>
        <MainTitle title={'Frequently Asked Questions'} par={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}/>
      <Accordion className="d-flex flex-column gap-3 justify-content-center align-items-center w-100" activeKey={activeKey?.toString()}>
        {data.map((item) => (
          <Card key={item.id} className="accordion-item w-100">
            <Card.Header>
              <div
                onClick={() => toggleAccordion(item.id)}
                className="d-flex justify-content-between align-items-center"
                style={{ cursor: "pointer" }}
              >
                {item.title}
                <span className="accordion-icon">
                  {activeKey === item.id ? (
                    <FontAwesomeIcon icon={faArrowDown} />
                  ) : (
                    <FontAwesomeIcon icon={faArrowRight} />
                  )}
                </span>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey={item.id.toString()}>
              <Card.Body>{item.content}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Container>
  );
};

export default AccordionSection;
