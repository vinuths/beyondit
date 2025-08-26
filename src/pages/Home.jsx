import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import {
  FaStar,
  FaQuoteLeft,
  FaLaptopCode,
  FaPencilRuler,
  FaPenFancy,
  FaBullhorn,
  FaRobot,
  FaWhatsapp,
} from "react-icons/fa";

// Global styles (CSS variables and keyframes)
const globalStyles = `
  :root {
    --bg-color: #f7f8ff;
    --text-color: #1a1a2e;
    --card-bg: #fff;
    --primary-color: #6c63ff;
    --secondary-color: #d3caff;
    --quote-icon: #c4b9ff;
    --star-color: #f6c90e;
  }
  body.dark {
    --bg-color: #0e0e2e;
    --text-color: #eaeaff;
    --card-bg: #1a1a3a;
    --primary-color: #8a7eff;
    --secondary-color: #5e54b7;
    --quote-icon: #8b7cff;
    --star-color: #ffd700;
  }
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap');
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulseGlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes bounce {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-10%); }
  }
`;

const pageBackgroundStyle = {
  background: "var(--bg-color)",
  minHeight: "100vh",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  fontFamily: "'Poppins', sans-serif",
};

const sectionCenterStyle = {
  textAlign: "center",
  marginBottom: "3rem",
};

const heading1Style = {
  fontSize: "3rem",
  fontWeight: "800",
  color: "var(--primary-color)",
  marginBottom: "1rem",
  letterSpacing: "1.2px",
  textShadow: "0 2px 6px rgba(108, 99, 255, 0.6)",
};

const paragraphStyle = {
  maxWidth: "640px",
  margin: "0 auto",
  fontSize: "1.2rem",
  lineHeight: 1.7,
  color: "var(--text-color)",
  fontWeight: "500",
};

const heading2Style = {
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "2.5rem",
  color: "var(--primary-color)",
  letterSpacing: "0.8px",
  textShadow: "0 2px 4px rgba(108, 99, 255, 0.5)",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2.25rem",
};

const responsiveGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "2.25rem",
};

const contentCardStyle = {
  backgroundColor: "var(--card-bg)",
  borderRadius: "18px",
  boxShadow:
    "0 12px 24px rgba(108, 99, 255, 0.1), 0 6px 12px rgba(108, 99, 255, 0.05)",
  padding: "2rem",
  marginBottom: "3rem",
};

const whatsappButtonStyle = {
  position: "fixed",
  bottom: 90,
  right: 24,
  backgroundColor: "#25D366",
  color: "#fff",
  padding: "16px 18px",
  borderRadius: "50%",
  boxShadow:
    "0 0 12px #25D366, 0 4px 12px rgba(37, 211, 102, 0.6), 0 0 30px rgba(37, 211, 102, 0.4)",
  cursor: "pointer",
  zIndex: 1000,
  animation: "bounce 2.5s infinite",
  transition: "box-shadow 0.3s ease, transform 0.3s ease",
};

const pulseGlowStyle = {
  position: "absolute",
  top: "-10px",
  left: "-10px",
  right: "-10px",
  bottom: "-10px",
  borderRadius: "50px",
  background:
    "linear-gradient(270deg, var(--primary-color), var(--secondary-color), var(--primary-color))",
  backgroundSize: "600% 600%",
  animation: "pulseGlow 6s ease infinite",
  filter: "blur(10px)",
  opacity: 0.7,
  zIndex: -1,
};

const fadeSlideInStyle = {
  animation: "fadeSlideIn 0.8s ease forwards",
  opacity: 0,
};

