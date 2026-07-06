import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "YOUR_FORMSPREE_ID";
      
      if (formspreeId === "YOUR_FORMSPREE_ID") {
        // Fallback simulation if ID is not configured yet
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Mock Form Submission (Configure VITE_FORMSPREE_ID in .env):", formData);
      } else {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
          throw new Error("Failed to send message via Formspree");
        }
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again or contact me directly via email.");
    } finally {
      setLoading(false);
    }
  };

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
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">
            Let's connect! Feel free to reach out for opportunities or collaboration.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="icon">📧</span>
              <div>
                <p className="label">Email</p>
                <a href="mailto:prathameshghute6@gmail.com">
                  prathameshghute6@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">📱</span>
              <div>
                <p className="label">Phone</p>
                <a href="tel:+919370694846">+91 9370694846</a>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <p className="label">Location</p>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-links">
              <a
                href="https://github.com/prathamesh-ghute"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/prathamesh-ghute-8a698531a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/prathamesh_ghute"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                LeetCode
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            {submitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Thank you! I'll get back to you soon.
              </motion.div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
                placeholder="Your Name"
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? "error" : ""}
                placeholder="Message Subject"
              />
              {errors.subject && (
                <span className="error-message">{errors.subject}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
                placeholder="Your Message (minimum 10 characters)"
                rows="5"
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
