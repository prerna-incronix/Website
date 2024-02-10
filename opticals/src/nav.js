// Navbar.js
import React, { useState, useEffect } from "react";
import "../src/nav.css";
import { Link, Outlet } from "react-router-dom";
import logo from '../src/assets/logo.png';
import About from "./Aboutus";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useTypewriter } from 'react-simple-typewriter';


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [showCompany, setShowCompany] = useState(false);
  const [text] = useTypewriter({
    words: ["POLISH EYEWEAR "],
    loop: {},
    typeSpeed: 120,
  });

  const closeNav = () => {
    setActive("nav__menu");
    setIcon("nav__toggler");
  };

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCompany(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/home" className="nav__brand" onClick={closeNav} >
          <img className="nav_logo" src={logo} alt="logo"/></Link>
          <li>{showCompany && (
            <span className="typewriter-container">
              <span className="typewriter">{text}</span>
            </span>
          )}
        </li>
        <ul className={active}>
          <li className="nav__item" >
            <Link to="/home" className="nav__link"  onClick={closeNav} >
              Home
            </Link>
          </li>
          <li className="nav__item dropdown">
  <ScrollLink
    to='category-section'
    className="nav__link"
    onClick={closeNav}
    style={{ cursor: 'pointer'}} 
    spy={true}
    smooth={true}
    duration={500}
  >
    Category
    <div className="dropdown-content">
      <Link to="/sunglasses" onClick={closeNav}>
        Sunglass
      </Link>
      <Link to="/Product" onClick={closeNav}>
        Eyewear
      </Link>
    </div>
  </ScrollLink>
</li>
          <li className="nav__item" >
            <Link to="/Aboutus" onClick={closeNav}>
              About Us
            </Link>
          </li>
          <li className="nav__item" >
            <Link to="/contact" onClick={closeNav}>
              Contact Us
            </Link>
          </li>
          {/* New Category Nav Item with Dropdown */}
          
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <Outlet />
      <main className="flex gap-between"></main>
    </>
  );
};

export default Navbar;
