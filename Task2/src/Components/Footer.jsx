import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="details">
      <div className="about">
        <h4 id="head"><strong>Abou</strong>t</h4>
        <p id="about-text">
          About We Provide Nothing But The Best To Make 
          Your house Feel Like A
          Home
        </p>
      </div>
      <div className="services">
        <h4 id="head"><strong>Our Services</strong></h4>
        <ul id="footer-ul">
          <li>Ceiling Fittings</li>
          <li>Chandeliers</li>
          <li>Outdoor Lights</li>
          <li>Dropping Lights</li>
        </ul>
      </div>
      <div className="contact">
        <h4 id="head"><strong>Contact Us</strong></h4>
        <p>+234 8038032833</p>
        <p>@ East- West Road Port Harcourt</p>
      </div>
    </div>
  );
};

export default Footer;
