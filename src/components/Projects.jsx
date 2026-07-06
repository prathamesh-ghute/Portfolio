import React from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";

const projectData = [
  {
    title: "Campus Aspect",
    tech: "React, Vite, Firebase Auth, Firestore, Flask, DuckDB",
    description: "A web platform for MHT-CET college admissions guidance in Maharashtra. Features a counsellor CRM dashboard with real-time Firestore sync, student manager module, drag-and-drop option form preference ordering, smart college filter, and admission timeline planner.",
    github: "https://github.com/prathamesh-ghute",
    live: "https://campusaspect.com",
    color: "#38bdf8"
  },
  {
    title: "MessMate",
    tech: "MongoDB, Express, React, Node.js, Razorpay, Socket.io, Firebase FCM",
    description: "A MERN-stack Progressive Web App (PWA) for mess/tiffin subscription management built for the Pune market. Features billing & P&L tracking for mess owners, Razorpay subscription integration (tiered plans), student-mess discovery social feed, and real-time updates via Socket.io and FCM.",
    github: "https://github.com/prathamesh-ghute",
    live: "",
    color: "#f59e0b"
  },
  {
    title: "ResumeMatcher.ai",
    tech: "React.js, Node.js, Express.js, MongoDB, Google Gemini API, JWT",
    description: "AI-assisted resume-to-job matching recruitment platform. Automates resume parsing, candidate-to-job matching, and multi-factor ATS scoring using Gemini API to improve shortlisting accuracy.",
    github: "https://github.com/prathamesh-ghute",
    live: "",
    color: "#10b981"
  },
  {
    title: "Job Portal for Freshers",
    tech: "React.js | Firebase | REST API",
    description: "A comprehensive job portal targeting freshers with listings filtered by role, company, and location. Built with React and integrated with a Firebase backend.",
    github: "https://github.com/prathamesh-ghute/job-portal",
    live: "",
    color: "#8b5cf6"
  },
  {
    title: "Amazon Clone",
    tech: "React.js | Firebase | Stripe | Cloud Functions",
    description: "A fully responsive e-commerce clone featuring product listings, real-time persistent shopping cart synced with Firestore, Stripe payment integration, and Firebase Cloud Functions backend.",
    github: "https://github.com/prathamesh-ghute/amazon-clone",
    live: "",
    color: "#ec4899"
  },
  {
    title: "Eight Media (Freelance Client Project)",
    tech: "React, Tailwind CSS, Framer Motion, Netlify",
    description: "Premium digital marketing agency landing page built for Eight Media, Pune. Focuses on strategy, branding, and conversion with interactive growth stats, marquees, and a lead capture system.",
    github: "https://github.com/prathamesh-ghute",
    live: "https://eightmedia.netlify.app/",
    color: "#10b981"
  },
  {
    title: "Techzen Engineering Storefront (Freelance Client Project)",
    tech: "HTML5, CSS3, JavaScript, Formspree",
    description: "A professional business storefront and product catalog portal for Techzen Engineering. Designed to display heavy industrial product listings and facilitate online client inquiries.",
    github: "https://github.com/prathamesh-ghute",
    live: "",
    color: "#3b82f6"
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: `0 20px 40px rgba(56, 189, 248, 0.2)` }}
            style={{ borderLeftColor: project.color }}
          >
            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <p className="desc">{project.description}</p>
            <div className="project-links">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub →
              </motion.a>
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo 🌐
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
