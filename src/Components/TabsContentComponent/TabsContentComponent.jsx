import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './TabsContentComponent.css'

const Content = ({ activeTab, content }) => {
  const { text, imageSrc } = content[activeTab] || { text: '', imageSrc: '' };

  return (
    <Col md={8} className="content-section d-flex justify-content-center align-items-start  w-100">
        <div>
            <h2>{activeTab}</h2>
            <p>{text.p1}</p>
            <p>{text.p2}</p>
        </div>
            <img src={imageSrc} alt={activeTab} className="img-fluid w-50" />
    </Col>
  );
};

export default Content;