const Home = () => {
  const [isWide, setIsWide] = useState(window.innerWidth >= 768);
  const [darkMode, setDarkMode] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "BeyondIT transformed our website and boosted our online sales. Highly recommended!",
      author: "Sarah L., CEO of TechCorp",
    },
    {
      quote:
        "Professional, creative, and efficient team. Our branding has never looked better.",
      author: "Michael B., Founder of StartupX",
    },
    {
      quote:
        "Their AI video solutions took our marketing to the next level. Truly innovative!",
      author: "Anna P., Marketing Manager at MarketHub",
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 7000);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [testimonials.length]);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const grid = isWide ? responsiveGridStyle : gridStyle;

  const handleWhatsAppClick = () => {
    const phoneNumber = "919743880882"; // Updated phone number with country code
    const message =
      "Hello! I visited your website and would like to know more.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <style>{globalStyles}</style>
      <Helmet>
        <title>BeyondIT - Home</title>
        <meta
          name="description"
          content="Welcome to BeyondIT, your partner in innovative IT solutions."
        />
      </Helmet>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "10px 16px",
          borderRadius: "12px",
          background: "var(--primary-color)",
          color: "#fff",
          fontWeight: "600",
          border: "none",
          cursor: "pointer",
          zIndex: 1001,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div style={pageBackgroundStyle}>
        {/* Welcome */}
        <section style={sectionCenterStyle}>
          <h1 style={heading1Style}>Welcome to BeyondIT</h1>
          <p style={paragraphStyle}>
            We provide cutting-edge technology services to help your business
            grow.
          </p>
        </section>

        {/* Services */}
        <section style={{ ...sectionCenterStyle, ...contentCardStyle }}>
          <h2 style={heading2Style}>Our Services</h2>
          <div style={grid}>
            {[
              {
                icon: (
                  <FaLaptopCode
                    style={{ color: "var(--primary-color)", fontSize: "3.5rem" }}
                  />
                ),
                title: "Web Development",
                description:
                  "Building responsive and robust websites tailored to your needs.",
                link: "/services/web-development",
              },
              {
                icon: (
                  <FaPencilRuler
                    style={{ color: "var(--primary-color)", fontSize: "3.5rem" }}
                  />
                ),
                title: "UI/UX Design",
                description:
                  "Designing intuitive and engaging user interfaces for optimal experience.",
                link: "/services/ui-ux-design",
              },
              {
                icon: (
                  <FaPenFancy
                    style={{ color: "var(--primary-color)", fontSize: "3.5rem" }}
                  />
                ),
                title: "Logo Design",
                description:
                  "Crafting unique and memorable logos to represent your brand identity.",
                link: "/services/logo-design",
              },
              {
                icon: (
                  <FaBullhorn
                    style={{ color: "var(--primary-color)", fontSize: "3.5rem" }}
                  />
                ),
                title: "Digital Marketing",
                description:
                  "Boost your online presence with targeted marketing strategies.",
                link: "/services/digital-marketing",
              },
              {
                icon: (
                  <FaRobot
                    style={{ color: "var(--primary-color)", fontSize: "3.5rem" }}
                  />
                ),
                title: "AI Generation & Voice Over Videos",
                description:
                  "Produce engaging AI-generated videos with professional voice overs.",
                link: "/services/ai-generation",
              },
            ].map(({ icon, title, description, link }, i) => (
              <ServiceCard
                key={i}
                icon={icon}
                title={title}
                description={description}
                link={link}
                style={{
                  borderRadius: "18px",
                  boxShadow:
                    "10px 10px 30px rgba(108, 99, 255, 0.15), -10px -10px 30px rgba(255, 255, 255, 0.7)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.07)";
                  e.currentTarget.style.boxShadow =
                    "15px 15px 40px rgba(108, 99, 255, 0.3), -15px -15px 40px rgba(255, 255, 255, 0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "10px 10px 30px rgba(108, 99, 255, 0.15), -10px -10px 30px rgba(255, 255, 255, 0.7)";
                }}
              />
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section
          style={{
            position: "relative",
            textAlign: "center",
            margin: "3rem auto 6rem",
            padding: "3rem 2.5rem",
            maxWidth: "640px",
            borderRadius: "50px",
            background: "#1f1f2e",
            color: "#d3caff",
            fontWeight: "600",
            fontSize: "1.3rem",
            boxShadow:
              "inset 0 0 20px 2px #6c63ff, 0 12px 24px rgba(108, 99, 255, 0.5)",
          }}
        >
          <div style={pulseGlowStyle} />
          <h3>
            We also build landing pages, UI/UX designs, AI voice over videos,
            and more!
          </h3>
        </section>

        {/* Testimonials Section */}
        <section
          style={{
            maxWidth: "768px",
            margin: "0 auto",
            backgroundColor: "var(--card-bg)",
            padding: "3rem 2rem",
            borderRadius: "18px",
            boxShadow:
              "0 12px 24px rgba(108, 99, 255, 0.1), 0 6px 12px rgba(108, 99, 255, 0.05)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <FaQuoteLeft
            style={{
              color: "var(--quote-icon)",
              fontSize: "4rem",
              position: "absolute",
              top: "-10px",
              left: "-10px",
              opacity: 0.25,
              userSelect: "none",
            }}
          />
          <blockquote
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              marginBottom: "1rem",
              opacity: 1,
              transition: "opacity 0.8s ease",
              minHeight: "96px",
            }}
            key={currentTestimonial}
          >
            {testimonials[currentTestimonial].quote}
          </blockquote>
          <p
            style={{
              textAlign: "right",
              fontWeight: "700",
              fontSize: "1.1rem",
              color: "var(--primary-color)",
              letterSpacing: "0.6px",
              marginTop: "0",
              marginBottom: "0",
            }}
          >
            — {testimonials[currentTestimonial].author}
          </p>
        </section>

        {/* WhatsApp Floating Button */}
        <div
          style={whatsappButtonStyle}
          onClick={handleWhatsAppClick}
          title="Contact us on WhatsApp"
          role="button"
          aria-label="WhatsApp contact"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") handleWhatsAppClick();
          }}
        >
          <FaWhatsapp style={{ fontSize: "28px" }} />
        </div>
      </div>
    </>
  );
};

export default Home;
