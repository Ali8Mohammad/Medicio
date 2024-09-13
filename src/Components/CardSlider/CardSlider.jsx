import React, { useState } from "react";
import { Card, Carousel, Col, Row, Image } from "react-bootstrap";
import "./CardSlider.css";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainTitle from "../MainTitle/MainTitle";

const Slider = ({ quotes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };


  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleQuotes = () => {
    const visibleQuotes = [];
    for (let i = 0; i < 3; i++) {
      visibleQuotes.push(quotes[(currentIndex + i) % quotes.length]);
    }
    return visibleQuotes;
  };

  return (
    <>
      <MainTitle
        title={"Testimonials"}
        par={
          "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        }
      />
      <Carousel
        className="container"
        controls={false}
        indicators={false}
        interval={null}
      >
        <Carousel.Item>
          <Row className="d-flex justify-content-between align-items-center p-0">
            {getVisibleQuotes().map((quote, index) => (
              <Col
                key={index}
                xxl={3}
                md={3}
                xl={3}
                className="mb-4 px-0 d-flex justify-content-center align-items-center"
              >
                <Card className="border-light rounded">
                  <div className="d-flex justify-content-start flex-column position-relative">
                    <Card.Text className="quote-text py-5 mb-5 pt-3 w-100 px-4">
                      <FontAwesomeIcon
                        className="quote-icon me-2"
                        icon={faQuoteLeft}
                      />
                      {quote.quote}
                      <FontAwesomeIcon
                        className="quote-icon ms-2"
                        icon={faQuoteRight}
                      />
                    </Card.Text>
                    <div className="divbg-white">
                      <Image
                        className="imageCard"
                        src={quote.image}
                        roundedCircle
                        fluid
                      />
                    </div>
                  </div>

                  <Card.Body className="text-center">
                    <Card.Title className="mt-3">{quote.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {quote.profession}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>

      <div className="d-flex justify-content-center align-items-center gap-2 text-center mt-3">
        {Array.from({ length: quotes.length }).map((_, index) => (
          <span
            className={`sliderControl ${currentIndex === index ? 'Active' : ''}`}
            key={index}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Slider;
