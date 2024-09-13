import React, { useState } from "react";
import { Card, Carousel, Col, Row, Image } from "react-bootstrap";
import "./CardSlider.css";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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


  const getVisibleQuotes = () => {
    const visibleQuotes = [];
    for (let i = 0; i < 3; i++) {
      visibleQuotes.push(quotes[(currentIndex + i) % quotes.length]);
    }
    return visibleQuotes;
  };

  return (
    <Carousel
      className="px-5"
      controls={false} 
      indicators={false}
      interval={null} 
    >
      <Carousel.Item>
        <Row className="d-flex justify-content-between align-items-center p-0" style={{ transition:"transform .5s ease" }}>
          {getVisibleQuotes().map((quote, index) => (
            <Col
              key={index}
              md={3}
              className="mb-4 d-flex justify-content-center align-items-center shadow"
              style={{ transition:"transform .5s ease" }} 
            >
              <Card style={{ width: "18rem", border: "none", transition:"transform .5s ease" }}>
                <div className="d-flex justify-content-center" style={{ transition:"transform .5s ease" }}>
                <Card.Text className="quote-text mb-5 pt-3 w-100">
                <FontAwesomeIcon className="quote-icon me-2" icon={faQuoteLeft} />     
                {`"${quote.quote}"`}
                <FontAwesomeIcon className="quote-icon ms-2" icon={faQuoteRight} />
                  </Card.Text>
                </div>
                <Image
                    src={quote.image}
                    roundedCircle
                    fluid
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
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

      <div className="custom-carousel-controls">
        <button className="prev-btn" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="next-btn" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </Carousel>
  );
};

export default Slider;
