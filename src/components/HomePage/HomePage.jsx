import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import HomePageItems from '../HomePageItems';
import './HomePage.css';
import HomePageLink from './HomePageLink';

const HomePage = () => {
  return (
    <div>
      <Carousel
        controls={false}
        indicators={false}>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="/img/showcase1.png"
            alt="carousel"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="/img/showcase2.png"
            alt="carousel"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="/img/showcase3.png"
            alt="carousel"
          />

        </Carousel.Item>
        {/* <HomePageItems /> */}
      </Carousel>
      <Carousel.Caption className="carousel-title">
        <img 
        className="carousel-logo" 
        src="/img/logo.png"
        alt="logo" />
        <div className="carousel-links">
          <HomePageLink
            link="/portfolio"
            title="portfolio"
          />
          <HomePageLink
            link="/about"
            title="about"
          />
          <HomePageLink
            link="/store"
            title="store"
          />
        </div>
      </Carousel.Caption>
    </div>


  )
}

export default HomePage;