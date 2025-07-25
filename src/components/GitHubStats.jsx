import React from "react";
import "../styles/github.css";

const GitHubStats = () => {
  return (
    <section className="github-section">
      <h2>GitHub Activity</h2>
      <div className="github-stats">
        <img
          src="https://github-readme-stats.vercel.app/api?username=prathamesh-ghute&show_icons=true&theme=radical"
          alt="GitHub Stats"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=prathamesh-ghute&theme=radical"
          alt="GitHub Streak"
        />
      </div>
    </section>
  );
};

export default GitHubStats;
