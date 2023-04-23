import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="bottom">
          <p>
            Designed & Developed with ❤️ by {""}
            <span className="footer-text">Bilal </span>- {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
