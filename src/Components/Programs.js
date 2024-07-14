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
          <img src="/about1.jpg" alt="" />
        </div>
        <div className='program'>
          <img src="/about2.jpg" alt="" />
        </div>
        <div className='program'>
          <img src="/about4.jpg" alt="" />
        </div>
      </div>
      <button className='btn'>See more Here <img src="/white-arrow.png" alt="Arrow Icon" /></button>
    </div>
  );
}

export default Programs;
