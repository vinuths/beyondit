import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Scroll to top on route change (smooth)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Show button when scrolled down 300px
  useEffect(() => {
    const handleScroll = () => setVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track window resize for responsiveness
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseSize = windowWidth < 480 ? 40 : 48; // smaller on mobile
  const baseSpacing = windowWidth < 480 ? 20 : 40; // bottom/right spacing

  const styles = {
    button: {
      position: "fixed",
      bottom: baseSpacing,
      right: baseSpacing,
      width: baseSize,
      height: baseSize,
      borderRadius: "50%",
      backgroundColor: "#5a67d8", // Indigo
      color: "white",
      border: "none",
      boxShadow: "0 4px 12px rgba(90, 103, 216, 0.5)",
      cursor: "pointer",
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? "auto" : "none",
      transition: "opacity 0.3s ease, transform 0.3s ease",
      transform: visible ? "scale(1)" : "scale(0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    buttonHover: {
      backgroundColor: "#4338ca", // Darker Indigo
    },
  };

  const [hover, setHover] = useState(false);

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
      <FaArrowUp size={windowWidth < 480 ? 16 : 20} />
    </button>
  );
};

export default ScrollToTop;
