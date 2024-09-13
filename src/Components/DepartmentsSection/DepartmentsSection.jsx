import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tabs from './../TabsComponent/TabsComponent';
import Content from './../TabsContentComponent/TabsContentComponent';
import './DepartmentsSection.css'
import MainTitle from '../MainTitle/MainTitle';


const DepartmentsSection = ({tabs , content , activeTab, handleTabClick}) => {

  return (
    <Container>
      <MainTitle title={'Departments'} par={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}/>
      <Row className='justify-content-between my-5'>
        <Col xs={12} md={3} className="tabs-section">
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={handleTabClick}
          />
        </Col>
        <Col md={9} className="content-section">
          <Content
            activeTab={activeTab}
            content={content}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DepartmentsSection;
