import React from 'react';
import OpenThumbnail from './OpenThumbnail';
import {
  Link,
  useHistory,
  useParams
} from "react-router-dom";

const Modal = ({images}) => {
  let history = useHistory();
  let { id } = useParams();
  let image = images[parseInt(id, 10)];

  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: '15%',
        bottom: 0,
        right: 0,
        background: "white",
        display: 'grid',
        gridTemplateColumns: 'columns'
      }}
    >
      <Link
        type="button"
        onClick={back}
        style={{
          display: 'grid', justifyContent: 'end',
          paddingRight: '25px',
          paddingTop: '5px',
          fontSize: '3rem'
        }}
      >
        X
      </Link>

      <div
        style={{
          background: "#fff",
          padding: '100px'

        }}
      >
        <OpenThumbnail imgUrl={image.imgUrl} />
        <h1>{image.title}</h1>

      </div>
    </div>

  );
}

export default Modal;