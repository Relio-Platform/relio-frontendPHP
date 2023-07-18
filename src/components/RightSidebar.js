import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function RightSidebar() {
  return (
    <div style={{background: 'white', height: '100%', color: 'black'}}>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Tab 1">
          Content for Tab 1
        </Tab>
        <Tab eventKey="profile" title="Tab 2">
          Content for Tab 2
        </Tab>
        <Tab eventKey="contact" title="Tab 3">
          Content for Tab 3
        </Tab>

      </Tabs>
    </div>
  );
}

export default RightSidebar;
