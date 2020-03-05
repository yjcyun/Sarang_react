import React from 'react';
import { Link } from 'react-router-dom';

// import Carousel from 'react-bootstrap/Carousel';


const HomePageLink = ({ link, title }) => {
  return (
    <Link 
    className="btn btn-clear btn-lg btn-min-block links" 
    to={link}>{title}
    </Link>
    
  )
}

export default HomePageLink;