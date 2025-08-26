import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ icon, title, description, link, darkMode = false }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const colors = {
    light: {
      background: "#ffffff",
      textPrimary: "#1a202c",
      textSecondary: "#4a5568",
      iconColor: "#5a67d8",
      shadow: "rgba(0, 0, 0, 0.1)",
      shadowHover: "rgba(0, 0, 0, 0.15)",
      buttonBackground: "#5a67d8",
      buttonHoverBackground: "#434190",
      buttonTextColor: "#ffffff",
    },
    dark: {
      background: "#2d3748",
      textPrimary: "#f7fafc",
      textSecondary: "#a0aec0",
      iconColor: "#818cf8",
      shadow: "rgba(0, 0, 0, 0.7)",
      shadowHover: "rgba(0, 0, 0, 0.9)",
      buttonBackground: "#818cf8",
      buttonHoverBackground: "#5a67d8",
      buttonTextColor: "#ffffff",
    },
  };

  const theme = darkMode ? colors.dark : colors.light;

  const styles = {
    card: {
      backgroundColor: theme.background,
      borderRadius: "16px",
      boxShadow: hover
        ? `0 12px 30px ${theme.shadowHover}`
        : `0 6px 16px ${theme.shadow}`,
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      transform: hover ? "translateY(-6px)" : "translateY(0)",
      cursor: link ? "pointer" : "default",
      maxWidth: "320px",
      margin: "1rem auto",
    },
    icon: {
      color: theme.iconColor,
      fontSize: "3rem",
      marginBottom: "1rem",
      transition: "transform 0.3s ease",
      transform: hover ? "scale(1.1)" : "scale(1)",
    },
    title: {
      color: theme.textPrimary,
      fontSize: "1.3rem",
      fontWeight: "700",
      marginBottom: "0.5rem",
    },
    description: {
      color: theme.textSecondary,
      fontSize: "1rem",
      lineHeight: "1.6",
      marginBottom: "1.5rem",
    },
    button: {
      backgroundColor: theme.buttonBackground,
      color: theme.buttonTextColor,
      border: "none",
      borderRadius: "8px",
      padding: "0.6rem 1.2rem",
      fontWeight: "600",
      fontSize: "0.95rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  };

  const handleClick = () => {
    if (link) navigate(link);
  };

  return (
    <article
      style={styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="region"
      aria-label={title}
    >
      <div style={styles.icon}>{icon}</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      {link && (
        <button
          style={{
            ...styles.button,
            backgroundColor: hover
              ? theme.buttonHoverBackground
              : theme.buttonBackground,
          }}
          onClick={handleClick}
          aria-label={`Learn more about ${title}`}
        >
          Learn More
        </button>
      )}
    </article>
  );
};

export default ServiceCard;
