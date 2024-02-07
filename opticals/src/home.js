// HomePage.js
import React, { useState, useEffect } from 'react';
import './home.css';
import './Aboutus';
import logo from '../src/assets/logo.png';
import aboutus from '../src/assets/about.jpg';
import eyewear from '../src/assets/eyewear.jpg';
import sunglasses from '../src/assets/sunglasses.jpg';
import Card from './card';
import { Link, Navigate } from 'react-router-dom';
import './nav';
import Navbar from './nav';
import ScrollReveal from 'scrollreveal';
import VanillaTilt from 'vanilla-tilt';
import Poster from './posters';
import sunglass from './sunglasses';
import { useSpring, animated } from 'react-spring';
import autoAnimate from '@formkit/auto-animate';
import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1707113666442.json';
// import Container from './container';
import { Container } from 'react-bootstrap';
import { useTypewriter, Cursor } from "react-simple-typewriter";





const HomePage = () => {
  const [showCompany, setShowCompany] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCompany(true);
    }, 1000);

    // Initialize ScrollReveal effect
    ScrollReveal().reveal('.animated-section', {
      duration: 4000,
      distance: '10px',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      origin: 'top',
      interval: 200,
    });

    return () => clearTimeout(timer);
  }, []);

  const companyAnimation = useSpring({
    opacity: showCompany ? 1 : 0,
    marginTop: showCompany ? 0 : -50,
    from: { opacity: 0, marginTop: -50 },
  });

  const [text] = useTypewriter({
    words: ["OLISH EYEWEAR "],
    loop: {},
    typeSpeed: 120,
  });

  const title = "P";

  return (
    <div className="home-main-div animated-section">
      {/* Animated Firm Name Section */}
      <div className='center-container' companyAnimation style={{fontFamily: 'Noto Serif, serif'}}>
        {title}
        {text}
      </div>
      <div className="posters-section animated-section">
        <Poster />
      </div>
      

      {/* About Us Section */}
      <div className="about-us-section animated-section" >
        
        
        <div className="about-us-content">
          <Container>          
            <h2>ABOUT US</h2>
          <p>Polish Eyewear embodies the essence of design perfection. A harmonious blend of style and fashion craftsmanship defines every piece within our eyewear collection. Our dedicated product team places paramount importance on the creation of eyewear that not only stands out as uniquely fashionable but also prioritizes the utmost comfort for the discerning consumer.</p>
          </Container>

        </div>
        <div className="about-us-image">
          {/* Replace the placeholder image with your actual image */}
          {/* <img src={ aboutus } alt="About Us" style={{width:'650px', height:'450px'}}/> */}
          <Lottie animationData={animationData} style={{width:'650px', height:'450px'}} />
        </div>
      </div>

      {/* Categories Section */}
      <div className= "category-section animated-section">
      <div className="category-title">
        <h2>CATEGORIES</h2>
      </div>
      <section className="category-card-section">
        
        <Link to='/Product' >
        <Card title='Eyewear' imgUrl={eyewear} style={{fontFamily: 'Cinzel, sans-serif'}}
     />
        </Link>
        <Link to='/sunglasses' >
        <Card title='Sunglasses' imgUrl={sunglasses} />
        </Link>
      </section>

      {/* Gift Yourself a New Look Section */}
      <div id="gift-look" className="gift-look-section animated-section">
        <h2 className="bold-heading">GIFT YOURSELVES A NEW LOOK</h2>
        <button className="contact-us-btn" >
          <Link to ="/contact">Contact Us</Link></button>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
