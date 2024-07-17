import React from 'react';
import { useParams } from 'react-router-dom';
import './PostPage.css';

const PostPage = ({ posts }) => {
  const { id } = useParams();

  // Check if posts array exists and has items
  if (!posts || posts.length === 0) {
    return <div>Loading...</div>; // Handle loading state if posts are being fetched asynchronously
  }

  // Find the post with the matching id
  const post = posts.find(p => p._id === id);

  if (!post) {
    return <div>Post not found</div>; // Handle case where post with id is not found
  }

  return (
    <div className="post-page">
      <img src={post.image} alt={post.title} className="post-image" />
      <h1>{post.title}</h1>
      <p>{post.fullContent}</p>
    </div>
  );
};

export default PostPage;
