import React from 'react';
import about from '../src/assets/about.jpg';
import { Link } from 'react-router-dom';
import './About.css';
import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1707113666442.json';

function About(){
    return(
         <div className="about-us-section">
            <div className="about-us-content">
                <h2>ABOUT US</h2>
                <p>Polish Eyewear embodies the essence of design perfection. A harmonious blend of style and fashion craftsmanship defines every piece within our eyewear collection. Our dedicated product team places paramount importance on the creation of eyewear that not only stands out as uniquely fashionable but also prioritizes the utmost comfort for the discerning consumer.</p>
            </div>
            <div className="about-us-image">
                {/* Replace the placeholder image with your actual image */}
                {/* <img src={about} alt="About Us" style={{width:'650px', height:'450px'}}/> */}
                <Lottie animationData={animationData} style={{width:'650px', height:'450px'}} />
            </div>
        </div>
    );
}

export default About;