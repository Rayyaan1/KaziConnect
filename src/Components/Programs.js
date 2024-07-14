import React from 'react';
import './Programs.css';
import './index.css';

const Programs = () => {
  return (
    <div id='about' className='programs'>
        <p className='paragraph'>
            Whether you need home maintenance, renovations, or specialized professional services, KaziKonnect connects you with trusted experts who are committed to excellence. 
            Join us in transforming the way services are accessed and delivered.
        </p>
      <div className='program-images'>
        <div className='program'>
          <img src="/about-image5.jfif" alt="" />
        </div>
        <div className='program'>
          <img src="/about-image2.jfif" alt="" />
        </div>
        <div className='program'>
          <img src="/about-image.jfif" alt="" />
        </div>
        <div className='program'>
          <img src="/about-image6.jfif" alt="" />
        </div>
      </div>
      <button className='btn'>See more Here <img src="/white-arrow.png" alt="Arrow Icon" /></button>
    </div>
  );
}

export default Programs;
