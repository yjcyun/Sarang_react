import React from 'react';
import SideNav from '../side-nav-div1/SideNav';
import MainContent from './MainContent';

const MainPage = () => {
  return (
    <div>
      <div style={sideNavStyle}>
        <SideNav />
      </div>
      <div style={mainContentStyle}>
        <MainContent />
      </div>
    </div>
  );

}

const sideNavStyle={
  backgroundColor: 'blue',
  display: 'inline-block',
  width: '15%',
  height: '100vh',
  float: 'left'
}

const mainContentStyle={
  backgroundColor: 'white',
  display: 'inline-block',
  width: '85%',
  height: '100vh',
  float: 'right'
}

export default MainPage;