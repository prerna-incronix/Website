import React from 'react';
import about from '../src/assets/about.jpg';
import { Link } from 'react-router-dom';
import './About.css';

function About(){
    return(
         <div className="about-us-section">
            <div className="about-us-content">
                <h2>About Us</h2>
                <p>Subheading or a brief description about your company.</p>
            </div>
            <div className="about-us-image">
                {/* Replace the placeholder image with your actual image */}
                <img src={about} alt="About Us" style={{width:'650px', height:'450px'}}/>
            </div>
        </div>
    );
}

export default About;