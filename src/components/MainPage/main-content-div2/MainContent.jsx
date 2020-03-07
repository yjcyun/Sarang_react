import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import TopNavItem from './TopNavItem';
import ModalGalleryExample from '../gallery-div3/Modal';

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
        <div style={{
          backgroundColor: 'green',
          height: '15vh'
        }}>

          <Nav
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
          >
            <TopNavItem
              filterName="all"
              onClick={this.navOnClick}
              label="All" />
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
          <ModalGalleryExample 
            filterCategory={this.state.filterCategory}
          />
        </div>

      </div>

    );
  }
}

export default MainContent;