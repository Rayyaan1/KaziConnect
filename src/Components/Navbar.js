import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import './index.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const notHome = location.pathname !== '/'

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 40 ? setSticky(true) : setSticky(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky || notHome ? 'dark-nav' : ''}`}>
      <RouterLink to="/">
        <img className='logo' src="/KKLogo.png" alt='KaziKonnect Logo' />
      </RouterLink>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <ScrollLink to="/home" smooth={true} offset={0} duration={500}>Home</ScrollLink>
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
          <RouterLink to="/blogPage">Blog</RouterLink>
        </li>
        <li className="dropdown">
          <button className="dropbtn">Sign Up</button>
          <div className="dropdown-content">
            <RouterLink to="/register/customer">Customer</RouterLink>
            <RouterLink to="/register/service-provider">Service Provider</RouterLink>
          </div>
        </li>
        <li className="dropdown">
          <button className="dropbtn">Login</button>
          <div className="dropdown-content">
            <RouterLink to="/login/customer">Customer</RouterLink>
            <RouterLink to="/login/service-provider">Service Provider</RouterLink>
          </div>
        </li>

      </ul>
      <img src="/menu-icon.png" className='menu-icon' onClick={toggleMenu} alt='Menu Icon' />
    </nav>
  );
};

export default Navbar;
