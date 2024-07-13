import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Register.css'; 
const CustomerRegister = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Customer registration submitted!');
  };

  return (
    <div>
      <Navbar />
      <main className="register-content">
        <h2>Customer Registration</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="first-name" required />
          <label>Last Name:</label>
          <input type="text" name="last-name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Phone:</label>
          <input type="tel" name="phone" required />
          <label>Password:</label>
          <input type="password" name="password" required />
          <label>Confirm Password:</label>
          <input type="password" name="confirm-password" required />
          <button type="submit">Register</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerRegister;
