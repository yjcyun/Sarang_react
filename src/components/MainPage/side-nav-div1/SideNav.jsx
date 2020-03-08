import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './SideNav.styles.css';


const SideNav = () => {
  return (
    <div>
      <Nav
        defaultActiveKey="/portfolio"
        className="flex-column side-nav">
        <Nav.Link
          href="/portfolio"
          className="side-nav-link">portfolio</Nav.Link>
        <Nav.Link
          className="side-nav-link" 
          eventKey="link-1">about</Nav.Link>
        <Nav.Link
        className="side-nav-link"
        eventKey="link-2">store</Nav.Link>
      </Nav>
      <Nav.Link href="/">
        <img
          // className="sidebar-logo"
          src="img/logo-red-rotated.png"
          alt="logo"
          className="side-nav-logo" />
      </Nav.Link>
    </div>
  );
}

export default SideNav;