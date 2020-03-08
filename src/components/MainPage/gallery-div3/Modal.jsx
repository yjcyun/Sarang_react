import React from 'react';
import {
  Link,
  useHistory,
  useParams
} from "react-router-dom";
import OpenThumbnail from './OpenThumbnail';
import CloseButton from './CloseButton';
import './Modal.styles.css';

const Modal = ({ images }) => {
  let history = useHistory();
  let { imageId } = useParams();
  let image = images.find(i => i.id.toString() === imageId);

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
        className='close-modal'>
        <CloseButton />

      </Link>

      <div className="modal-container">
        <OpenThumbnail 
        imgUrl={image.imgUrl}
        // onClick={image.imgUrl}
         />
        <h3 className="modal-title">{image.title}</h3>
        <p>{image.description}</p>

      </div>
    </div>

  );
}

export default Modal;