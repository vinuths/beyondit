import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  
  const styles = {
    footer: {
      background: "linear-gradient(135deg,#4c51bf,#667eea)",
      color: "#e0e7ff",
      marginTop: 60,
      padding: isMobile ? "40px 20px" : "60px 40px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(4,1fr)",
      gap: "40px",
      textAlign: isMobile ? "center" : "left",
    },

    heading: {
      fontSize: "1.2rem",
      fontWeight: "700",
      marginBottom: "16px",
      color: "#c3dafe",
    },

    text: {
      fontSize: "0.95rem",
      lineHeight: 1.6,
      opacity: 0.9,
    },

    link: {
      display: "block",
      textDecoration: "none",
      color: "#e0e7ff",
      marginBottom: "8px",
      fontSize: "0.95rem",
    },

    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 10,
      fontSize: "0.95rem",
      justifyContent: isMobile ? "center" : "flex-start",
    },

    socialRow: {
      marginTop: 10,
      display: "flex",
      gap: 14,
      justifyContent: isMobile ? "center" : "flex-start",
      fontSize: "1.2rem",
    },

    divider: {
      marginTop: 40,
      borderTop: "1px solid rgba(255,255,255,0.2)",
      paddingTop: 20,
      textAlign: "center",
      fontSize: "0.9rem",
      opacity: 0.9,
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Company */}
        <div>
          <h3 style={styles.heading}>BeyondIT</h3>
          <p style={styles.text}>
            We build modern websites, digital solutions, and scalable
            platforms to help businesses grow online.
          </p>

         <div style={styles.socialRow}>
  <a
    href="https://github.com/vinuths"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#fff" }}
  >
    <FaGithub />
  </a>

  <a
    href="#"
    style={{ color: "#fff" }}
  >
    <FaLinkedin />
  </a>

  <a
    href="#"
    style={{ color: "#fff" }}
  >
    <FaInstagram />
  </a>
</div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={styles.heading}>Quick Links</h3>

          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/services" style={styles.link}>Services</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>

        {/* Services */}
        <div>
          <h3 style={styles.heading}>Services</h3>

          <Link to="/services/web-development" style={styles.link}>
            Web Development
          </Link>

          <Link to="/services/ui-ux-design" style={styles.link}>
            UI / UX Design
          </Link>

          <Link to="/services/logo-design" style={styles.link}>
            Logo Design
          </Link>

          <Link to="/services/digital-marketing" style={styles.link}>
            Digital Marketing
          </Link>

          <Link to="/services/ai-generation" style={styles.link}>
            AI Video Generation
          </Link>
        </div>

        {/* Contact */}
        <div>
          <h3 style={styles.heading}>Contact</h3>

          <div style={styles.contactItem}>
            <FaEnvelope /> hello@beyondit.tech
          </div>

          <div style={styles.contactItem}>
            <FaPhone /> +91 9743880882
          </div>

          <div style={styles.contactItem}>
            <FaMapMarkerAlt />18 bachegowda layout Anjanpura Bangalore 
          </div>
        </div>

      </div>

      <div style={styles.divider}>
        © {new Date().getFullYear()} <strong>BeyondIT</strong>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;