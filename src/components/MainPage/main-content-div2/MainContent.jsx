import React from 'react';
import Nav from 'react-bootstrap/Nav';
import TopNavItem from './TopNavItem';
import ModalGalleryExample from '../gallery-div3/Modal';

const MainContent = () => {

  return (
    <div>
      <div style={{
        backgroundColor: 'green',
        height: '15vh'
      }}>

        <Nav
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <TopNavItem filterNav="All" />
          <TopNavItem filterNav="UI/UX" />
          <TopNavItem filterNav="Graphic Design" />
          <TopNavItem filterNav="Personal" />
          <TopNavItem filterNav="Sketchbook" />
          <TopNavItem filterNav="Medium" />
        </Nav>
      </div>
      <div>
        <ModalGalleryExample />
      </div>

    </div>

  );
}

export default MainContent;