import React from 'react';
import './post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
