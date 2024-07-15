import React from 'react';
import './Carousel.css';
import fashion from "./Image/s1.webp";
import rate from "./Image/s3.jpg";
import chat from "./Image/sc.png";
import choice from "./Image/doru.webp";

const Carousel = ({ onDesignerClick, onCustomerClick }) => {
  return (
    <div className="carousel">
      <div className="slide">
        <img src={fashion} alt="Slide 1" />
        <div className="slide-text">
          <h2>Introducing new feature</h2>
          <p>For our passionate Designers. Make your designs come to life.</p>
        </div>
      </div>
      <div className="slide">
        <img src={rate} alt="Slide 2" />
        <div className="slide-text">
          <h2>Submit your Designs in Myntra</h2>
          <p>Get your ratings and reviews.</p>
        </div>
      </div>
      <div className="slide">
        <img src={chat} alt="Slide 3" />
        <div className="slide-text">
          <h2>Interact with users</h2>
          <p>Chat with users and customize their dress.</p>
        </div>
      </div>
      <div className="slide last-slide">
        <img src={choice} alt="Slide 4" />
        <div className="button-container">
          <button className="role-button designer" onClick={onDesignerClick}>
            Designer
          </button>
          <button className="role-button customer" onClick={onCustomerClick}>
            Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
