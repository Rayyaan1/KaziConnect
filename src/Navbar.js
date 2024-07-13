import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './index.css'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() =>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 40 ? setSticky(true) : setSticky(false)
      })
    },[]);


  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
      <div className="logo">
        <Link to="/">KaziKonnect</Link>
      </div>
      <ul className="nav-links">
        <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='services' smooth={true} offset={0} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={0} duration={500}>About</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={500}>Contact</Link></li>
        <li><Link to="/blogPage">Blog</Link></li>
        <li className="dropdown">
          <button className="dropbtn">Register</button>
          <div className="dropdown-content">
            <Link to="/register/customer">Customer</Link>
            <Link to="/register/service-provider">Service Provider</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
