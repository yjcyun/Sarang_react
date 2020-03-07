import React from 'react';
import Nav from 'react-bootstrap/Nav';


const TopNavItem = ({label, onClick, filterName}) => {
  return (
    <Nav.Item>
      <Nav.Link 
      onClick={onClick}
      style={{color:'#ccc'}}
      filtername={filterName}>
        {label}
      </Nav.Link>
    </Nav.Item>
    // <ul>
    //   <li>{props.name}</li>
      
    // </ul>
  );
};

export default TopNavItem;
