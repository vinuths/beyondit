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

// Global styles and animations
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

  @keyframes scrollText {
    from { transform: translateX(100%); }
    to { transform: translateX(-100%); }
  }

  @keyframes sparkle {
    0%, 100% { opacity: 0; transform: scale(0.8) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.2) rotate(20deg); }
  }

  @keyframes floatStars {
    0% {
      transform: translateY(0) translateX(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(-200px) translateX(20px) scale(1.2);
      opacity: 0;
    }
  }

  .floating-star {
    position: fixed;
    color: var(--star-color);
    font-size: 16px;
    opacity: 0.8;
    animation-name: floatStars;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    pointer-events: none;
    user-select: none;
    z-index: 9999;
  }
`;

const pageBackgroundStyle = {
  background: "var(--bg-color)",
  minHeight: "100vh",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  fontFamily: "'Poppins', sans-serif",
  backgroundAttachment: "fixed",
  backgroundImage: "linear-gradient(to bottom, var(--bg-color), #eaeaff)",
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
};

const scrollTopButtonStyle = {
  position: "fixed",
  bottom: 160,
  right: 24,
  background: "var(--primary-color)",
  color: "#fff",
  padding: "12px 14px",
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: "18px",
  zIndex: 1000,
  boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
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

const FloatingStar = ({ style, delay, duration }) => {
  const starStyle = {
    ...style,
    animationDelay: delay,
    animationDuration: duration,
  };
  return <FaStar className="floating-star" style={starStyle} />;
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

  const handleWhatsAppClick = () => {
    const phoneNumber = "919743880882";
    const message = "Hello! I visited your website and would like to know more.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const grid = isWide ? responsiveGridStyle : gridStyle;

  // Generate random stars data for floating stars
  const stars = Array.from({ length: 25 }).map(() => ({
    top: Math.random() * window.innerHeight,
    left: Math.random() * window.innerWidth,
    delay: `${Math.random() * 10}s`,
    duration: `${5 + Math.random() * 5}s`,
    size: 12 + Math.random() * 12,
    opacity: 0.5 + Math.random() * 0.5,
  }));

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

      {/* Floating stars container */}
      {stars.map((star, i) => (
        <FloatingStar
          key={i}
          style={{
            top: star.top,
            left: star.left,
            fontSize: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
          delay={star.delay}
          duration={star.duration}
        />
      ))}

      <div style={pageBackgroundStyle}>
        {/* Hero Section */}
        <section style={sectionCenterStyle}>
          <h1 style={heading1Style}>
            <span style={{ position: "relative", display: "inline-block" }}>
              Welcome to BeyondIT
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-20px",
                  fontSize: "1.5rem",
                  animation: "sparkle 1.5s infinite ease-in-out",
                }}
              >
                ✨
              </span>
            </span>
          </h1>
          <p style={paragraphStyle}>
            We provide cutting-edge technology services to help your business
            grow.
          </p>
        </section>

        {/* Scrolling Ribbon */}
        <section
          style={{
            background:
              "linear-gradient(to right, var(--primary-color), var(--secondary-color))",
            color: "#fff",
            padding: "0.75rem 0",
            fontWeight: "600",
            fontSize: "1rem",
            letterSpacing: "1px",
            overflow: "hidden",
            position: "relative",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              animation: "scrollText 20s linear infinite",
            }}
          >
            🚀 We build modern websites | 🎨 UI/UX & Logo Designs | 🤖 AI Voice
            Over Videos | 📈 Boost your online presence with BeyondIT!
          </div>
        </section>

        {/* Services Section */}
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

        {/* Call to Action */}
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
            We also build landing pages, UI/UX designs, logos, and provide AI
            voiceover videos to amplify your brand voice.
          </h3>
          <Link
            to="/contact"
            style={{
              display: "inline-block",
              marginTop: "2.5rem",
              fontWeight: "600",
              padding: "0.75rem 2.5rem",
              borderRadius: "30px",
              backgroundColor: "var(--primary-color)",
              color: "#fff",
              fontSize: "1.3rem",
              boxShadow: "0 8px 15px rgba(108, 99, 255, 0.6)",
              transition: "background-color 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#8a7eff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary-color)";
            }}
          >
            Contact Us
          </Link>
        </section>

        {/* Testimonials Section */}
        <section style={{ ...sectionCenterStyle, ...contentCardStyle }}>
          <h2 style={heading2Style}>Client Testimonials</h2>
          <blockquote
            style={{
              fontSize: "1.3rem",
              fontWeight: "500",
              fontStyle: "italic",
              color: "var(--text-color)",
              position: "relative",
              paddingLeft: "3rem",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.6,
              borderLeft: "4px solid var(--primary-color)",
            }}
          >
            <FaQuoteLeft
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                fontSize: "3rem",
                color: "var(--quote-icon)",
              }}
            />
            {testimonials[currentTestimonial].quote}
            <cite
              style={{
                display: "block",
                marginTop: "1rem",
                fontWeight: "700",
                color: "var(--primary-color)",
              }}
            >
              — {testimonials[currentTestimonial].author}
            </cite>
          </blockquote>
        </section>

        {/* WhatsApp floating button */}
        <div
          onClick={handleWhatsAppClick}
          title="Chat with us on WhatsApp"
          style={whatsappButtonStyle}
          role="button"
          aria-label="WhatsApp Contact"
        >
          <FaWhatsapp />
        </div>

        {/* Scroll to top button
        <div
          onClick={handleScrollTop}
          title="Scroll to top"
          style={scrollTopButtonStyle}
          role="button"
          aria-label="Scroll to top"
        >
          ↑
        </div> */}
      </div>
    </>
  );
};

export default Home;
