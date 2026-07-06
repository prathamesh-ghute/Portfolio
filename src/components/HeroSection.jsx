import React from "react";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <img src="/profile.png" alt="Profile" className="profile-pic" />
        <h1>Hello, I'm <span className="name">Prathamesh Ghute</span></h1>
        <p className="tagline">
          MERN Stack Developer | Final-Year IT Student
        </p>
        <p className="intro">
          I am a practical, product-focused MERN stack developer with a learnaholic mindset, dedicated to shipping end-to-end real-world applications. Rather than building generic tutorial projects, I focus on building India-focused, hyperlocal products. Currently expanding my horizons by mastering Spring, Spring Boot, and Data Structures & Algorithms in Java.
        </p>
        <div className="hero-social-badges">
          <span className="hero-badge">💻 30+ GitHub Repos</span>
          <span className="hero-badge">🏆 LeetCode 50 Days Badge</span>
          <span className="hero-badge">🤝 500+ LinkedIn Connections</span>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="cta-button">View My Work</a>
          <a href="#contact" className="cta-button secondary">Let’s Connect</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
