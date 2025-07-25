import React from "react";
import "../styles/resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <p className="resume-info">
        Download my resume to know more about my education, skills, and projects.
      </p>
      <a
        href="/Prathamesh_Resume.pdf"
        download
        className="download-btn"
      >
        Download Resume
      </a>

      {/* Optional: inline preview (desktop only) */}
      <div className="resume-preview">
        <iframe
          src="/Prathamesh_Resume.pdf"
          title="Prathamesh Resume"
          width="100%"
          height="500px"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
