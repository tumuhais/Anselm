import React from "react";
import {
  FaCode,
  FaNetworkWired,
  FaServer,
  FaTools,
  FaReact,
  FaJs,
  FaHtml5,
  FaNodeJs,
  FaLinux,
  FaGitAlt,
  FaShieldAlt,
  FaBrain,
  FaDatabase,
  FaVideo,
  FaLaptopMedical,
  FaDesktop,
  FaMobileAlt,
  FaWindowMaximize,
} from "react-icons/fa";
import { SiCisco, SiProxmox, SiMysql, SiFirebase, SiElectron } from "react-icons/si";
import SEO from "./SEO";
import "./Skills.css";

const SKILL_CATEGORIES = [
  {
    title: "Web Engineering & Design",
    icon: FaCode,
    skills: [
      { name: "React.js", icon: FaReact, level: "Advanced", image: null },
      { name: "JavaScript (ES6+)", icon: FaJs, level: "Advanced", image: null },
      { name: "HTML5 & CSS3", icon: FaHtml5, level: "Expert", image: null },
      { name: "Node.js & REST APIs", icon: FaNodeJs, level: "Intermediate", image: null },
    ],
  },
  {
    title: "Mobile & Desktop Apps",
    icon: FaMobileAlt,
    skills: [
      { name: "React Native (Mobile)", icon: FaMobileAlt, level: "Intermediate", image: null },
      { name: "Electron.js (Desktop)", icon: SiElectron, level: "Intermediate", image: null },
      { name: "Cross-Platform GUI Apps", icon: FaWindowMaximize, level: "Advanced", image: null },
    ],
  },
  {
    title: "Hardware & Physical Security",
    icon: FaLaptopMedical,
    skills: [
      {
        name: "Computer Repair & Maintenance",
        icon: FaDesktop,
        level: "Expert",
        image: "/images/computer-repair.jpg", 
      },
      {
        name: "CCTV & Camera Installation",
        icon: FaVideo,
        level: "Advanced",
        image: "/images/cctv-installation.jpg",
      },
    ],
  },
  {
    title: "Networking & Security",
    icon: FaNetworkWired,
    skills: [
      { name: "Cisco Packet Tracer", icon: SiCisco, level: "Advanced", image: null },
      { name: "VLANs & Subnetting", icon: FaNetworkWired, level: "Advanced", image: null },
      { name: "DHCP & NAT Config", icon: FaNetworkWired, level: "Advanced", image: null },
      { name: "Cybersecurity Basics", icon: FaShieldAlt, level: "Intermediate", image: null },
    ],
  },
  {
    title: "Systems & Virtualization",
    icon: FaServer,
    skills: [
      { name: "Linux Administration", icon: FaLinux, level: "Intermediate", image: null },
      { name: "Proxmox VE & LXC", icon: SiProxmox, level: "Intermediate", image: null },
      { name: "MySQL & Relational DBs", icon: SiMysql, level: "Intermediate", image: null },
      { name: "Firebase Backend", icon: SiFirebase, level: "Intermediate", image: null },
    ],
  },
  {
    title: "Tools & Tech",
    icon: FaTools,
    skills: [
      { name: "Git & Version Control", icon: FaGitAlt, level: "Advanced", image: null },
      { name: "AI & Data Analysis", icon: FaBrain, level: "Intermediate", image: null },
      { name: "Database Schema Design", icon: FaDatabase, level: "Intermediate", image: null },
    ],
  },
];

function Skills() {
  return (
    <>
      <SEO
        title="Skills & Services | Mobile, Desktop, Web, Computer Repair & CCTV Setup"
        description="Explore Anselm Tumuhaise's technical stack: Web, Mobile & Desktop Apps, Cisco networking, hardware diagnostics, security camera installation, and Linux virtualization."
        keywords="Mobile Apps, Desktop Applications, React Native, Electron, Computer Repair, CCTV Installation, React.js, Cisco, Linux, Anselm Tumuhaise"
      />

      <section className="skills-section">
        <div className="skills-container">
          {/* Header */}
          <div className="skills-header">
            <span className="section-subtitle">Technical Competencies & Services</span>
            <h1 className="section-title">
              Skills & <span className="highlight">Technologies</span>
            </h1>
            <p className="skills-intro">
              A comprehensive breakdown of custom web, mobile, and desktop application development, hardware diagnostics, CCTV camera setups, and network infrastructure.
            </p>
          </div>

          {/* Skill Category Cards */}
          <div className="categories-grid">
            {SKILL_CATEGORIES.map((category, idx) => {
              const CategoryIcon = category.icon;
              return (
                <div key={idx} className="category-card">
                  <div className="category-header">
                    <CategoryIcon className="category-icon" />
                    <h2>{category.title}</h2>
                  </div>

                  <div className="skills-list">
                    {category.skills.map((skill, skillIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={skillIdx} className="skill-item">
                          <div className="skill-info">
                            {skill.image ? (
                              <img
                                src={skill.image}
                                alt={skill.name}
                                className="skill-img-thumb"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                              />
                            ) : (
                              <SkillIcon className="skill-icon" />
                            )}
                            <span className="skill-name">{skill.name}</span>
                          </div>
                          <span className="skill-badge">{skill.level}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;