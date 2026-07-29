import React from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaNetworkWired,
  FaBrain,
  FaServer,
  FaGraduationCap,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* HERO / INTRO HEADER */}
        <div className="about-header">
          <span className="section-subtitle">Get To Know Me</span>
          <h1 className="section-title">
            Passionate about <span className="highlight">Software</span>,{" "}
            <span className="highlight">Networking</span> & <span className="highlight">AI</span>.
          </h1>
          <p className="about-bio">
            Hi, I'm <strong>Anselm Tumuhaise</strong>. I specialize in building modern, scalable web applications, designing robust campus network architectures, and exploring intelligent AI systems to solve real-world technical challenges.
          </p>
        </div>

        {/* CORE COMPETENCIES / WHAT I DO */}
        <div className="about-block">
          <h2 className="block-heading">What I Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="card-icon"><FaCode /></div>
              <h3>Frontend & Web Engineering</h3>
              <p>Crafting high-performance, responsive user interfaces with React, modern JavaScript, and clean CSS architectures.</p>
            </div>

            <div className="service-card">
              <div className="card-icon"><FaNetworkWired /></div>
              <h3>Network Infrastructure Design</h3>
              <p>Designing secure, segmented campus network topologies using Cisco configurations, VLANs, and IP routing strategies.</p>
            </div>

            <div className="service-card">
              <div className="card-icon"><FaBrain /></div>
              <h3>AI & Data Systems</h3>
              <p>Developing predictive models and intelligent solutions like student performance forecasting engines.</p>
            </div>

            <div className="service-card">
              <div className="card-icon"><FaServer /></div>
              <h3>Server & System Administration</h3>
              <p>Deploying environments on Linux servers and managing hypervisors using Proxmox virtualization.</p>
            </div>
          </div>
        </div>

        {/* EXPERIENCE HIGHLIGHTS */}
        <div className="about-block">
          <h2 className="block-heading">Key Project Experience</h2>
          <div className="experience-list">
            <div className="exp-item">
              <FaCheckCircle className="exp-icon" />
              <div>
                <h4>Full-Stack & Interactive Web Applications</h4>
                <p>Engineered loan management systems, student portals, and corporate web platforms using React.</p>
              </div>
            </div>

            <div className="exp-item">
              <FaCheckCircle className="exp-icon" />
              <div>
                <h4>Enterprise & Campus Networking</h4>
                <p>Simulated multi-building network topologies using Cisco Packet Tracer with strict security segmentation.</p>
              </div>
            </div>

            <div className="exp-item">
              <FaCheckCircle className="exp-icon" />
              <div>
                <h4>AI Performance Analytics</h4>
                <p>Constructed data models designed to forecast academic trends and support decision-making.</p>
              </div>
            </div>

            <div className="exp-item">
              <FaCheckCircle className="exp-icon" />
              <div>
                <h4>Virtualization & Homelab Hosting</h4>
                <p>Configured Linux instances, web servers, and isolated environments using Proxmox VE.</p>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION & EVOLUTION */}
        <div className="about-block">
          <h2 className="block-heading">Learning Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-badge"><FaGraduationCap /></div>
              <div className="timeline-content">
                <h3>Fundamentals & System Architecture</h3>
                <p>Gained a grounding in computer hardware, basic OS architecture, and core programming paradigms.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge"><FaCode /></div>
              <div className="timeline-content">
                <h3>Full-Stack & Web Mastery</h3>
                <p>Mastered modern web development focusing heavily on component-driven frontend architecture with React.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge"><FaNetworkWired /></div>
              <div className="timeline-content">
                <h3>Networking & Cyber Infrastructure</h3>
                <p>Deep-dived into TCP/IP, IP subnetting, Cisco switching/routing, VLAN configurations, and security protocols.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-badge"><FaRocket /></div>
              <div className="timeline-content">
                <h3>Advanced IT & AI Integration</h3>
                <p>Currently expanding capabilities into machine learning workflows, advanced system design, and AI automation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION / GOAL */}
        <div className="about-goal-box">
          <h2>My Goal</h2>
          <p>
            To continuously engineer reliable, high-impact digital infrastructures and web platforms that solve complex software and network engineering problems.
          </p>
          <div className="goal-actions">
            <Link to="/projects" className="btn-primary">View My Projects</Link>
            <Link to="/contacts" className="btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;