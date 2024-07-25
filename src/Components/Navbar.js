import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useLocation, /*useNavigate */ } from 'react-router-dom';
import './Navbar.css';
import './index.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const notHome = location.pathname !== '/';
//  const [searchQuery, setSearchQuery] = useState('');
//  const navigate = useNavigate();

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

  const handleHomeClick = () => {
    if (notHome) {
      window.location.href = '/';
    } else {
      scroll.scrollToTop();
    }
  };

//  const handleSearch = (e) => {
  //  e.preventDefault();
  //  if (searchQuery.trim()) {
  //    navigate(`/search?query=${searchQuery}`);
  //  }
//  };

  return (
    <nav className={`container ${sticky || notHome ? 'dark-nav' : ''}`}>
      <RouterLink to="/">
        <img className='logo' src="/KKLogo.png" alt='KaziKonnect Logo' />
      </RouterLink>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <RouterLink to="/" onClick={handleHomeClick}>
            Home
          </RouterLink>
        </li>
        <li>
          {notHome ? (
            <RouterLink to="/#services">Services</RouterLink>
          ) : (
            <ScrollLink to="services" smooth={true} offset={-260} duration={500}>
              Services
            </ScrollLink>
          )}
        </li>
        <li>
          {notHome ? (
            <RouterLink to="/#about">About</RouterLink>
          ) : (
            <ScrollLink to="about" smooth={true} offset={-260} duration={500}>
              About
            </ScrollLink>
          )}
        </li>
        <li>
          {notHome ? (
            <RouterLink to="/#testimonials">Testimonials</RouterLink>
          ) : (
            <ScrollLink to="testimonials" smooth={true} offset={-250} duration={500}>
              Testimonials
            </ScrollLink>
          )}
        </li>
        <li>
          {notHome ? (
            <RouterLink to="/#contact">Contact</RouterLink>
          ) : (
            <ScrollLink to="contact" smooth={true} offset={-250} duration={500}>
              Contact
            </ScrollLink>
          )}
        </li>
        <li>
          <RouterLink to="/blogPage">Blog</RouterLink>
        </li>
        <li className="dropdown">
          <button className="dropbtn">Sign Up</button>
          <div className="dropdown-content">
            <RouterLink to="/register/consumer">Consumer</RouterLink>
            <RouterLink to="/register/service-provider">Service Provider</RouterLink>
          </div>
        </li>
        <li className="dropdown">
          <button className="dropbtn">Login</button>
          <div className="dropdown-content">
            <RouterLink to="/login/consumer">Consumer</RouterLink>
            <RouterLink to="/login/service-provider">Service Provider</RouterLink>
          </div>

  
        </li>
      </ul>
      <img src="/menu-icon.png" className='menu-icon' onClick={toggleMenu} alt='Menu Icon' />
    </nav>
  );
};

export default Navbar;

