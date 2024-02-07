// Navbar.js
import React, { useState } from "react";
import "../src/nav.css";
import { Link, Outlet } from "react-router-dom";
import logo from '../src/assets/logo.png';
import About from "./Aboutus";

function Navbar() {
  // var [fix, setFix]= useState(false);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  

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

  // window.addEventListener("scroll",setFixed);

  return (
    <>
      
      <nav className="navbar">
        <Link to="/home" className="nav__brand" onClick={closeNav}>
          <img className="nav_logo" src={logo} alt="logo"/>
        </Link>
        <ul className={active}>
          <li className="nav__item" >
            <Link to="/home" className="nav__link"  onClick={closeNav}>
              Home
            </Link>
          </li>
          <li className="nav__item" >
            <Link to = "/Aboutus"  onClick={closeNav} >
              About Us
            </Link>
          </li>
          <li className="nav__item" >
          <Link to="/contact" onClick={closeNav} >
            Contact Us
          </Link>
          </li>
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




