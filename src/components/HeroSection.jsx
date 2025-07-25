import React from "react";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <img src="/profile.png" alt="Profile" className="profile-pic" />
        <h1>Hello, I'm <span className="name">Prathamesh Ghute</span></h1>
        <p className="tagline">
          Aspiring Software Engineer | Java & React Developer | DBMS & OS Enthusiast
        </p>
        <p className="intro">
          I'm currently pursuing my BE in IT at Zeal College, Pune. Passionate about full-stack development, scalable systems, and problem-solving. Currently learning DSA in Java.
        </p>
        <a href="#contact" className="cta-button">Let’s Connect</a>
      </div>
    </section>
  );
};

export default HeroSection;
