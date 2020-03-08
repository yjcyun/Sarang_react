import React from 'react';

const imgOnClick = () => {
  return(
    console.log("Clicked!!")
  )
}

const OpenThumbnail = ({imgUrl}) => { 

  return (
    <div onClick={imgOnClick}>
      <img
        style={{
          width: "100%",
          height: 400
        }}
        src={imgUrl}
        alt="projects" />
    </div>
  );
}

export default OpenThumbnail;
