import React from 'react';

const OpenThumbnail = ({imgUrl}) => {
  return (
    <div>
      <img
        style={{
          width: "100%",
          height: 400
        }}
        src={imgUrl} />
    </div>
  );
}

export default OpenThumbnail;
