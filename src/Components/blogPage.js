import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import './BlogPage.css';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Real blog data
    const blogPosts = [
      {
        _id: '1',
        title: 'The Importance of Reliable Handyman Services',
        author: 'Rayyan',
        content: 'At KaziKonnect, we understand that finding reliable handyman services can be a challenge. Our platform connects you with experienced and trustworthy professionals...',
        fullContent: 'At KaziKonnect, we understand that finding reliable handyman services can be a challenge. Our platform connects you with experienced and trustworthy professionals who are ready to tackle any job, big or small. Whether you need help with plumbing, electrical work, or general home maintenance, we have the right person for the job. Our handymen are vetted for their skills and reliability, ensuring that you receive the best service possible.',
        image: '/handyman-services.jpg'
      },
      {
        _id: '2',
        title: 'How KaziKonnect Streamlines Service Delivery',
        author: '',
        content: 'KaziKonnect is revolutionizing the way service delivery is managed. By leveraging technology, we make...',
        fullContent: 'KaziKonnect is revolutionizing the way service delivery is managed. By leveraging technology, we make the process seamless and efficient for both clients and service providers. Our platform allows for easy booking, real-time updates, and secure payments, ensuring that you have a hassle-free experience from start to finish.',
        image: '/service-delivery.jpg'
      },
      {
        _id: '3',
        title: 'Top Tips for Choosing the Right Handyman',
        author: '',
        content: 'Choosing the right handyman is crucial for the success of your home improvement projects. At KaziKon...',
        fullContent: 'Choosing the right handyman is crucial for the success of your home improvement projects. At KaziKonnect, we provide detailed profiles and reviews of our service providers, making it easier for you to make an informed decision. Look for handymen with the right skills, experience, and positive feedback from previous clients.',
        image: '/choosing-handyman.jpg'
      },
      {
        _id: '4',
        title: 'Why Regular Home Maintenance is Important',
        author: '',
        content: 'Regular home maintenance is essential for preserving the value and functionality of your property. A...',
        fullContent: 'Regular home maintenance is essential for preserving the value and functionality of your property. At KaziKonnect, we offer a wide range of maintenance services to keep your home in top condition. From routine inspections to emergency repairs, our handymen are ready to help you maintain a safe and comfortable living environment.',
        image: '/home-maintenance.jpg'
      },
      {
        _id: '5',
        title: 'The Benefits of Professional Handyman Services',
        author: '',
        content: 'Hiring a professional handyman offers numerous benefits, including expertise, efficiency, and safet...',
        fullContent: 'Hiring a professional handyman offers numerous benefits, including expertise, efficiency, and safety. Our handymen are trained to handle a variety of tasks, ensuring that the job is done right the first time. By choosing KaziKonnect, you can rest assured that you are receiving high-quality service from professionals who care about your satisfaction.',
        image: '/professional-handyman.jpg'
      },
      {
        _id: '6',
        title: 'How to Prepare Your Home for a Handyman Visit',
        author: '',
        content: 'Preparing your home for a handyman visit can ensure a smooth and efficient service. At KaziKonnect,...',
        fullContent: 'Preparing your home for a handyman visit can ensure a smooth and efficient service. At KaziKonnect, we recommend clearing the work area of any obstacles, making a list of tasks to be completed, and ensuring that any necessary materials are on hand. This helps our handymen work more effectively and complete the job to your satisfaction.',
        image: '/prepare-home.jpg'
      }
    ];

    // Simulating an API call delay
    setTimeout(() => {
      setPosts(blogPosts);
    }, 1000);
  }, []);

  return (
    <div className='blogCSS'>
      <h1>Blog Posts</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export default BlogPage;
