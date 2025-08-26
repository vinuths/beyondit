import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Scroll to top on route change (smooth)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Show button when scrolled down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    button: {
      position: "fixed",
      bottom: 40,
      right: 40,
      width: 48,
      height: 48,
      borderRadius: "50%",
      backgroundColor: "#5a67d8", // Indigo
      color: "white",
      border: "none",
      boxShadow: "0 4px 12px rgba(90, 103, 216, 0.5)",
      cursor: "pointer",
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? "auto" : "none",
      transition: "opacity 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    buttonHover: {
      backgroundColor: "#4338ca", // Darker Indigo
    },
  };

  const [hover, setHover] = React.useState(false);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        ...styles.button,
        ...(hover ? styles.buttonHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
