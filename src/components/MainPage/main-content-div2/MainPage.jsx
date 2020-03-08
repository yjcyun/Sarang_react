import React from 'react';
import SideNav from '../side-nav-div1/SideNav';
import MainContent from './MainContent';
import './MainPage.styles.css';

const MainPage = () => {
  return (
    <div>
      <div className="sidenav">
        <SideNav />
      </div>
      <div className="main-content">
        <MainContent />
      </div>
    </div>
  );

}





export default MainPage;