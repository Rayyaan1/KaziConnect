import React from 'react'
import './About.css'
const About = ({subTitle, title}) => {
  return (
    <div className='about title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
      <div className='about-left'>
        <img src="/about-image2.jfif" alt="" className='about-img'/>
      </div>

      <div className='about-right'>
        <h2>Connecting clients with skilled service providers</h2>
        <p>
          KaziKonnect is dedicated to connecting clients with skilled service providers, offering a seamless platform 
          for finding and hiring professionals for various tasks. 
        </p>
        <p>
          Our platform ensures that clients can discover a wide range of skilled professionals, from painters and 
          plumbers to electricians and landscapers, making home improvement and maintenance effortless.
        </p>
        <p>
          KaziKonnect aims to redefine how individuals and businesses connect for their service 
          needs, ensuring quality, trust, and satisfaction in every interaction.
        </p>
      </div>
      
    </div>
  )
}

export default About
