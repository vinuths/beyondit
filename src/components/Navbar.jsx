import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";
import { FaMoon, FaSun, FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [servicesOpen, setServicesOpen] = useState(false);

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
  top: 0,
  width: "100%",
  zIndex: 100,

  background: darkMode
    ? "rgba(15,23,42,0.75)"
    : "rgba(255,255,255,0.7)",

  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",

  borderBottom: darkMode
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(0,0,0,0.05)",

  boxShadow: darkMode
    ? "0 10px 30px rgba(0,0,0,0.6)"
    : "0 8px 25px rgba(0,0,0,0.08)",

  padding: "14px 50px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  transition: "all 0.35s ease",
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

  position: windowWidth >= 768 ? "absolute" : "static",
  left: windowWidth >= 768 ? "50%" : "auto",
  transform: windowWidth >= 768 ? "translateX(-50%)" : "none",
},
    link: {
  position: "relative",
  color: darkMode ? "#e2e8f0" : "#374151",
  textDecoration: "none",
  paddingBottom: 6,
  fontSize: "16px",
  fontWeight: 500,
  transition: "color 0.25s ease",
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
  marginTop: "45px",   // 👈 pushes the button down
  transition: "background-color 0.3s ease",
},
dropdown: {
  position: "absolute",
  top: "38px",
  left: 0,
  background: darkMode ? "#1f2937" : "#fff",
  borderRadius: "10px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  padding: "10px 0",
  minWidth: "220px",
  display: servicesOpen ? "block" : "none",
  zIndex: 1000,
},

dropdownItem: {
  display: "block",
  padding: "10px 18px",
  color: darkMode ? "#e2e8f0" : "#374151",
  textDecoration: "none",
  fontSize: "15px",
  transition: "all 0.2s",
},

dropdownItemHover: {
  backgroundColor: darkMode ? "#374151" : "#eef2ff",
  color: baseColor,
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
const serviceDropdown = [
  { label: "Web Development", path: "/services/web-development" },
  { label: "UI/UX Design", path: "/services/ui-ux-design" },
  { label: "Logo Design", path: "/services/logo-design" },
  { label: "Digital Marketing", path: "/services/digital-marketing" },
  { label: "AI Generation & Voice Videos", path: "/services/ai-generation" },
];
  return (
  <nav style={styles.nav}>
  {/* Logo */}
  <Link
    to="/"
    style={styles.logo}
    aria-label="Homepage"
  >
    <img
      src="/beyonditlogo.png"
      alt="BeyondIT Logo"
      style={{
        height: "45px",
        width: "auto",
        objectFit: "contain"
      }}
    />
  </Link>
      {/* Desktop Menu */}
      <div style={styles.desktopMenu}>
      {navLinks.map(({ to, label }, idx) => {

  if (label === "Services") {
  return (
    <div
      key={label}
      style={{
        position: "relative",
        paddingBottom: "12px" // prevents dropdown closing gap
      }}
      onMouseEnter={() => setServicesOpen(true)}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <span
        style={{
          ...styles.link,
          cursor: "pointer",
        }}
      >
        Services ▾
      </span>

      <div
        style={{
          ...styles.dropdown,
          display: servicesOpen ? "block" : "none",
        }}
      >
        {serviceDropdown.map((service, i) => (
          <NavLink
            key={i}
            to={service.path}
            style={styles.dropdownItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = darkMode
                ? "#374151"
                : "#eef2ff";
              e.currentTarget.style.color = baseColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = darkMode
                ? "#e2e8f0"
                : "#374151";
            }}
          >
            {service.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
  return (
    <NavLink
      key={to}
      to={to}
      end
      style={({ isActive }) => ({
        ...styles.link,
        ...(isActive ? styles.activeLink : {}),
      })}
    >
      {label}
    </NavLink>
  );
})}
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
          {/* <button
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
          </button> */}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
