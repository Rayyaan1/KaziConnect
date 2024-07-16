import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import supabase from '../Config/SupabaseClient';
import './ServiceProviderLogin.css'; // Separate CSS file for ServiceProviderLogin

const ServiceProviderLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      alert(error.message);
    } else {
      console.log('Service provider login successful!');
      // Further processing, e.g., redirect to dashboard
    }
  };

  return (
    <div>
      <Navbar />
      <main className="login-content">
        <h2>Service Provider Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
          <p>Don't have an account?</p>
          <Link to="/register/service-provider">Sign Up</Link>
        </form>
      </main>
      
    </div>
  );
};

export default ServiceProviderLogin;
