import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <h2 className="footer-logo">Anselm Tumuhaise</h2>
          <p className="footer-tagline">
            Building modern web applications, AI systems, and secure network infrastructures.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </div>

        {/* Direct Contact & Social Links Column */}
        <div className="footer-contact">
          <h3>Get In Touch</h3>
          
          <div className="contact-details">
            <a 
              href="mailto:tumuhaiseanselm65@gmail.com" 
              className="contact-item"
            >
              <FaEnvelope className="contact-icon" />
              <span>tumuhaiseanselm65@gmail.com</span>
            </a>

            <a 
              href="tel:+256701977211 / +256777036617" 
              className="contact-item"
            >
              <FaPhoneAlt className="contact-icon" />
              <span>+256 701 977 211</span>
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/tumuhais"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-pill"
            >
              <FaGithub /> <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/Tumuhaise Anselm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-pill"
            >
              <FaLinkedin /> <span>LinkedIn</span>
            </a>

            <a
              href="https://wa.me/256726627892"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-pill"
            >
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {currentYear} Anselm Tumuhaise. All rights reserved.</p>
        <button 
          onClick={scrollToTop} 
          className="scroll-top-btn" 
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;