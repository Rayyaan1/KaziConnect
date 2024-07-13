import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import { BaseUrl } from './config';


const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BaseUrl}/posts`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export default BlogPage;
