import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills-hero">

      <h1 className="fade-in">My Skills</h1>

      <p className="fade-in delay">
        These are the technical skills I’ve developed as an IT professional
        focused on web development, networking, and emerging technologies.
      </p>

      <div className="skills-grid">

        <div className="skill-card slide-up">React / Frontend Development</div>
        <div className="skill-card slide-up">JavaScript / ES6+</div>
        <div className="skill-card slide-up">HTML & CSS</div>
        <div className="skill-card slide-up">Node.js & APIs</div>
        <div className="skill-card slide-up">Networking (Cisco / Packet Tracer)</div>
        <div className="skill-card slide-up">Cybersecurity Basics</div>
        <div className="skill-card slide-up">Linux Administration</div>
        <div className="skill-card slide-up">AI & Data Analysis</div>

      </div>

    </section>
  );
}

export default Skills;