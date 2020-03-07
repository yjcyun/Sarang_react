import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from './Gallery';
import Modal from './Modal';
import { ImageData } from './ImageData';

export default class ModalGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <ModalSwitch filterCategory={this.props.filterCategory} />
      </Router>
    );
  }
}

const ModalSwitch = ({ filterCategory }) => {
  return (
    <div>
      <Route
        path="/portfolio"
        children={
          <Gallery
            filterCategory={filterCategory}
            images={ImageData}
          />
        }
      />

      {<Route
        path="/img/:imageId"
        children={
          <Modal images={ImageData} />
        }
      />}
    </div>
  );
}
