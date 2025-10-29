import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    footer: {
      background: "linear-gradient(135deg, #4c51bf, #667eea)",
      color: "#e0e7ff",
      textAlign: "center",
      padding: isMobile ? "16px 12px" : "24px 16px",
      marginTop: isMobile ? 24 : 40,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      userSelect: "none",
      boxShadow: "0 -4px 10px rgba(102, 126, 234, 0.4)",
      borderRadius: "12px 12px 0 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: isMobile ? 6 : 8,
    },
    text: {
      margin: 0,
      fontSize: isMobile ? "0.9rem" : "1rem",
      fontWeight: 500,
      letterSpacing: "0.04em",
      textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
      lineHeight: 1.4,
    },
    strong: {
      fontWeight: 700,
      color: "#c3dafe",
    },
    link: {
      marginTop: isMobile ? 4 : 8,
      display: "inline-flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      color: "#e0e7ff",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: isMobile ? "0.95rem" : "1.1rem",
      cursor: "pointer",
      transition: "color 0.3s ease, text-decoration 0.3s ease",
      userSelect: "none",
      gap: isMobile ? "4px" : "6px",
      padding: isMobile ? "5px 10px" : "6px 12px",
      borderRadius: "6px",
    },
    linkHover: {
      color: "#a3bffa",
      textDecoration: "underline",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    icon: {
      fontSize: isMobile ? "1.1rem" : "1.3rem",
      transition: "color 0.3s ease",
    },
  };

  const [hovered, setHovered] = useState(false);

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © 2025 <strong style={styles.strong}>BeyondIT</strong>. All rights reserved.
      </p>

      <a
        href="https://github.com/vinuths/beyondit"
        target="_blank"
        rel="noreferrer"
        style={{
          ...styles.link,
          ...(hovered ? styles.linkHover : {}),
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Visit our GitHub repository"
      >
        {/* <FaGithub style={styles.icon} />
        GitHub */}
      </a>
    </footer>
  );
};

export default Footer;
