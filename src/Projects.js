import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-hero">

      <h1 className="fade-in">My Projects</h1>

      <p className="fade-in delay">
        Here are some of the systems and solutions I’ve designed and developed as an
        IT professional, focusing on software development, networking, and AI.
      </p>

      <div className="projects-grid">

        <div className="project-card slide-up">
          <h2>Student Management System</h2>
          <p>
            A system for managing student records, grades, and academic performance efficiently.
          </p>
        </div>

        <div className="project-card slide-up">
          <h2>Hospital Information System</h2>
          <p>
            A digital platform for managing patients, appointments, and hospital workflows.
          </p>
        </div>

        <div className="project-card slide-up">
          <h2>Campus Network Design</h2>
          <p>
            Designed a scalable and secure campus network with VLANs, routing, and DHCP services.
          </p>
        </div>

        <div className="project-card slide-up">
          <h2>AI Student Performance Predictor</h2>
          <p>
            An AI model that predicts student performance based on academic and behavioral data.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Projects;