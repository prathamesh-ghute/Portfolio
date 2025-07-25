import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-text">
        Interested in working together? Let's get in touch!
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> prathameshghute6@gmail.com</p>
        <p><strong>Phone:</strong> +91 9370694846</p>
      </div>
      <div>
      </div>

      <div className="contact-links">
        <a
          href="https://github.com/prathamesh-ghute"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/prathamesh-ghute-8a698531a/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          LinkedIn
        </a>
        
      </div>
    </section>
  );
};

export default Contact;
