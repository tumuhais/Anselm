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
} from "react-icons/fa";
import { SiCisco, SiProxmox, SiMysql, SiFirebase } from "react-icons/si";
import "./Skills.css";

const SKILL_CATEGORIES = [
  {
    title: "Web Engineering & Design",
    icon: FaCode,
    skills: [
      { name: "React.js", icon: FaReact, level: "Advanced" },
      { name: "JavaScript (ES6+)", icon: FaJs, level: "Advanced" },
      { name: "HTML5 & CSS3", icon: FaHtml5, level: "Expert" },
      { name: "Node.js & REST APIs", icon: FaNodeJs, level: "Intermediate" },
    ],
  },
  {
    title: "Networking & Security",
    icon: FaNetworkWired,
    skills: [
      { name: "Cisco Packet Tracer", icon: SiCisco, level: "Advanced" },
      { name: "VLANs & Subnetting", icon: FaNetworkWired, level: "Advanced" },
      { name: "DHCP & NAT Config", icon: FaNetworkWired, level: "Advanced" },
      { name: "Cybersecurity Basics", icon: FaShieldAlt, level: "Intermediate" },
    ],
  },
  {
    title: "Systems & Virtualization",
    icon: FaServer,
    skills: [
      { name: "Linux Administration", icon: FaLinux, level: "Intermediate" },
      { name: "Proxmox VE & LXC", icon: SiProxmox, level: "Intermediate" },
      { name: "MySQL & Relational DBs", icon: SiMysql, level: "Intermediate" },
      { name: "Firebase Backend", icon: SiFirebase, level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Emerging Tech",
    icon: FaTools,
    skills: [
      { name: "Git & Version Control", icon: FaGitAlt, level: "Advanced" },
      { name: "AI & Data Analysis", icon: FaBrain, level: "Intermediate" },
      { name: "Database Schema Design", icon: FaDatabase, level: "Intermediate" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <span className="section-subtitle">Technical Competencies</span>
          <h1 className="section-title">
            Skills & <span className="highlight">Technologies</span>
          </h1>
          <p className="skills-intro">
            A comprehensive breakdown of the frameworks, networking protocols, operating systems, and developer tools I utilize to construct resilient digital solutions.
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
                          <SkillIcon className="skill-icon" />
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
  );
}

export default Skills;