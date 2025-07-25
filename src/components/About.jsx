import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-bio">
          I'm a 3rd-year Information Technology student at Zeal College of Engineering & Research, Pune. I have a CGPA of 7.92 and a strong foundation in Java, React.js, and Firebase.
          Currently exploring Data Structures & Algorithms in Java to deepen my problem-solving skills.
        </p>

        <h3>Education</h3>
        <ul className="education-list">
          <li>
            <strong>Zeal College of Engineering & Research</strong><br />
            BE in Information Technology – 3rd Year<br />
            CGPA: 7.92
          </li>
        </ul>

        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <span>Java</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Firebase</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>JavaFX</span>
          <span>REST APIs</span>
        </div>
      </div>
    </section>
  );
};

export default About;
