import React from 'react';
import { Nav } from 'react-bootstrap';

const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <Nav className="flex-column">
      {tabs.map((tab, index) => (
        <Nav.Link
          key={index}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onTabClick(tab);
          }}
          className={activeTab === tab ? 'active-tab' : ''}
        >
          {tab}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Tabs;
