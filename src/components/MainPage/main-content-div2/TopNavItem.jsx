import React from 'react';
import Nav from 'react-bootstrap/Nav';


const TopNavItem = ({filterNav}) => {
  return (
    <Nav.Item>
      <Nav.Link 
      style={{color:'#ccc'}}
      eventKey="/">
        {filterNav}
      </Nav.Link>
    </Nav.Item>
  );
};

export default TopNavItem;
