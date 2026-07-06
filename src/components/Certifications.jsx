import React from "react";
import { motion } from "framer-motion";
import "../styles/certifications.css";

const Certifications = () => {
  const certifications = [
    {
      title: "JavaScript Essentials",
      issuer: "Codecademy",
      date: "2024",
      skills: ["JavaScript", "ES6+", "DOM Manipulation"],
    },
    {
      title: "React Fundamentals",
      issuer: "Udemy",
      date: "2024",
      skills: ["React Hooks", "State Management", "Component Design"],
    },
    {
      title: "Java Programming",
      issuer: "NPTEL",
      date: "2023",
      skills: ["OOP", "Data Structures", "Problem Solving"],
    },
    {
      title: "Firebase & Realtime Databases",
      issuer: "Udemy",
      date: "2024",
      skills: ["Firebase Auth", "Firestore", "Real-time Updates"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications & Learning</h2>
      <p className="section-subtitle">
        Continuous learning to stay updated with the latest technologies
      </p>

      <motion.div
        className="certifications-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="cert-header">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">{cert.date}</p>
            </div>
            <div className="cert-skills">
              {cert.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="learning-path"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3>Currently Learning</h3>
        <ul className="learning-list">
          <li>
            <strong>Data Structures & Algorithms</strong> - Advanced problem-solving in Java
          </li>
          <li>
            <strong>System Design</strong> - Scalable architecture patterns
          </li>
          <li>
            <strong>Advanced React</strong> - Performance optimization and advanced patterns
          </li>
          <li>
            <strong>Cloud Technologies</strong> - AWS and Azure fundamentals
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Certifications;
