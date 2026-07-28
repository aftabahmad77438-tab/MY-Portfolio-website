import React, { useState } from 'react'
import './Contact.css'
// 
const Contact = () => {
  const [result, setResult] = useState("");


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "af99b3e7-ec01-4187-925f-719d322d81fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <div className='contact'>

      <div className="left">

        <form onSubmit={onSubmit}>
          <input type="text" placeholder='enter your name' name="name" required />
          <input type="email" placeholder='enter your email' name="email" required />
          <textarea name="message" placeholder='your message!!' required></textarea>
          <button type="submit">Submit Form</button>
          <span>{result}</span>
        </form>




      </div>

      
         <div className="right">
  <ul className="social-list">
    <li>
      <a href="https://www.instagram.com/aftabahmad__18?igsh=MTBvenZuNXd2eml1aw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-instagram icon"></i> Instagram
      </a>
    </li>
    <li>
      <a href="https://github.com/aftabahmad77438-tab" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github icon"></i> GitHub
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/aftab-ahmad-9a4aa1412?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin icon"></i> LinkedIn
      </a>
    </li>
    <li>
      <a href="mailto:aftabahmad77438@gmail.com">
        <i className="fa-solid fa-envelope icon"></i> aftabahmad77438@gmail.com
      </a>
    </li>
    <li>
      <a href="tel:03434587000">
        <i className="fa-solid fa-phone icon"></i> 0343-4587---
      </a>
    </li>
  </ul>
</div>






      </div>



    
  )
}

export default Contact
