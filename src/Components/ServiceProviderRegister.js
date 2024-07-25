// src/components/ServiceProviderRegister.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const serviceTypes = [
    'Carpentry',
    'Cleaning',
    'Fixing',
    'Electrical',
    'Gardening',
    'Painting',
    'Plumbing',
    'Other',
  ];

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
      navigate('/login/service-provider');
    }
  };

  return (
    <div>
      <Navbar />
      <main className="register-content">
        <h2>Service Provider Registration</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className='combinedInputs'>
            <div className='labelAndInput'>
              <label>First Name:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className='labelAndInput'>
              <label>Last Name:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          <label>Service Type:</label>
          <div className="service-dropdown-container">
            <select 
              name="serviceType" 
              value={formData.serviceType} 
              onChange={handleChange} 
              className="service-dropdown" 
              required
            >
              <option value="">Select a service type</option>
              {serviceTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className='combinedInputs'>
            <div className='labelAndInput'>
              <label>Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className='labelAndInput'>
              <label>Confirm Password:</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
          </div>
          <button type="submit">Register</button>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </form>
      </main>
    </div>
  );
};

export default ServiceProviderRegister;
