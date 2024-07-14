import React from 'react';
import './Services.css';

const Services = ({subTitle, title}) => {
  return (
    <div id='services' className="services-page title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
      <div className="services">
        <div className="services-grid">
          <div className="service-item">
            <div className="service-card">
              <img src="/painting.avif" alt="Painting Service" />
              <div className="service-info">
                <p> Painting Services</p>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-card">
              <img src="/plumbing.jpg" alt="Plumbing Service" />
              <div className="service-info">
                <p>Plumbing Services</p>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-card">
              <img src="/mowing.avif" alt="Lawn Mowing Service" />
              <div className="service-info">
                <p>Lawn Mowing Services</p>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-card">
              <img src="/electrician.avif" alt="Electrician Service" />
              <div className="service-info">
                <p>Electrician Services</p>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-card">
              <img src="/cleaning.avif" alt="Cleaning Service" />
              <div className="service-info">
                <p>Cleaning Services</p>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="service-card">
              <img src="/fixing.avif" alt="Fixing Service" />
              <div className="service-info">
                <p>Fixing Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
