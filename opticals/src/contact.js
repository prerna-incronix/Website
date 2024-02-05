// ContactUsPage.js
import React from 'react';
import './contact.css';  // Create a CSS file for styling if needed
import animationData from './assets/Animation - 1707116949087.json';
import Lottie from 'lottie-react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaPhoneAlt } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";

const ContactUsPage = () => {
  return (
    <div className="contact-us-main-div">
      <div className="contact-us-section">
        
      </div>

      

      {/* Additional Contact Information Section */}
      <div >
        <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3987422243545!2d73.81513907423825!3d18.556053568091293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfdab5aab983%3A0x1a46e42eb0095a0e!2sINCRONIX%20TECHNOLOGY%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1705987883242!5m2!1sen!2sin" 
        width="1300" 
        height="300" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

      </iframe>
      </div>
      </div>
      <div className="footer-contact">
          <div style={{padding:'70px'}}>
          <h1>Contact Us</h1>
        <p>Feel free to reach out to us with any inquiries or feedback.</p>
        <br />
        <br />
        <br />
        <div >
        < FaPhoneAlt className="icon" />
            <p>Contact Number: +91 9579229280</p>
            </div>
            
            <div >    
            <HiOutlineMail className="icon" style={{ fontSize: '2em' }} />
            <p>Email: info@example.com</p>
            </div>
            </div>
          <div>
          <Lottie animationData={animationData} style={{width: '350px', height:'640px', zIndex:'1', alignItems:'center', padding:'30px' }} />
          </div>
      </div>
      
          
    </div>
  );
};

export default ContactUsPage;
