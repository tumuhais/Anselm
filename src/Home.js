import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaLinux, 
  FaDownload, 
  FaArrowRight 
} from "react-icons/fa";
import { 
  SiCisco, 
  SiMysql, 
  SiProxmox, 
  SiFirebase 
} from "react-icons/si";

import profile from "./assets/profile1.jpg";
import Footer from "./Footer";
import "./Home.css";

// 1. Data mapping for cleaner, scalable maintenance
const TECH_STACK = [
  { name: "React", icon: FaReact },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Cisco", icon: SiCisco },
  { name: "MySQL", icon: SiMysql },
  { name: "Linux", icon: FaLinux },
  { name: "Proxmox", icon: SiProxmox },
  { name: "Firebase", icon: SiFirebase },
];

const STATS = [
  { label: "Completed Projects", value: "10+" },
  { label: "Technologies Mastered", value: "15+" },
  { label: "Years of Experience", value: "2+" },
  { label: "Client Satisfaction", value: "100%" },
];

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Responsive React portfolio showcasing projects and modern frontend design.",
    category: "Web Development",
  },
  {
    id: 2,
    title: "AI Student Predictor",
    description: "Machine learning system designed to analyze and predict student performance.",
    category: "Artificial Intelligence",
  },
  {
    id: 3,
    title: "Campus Network Design",
    description: "Enterprise Cisco VLAN implementation with DHCP, NAT, and secure routing.",
    category: "Network Engineering",
  },
];

function Home() {
  return (
    <>
      <main className="home-container">
        {/* ================= HERO SECTION ================= */}
        <section className="hero" aria-label="Introduction">
          <div className="hero-left">
            <span className="badge">Welcome to my portfolio</span>
            <h3>Hi, I'm <span className="highlight">Anselm</span></h3>
            <h1>Web Developer & Network Engineer</h1>
            <p>
              I architect modern web applications, secure network infrastructures, 
              and intelligent AI solutions that bridge the gap between complex hardware 
              and seamless user experiences.
            </p>
            
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/contacts" className="btn btn-secondary">
                Get in Touch
              </Link>
              <a 
                href="/Tumuhaise_Anselm_CV.pdf" 
                download="Tumuhaise_Anselm_CV.pdf" 
                className="btn btn-outline"
                aria-label="Download CV"
              >
                <FaDownload className="btn-icon" /> Resume
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-image-wrapper">
              <img src={profile} alt="Anselm - Web Developer & Network Engineer" />
            </div>
          </div>
        </section>

        {/* ================= TECH STACK MARQUEE ================= */}
        <section className="tech-stack" aria-label="Technologies and Tools">
          <div className="section-header text-center">
            <h2>Technologies & Tools</h2>
            <p>Frameworks, platforms, and languages I work with</p>
          </div>

          <Marquee speed={60} gradient={false} pauseOnHover className="marquee-container">
            {TECH_STACK.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div key={tech.name} className="tech-card">
                  <IconComponent className="tech-icon" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </Marquee>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="stats" aria-label="Key Metrics">
          <div className="stats-grid">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-card">
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ABOUT PREVIEW ================= */}
        <section className="about-preview" aria-label="About Me Summary">
          <div className="about-container">
            <h2>About Me</h2>
            <p>
              I am an Information Technology professional passionate about software development, 
              computer networking, cybersecurity, virtualization, and artificial intelligence. 
              My mission is to design scalable digital solutions that simplify systems and optimize performance.
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More About Me <FaArrowRight className="btn-icon" />
            </Link>
          </div>
        </section>

        {/* ================= FEATURED PROJECTS ================= */}
        <section className="featured" aria-label="Featured Projects">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>A selection of my recent technical work</p>
          </div>

          <div className="project-grid">
            {FEATURED_PROJECTS.map((project) => (
              <article key={project.id} className="project-card">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to="/projects" className="project-link">
                  Explore Project <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ================= CALL TO ACTION ================= */}
        <section className="cta" aria-label="Call to Action">
          <div className="cta-content">
            <h2>Let's Build Something Exceptional Together</h2>
            <p>
              Open for full-time opportunities, engineering contracts, and technical collaborations.
            </p>
            <Link to="/contacts" className="btn btn-primary">
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;