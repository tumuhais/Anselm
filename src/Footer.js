import React from 'react'
import "./Footer.css";
import {

FaEnvelope,
FaPhoneAlt,
FaLinkedin,
FaWhatsapp,
FaGithub,

} from "react-icons/fa";
function Footer() {
  return (
    <div>
        {/* ================= FOOTER ================= */}
        
        <footer>
        
        <div className="footer-container">
        
        <div>
        
        <h2>
        
        Anselm Tumuhaise
        
        </h2>
        
        <p>
        
        Building modern websites,
        
        AI systems and secure networks.
        
        </p>
        
        </div>
        
        <div>
        
        <h3>
        
        Get In Touch
        
        </h3>
        
        <a href="mailto:tumuhaiseanselm65@gmail.com">
        
        <FaEnvelope />
        
        Email
        
        </a>
        
        <a href="tel:+256701977211">
        
        <FaPhoneAlt />
        
        Phone
        
        </a>
        
        <a href="https://github.com/anselmTumuhaise">
        
        <FaGithub />
        
        GitHub
        
        </a>
        
        <a href="https://www.linkedin.com/in/anselm-tumuhais">
        
        <FaLinkedin />
        
        LinkedIn
        
        </a>
        
        <a href="https://wa.me/256726627892">
        
        <FaWhatsapp />
        
        WhatsApp
        
        </a>
        
        </div>
        
        </div>
        
        <div className="copyright">
        
        © 2026 Anselm Tumuhaise. All rights reserved.
        
        </div>
        
        </footer>
        
        </div>
        
        );
        
        }
        
export default Footer