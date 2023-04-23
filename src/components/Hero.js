import React from "react";
import bilal from "./images/bilal.jpg";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagram,
  FaCodepen,
  FaFacebookF,
} from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="content">
        <div className="hero-image">
          <Link to="#" className="">
            <img className="image" src={bilal} alt="" />
          </Link>
        </div>
        <h2>Bilal Mubarak Idris</h2>
        <h3>Software Engineer</h3>
        <div className="btn-container">
          <a href="#contact" className="btn btn-hire">
            Hire me
          </a>
          <a
            href="https://drive.google.com/file/d/1zK2SCFQSijEVmMTOXBfEMfaPrflP_c9-/view?usp=sharing"
            className="btn btn-resume"
          >
            Resume
          </a>
        </div>
        <div className="social-medias">
          <a href="https://github.com/CodeWithBilal" className="icons">
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/bilal-mubarak-idris-77b022212/"
            className="icons"
          >
            <FaLinkedin className="icon" />
          </a>
          <a href="https://twitter.com/BilalMubarakId1" className="icons">
            <FaTwitterSquare className="icon" />
          </a>
          <a
            href="https://www.instagram.com/code_with_bilal/"
            className="icons"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://codesandbox.io/u/BILALMUBARAKIDRIS"
            className="icons"
          >
            <FaCodepen className="icon" />
          </a>
          <a href="https://www.facebook.com/bilal.idris" className="icons">
            <FaFacebookF className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
