import React from 'react';
import Nav from 'react-bootstrap/Nav';


const SideNav = () => {
  return (
    <div>
      <Nav
        style={{ marginTop: '2rem', marginLeft: '1.5rem' }}
        defaultActiveKey="/home" className="flex-column"
      >
        <Nav.Link
          href="/portfolio"
          style={{ color: 'black', fontSize: '1.3rem', padding: '0' }}
        >
          portfolio
        </Nav.Link>
        <Nav.Link 
        style={{ color: 'black', fontSize: '1.3rem', padding: '0' }} eventKey="link-1">about</Nav.Link>
        <Nav.Link 
        style={{ color: 'black', fontSize: '1.3rem', padding: '0', marginBottom:'1.5rem' }} 
        eventKey="link-2">store</Nav.Link>
      </Nav>


      <a href="">
        <img
          className="sidebar-logo"
          src="img/logo-red-rotated.png"
          alt="logo"
          style={{ maxWidth: '100%'}} />
      </a>

    </div>
  );
}

export default SideNav;