import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Register.css';
import supabase from '../Config/SupabaseClient';

const CustomerRegister = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          phone
        }
      }
    });
    if (error) {
      console.error('Error signing up:', error);
    } else {
      console.log('User signed up:', user);
      navigate('/login/customer');
    }
  };

  return (
    <div>
      <Navbar />
      <main className="register-content">
        <h2>Customer Registration</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className='combinedInputs'>
            <div className='labelAndInput'>
              <label>First Name:</label>
              <input
                type="text"
                name="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className='labelAndInput'>
              <label>Last Name:</label>
              <input
                type="text"
                name="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

          </div>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <div className='combinedInputs'>
            <div className='labelAndInput'>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>
            <div className='labelAndInput'>
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>


          <button type="submit">Register</button>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        
      </form>
    </main>
    </div >
  );
};

export default CustomerRegister;
