// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Added FaEnvelope

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-text">
          <p>Designed and Developed by Hridey Sharma</p>
          <p>Copyright © {currentYear} HS</p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:your.email@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
          {/* Add more social links if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;