import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const styles = {
    footer: {
      background: "linear-gradient(135deg, #4c51bf, #667eea)", // nice indigo gradient
      color: "#e0e7ff", // soft light text
      textAlign: "center",
      padding: "24px 16px",
      marginTop: 40,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      userSelect: "none",
      boxShadow: "0 -4px 10px rgba(102, 126, 234, 0.4)", // subtle top shadow
      borderRadius: "12px 12px 0 0",
    },
    text: {
      margin: 0,
      fontSize: "1rem",
      fontWeight: "500",
      letterSpacing: "0.04em",
      textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
    },
    strong: {
      fontWeight: "700",
      color: "#c3dafe", // lighter accent on brand name
    },
    link: {
      marginTop: 8,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#e0e7ff",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "1.1rem",
      cursor: "pointer",
      transition: "color 0.3s ease, text-decoration 0.3s ease",
      userSelect: "none",
      gap: "6px",
      padding: "6px 12px",
      borderRadius: "6px",
    },
    linkHover: {
      color: "#a3bffa",
      textDecoration: "underline",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    icon: {
      fontSize: "1.3rem",
      transition: "color 0.3s ease",
    },
  };

  const [hovered, setHovered] = React.useState(false);

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © 2025 <strong style={styles.strong}>BeyondIT</strong>. All rights
        reserved.
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
        <FaGithub style={styles.icon} />
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
