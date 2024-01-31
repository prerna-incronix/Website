// ContactUsPage.js
import React from 'react';
import './contact.css';  // Create a CSS file for styling if needed

const ContactUsPage = () => {
  return (
    <div className="contact-us-main-div">
      <div className="contact-us-section">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us with any inquiries or feedback.</p>
      </div>

      

      {/* Additional Contact Information Section */}
      <div className="additional-info-section">
        <h2>Contact Information</h2>
        <p>Email: info@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, Cityville</p>
      </div>
    </div>
  );
};

export default ContactUsPage;
