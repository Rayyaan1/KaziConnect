import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';
import './index.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 40 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="logo">
        <ScrollLink to="home" smooth={true} offset={0} duration={500}>KaziKonnect</ScrollLink>
      </div>
      <ul className="nav-links">
        <li>
          <ScrollLink to="home" smooth={true} offset={0} duration={500}>Home</ScrollLink>
        </li>
        <li>
          <ScrollLink to="services" smooth={true} offset={-260} duration={500}>Services</ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} offset={-260} duration={500}>About</ScrollLink>
        </li>
        <li>
          <ScrollLink to="testimonials" smooth={true} offset={-250} duration={500}>Testimonials</ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} offset={-250} duration={500}>Contact</ScrollLink>
        </li>
        <li>
          <ScrollLink to="blogPage" smooth={true} offset={0} duration={500}>Blog</ScrollLink>
        </li>
        <li className="dropdown">
          <button className="dropbtn">Sign Up</button>
          <div className="dropdown-content">
            <RouterLink to="/register/customer">Customer</RouterLink>
            <RouterLink to="/register/service-provider">Service Provider</RouterLink>
          </div>
        </li>
        <button className="dropbtn">Log In</button>
      </ul>
    </nav>
  );
};

export default Navbar;
