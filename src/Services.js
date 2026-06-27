import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services-hero">

      <h1 className="fade-in">What I Do</h1>

      <p className="fade-in delay">
        As a Web Developer, Network Engineer, and AI enthusiast, I build modern,
        scalable, and secure digital solutions tailored to real-world needs.
      </p>

      <div className="services-grid">

        <div className="service-card slide-up">
          <h2>Web Development</h2>
          <p>
            Building responsive, fast, and modern websites using React, HTML,
            CSS, and JavaScript.
          </p>
        </div>

        <div className="service-card slide-up">
          <h2>Network Engineering</h2>
          <p>
            Designing and configuring secure and efficient network infrastructures
            for organizations.
          </p>
        </div>

        <div className="service-card slide-up">
          <h2>Cybersecurity</h2>
          <p>
            Implementing security practices to protect systems, data, and users
            from cyber threats.
          </p>
        </div>

        <div className="service-card slide-up">
          <h2>AI & Automation</h2>
          <p>
            Developing smart systems and automation tools to improve efficiency
            and decision-making.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;