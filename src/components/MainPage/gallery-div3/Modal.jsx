import React from 'react';
import OpenThumbnail from './OpenThumbnail';
import {
  Link,
  useHistory,
  useParams
} from "react-router-dom";
import './Modal.styles.css';

const Modal = ({ images }) => {
  let history = useHistory();
  let { imageId } = useParams();
  let image = images.find(i => i.id == imageId);

  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className='modal-background'>
      <Link
        type="button"
        onClick={back}
        className='close-modal'>X
      </Link>

      <div className="modal-container">
        <OpenThumbnail imgUrl={image.imgUrl} />
        <h1>{image.title}</h1>

      </div>
    </div>

  );
}

export default Modal;