import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import CustomerRegister from './CustomerRegister';
import ServiceProviderRegister from './ServiceProviderRegister';
import Services from './Services';
import BlogPage from './blogPage';
import PostPage from './Postpage';

const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/register/customer" element={<CustomerRegister />} />
        <Route path="/register/service-provider" element={<ServiceProviderRegister />} />
    </Routes>

    
    
</Router>
  );
};

export default App;
