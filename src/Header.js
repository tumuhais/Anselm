import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Brand / Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}>
            <h2>Anselm<span className="dot">.AT</span></h2>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={closeMobileMenu}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={closeMobileMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeMobileMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" onClick={closeMobileMenu}>
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" onClick={closeMobileMenu}>
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" onClick={closeMobileMenu}>
                FAQ
              </NavLink>
            </li>
            {/* Admin Link Added Here */}
            <li>
              <NavLink to="/admin" onClick={closeMobileMenu}>
                Admin
              </NavLink>
            </li>
          </ul>

          {/* Mobile CTA */}
          <div className="mobile-cta">
            <Link to="/contacts" className="header-btn" onClick={closeMobileMenu}>
              Get In Touch
            </Link>
          </div>
        </nav>

        {/* Desktop Call-to-Action */}
        <div className="header-actions">
          <Link to="/contacts" className="header-btn">
            Hire Me
          </Link>
        </div>

        {/* Hamburger Toggle Button for Mobile */}
        <button
          className="mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header;