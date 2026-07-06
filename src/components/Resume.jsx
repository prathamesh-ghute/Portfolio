import React from "react";
import { motion } from "framer-motion";
import "../styles/resume.css";

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      
      <motion.div
        className="resume-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="resume-item" variants={itemVariants}>
          <h3>Education</h3>
          <div className="resume-detail">
            <p className="title">B.Tech in Information Technology</p>
            <p className="institution">Zeal College of Engineering and Research, Pune (SPPU)</p>
            <p className="info">Final-Year | Current SGPA: 8.23</p>
          </div>
        </motion.div>

        <motion.div className="resume-item" variants={itemVariants}>
          <h3>Technical Skills</h3>
          <div className="skills-categories">
            <div className="skill-category">
              <p className="category-name"><strong>Languages:</strong> JavaScript, Java</p>
            </div>
            <div className="skill-category">
              <p className="category-name"><strong>Frontend:</strong> React.js (incl. Vite), JavaScript (ES6+), HTML5, CSS, Tailwind</p>
            </div>
            <div className="skill-category">
              <p className="category-name"><strong>Backend:</strong> Node.js, Express.js, Flask (Python)</p>
            </div>
            <div className="skill-category">
              <p className="category-name"><strong>Database:</strong> MongoDB, Firebase Firestore, DuckDB</p>
            </div>
            <div className="skill-category">
              <p className="category-name"><strong>Auth & Cloud:</strong> Firebase Auth, Firebase Cloud Functions</p>
            </div>
            <div className="skill-category">
              <p className="category-name"><strong>Payments/Realtime:</strong> Razorpay, Socket.io, Firebase FCM</p>
            </div>
            <div className="skill-category">
              <p className="category-name"><strong>Other:</strong> Git/GitHub, REST APIs, PWA development</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="resume-item" variants={itemVariants}>
          <h3>Key Projects</h3>
          <div className="project-highlight">
            <p className="title">Campus Aspect (MHT-CET guidance platform)</p>
            <p className="tech">React | Vite | Firebase Auth | Firestore | Flask | DuckDB</p>
            <p className="desc">A specialized guidance platform in Maharashtra featuring a CRM dashboard with real-time sync, role-based routing, student manager module, drag-and-drop preference generator, and smart college filter (cutoff/branch/location based).</p>
          </div>
          <div className="project-highlight">
            <p className="title">MessMate (Mess & subscription management PWA)</p>
            <p className="tech">MongoDB | Express | React | Node.js | Razorpay | Socket.io | Firebase FCM</p>
            <p className="desc">A PWA for mess/tiffin subscription management in Pune. Features billing & P&L tracking, Razorpay integration, student mess discovery, and real-time updates via Socket.io.</p>
          </div>
          <div className="project-highlight">
            <p className="title">ResumeMatcher.ai (AI Recruitment Platform)</p>
            <p className="tech">React.js | Node.js | Express.js | MongoDB | Google Gemini API | JWT</p>
            <p className="desc">AI recruitment platform integrating Google Gemini API for automated resume parsing, candidate-to-job matching, and ATS scoring engine evaluating resumes across 10+ parameters.</p>
          </div>
        </motion.div>

        <motion.div className="resume-item" variants={itemVariants}>
          <h3>Professional Highlights & Achievements</h3>
          <ul className="highlights">
            <li>Strong hands-on full-stack development expertise across React.js, Node.js, Express.js, and MongoDB</li>
            <li>Earned LeetCode 50 Days Badge for daily DSA practice in Java (targeting zero-hint problem solving)</li>
            <li>Maintains 30+ GitHub repositories covering full-stack web apps, deployed UI projects, and REST API integrations</li>
            <li>Experienced in integrating secure payment gateways (Razorpay, Stripe) and real-time sockets (Socket.io)</li>
            <li>Active hackathon participant with a strong interest in problem-solving and development</li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="resume-download">
        <a
          href="/Prathamesh_Resume.pdf"
          download
          className="download-btn"
        >
          ⬇️ Download Full Resume
        </a>
      </div>

      {/* Optional: inline preview (desktop only) */}
      <div className="resume-preview">
        <iframe
          src="/Prathamesh_Resume.pdf"
          title="Prathamesh Resume"
          width="100%"
          height="600px"
          style={{ border: "none", borderRadius: "8px" }}
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
