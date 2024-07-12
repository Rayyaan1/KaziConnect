import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Register.css'; // Ensure this file contains common styling for registration forms

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
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Phone:</label>
          <input type="tel" name="phone" required />
          <label>Service Type:</label>
          <input type="text" name="serviceType" required />
          <button type="submit">Register</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceProviderRegister;
