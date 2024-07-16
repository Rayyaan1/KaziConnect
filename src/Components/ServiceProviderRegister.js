// src/components/ServiceProviderRegister.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Register.css';
import { Link } from 'react-router-dom';
import supabase from '../Config/SupabaseClient';

const ServiceProviderRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      alert(error.message);
    } else {
      console.log('Service provider registration submitted!');
      // Further processing, e.g., save additional user data to database
    }
  };

  return (
    <div>
      <Navbar />
      <main className="register-content">
        <h2>Service Provider Registration</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          <label>Service Type:</label>
          <input type="text" name="serviceType" value={formData.serviceType} onChange={handleChange} required />
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          <button type="submit">Register</button>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceProviderRegister;
