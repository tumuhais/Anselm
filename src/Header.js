import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {



  return (
    <header className="header">

      <div className="logo">
        <h2>Tumuhaise Anselm</h2>
      </div>

      <nav>
        <ul className="nav-links">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/skills">Skills</Link></li>
        

        </ul>
      </nav>

     

    </header>
  );
}

export default Header;