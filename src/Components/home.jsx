import React from 'react';
import './home.css';
import { FaSearch, FaUser, FaShoppingBag, FaHeart } from 'react-icons/fa';
import Logo from './Image/logo.png';
import Carousel from './Carousel';

const Home = ({ onDesignerClick, onCustomerClick }) => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src={Logo} alt="Logo" className="logo" />
          <div className="options">
            <span>MEN</span>
            <span>WOMEN</span>
            <span>KIDS</span>
            <span>HOME & LIVING</span>
            <span>BEAUTY</span>
            <span>STUDIO<sup style={{ color: 'magenta', fontWeight: 'bold' }}>NEW</sup></span>
          </div>
        </div>
        <div className="navbar-center">
          <div className="searchbar-container">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search for products/brands and more" className="searchbar" />
          </div>
        </div>
        <div className="navbar-right">
          <FaUser className="icon" />
          <FaHeart className="icon" />
          <FaShoppingBag className="icon" />
        </div>
      </div>

      <Carousel onDesignerClick={onDesignerClick} onCustomerClick={onCustomerClick} />
    </>
  );
};

export default Home;
