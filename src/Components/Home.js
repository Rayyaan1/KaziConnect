import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './Services.css';
import './App.css';
import Navbar from './Navbar';
import Title from './Title';
import Services from './Services';
import Programs from './Programs';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import supabase from '../Config/SupabaseClient';

const Home = () => {
  const navigate = useNavigate(); // Use useNavigate

  const handleExploreMore = () => {
    navigate('/jobs'); // Use navigate instead of history.push
  };

  console.log(supabase);
  return (
    <div className="home-page">
      <Navbar />
      <div className='home-content' id="home">
        <div className='welcome-section'>
          <h1>KaziKonnect, Connect with skilled local handymen</h1>
          <p>KaziKonnect offers a centralized platform that efficiently connects clients with skilled workers, facilitating quicker, more reliable, and secure engagements. By providing a web-based solution, we offer a wide audience, offering easy access to services for clients and ample job opportunities for workers.</p>
          <button className='btn' onClick={handleExploreMore}>Explore More <img src="/white-arrow.png" alt="" /></button>
        </div>
      </div>
      <div className='container'>
        <Title subTitle='Our Services' title='What we Offer' />
        <Services id="services" />
        <Title subTitle='About Kazi Konnect' title='Offering you quality services in your home' />
        <br />
        <br />
        <Programs />
        <Title subTitle='Testimonials' title='What Our clients Say' />
        <Testimonials />
      </div>
      <Title subTitle='Contact Us' title='Get in Touch' id="contact" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
