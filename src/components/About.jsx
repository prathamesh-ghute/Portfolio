import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";

const About = () => {
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

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "Java"]
    },
    {
      title: "Frontend",
      skills: ["React.js (incl. Vite)", "JavaScript (ES6+)", "HTML5", "CSS", "Tailwind"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask (Python)"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "Firebase Firestore", "DuckDB"]
    },
    {
      title: "Auth & Cloud",
      skills: ["Firebase Auth", "Firebase Cloud Functions"]
    },
    {
      title: "Payments & Realtime",
      skills: ["Razorpay", "Socket.io", "Firebase FCM"]
    },
    {
      title: "Other",
      skills: ["Git/GitHub", "REST APIs", "PWA development"]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="about-bio" variants={itemVariants}>
            I am a final-year Information Technology student at Zeal College of Engineering and Research, Pune (affiliated with Savitribai Phule Pune University). I specialize in MERN stack development and building end-to-end, India-focused, and hyperlocal web applications that address real-world problems. I am targeting software development internships and entry-level full-stack or frontend developer roles in the Indian market.
          </motion.p>

          <motion.div variants={itemVariants}>
            <h3>Education</h3>
            <ul className="education-list">
              <li>
                <strong>Zeal College of Engineering and Research, Pune</strong><br />
                Bachelor of Technology in Information Technology (Savitribai Phule Pune University)<br />
                <span className="cgpa">Year: 2023 - Present | Current SGPA: 8.23</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="skills-section-container">
            <h3>Technical Skills</h3>
            <div className="skills-categories-grid">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill-category-card">
                  <h4>{category.title}</h4>
                  <div className="skills-badges-list">
                    {category.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="skill-badge-item"
                        whileHover={{ scale: 1.05, backgroundColor: "#38bdf8", color: "#0f172a" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
