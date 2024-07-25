import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Dashboard.css'; // Separate CSS file for Dashboard
import { useNavigate } from 'react-router-dom';
import supabase from '../Config/SupabaseClient';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error getting user:', error);
        navigate('/login/customer');
        return;
      }

      if (user) {
        setUser(user);
        fetchProfile(user.id);
      } else {
        navigate('/login/consumer');
      }
    };

    getUser();
  }, [navigate]);

  const fetchProfile = async (userId) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
    } else {
      setProfile(data);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    } else {
      console.log('Logout successful');
      alert('Logout successful');
      navigate('/login/consumer');
    }
  };

  return (
    <div>
      <Navbar />
      <main className="dashboard-content">
        <h2>Welcome to Your Dashboard</h2>
        {profile ? (
          <div>
            <p><strong>First Name:</strong> {profile.firstname}</p>
            <p><strong>Last Name:</strong> {profile.lastname}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
        <button onClick={handleLogout}>Logout</button>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

