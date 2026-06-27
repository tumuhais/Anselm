import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-hero">

      <div className="about-container">

        {/* TITLE */}
        <h1 className="fade-in">About Me</h1>

        <p className="slide-in">
          Hi, I'm <strong>Anselm</strong>, a passionate Web Developer, Network Engineer,
          and AI enthusiast focused on building modern, scalable, and efficient digital solutions.
        </p>

        <p className="slide-in delay">
          I enjoy turning ideas into real-world applications using clean UI design,
          strong backend logic, and reliable networking systems.
        </p>

        {/* ================= JOURNEY ================= */}

        <h2 className="fade-in">My Journey</h2>

        <p className="slide-in">
          My journey in technology started with curiosity about how websites,
          networks, and systems work behind the scenes. Over time, I developed
          skills in web development, networking, and system design through
          academic learning and hands-on projects.
        </p>

        <p className="slide-in delay">
          From basic HTML pages to building full-stack applications and designing
          campus network infrastructures, I have continuously grown through practice,
          experimentation, and problem-solving.
        </p>

        {/* ================= EDUCATION JOURNEY ================= */}

        <h2 className="fade-in">Education Journey</h2>

        <ul className="skills-list">

          <li>
            Started with fundamentals of computer systems and programming basics
          </li>

          <li>
            Learned web development (HTML, CSS, JavaScript, React)
          </li>

          <li>
            Studied networking concepts including IP addressing, routing, and VLANs
          </li>

          <li>
            Explored cybersecurity principles and system protection
          </li>

          <li>
            Currently pursuing advanced IT studies (software engineering & AI systems)
          </li>

        </ul>

        {/* ================= EXPERIENCE ================= */}

        <h2 className="fade-in">Experience</h2>

        <ul className="skills-list">

          <li>
            Built multiple web applications using React and JavaScript
          </li>

          <li>
            Designed and configured campus network topologies using Cisco Packet Tracer
          </li>

          <li>
            Developed student management and hospital information systems
          </li>

          <li>
            Worked on AI-based student performance prediction project
          </li>

          <li>
            Practiced Linux server management and virtualization (Proxmox)
          </li>

        </ul>

        {/* ================= WHAT I DO ================= */}

        <h2 className="fade-in">What I Do</h2>

        <ul className="skills-list">

          <li>Frontend Development (React, HTML, CSS, JavaScript)</li>
          <li>Backend & API Development</li>
          <li>Network Design & Configuration</li>
          <li>AI & Data-driven Projects</li>
          <li>UI/UX Design</li>

        </ul>

        {/* ================= GOAL ================= */}

        <h2 className="fade-in">My Goal</h2>

        <p className="slide-in">
          To build impactful digital systems that solve real problems and improve user experiences
          while continuously growing in software engineering and networking.
        </p>

      </div>

    </section>
  );
}

export default About;