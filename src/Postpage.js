import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from './post';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5500/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div>
      {post ? <Post post={post} /> : <p>Loading...</p>}
    </div>
  );
};

export default PostPage;
