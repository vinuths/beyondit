import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";
import { FaMoon, FaSun, FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Hover states
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [ctaHover, setCtaHover] = useState(false);
  const [darkModeHover, setDarkModeHover] = useState(false);
  const [hamburgerHover, setHamburgerHover] = useState(false);

  const baseColor = darkMode ? "#a3bffa" : "#5a67d8"; // Indigo base color

  const styles = {
    nav: {
      position: "sticky",
      top: 16,
      zIndex: 100,
      backgroundColor: darkMode ? "rgba(17, 24, 39, 0.85)" : "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(12px)",
      boxShadow: darkMode
        ? "0 8px 24px rgba(0,0,0,0.4)"
        : "0 8px 24px rgba(90,103,216,0.15)",
      padding: "12px 40px",
      borderRadius: 12,
      maxWidth: 960,
      margin: "16px auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      userSelect: "none",
      transition: "background-color 0.4s ease, box-shadow 0.4s ease",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 26,
      fontWeight: "700",
      color: baseColor,
      textDecoration: "none",
      cursor: "pointer",
      transition: "color 0.3s ease",
      userSelect: "none",
      letterSpacing: 1.2,
    },
    logoIcon: {
      transform: "rotate(-15deg)",
      color: baseColor,
    },
    desktopMenu: {
      display: windowWidth >= 768 ? "flex" : "none",
      alignItems: "center",
      gap: 36,
      fontSize: 16,
      fontWeight: 500,
    },
    link: {
      position: "relative",
      color: darkMode ? "#e2e8f0" : "#4a5568",
      textDecoration: "none",
      paddingBottom: 6,
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
    activeLink: {
      color: baseColor,
      fontWeight: 600,
      borderBottom: `2.5px solid ${baseColor}`,
    },
    linkHover: {
      color: baseColor,
    },
    ctaButton: {
      backgroundColor: baseColor,
      color: "white",
      padding: "10px 28px",
      borderRadius: 30,
      fontWeight: "700",
      border: "none",
      cursor: "pointer",
      fontSize: 15,
      boxShadow: `0 6px 12px ${darkMode ? "rgba(90,103,216,0.5)" : "rgba(90,103,216,0.35)"}`,
      transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      letterSpacing: 0.5,
    },
    ctaButtonHover: {
      backgroundColor: darkMode ? "#6b7ff3" : "#4338ca",
      boxShadow: "0 8px 18px rgba(67,56,202,0.6)",
    },
    darkModeButton: {
      marginLeft: 20,
      padding: 10,
      borderRadius: "50%",
      backgroundColor: darkMode ? "#4a5568" : "#e2e8f0",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: darkMode ? "0 3px 8px rgba(0,0,0,0.5)" : "0 3px 8px rgba(0,0,0,0.15)",
    },
    darkModeButtonHover: {
      backgroundColor: darkMode ? "#5a67d8" : "#cbd5e0",
    },
    hamburgerButton: {
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      color: darkMode ? "#e2e8f0" : "#4a5568",
      display: windowWidth < 768 ? "flex" : "none",
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderRadius: 8,
      transition: "background-color 0.3s ease",
    },
    hamburgerHover: {
      backgroundColor: darkMode ? "#2d3748" : "#ebf4ff",
    },
    mobileMenu: {
      width: "100%",
      overflow: "hidden",
      maxHeight: menuOpen ? 400 : 0,
      transition: "max-height 0.35s ease",
      backgroundColor: darkMode ? "#111827" : "#ffffff",
      boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
      borderRadius: 12,
      marginTop: 20,
    },
    mobileNav: {
      display: "flex",
      flexDirection: "column",
      padding: 24,
      gap: 16,
      fontSize: 17,
      fontWeight: 500,
    },
    mobileLink: {
      padding: "12px 16px",
      borderRadius: 12,
      color: darkMode ? "#e2e8f0" : "#4a5568",
      textDecoration: "none",
      cursor: "pointer",
      transition: "background-color 0.25s ease, color 0.25s ease",
      userSelect: "none",
    },
    mobileActiveLink: {
      backgroundColor: darkMode ? "#4338ca" : "#c3dafe",
      color: darkMode ? "#fff" : "#5a67d8",
      fontWeight: 700,
    },
    mobileCtaButton: {
      backgroundColor: baseColor,
      color: "white",
      padding: "12px",
      borderRadius: 14,
      fontWeight: 700,
      textAlign: "center",
      cursor: "pointer",
      border: "none",
      transition: "background-color 0.3s ease",
      userSelect: "none",
    },
    mobileDarkModeButton: {
      marginTop: 16,
      backgroundColor: baseColor,
      color: "white",
      padding: "12px",
      borderRadius: 14,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      cursor: "pointer",
      border: "none",
      transition: "background-color 0.3s ease",
      userSelect: "none",
    },
  };

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <Link
        to="/"
        style={styles.logo}
        aria-label="Homepage"
      >
        <FaLaptopCode style={styles.logoIcon} size={28} />
        <span>BeyondIT</span>
      </Link>

      {/* Desktop Menu */}
      <div style={styles.desktopMenu}>
        {navLinks.map(({ to, label }, idx) => (
          <NavLink
            key={to}
            to={to}
            end
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {}),
              ...(hoveredIndex === idx ? styles.linkHover : {}),
            })}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {label}
          </NavLink>
        ))}

        {/* CTA Button */}
        <button
          onClick={() => (window.location.href = "/contact")}
          style={{
            ...styles.ctaButton,
            ...(ctaHover ? styles.ctaButtonHover : {}),
          }}
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          aria-label="Get a Quote"
        >
          Get a Quote
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          style={{
            ...styles.darkModeButton,
            ...(darkModeHover ? styles.darkModeButtonHover : {}),
          }}
          onMouseEnter={() => setDarkModeHover(true)}
          onMouseLeave={() => setDarkModeHover(false)}
        >
          {darkMode ? (
            <FaSun style={{ color: "#f6e05e" }} size={18} />
          ) : (
            <FaMoon style={{ color: "#818cf8" }} size={18} />
          )}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        style={{
          ...styles.hamburgerButton,
          ...(hamburgerHover ? styles.hamburgerHover : {}),
        }}
        onMouseEnter={() => setHamburgerHover(true)}
        onMouseLeave={() => setHamburgerHover(false)}
      >
        {menuOpen ? (
          <svg
            style={{ width: 26, height: 26 }}
            fill="none"
            stroke={darkMode ? "#e2e8f0" : "#4a5568"}
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            style={{ width: 26, height: 26 }}
            fill="none"
            stroke={darkMode ? "#e2e8f0" : "#4a5568"}
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        <nav style={styles.mobileNav}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                ...styles.mobileLink,
                ...(isActive ? styles.mobileActiveLink : {}),
              })}
            >
              {label}
            </NavLink>
          ))}

          {/* CTA Mobile */}
          <button
            onClick={() => {
              setMenuOpen(false);
              window.location.href = "/contact";
            }}
            style={styles.mobileCtaButton}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4338ca")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = baseColor)}
            aria-label="Get a Quote"
          >
            Get a Quote
          </button>

          {/* Dark Mode Mobile */}
          <button
            onClick={() => {
              toggleDarkMode();
              setMenuOpen(false);
            }}
            style={styles.mobileDarkModeButton}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4338ca")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = baseColor)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
