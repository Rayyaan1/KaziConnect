import React from 'react';
import './Contact.css';
import './index.css';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f4eebfb-3750-4f72-872f-59f0dbe33125");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className='contact_col'>
        <h3><b>Send us a Message</b> <img src="/message-icon.png" alt="Msg" /></h3> <br/>

        <p>
            KaziKonnect is dedicated to connecting clients with skilled service providers, offering a seamless platform 
            for finding and hiring professionals for various tasks.
        </p>
        <ul>
          <li> <img src="/mail-icon.png" alt="" />jellerayyann@gmail.com</li>
          <li><img src="/phone-icon.png" alt="" />+234 789 786</li>
          <li><img src="/location-icon.png" alt="" />Nairobi, 123 Upper Hill road</li>
        </ul>
      </div>
      <div className='contact_col'>
        <form onSubmit={onSubmit}> 
          <label><b>Your Name</b></label>
          <input type='text' name='name' placeholder='Enter your Name' required />
          <label><b>Phone Number</b></label>
          <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required />
          <label><b>Enter Your Message</b></label>
          <textarea name='message' rows='6' placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn'>Submit Now</button>
        </form>
        <span>{result}</span>

      </div>
    
      
    </div>
  );
};

export default Contact;
