import React from "react";
import "./Footer.css";
import { FaLinkedin, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import logo from '/src/assets/mlsc-logo.png';

const Footer = () => {
  return (
    <footer className="mlsc-footer">
      <div className="footer-content">

        {/* MLSC Logo */}
        <div className="footer-logo">
          <img src={logo} alt="MLSC Logo" className="mlsc-logo" />
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/mlsc-viit-671384385/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@MLSCVIIT" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/mlscviit/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/MlscViit-2025" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>

        {/* Bottom Line */}
        <p className="footer-text">
          © {new Date().getFullYear()} MLSC – All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
