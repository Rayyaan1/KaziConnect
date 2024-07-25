import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import ConsumerRegister from './ConsumerRegister';
import ServiceProviderRegister from './ServiceProviderRegister';
import Services from './Services';
import BlogPage from './BlogPage'; // Assuming this is correctly linked to the BlogPage component
import PostPage from './Postpage'; // Assuming this is correctly linked to the PostPage component
import Testimonials from './Testimonials';
import Programs from './Programs';
import ConsumerLogin from './ConsumerLogin';
import ServiceProviderLogin from './ServiceProviderLogin';
import Dashboard from './Dashboard';
import Jobs from './Jobs';
// import useScrollToSection from '../hooks/useScrollToSection'; // Adjust relative path if needed

const App = () => {
  // useScrollToSection(); // Ensure this is used correctly

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} /> {/* Corrected path from "#services" to "/services" */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/register/consumer" element={<ConsumerRegister />} />
        <Route path="/register/service-provider" element={<ServiceProviderRegister />} />
        <Route path="/login/consumer" element={<ConsumerLogin />} />
        <Route path="/login/service-provider" element={<ServiceProviderLogin />} />
    

      </Routes>
    </Router>
  );
};

export default App;
