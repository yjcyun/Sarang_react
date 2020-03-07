import React from 'react';

const Thumbnail = ({ imgUrl }) => {
  return (
    <div>
      <img
        style={{
          width: '100%',
          height: 150
        }}
        src={imgUrl} />
    </div>
  );
}

export default Thumbnail;
