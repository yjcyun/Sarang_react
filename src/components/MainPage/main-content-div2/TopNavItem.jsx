import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './TopNavItem.styles.css';


const TopNavItem = ({label, onClick, filterName}) => {
  return (
    <Nav.Item>
      <Nav.Link 
      onClick={onClick}
      className="nav-filter"
      filtername={filterName}>
        {label}
      </Nav.Link>
    </Nav.Item>
  
  );
};

export default TopNavItem;
