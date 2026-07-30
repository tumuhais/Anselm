import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
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
import "./Home.css";

// Tech stack data
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

// Stats metrics
const STATS = [
  { label: "Completed Projects", target: 10, suffix: "+" },
  { label: "Technologies Mastered", target: 15, suffix: "+" },
  { label: "Years of Experience", target: 2, suffix: "+" },
  { label: "Client Satisfaction", target: 100, suffix: "%" },
];

// Featured projects
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

// Reusable Counter Sub-Component
function StatCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let observer;
    let timer;

    const startCounting = () => {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / target), 10);

      timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= target) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          if (counterRef.current) observer.unobserve(counterRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (timer) clearInterval(timer);
      if (observer) observer.disconnect();
    };
  }, [target]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
}

// Animation Variants for falling elements
const fallDownVariant = {
  hidden: { opacity: 0, y: -40 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.25, 0.1, 0.25, 1.0], // Smooth ease curve
    },
  }),
};

function Home() {
  return (
    <>
      <main className="home-container">
        {/* ================= HERO SECTION ================= */}
        <section className="hero" aria-label="Introduction">
          <div className="hero-left">
            
            {/* 1. Name is placed first at the top & drops in first (delay: 0.1s) */}
            <motion.h3 
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fallDownVariant}
              style={{ fontSize: "2rem", marginBottom: "10px" }}
            >
              Hi, I'm <span className="highlight">Anselm Tumuhaise</span>
            </motion.h3>

            {/* 2. Welcome Badge drops in second (delay: 0.3s) */}
            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fallDownVariant}
            >
              <span className="badge">Welcome to my portfolio</span>
            </motion.div>

            {/* 3. Main Title drops in third (delay: 0.5s) */}
            <motion.h1
              custom={0.5}
              initial="hidden"
              animate="visible"
              variants={fallDownVariant}
            >
              Web Developer & Network Engineer
            </motion.h1>

            {/* 4. Description paragraph drops in fourth (delay: 0.7s) */}
            <motion.p
              custom={0.7}
              initial="hidden"
              animate="visible"
              variants={fallDownVariant}
            >
              I architect modern web applications, secure network infrastructures, 
              and intelligent AI solutions that bridge the gap between complex hardware 
              and seamless user experiences.
            </motion.p>
            
            {/* 5. Buttons drop in fifth (delay: 0.9s) */}
            <motion.div 
              className="hero-buttons"
              custom={0.9}
              initial="hidden"
              animate="visible"
              variants={fallDownVariant}
            >
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
            </motion.div>
          </div>

          {/* 6. Profile Image drops in on the right (delay: 1.1s) */}
          <motion.div 
            className="hero-right"
            custom={1.1}
            initial="hidden"
            animate="visible"
            variants={fallDownVariant}
          >
            <div className="profile-image-wrapper">
              <img src={profile} alt="Anselm - Web Developer & Network Engineer" />
            </div>
          </motion.div>
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
                <h2>
                  <StatCounter target={stat.target} suffix={stat.suffix} />
                </h2>
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
    </>
  );
}

export default Home;