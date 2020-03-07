import React from 'react';
import Thumbnail from './Thumbnail';
import { Link, useLocation } from "react-router-dom";
import './Gallery.styles.css';


function Gallery({ filterCategory, images }) {
  let location = useLocation();

  return (
    <div className='gallery'>
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