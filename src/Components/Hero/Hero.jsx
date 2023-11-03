import React from 'react';
import './Hero.css';
import arrow_icon from '../Assests/arrow.png';
import hero_image from '../Assests/hero_image.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>DISCOVER OUR NEW COLLECTION</h2>
        <p>Explore the latest trends for everyone</p>
        <div className="hero-latest-btn">
          <div>Shop Now</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-image">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
