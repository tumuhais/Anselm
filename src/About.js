import React from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaNetworkWired,
  FaBrain,
  FaServer,
  FaCogs,
  FaGraduationCap,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import SEO from "./SEO";
import "./About.css";
import profile from "./assets/profile.png";

function About() {
  return (
    <>
      <SEO 
        title="About Me | Software & Systems Engineer, Network Specialist"
        description="Explore the profile of Anselm Tumuhaise - Software Engineer, Systems Administrator, Cisco Network Infrastructure Specialist, and AI enthusiast."
        keywords="Anselm Tumuhaise, Systems Administrator, Software Engineer Uganda, Cisco Network Specialist, React Developer, Linux Server Management, Proxmox Virtualization"
      />

      <section className="about-section">
        <div className="about-container">
          
          {/* HERO / PROFILE IMAGE & INTRO HEADER */}
          <div className="about-hero">
            <div className="about-header">
              <span className="section-subtitle">Get To Know Me</span>
              <h1 className="section-title">
                Engineering <span className="highlight">Software</span>,{" "}
                <span className="highlight">Systems</span> & <span className="highlight">Networks</span>.
              </h1>
              <p className="about-bio">
                Hi, I'm <strong>Anselm Tumuhaise</strong>. I specialize in engineering scalable software platforms, architecting reliable server and system infrastructures, and designing secure enterprise Cisco networks. I leverage modern web technologies, Linux virtualization, and intelligent AI models to build resilient, high-performance IT solutions.
              </p>
            </div>

            {/* PROFILE IMAGE CONTAINER */}
            <div className="about-image-wrapper">
              <div className="image-frame">
                <img 
                  src={profile} 
                  alt="Anselm Tumuhaise - Software & Systems Engineer" 
                  className="about-profile-img"
                />
              </div>
            </div>
          </div>

          {/* CORE COMPETENCIES / WHAT I DO */}
          <div className="about-block">
            <h2 className="block-heading">Core Competencies</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="card-icon"><FaCode /></div>
                <h3>Full-Stack & Web Engineering</h3>
                <p>Developing high-performance, responsive applications utilizing React, modern JavaScript, and scalable frontend architectures.</p>
              </div>

              <div className="service-card">
                <div className="card-icon"><FaCogs /></div>
                <h3>Systems Architecture & Administration</h3>
                <p>Deploying and configuring enterprise enterprise management systems, custom server environments, and database solutions.</p>
              </div>

              <div className="service-card">
                <div className="card-icon"><FaNetworkWired /></div>
                <h3>Network Infrastructure Design</h3>
                <p>Architecting secure campus network topologies, executing Cisco routing/switching, VLAN segmentation, and IP addressing schemes.</p>
              </div>

              <div className="service-card">
                <div className="card-icon"><FaServer /></div>
                <h3>Server & Virtualization</h3>
                <p>Managing Linux operating systems, web hosting environments, and bare-metal hypervisors with Proxmox VE.</p>
              </div>

              <div className="service-card">
                <div className="card-icon"><FaBrain /></div>
                <h3>AI & Analytics Systems</h3>
                <p>Integrating predictive machine learning models and data-driven systems to automate complex organizational tasks.</p>
              </div>
            </div>
          </div>

          {/* EXPERIENCE HIGHLIGHTS */}
          <div className="about-block">
            <h2 className="block-heading">Key Technical Achievements</h2>
            <div className="experience-list">
              <div className="exp-item">
                <FaCheckCircle className="exp-icon" />
                <div>
                  <h4>Enterprise Application & Systems Development</h4>
                  <p>Engineered loan management systems, student administrative platforms, and business operations platforms built for data security and reliability.</p>
                </div>
              </div>

              <div className="exp-item">
                <FaCheckCircle className="exp-icon" />
                <div>
                  <h4>Infrastructure & Virtualized Deployments</h4>
                  <p>Configured Linux web server instances, automated workflows, and managed isolated hypervisor environments using Proxmox VE.</p>
                </div>
              </div>

              <div className="exp-item">
                <FaCheckCircle className="exp-icon" />
                <div>
                  <h4>Campus Network Engineering</h4>
                  <p>Designed and simulated multi-building Cisco network infrastructures featuring strict VLAN isolation, DHCP, NAT, and dynamic routing protocols.</p>
                </div>
              </div>

              <div className="exp-item">
                <FaCheckCircle className="exp-icon" />
                <div>
                  <h4>AI & Predictive Data Modeling</h4>
                  <p>Developed algorithmic machine learning pipelines focused on performance prediction and actionable analytics.</p>
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION & EVOLUTION */}
          <div className="about-block">
            <h2 className="block-heading">Professional Journey</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-badge"><FaGraduationCap /></div>
                <div className="timeline-content">
                  <h3>Computer Science & Systems Fundamentals</h3>
                  <p>Mastered core computer science principles, hardware logic, operating system internals, and relational database management systems.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-badge"><FaCode /></div>
                <div className="timeline-content">
                  <h3>Full-Stack & Interactive Systems Development</h3>
                  <p>Built robust, component-driven web applications and interactive software interfaces using modern full-stack development stacks.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-badge"><FaNetworkWired /></div>
                <div className="timeline-content">
                  <h3>Network Security & Infrastructure</h3>
                  <p>Specialized in TCP/IP networking, Cisco CLI administration, VLAN security policies, and fault-tolerant system design.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-badge"><FaRocket /></div>
                <div className="timeline-content">
                  <h3>Advanced Systems & AI Integration</h3>
                  <p>Expanding scope into high-availability systems deployment, automated cloud engineering, and AI-driven workflow optimization.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CALL TO ACTION / GOAL */}
          <div className="about-goal-box">
            <h2 style={{ margin: "0 0 10px 0", color: "#fff" }}>Primary Objective</h2>
            <p>
              To engineer secure, end-to-end software applications and server architectures that empower organizations with speed, reliability, and seamless operation.
            </p>
            <div className="goal-actions">
              <Link to="/projects" className="btn-primary">Explore Featured Projects</Link>
              <Link to="/contacts" className="btn-secondary">Start a Project</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;