import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../Config/SupabaseClient';
import './ConsumerLogin.css'; // Separate CSS file for ConsumerLogin

const ConsumerLogin = () => {
    const navigate = useNavigate()
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
      console.log('Consumer login successful!');
      navigate('/dashboard');
      // Further processing, e.g., redirect to dashboard

    }
  };

  return (
    <div>
      <Navbar />
      <main className="login-content">
        <h2>Consumer Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
          <p>Don't have an account?</p>
          <Link to="/register/consumer">Sign Up</Link>
        </form>
      </main>
      
    </div>
  );
};

export default ConsumerLogin;

