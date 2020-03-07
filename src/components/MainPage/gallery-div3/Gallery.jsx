import React from 'react';
import Thumbnail from './Thumbnail';
import { Link, useLocation } from "react-router-dom";


function Gallery({ filterCategory, images }) {
  let location = useLocation();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridGap: '15px',
        width: '100%',
        margin: '0 auto'
      }}
    >
      {images.filter(element => {
        if (filterCategory === 'all') {
          return true;
        }
        return element.category.includes(filterCategory)
      }).map(i => (
        <Link
          key={i.id}
          to={{
            pathname: `/img/${i.id}`,
            // This is the trick! This link sets
            // the `background` in location state.
            state: { background: location }
          }}
        >
          <Thumbnail imgUrl={i.imgUrl} />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;