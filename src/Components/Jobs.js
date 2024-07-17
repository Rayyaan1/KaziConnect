import React from 'react';
import './Jobs.css';

const Jobs = () => {
  const jobs = [
    {
      title: "Plumber",
      description: "Fix leaks, install pipes, and maintain plumbing systems. Requires knowledge of water systems and pipe fittings.",
      location: "Nairobi",
      status: "Available",
      image: "/job1.jpg"
    },
    {
      title: "Electrician",
      description: "Install and repair electrical systems, troubleshoot electrical issues, and ensure safety standards are met.",
      location: "Mombasa",
      status: "Available",
      image: "/jobs.jpg"
    },
    {
      title: "Painter",
      description: "Apply paint, varnish, and other finishes to buildings and structures. Requires attention to detail and color sense.",
      location: "Kisumu",
      status: "Available",
      image: "job3.jpg"
    },
    {
      title: "Carpenter",
      description: "Construct and repair building frameworks and structures. Skills in woodwork and knowledge of tools required.",
      location: "Nakuru",
      status: "Closed",
      image: "job4.jpg"
    },
    {
      title: "Gardener",
      description: "Maintain gardens, lawns, and landscapes. Knowledge of plants, gardening tools, and landscape design is needed.",
      location: "Eldoret",
      status: "Available",
      image: "/job5.jpg"
    }
  ];

  return (
    <div className="jobs-page">
      <h1>Available Jobs</h1>
      <div className="job-list">
        {jobs.map((job, index) => (
          <div className="job-item" key={index}>
            <img src={job.image} alt={job.title} className="job-image" />
            <div className="job-description">
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <div className="job-location">
                <p>Location: {job.location}</p>
              </div>
              <div className="job-status">
                <p>Status: {job.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
