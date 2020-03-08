import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import TopNavItem from './TopNavItem';
import ModalGallery from '../gallery-div3/ModalGallery';
import './MainContent.styles.css';

class MainContent extends Component {

  state = {
    filterCategory: 'all'
  }

  navOnClick = (event) => {
    this.setState({filterCategory: event.target.getAttribute('filtername')});
  }

  render() {
    return (
      <div>
        <div className="top-nav">
          <Nav
            activeKey="/home"
            // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
          >
            <TopNavItem
              filterName="all"
              onClick={this.navOnClick}
              label="All"
              className="nav-filter" />
            <TopNavItem
              filterName="ui-ux"
              onClick={this.navOnClick}
              label="UI/UX" />
            <TopNavItem
              filterName="graphic-design"
              onClick={this.navOnClick}
              label="Graphic Design" />
            <TopNavItem
              filterName="personal"
              onClick={this.navOnClick}
              label="Personal" />
            <TopNavItem
              filterName="sketchbook"
              onClick={this.navOnClick}
              label="Sketchbook" />
            <TopNavItem
              filterName="medium"
              onClick={this.navOnClick}
              label="Medium" />
          </Nav>
        </div>
        <div>
          <ModalGallery 
            filterCategory={this.state.filterCategory}
          />
        </div>

      </div>

    );
  }
}

export default MainContent;