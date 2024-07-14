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
  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu =() =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)

  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <ScrollLink to="home">
        <img className='logo' src="/KKLogo.png" />
      </ScrollLink>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
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
          <RouterLink to="/blogPage">Blog</RouterLink> {/* Use RouterLink for Blog */}
        </li>
        <li className="dropdown">
          <button className="dropbtn">Sign Up</button>
          <div className="dropdown-content">
            <RouterLink to="/register/customer">Customer</RouterLink>
            <RouterLink to="/register/service-provider">Service Provider</RouterLink>
          </div>
        </li>
        <button className="dropbtn dropdown">Log In</button>
      </ul>
      <img src="/menu-icon.png" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
