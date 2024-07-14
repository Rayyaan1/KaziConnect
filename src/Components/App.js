import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import CustomerRegister from './CustomerRegister';
import ServiceProviderRegister from './ServiceProviderRegister';
import Services from './Services';
import BlogPage from './blogPage';
import PostPage from './Postpage';
import Testimonials from './Testimonials';
import Programs from './Programs';
const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#services" element={<Services />} />
        <Route path="/about" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/register/customer" element={<CustomerRegister />} />
        <Route path="/register/service-provider" element={<ServiceProviderRegister />} />
    </Routes>

    
    
</Router>
  );
};

export default App;
