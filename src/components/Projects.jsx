import React from "react";
import "../styles/projects.css";

const projectData = [
  {
    title: "Smart Crop Price Alert System",
    tech: "JavaFX | Firebase | Java",
    description: "Multi-role desktop app (Farmer, Head, Admin) for real-time crop prices, alerts, chatbot, and farming updates.",
    github: "#"
  },
  {
    title: "Weather App",
    tech: "React.js | JavaScript | OpenWeatherMap API",
    description: "Responsive weather app that shows temperature, humidity, and wind using live API.",
    github: "https://github.com/prathamesh-ghute/Weather-App"
  },
  {
    title: "Job Portal",
    tech: "React.js | Firebase | REST API",
    description: "Portal with job listings by role, company, and location. Firebase for backend, REST APIs for data.",
    github: "https://github.com/prathamesh-ghute/job-portal"
  },
  {
    title: "Amazon Clone",
    tech: "React.js | Firebase | JavaScript",
    description: "Clone with product listing, cart, and user authentication using Firebase.",
    github: "https://github.com/prathamesh-ghute/amazon-clone"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <p className="desc">{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
