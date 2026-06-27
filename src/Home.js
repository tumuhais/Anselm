import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import profile from "./assets/profile1.jpg";

import {

FaReact,
FaHtml5,
FaCss3Alt,
FaJs,
FaNodeJs,
FaGitAlt,
FaGithub,
FaLinux

} from "react-icons/fa";

import {

SiCisco,
SiMysql,
SiProxmox,
SiFirebase

} from "react-icons/si";
import Footer from "./Footer";


function Home() {

return (

<>

{/* ================= HERO ================= */}

<section className="hero">

<div className="hero-left">

<h3>Hello, I'm</h3>

<h1>Anselm</h1>

<h2>

Web Developer | Network Engineer | AI Enthusiast

</h2>

<p>

I create modern web applications,

secure network infrastructures,

and intelligent AI solutions that

solve real-world problems.

</p>

<div className="hero-buttons">

<Link to="/projects" className="primary-btn">

View Projects

</Link>

<Link to="/contacts" className="secondary-btn">

Hire Me

</Link>

<a

href="/resume.pdf"

download

className="primary-btn"

>

Download CV

</a>

</div>

</div>

<div className="hero-right">

<img

src={profile}

alt="Profile"

/>

</div>

</section>

{/* ================= TECH STACK ================= */}

<section className="tech-stack">

<h1>

Technologies & Tools

</h1>

<Marquee

speed={80}

gradient={false}

pauseOnHover

>

<div className="tech-card">

<FaReact />

<p>React</p>

</div>

<div className="tech-card">

<FaHtml5 />

<p>HTML5</p>

</div>

<div className="tech-card">

<FaCss3Alt />

<p>CSS3</p>

</div>

<div className="tech-card">

<FaJs />

<p>JavaScript</p>

</div>

<div className="tech-card">

<FaNodeJs />

<p>Node JS</p>

</div>

<div className="tech-card">

<FaGitAlt />

<p>Git</p>

</div>

<div className="tech-card">

<FaGithub />

<p>GitHub</p>

</div>

<div className="tech-card">

<SiCisco />

<p>Cisco</p>

</div>

<div className="tech-card">

<SiMysql />

<p>MySQL</p>

</div>

<div className="tech-card">

<FaLinux />

<p>Linux</p>

</div>

<div className="tech-card">

<SiProxmox />

<p>Proxmox</p>

</div>

<div className="tech-card">

<SiFirebase />

<p>Firebase</p>

</div>

</Marquee>

</section>

{/* ================= STATS ================= */}

<section className="stats">

<div className="stat">

<h1>

10+

</h1>

<p>

Projects

</p>

</div>

<div className="stat">

<h1>

15+

</h1>

<p>

Technologies

</p>

</div>

<div className="stat">

<h1>

2+

</h1>

<p>

Years Learning

</p>

</div>

<div className="stat">

<h1>

100%

</h1>

<p>

Dedication

</p>

</div>

</section>

{/* ================= ABOUT PREVIEW ================= */}

<section className="about-preview">

<div className="about-container">

<h1>

Who Am I?

</h1>

<p>

I am an Information Technology enthusiast passionate about software development,

computer networking, cybersecurity, virtualization and artificial intelligence.

My goal is to build scalable digital solutions that improve businesses and everyday life.

</p>

<Link

to="/about"

className="primary-btn"

>

Read More

</Link>

</div>

</section>

{/* ================= FEATURED PROJECTS ================= */}

<section className="featured">

<h1>

Featured Projects

</h1>

<div className="project-grid">

<div className="project-card">

<h2>

Portfolio Website

</h2>

<p>

Responsive React portfolio showcasing projects and skills.

</p>

<Link

to="/projects"

>

Explore

</Link>

</div>

<div className="project-card">

<h2>

AI Student Predictor

</h2>

<p>

Machine learning system for predicting student performance.

</p>

<Link

to="/projects"

>

Explore

</Link>

</div>

<div className="project-card">

<h2>

Campus Network Design

</h2>

<p>

Cisco VLAN implementation with DHCP, NAT and routing.

</p>

<Link

to="/projects"

>

Explore

</Link>

</div>

</div>

</section>
{/* ================= CTA ================= */}

<section className="cta">

<h1>

Let's Build Something Amazing

</h1>

<p>

Available for internships, freelance work and collaborations.

</p>

<Link

to="/contacts"

className="primary-btn"

>

Contact Me

</Link>
<Footer/>

</section>

</>

);

}

export default Home;