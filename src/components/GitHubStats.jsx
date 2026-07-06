import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/github.css";

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const leetcodeUsername = "prathamesh_ghute";
  const githubUsername = "prathamesh-ghute";

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(
          `https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/solved`
        );
        // console.log("Fetching LeetCode stats from API...", response);
        if (response.ok) {
          const data = await response.json();
          // console.log("LeetCode stats received:", data);
          setStats(data);
        } else {
          setStats(null);
        }
      } catch (error) {
        // console.log("LeetCode API unavailable, using fallback display");
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    const fetchLeetCodeUser = async () => {
      try {
        const response = await fetch(
          `https://alfa-leetcode-api.onrender.com/${leetcodeUsername}`
        );
        // console.log("Fetching LeetCode user from API...", response);
        if (response.ok) {
          const data = await response.json();
          // console.log("LeetCode user received:", data);
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (error) {
        // console.log("LeetCode API unavailable, using fallback display");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
    fetchLeetCodeUser();
  }, []);

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
    <section className="github-section">
      {/* LeetCode Section */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        📈 LeetCode Profile
      </motion.h2>

      <motion.div
        className="github-stats"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* LeetCode Badge & Profile Link */}
        <motion.div className="stat-item" variants={itemVariants}>
          <div className="leetcode-card">
            <h3>🎯 Competitive Programming</h3>
            <p className="username">@{leetcodeUsername}</p>
            <div className="stats-badges">
              <div className="badge">
                <span className="badge-label">Problems Solved</span>
                <span className="badge-value">{stats?.solvedProblem || "---"}</span>
              </div>
              <div className="badge">
                <span className="badge-label">Acceptance Rate</span>
                <span className="badge-value">
                  {stats?.acSubmissionNum?.[0]?.count && stats?.totalSubmissionNum?.[0]?.submissions ? `${((stats.acSubmissionNum[0].count / stats.totalSubmissionNum[0].submissions) * 100).toFixed(2)}%` : "---"}
                </span>
              </div>
              <div className="badge">
                <span className="badge-label">Ranking</span>
                <span className="badge-value">
                  {user?.ranking ? `#${user.ranking}` : "---"}
                </span>
              </div>
            </div>
            <a
              href={`https://leetcode.com/${leetcodeUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="leetcode-link"
            >
              View Full Profile →
            </a>
          </div>
        </motion.div>

        {/* Difficulty Breakdown */}
        <motion.div className="stat-item" variants={itemVariants}>
          <div className="leetcode-card difficulty-card">
            <h3>📊 Problem Difficulty</h3>
            <div className="difficulty-breakdown">
              <div className="difficulty-item easy">
                <span className="difficulty-name">Easy</span>
                <span className="difficulty-count">
                  {stats?.easySolved || 0}/{stats?.totalEasy || "---"}
                </span>
              </div>
              <div className="difficulty-item medium">
                <span className="difficulty-name">Medium</span>
                <span className="difficulty-count">
                  {stats?.mediumSolved || 0}/{stats?.totalMedium || "---"}
                </span>
              </div>
              <div className="difficulty-item hard">
                <span className="difficulty-name">Hard</span>
                <span className="difficulty-count">
                  {stats?.hardSolved || 0}/{stats?.totalHard || "---"}
                </span>
              </div>
            </div>
            {!loading && !stats && (
              <p className="error-note">
                ⚠️ Stats API temporarily unavailable. Visit LeetCode directly to see real-time stats.
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        className="stats-note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Actively solving Data Structures & Algorithms problems to strengthen problem-solving skills
      </motion.p>

      {/* GitHub Section */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="github-heading"
      >
        💻 GitHub Activity
      </motion.h2>

      <motion.div
        className="github-images"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* <motion.div className="github-image-item" variants={itemVariants}>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide=contribs,prs`}
            alt="GitHub Stats"
            loading="lazy"
          />
        </motion.div> */}
        <motion.div className="github-image-item" variants={itemVariants}>
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical`}
            alt="GitHub Streak"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      <motion.p
        className="stats-note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Building projects, contributing to open source, and sharing code on GitHub
      </motion.p>
    </section>
  );
};

export default GitHubStats;
