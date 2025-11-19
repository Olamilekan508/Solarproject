import React from 'react';
import "./Header.css";
import { Link } from 'react-scroll';
import { solar__skyscraper } from "../../assets";
import SolarSystem from "../SolarSystem";

const Header = () => {
  return (
    <header id='header'>
      <div className="system_wrapper">
        <SolarSystem/>
      </div>
      <div className="container full_height blur-effect">
        <div className="column">
          <h1 className="title">
            Revolutionary Home <span className="g-text">Solar System</span>
          </h1>
          <p className="text_muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="buttons_container">
            <Link to='services' smooth={true} duration={500} className='btn'>Our Services</Link>
            <Link to='contact' smooth={true} duration={500} className='btn btn_primary'>Contact Us</Link>
          </div>
        </div>
        
        <div className="column image_container primary-effect">
          <img src={solar__skyscraper} alt="Solarix" />
        </div>
      </div>
    </header>
  );
}

export default Header;

