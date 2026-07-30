import React from "react";
import {
  FaGraduationCap,
  FaAward,
  FaCertificate,
  FaLaptopCode,
  FaCheckCircle,
} from "react-icons/fa";
import SEO from "./SEO"; // 1. Import SEO component
import "./Education.css";

function Education() {
  return (
    <>
      {/* 2. Add dynamic SEO meta tags for the Education & Certifications page */}
      <SEO
        title="Education & Certifications | Academic & Professional Track"
        description="Explore Anselm Tumuhaise's academic background at YMCA Comprehensive Institution, Cisco networking certifications, frontend engineering skills, and core competencies."
        keywords="Bachelor of Information Technology, YMCA Comprehensive Institution, CCNA, Cisco Networking, Linux Essentials, React frontend development, Cybersecurity, Anselm Tumuhaise education"
      />

      <section className="education-section">
        <div className="education-container">
          {/* Header */}
          <div className="education-header">
            <span className="section-subtitle">Academic & Growth</span>
            <h1 className="section-title">
              Education & <span className="highlight">Certifications</span>
            </h1>
            <p className="education-intro">
              My academic journey at YMCA Comprehensive Institution, paired with hands-on continuous learning, has built my foundation across software development, computer networking, and system administration.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="education-timeline">
            {/* ================= DEGREE ================= */}
            <div className="timeline-item">
              <div className="timeline-badge">
                <FaGraduationCap />
              </div>
              <div className="timeline-card">
                <div className="card-header-flex">
                  <div>
                    <span className="timeline-period">2023 - Present</span>
                    <h2 className="degree-title">Bachelor of Information Technology</h2>
                    <h3 className="institution-name">YMCA Comprehensive Institution</h3>
                  </div>
                </div>
                <p className="card-description">
                  Pursuing a comprehensive degree focusing on practical computing, modern software engineering, network infrastructure, and artificial intelligence systems.
                </p>

                <h4 className="skills-heading">Key Focus Areas</h4>
                <div className="tag-cloud">
                  <span className="tag">Software Engineering</span>
                  <span className="tag">React & JavaScript</span>
                  <span className="tag">Database Management</span>
                  <span className="tag">Computer Networks & Security</span>
                  <span className="tag">Cloud Computing</span>
                  <span className="tag">AI & Machine Learning</span>
                </div>
              </div>
            </div>

            {/* ================= CERTIFICATIONS ================= */}
            <div className="timeline-item">
              <div className="timeline-badge">
                <FaCertificate />
              </div>
              <div className="timeline-card">
                <div className="card-header-flex">
                  <div>
                    <span className="timeline-period">Professional Track</span>
                    <h2 className="degree-title">Certifications & Training</h2>
                    <h3 className="institution-name">Cisco Networking Academy & Self-Study</h3>
                  </div>
                </div>
                <ul className="bullet-list">
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span><strong>CCNA Networking Basics</strong> — Cisco Networking Academy</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span><strong>Linux Essentials</strong> — System Administration & Commands</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span><strong>Frontend Web Development</strong> — React.js & Modern UI Architecture</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span><strong>Introduction to Cybersecurity</strong> — Threat Assessment & Security Protocols</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span><strong>JavaScript Algorithms & Data Structures</strong> — Core Logic & ES6+</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ================= TECHNICAL SKILLS ================= */}
            <div className="timeline-item">
              <div className="timeline-badge">
                <FaLaptopCode />
              </div>
              <div className="timeline-card">
                <div className="card-header-flex">
                  <div>
                    <span className="timeline-period">Practical Stack</span>
                    <h2 className="degree-title">Core Competencies</h2>
                    <h3 className="institution-name">Applied Practical Skills</h3>
                  </div>
                </div>
                <div className="tag-cloud">
                  <span className="tag highlight-tag">React.js</span>
                  <span className="tag highlight-tag">Modern JavaScript (ES6+)</span>
                  <span className="tag highlight-tag">Cisco Packet Tracer</span>
                  <span className="tag highlight-tag">VLAN & Routing (OSPF/EIGRP)</span>
                  <span className="tag highlight-tag">Linux / Proxmox</span>
                  <span className="tag highlight-tag">Git & GitHub</span>
                  <span className="tag highlight-tag">REST APIs</span>
                  <span className="tag highlight-tag">Responsive UI/UX</span>
                </div>
              </div>
            </div>

            {/* ================= ACHIEVEMENTS ================= */}
            <div className="timeline-item">
              <div className="timeline-badge">
                <FaAward />
              </div>
              <div className="timeline-card">
                <div className="card-header-flex">
                  <div>
                    <span className="timeline-period">Milestones</span>
                    <h2 className="degree-title">Key Accomplishments</h2>
                    <h3 className="institution-name">Projects & Practical Work</h3>
                  </div>
                </div>
                <ul className="bullet-list">
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Engineered responsive web software including corporate platforms and system applications.</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Designed segmented campus network infrastructures with VLANs and DHCP server pools.</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Developed an AI-driven student performance predictor prototype.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;