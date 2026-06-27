import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education-hero">

      <div className="education-container">

        {/* TITLE */}
        <h1 className="fade-in">Education</h1>

        <p className="education-intro fade-in delay">
          My academic journey has provided me with a strong foundation in
          Information Technology, software development, networking, cybersecurity,
          and emerging technologies.
        </p>

        {/* ================= DEGREE ================= */}

        <div className="education-card slide-up">

          <div className="education-year">
            <h2>2023 - Present</h2>
          </div>

          <div className="education-details">

            <h2>Bachelor of Information Technology</h2>

            <h3>YMCA Comprehensive Institution</h3>

            <p>
              Currently pursuing a degree in Information Technology with strong
              focus on practical and theoretical computing skills including
              software engineering, networking, cybersecurity, and AI systems.
            </p>

            <h4>Key Areas of Study</h4>

            <ul>
              <li>Web Development (HTML, CSS, JavaScript, React)</li>
              <li>Database Management Systems</li>
              <li>Computer Networks & Security</li>
              <li>Cloud Computing & Virtualization</li>
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Software Engineering Principles</li>
            </ul>

          </div>

        </div>

        {/* ================= SKILLS CARD ================= */}

        <div className="education-card slide-up delay-1">

          <div className="education-year">
            <h2>Technical Growth</h2>
          </div>

          <div className="education-details">

            <h2>Professional Skills Development</h2>

            <ul>
              <li>React & Modern JavaScript (ES6+)</li>
              <li>Responsive UI/UX Design</li>
              <li>Cisco Networking & VLAN Configuration</li>
              <li>Linux System Administration</li>
              <li>Proxmox Virtualization</li>
              <li>Git & GitHub Version Control</li>
            </ul>

          </div>

        </div>

        {/* ================= CERTIFICATIONS ================= */}

        <div className="education-card slide-up delay-2">

          <div className="education-year">
            <h2>Certifications</h2>
          </div>

          <div className="education-details">

            <h2>Professional Certifications</h2>

            <ul>
              <li>CCNA Networking Basics (Cisco)</li>
              <li>Frontend Web Development (Self-Study)</li>
              <li>Linux Essentials</li>
              <li>Introduction to Cybersecurity</li>
              <li>JavaScript Algorithms & Data Structures</li>
            </ul>

          </div>

        </div>

        {/* ================= ACHIEVEMENTS ================= */}

        <div className="education-card slide-up delay-3">

          <div className="education-year">
            <h2>Achievements</h2>
          </div>

          <div className="education-details">

            <h2>Academic & Technical Achievements</h2>

            <ul>
              <li>Built multiple full-stack web applications</li>
              <li>Designed campus network topologies in Packet Tracer</li>
              <li>Developed AI-based student performance predictor</li>
              <li>Completed several frontend portfolio projects</li>
              <li>Active participation in IT practical labs and projects</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;