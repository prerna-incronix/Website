// Footer.js
import React from 'react';
import './footer.css'; // You can create a separate CSS file for footer styles
import logo from '../src/assets/logo.png';
const Footer = () => {
  return (
    <div className="footer-section">
       
        <div className="footer-contact">
        <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3987422243545!2d73.81513907423825!3d18.556053568091293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfdab5aab983%3A0x1a46e42eb0095a0e!2sINCRONIX%20TECHNOLOGY%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1705987883242!5m2!1sen!2sin" 
        width="600" 
        height="300" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

      </iframe>
      </div>
      
        
          <div>
            <p>Contact Number: +123 456 789</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="social-media-icons">
            {/* Add your social media icons here */}
            {/* For example, you can use Font Awesome icons */}
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
          </div>
        <hr />
        <div className="logo-footer">
          <img src={logo} alt="Logo" />
        
      </div>
     

    </div>
  );
};

export default Footer;
