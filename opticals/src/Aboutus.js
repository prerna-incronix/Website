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
                <p>ᴀᴛ ᴘᴏʟɪꜱʜ ᴇʏᴇᴡᴇᴀʀ, ᴄʜᴏᴏꜱɪɴɢ ʏᴏᴜʀ ꜱᴛʏʟᴇ ɪꜱ ᴇꜰꜰᴏʀᴛʟᴇꜱꜱʟʏ ᴄʜɪᴄ, ᴛʜᴀɴᴋꜱ ᴛᴏ ᴀ ᴅɪᴠᴇʀꜱᴇ ᴀʀʀᴀʏ ᴏꜰ ᴛʀᴇɴᴅʏ ꜱʜᴀᴘᴇꜱ ʟɪᴋᴇ ᴇᴅɢʏ ʀᴇᴄᴛᴀɴɢʟᴇꜱ, ʀᴇᴛʀᴏ ʀᴏᴜɴᴅꜱ, ᴀɴᴅ ᴄʜᴀʀᴍɪɴɢ ᴄᴀᴛ ᴇʏᴇꜱ, ᴀʟʟ ᴀᴠᴀɪʟᴀʙʟᴇ ɪɴ ᴀ ᴠɪʙʀᴀɴᴛ ꜱᴘᴇᴄᴛʀᴜᴍ ᴏꜰ ᴄᴏʟᴏʀꜱ. ᴏᴜʀ ᴇʏᴇᴡᴇᴀʀ ꜱʜᴏᴡᴄᴀꜱᴇꜱ ɪɴɴᴏᴠᴀᴛɪᴏɴ ᴡɪᴛʜ ᴛʜᴇ ʟᴀᴛᴇꜱᴛ ᴍᴀᴛᴇʀɪᴀʟꜱ, ɪɴᴄʟᴜᴅɪɴɢ ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴍᴇᴛᴀʟꜱ, ᴛʜᴇʀᴍᴏᴘʟᴀꜱᴛɪᴄ (ᴛʀ90), ᴀɴᴅ ʜɪɢʜ-ᴅᴇꜰɪɴɪᴛɪᴏɴ ᴄᴏᴍᴘʀᴇꜱꜱᴇᴅ ᴀᴄᴇᴛᴀᴛᴇ (ʜᴅᴄᴀ) ꜰᴏʀ ᴏᴜʀ ᴏᴘᴛɪᴄᴀʟ ꜰʀᴀᴍᴇꜱ. ᴇxᴘᴇʀɪᴇɴᴄᴇ ᴛʜᴇ ᴘᴇʀꜰᴇᴄᴛ ꜰᴜꜱɪᴏɴ ᴏꜰ ꜱᴛʏʟᴇ ᴀɴᴅ ᴄᴏᴍꜰᴏʀᴛ ᴀᴛ ᴘᴏʟɪꜱʜ ᴇʏᴇᴡᴇᴀʀ, ᴡʜᴇʀᴇ ᴇᴠᴇʀʏ ᴅᴇᴛᴀɪʟ ʀᴇꜰʟᴇᴄᴛꜱ ᴏᴜʀ ᴅᴇᴅɪᴄᴀᴛɪᴏɴ ᴛᴏ ʀᴇᴅᴇꜰɪɴɪɴɢ ᴇʏᴇᴡᴇᴀʀ ᴇxᴄᴇʟʟᴇɴᴄᴇ.</p>
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