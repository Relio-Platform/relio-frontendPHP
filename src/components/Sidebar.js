import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function Sidebar() {
  return (
    <div style={{background: 'white', height: '100%', color: 'black'}}>
      <h3 style={{padding: '10px'}}>Relio</h3>
      
      <ListGroup variant="flush">
        <ListGroup.Item><h5>Recently Used</h5></ListGroup.Item>
        {/* You can replace 'App 1' with your real app name */}
        <ListGroup.Item>
          <div style={{ width: '100%', boxSizing: 'border-box', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', marginBottom: '10px', padding: '10px' }}>
            <h6>Contacts</h6>
            <p>
              Contacts App
            </p>
          </div>
        </ListGroup.Item>
        {/* Repeat the structure for more apps */}
      </ListGroup>

      <ListGroup variant="flush">
        <ListGroup.Item><h5>Favorites</h5></ListGroup.Item>
        <ListGroup.Item>
          <div style={{ width: '100%', boxSizing: 'border-box', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', marginBottom: '10px', padding: '10px' }}>
            <h6>Mind Map</h6>
            <p>
              Mind Map App
            </p>
          </div>
        </ListGroup.Item>
        {/* Repeat the structure for more apps */}
      </ListGroup>

      {/* Other categories */}
    </div>
  );
}

export default Sidebar;
