import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Register.css'; 
import { Link } from 'react-router-dom';
const ServiceProviderRegister = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Service provider registration submitted!');
  };

  return (
    <div>
      <Navbar />
      <main className="register-content">
        <h2>Service Provider Registration</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="first-name" required />
          <label>Last Name:</label>
          <input type="text" name="last-name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Phone:</label>
          <input type="tel" name="phone" required />
          <label>Service Type:</label>
          <input type="text" name="serviceType" required />
          <label>Password:</label>
          <input type="password" name="password" required />
          <label>Confirm Password:</label>
          <input type="password" name="confirm-password" required />
          <button type="submit">Register</button>
          <p>Already have an Acoount</p>
          <Link to="/login">Login</Link>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceProviderRegister;
