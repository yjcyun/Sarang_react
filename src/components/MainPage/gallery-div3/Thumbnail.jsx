import React from 'react';

const Thumbnail = ({ imgUrl }) => {
  return (
    <div>
      <img
        style={{
          width: 200,
          height: 200
        }}
        src={imgUrl}
        alt="thumbnail" />
    </div>
  );
}

export default Thumbnail;
