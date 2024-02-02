// HomePage.js
import React, { useEffect } from 'react';
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





const HomePage = () => {
  useEffect(() => {

  }, []);
  return (
    <div className="home-main-div animated-section">
      <div className="posters-section">
        <Poster />
      </div>
      

      {/* About Us Section */}
      <div className="about-us-section">
        <Link to='/opticals/src/Aboutus.js'></Link>
        <div className="about-us-content">
          <h2>ABOUT US</h2>
          <p>ᴀᴛ ᴘᴏʟɪꜱʜ ᴇʏᴇᴡᴇᴀʀ, ᴄʜᴏᴏꜱɪɴɢ ʏᴏᴜʀ ꜱᴛʏʟᴇ ɪꜱ ᴇꜰꜰᴏʀᴛʟᴇꜱꜱʟʏ ᴄʜɪᴄ, ᴛʜᴀɴᴋꜱ ᴛᴏ ᴀ ᴅɪᴠᴇʀꜱᴇ ᴀʀʀᴀʏ ᴏꜰ ᴛʀᴇɴᴅʏ ꜱʜᴀᴘᴇꜱ ʟɪᴋᴇ ᴇᴅɢʏ ʀᴇᴄᴛᴀɴɢʟᴇꜱ, ʀᴇᴛʀᴏ ʀᴏᴜɴᴅꜱ, ᴀɴᴅ ᴄʜᴀʀᴍɪɴɢ ᴄᴀᴛ ᴇʏᴇꜱ, ᴀʟʟ ᴀᴠᴀɪʟᴀʙʟᴇ ɪɴ ᴀ ᴠɪʙʀᴀɴᴛ ꜱᴘᴇᴄᴛʀᴜᴍ ᴏꜰ ᴄᴏʟᴏʀꜱ. ᴏᴜʀ ᴇʏᴇᴡᴇᴀʀ ꜱʜᴏᴡᴄᴀꜱᴇꜱ ɪɴɴᴏᴠᴀᴛɪᴏɴ ᴡɪᴛʜ ᴛʜᴇ ʟᴀᴛᴇꜱᴛ ᴍᴀᴛᴇʀɪᴀʟꜱ, ɪɴᴄʟᴜᴅɪɴɢ ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴍᴇᴛᴀʟꜱ, ᴛʜᴇʀᴍᴏᴘʟᴀꜱᴛɪᴄ (ᴛʀ90), ᴀɴᴅ ʜɪɢʜ-ᴅᴇꜰɪɴɪᴛɪᴏɴ ᴄᴏᴍᴘʀᴇꜱꜱᴇᴅ ᴀᴄᴇᴛᴀᴛᴇ (ʜᴅᴄᴀ) ꜰᴏʀ ᴏᴜʀ ᴏᴘᴛɪᴄᴀʟ ꜰʀᴀᴍᴇꜱ. ᴇxᴘᴇʀɪᴇɴᴄᴇ ᴛʜᴇ ᴘᴇʀꜰᴇᴄᴛ ꜰᴜꜱɪᴏɴ ᴏꜰ ꜱᴛʏʟᴇ ᴀɴᴅ ᴄᴏᴍꜰᴏʀᴛ ᴀᴛ ᴘᴏʟɪꜱʜ ᴇʏᴇᴡᴇᴀʀ, ᴡʜᴇʀᴇ ᴇᴠᴇʀʏ ᴅᴇᴛᴀɪʟ ʀᴇꜰʟᴇᴄᴛꜱ ᴏᴜʀ ᴅᴇᴅɪᴄᴀᴛɪᴏɴ ᴛᴏ ʀᴇᴅᴇꜰɪɴɪɴɢ ᴇʏᴇᴡᴇᴀʀ ᴇxᴄᴇʟʟᴇɴᴄᴇ.</p>
         
        </div>
        <div className="about-us-image">
          {/* Replace the placeholder image with your actual image */}
          <img src={ aboutus } alt="About Us" style={{width:'650px', height:'450px'}}/>
        </div>
      </div>

      {/* Categories Section */}
      <div className= "category-section">
      <div className="category-title">
        <h2>CATEGORIES</h2>
      </div>
      <section className="category-card-section">
        
        <Link to='/Product' >
        <Card title='Eyewear' imgUrl={eyewear} />
        </Link>
        <Link to='/sunglasses' >
        <Card title='Sunglasses' imgUrl={sunglasses} />
        </Link>
      </section>

      {/* Gift Yourself a New Look Section */}
      <div id="gift-look" className="gift-look-section">
        <h2 className="bold-heading">GIFT YOURSELVES A NEW LOOK</h2>
        <button className="contact-us-btn" >
          <Link to ="/contact">Contact Us</Link></button>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
