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
    @keyframes slideFade {
  0% { opacity: 0; transform: translateX(60px); }
  10% { opacity: 1; transform: translateX(0); }
  90% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(-60px); }
}
.hero{
  min-height:90vh;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  position:relative;
  background-image:url("/hero.png");
  background-size:cover;
  background-position:center;
  overflow:hidden;
}

/* Light gradient overlay instead of dark box */
.hero::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:linear-gradient(
    rgba(10,10,40,0.55),
    rgba(10,10,40,0.65)
  );
  z-index:1;
}

/* Content container */
.hero-overlay{
  position:relative;
  z-index:2;
  padding:40px;
  border-radius:16px;
  max-width:700px;
  backdrop-filter:blur(4px);
  margin-top:150px;

  background:rgba(20, 20, 60, 0.55); /* semi transparent background */
}

.hero h1{
  font-size:3rem;
  font-weight:800;
  margin-bottom:10px;
  color:#fff;
}

.hero p{
  font-size:1.2rem;
  margin-bottom:25px;
  color:#eaeaff;
}

.hero-buttons{
  display:flex;
  justify-content:center;
  gap:15px;
}

.hero-buttons button{
  padding:12px 28px;
  border:none;
  border-radius:30px;
  font-weight:600;
  cursor:pointer;
  background:var(--primary-color);
  color:white;
  transition:0.3s;
}

.hero-buttons button:hover{
  transform:scale(1.05);
}

.hero-buttons .outline{
  background:transparent;
  border:2px solid var(--primary-color);
}
  
`;

const pageBackgroundStyle = {
  background: "var(--bg-color)",
  minHeight: "100vh",
  paddingTop: "0",     // ✅ remove gap
  paddingBottom: "0",
  fontFamily: "'Poppins', sans-serif",
  backgroundAttachment: "fixed",
  backgroundImage: "linear-gradient(to bottom, var(--bg-color), #eaeaff)",
};

const sectionCenterStyle = {
  textAlign: "center",
  marginBottom: "5rem",
  paddingTop: "40px",
  paddingBottom: "40px",
};
const containerStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px",
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
 <section className="hero">

  <div className="hero-overlay">

   

    <div className="hero-buttons">

      <Link to="/contact">
        <button className="primary-btn">Start Your Project</button>
      </Link>

      <Link to="/services">
        <button className="outline-btn">View Our Work</button>
      </Link>

    </div>

  </div>

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
{/* Stats Section */}
<section
  style={{
    width: "100%",
    padding: "80px 20px",
    background: "linear-gradient(135deg, #6c63ff, #5a67d8)",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "auto",
      textAlign: "center",
      color: "white",
    }}
  >
    <h2
      style={{
        fontSize: "36px",
        marginBottom: "60px",
        fontWeight: "700",
      }}
    >
      Our Impact
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "30px",
      }}
    >
      {[
        { number: "50+", label: "Websites Designed" },
        { number: "25+", label: "Happy Clients" },
        { number: "15+", label: "Industries Served" },
        { number: "100%", label: "Client Satisfaction" },
      ].map((stat, i) => (
        <div
          key={i}
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            padding: "35px 20px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            transition: "0.3s",
          }}
        >
          <h3
            style={{
              fontSize: "42px",
              marginBottom: "10px",
              fontWeight: "700",
            }}
          >
            {stat.number}
          </h3>

          <p
            style={{
              opacity: "0.9",
              fontSize: "16px",
            }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Section Divider */}
<div
  style={{
    width: "100%",
    height: "3px",
    margin: "0 auto 40px",
    borderRadius: "10px",
    background: "linear-gradient(90deg, transparent, #6C63FF, #8B5CF6, #06B6D4, transparent)",
  }}
></div>
{/* Services Section */}
<section>
  <div style={{ ...containerStyle, ...sectionCenterStyle, ...contentCardStyle }}>
    <h2 style={heading2Style}>Our Services</h2>

    <div style={grid}>
      {[
        {
          icon: <FaLaptopCode style={{ color: "var(--primary-color)", fontSize: "3.2rem" }} />,
          title: "Web Development",
          description:
            "We build fast, responsive and scalable websites tailored for your business growth.",
          link: "/services/web-development",
        },
        {
          icon: <FaPencilRuler style={{ color: "var(--primary-color)", fontSize: "3.2rem" }} />,
          title: "UI/UX Design",
          description:
            "Modern and user-friendly designs that improve user experience and engagement.",
          link: "/services/ui-ux-design",
        },
        {
          icon: <FaPenFancy style={{ color: "var(--primary-color)", fontSize: "3.2rem" }} />,
          title: "Logo & Branding",
          description:
            "Professional logo and brand identity design that makes your business memorable.",
          link: "/services/logo-design",
        },
        {
          icon: <FaBullhorn style={{ color: "var(--primary-color)", fontSize: "3.2rem" }} />,
          title: "Digital Marketing",
          description:
            "Increase your online reach through social media marketing and advertising.",
          link: "/services/digital-marketing",
        },
        {
          icon: <FaRobot style={{ color: "var(--primary-color)", fontSize: "3.2rem" }} />,
          title: "AI Content & Video Creation",
          description:
            "Engaging AI-generated promotional videos and voice-over content for businesses.",
          link: "/services/ai-generation",
        },
      ].map(({ icon, title, description, link }, i) => (
        <div
          key={i}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px) scale(1.04)";
            e.currentTarget.style.boxShadow =
              "0 20px 50px rgba(108,99,255,0.25)";
            e.currentTarget.style.border =
              "1px solid rgba(108,99,255,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow =
              "0 10px 30px rgba(0,0,0,0.08)";
            e.currentTarget.style.border =
              "1px solid rgba(108,99,255,0.15)";
          }}
          style={{
            position: "relative",
            borderRadius: "20px",
            padding: "35px 25px",
            textAlign: "center",
            background: "linear-gradient(145deg, #ffffff, #f5f6ff)",
            border: "1px solid rgba(108,99,255,0.15)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            transition: "all 0.35s ease",
            overflow: "hidden",
          }}
        >
          {/* Top Gradient Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "4px",
              background: "linear-gradient(90deg,#6c63ff,#5a67d8,#7f7bff)",
            }}
          ></div>

          <div style={{ marginBottom: "15px" }}>{icon}</div>

          <h3
            style={{
              color: "var(--primary-color)",
              marginBottom: "10px",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              color: "var(--text-color)",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            {description}
          </p>

          <a
            href={link}
            style={{
              display: "inline-block",
              marginTop: "18px",
              textDecoration: "none",
              color: "var(--primary-color)",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Learn More →
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Section Divider */}
<div
  style={{
    width: "100%",
    height: "3px",
    margin: "0 auto 40px",
    borderRadius: "10px",
    background: "linear-gradient(90deg, transparent, #6C63FF, #8B5CF6, #06B6D4, transparent)",
  }}
></div>

    {/* Why Choose Us */}
<section>
  <div style={{ ...containerStyle, ...sectionCenterStyle, ...contentCardStyle }}>
    <h2 style={heading2Style}>Why Choose BeyondIT</h2>

    <div style={grid}>
      {[
        {
          icon: "🚀",
          title: "Modern Technologies",
          desc: "We build scalable solutions using the latest modern web technologies.",
        },
        {
          icon: "🎨",
          title: "Creative Design",
          desc: "Beautiful UI/UX designs focused on engagement and business growth.",
        },
        {
          icon: "⚡",
          title: "Fast Delivery",
          desc: "We deliver high quality websites quickly without compromising quality.",
        },
        {
          icon: "📈",
          title: "Business Focus",
          desc: "Our goal is not just websites but helping your business grow online.",
        },
        {
          icon: "🔎",
          title: "SEO Friendly",
          desc: "All websites are optimized to appear in Google search results.",
        },
        {
          icon: "🤝",
          title: "Long Term Support",
          desc: "We provide ongoing support, maintenance and improvements.",
        },
      ].map((item, i) => (
        <div
          key={i}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
            e.currentTarget.style.boxShadow =
              "0 20px 50px rgba(108,99,255,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(0,0,0,0.08)";
          }}
          style={{
            background: "linear-gradient(145deg,#ffffff,#f4f6ff)",
            borderRadius: "20px",
            padding: "30px 25px",
            textAlign: "center",
            border: "1px solid rgba(108,99,255,0.15)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            transition: "all 0.35s ease",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top Accent Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "4px",
              width: "100%",
              background:
                "linear-gradient(90deg,#6c63ff,#5a67d8,#7f7bff)",
            }}
          />

          {/* Icon */}
          <div
            style={{
              fontSize: "36px",
              marginBottom: "15px",
            }}
          >
            {item.icon}
          </div>

          {/* Title */}
          <h3
            style={{
              color: "var(--primary-color)",
              marginBottom: "10px",
            }}
          >
            {item.title}
          </h3>

          {/* Description */}
          <p
            style={{
              color: "var(--text-color)",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
       

{/* Our Process */}
<section
  style={{
    width: "100%",
    background: "linear-gradient(135deg, #6C63FF, #8B85FF)",
    padding: "100px 20px",
    marginTop: "80px",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "auto",
      textAlign: "center",
      color: "white",
    }}
  >
    {/* Heading */}
    <h2
      style={{
        fontSize: "36px",
        marginBottom: "10px",
        fontWeight: "700",
      }}
    >
      Our Process
    </h2>

    <p
      style={{
        maxWidth: "700px",
        margin: "0 auto 80px",
        fontSize: "16px",
        opacity: "0.9",
      }}
    >
      We follow a structured workflow to deliver high-quality digital
      solutions for every client.
    </p>

    {/* Timeline */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "40px",
        position: "relative",
      }}
    >
      {[
        {
          step: "01",
          title: "Consultation",
          desc: "We understand your business needs and project goals.",
        },
        {
          step: "02",
          title: "Planning",
          desc: "We create the strategy, wireframes and technical plan.",
        },
        {
          step: "03",
          title: "Design & Development",
          desc: "Our team designs and builds your modern website.",
        },
        {
          step: "04",
          title: "Launch & Support",
          desc: "We deploy your website and provide ongoing support.",
        },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            flex: "1 1 220px",
            position: "relative",
            textAlign: "center",
          }}
        >
          {/* Circle Step */}
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "white",
              color: "#6C63FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: "700",
              margin: "0 auto 20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            }}
          >
            {item.step}
          </div>

          {/* Title */}
          <h4
            style={{
              fontSize: "18px",
              marginBottom: "10px",
              fontWeight: "600",
            }}
          >
            {item.title}
          </h4>

          {/* Desc */}
          <p
            style={{
              fontSize: "14px",
              opacity: "0.9",
              lineHeight: "1.6",
              maxWidth: "240px",
              margin: "auto",
            }}
          >
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Our Work / Industries */}

<section
  style={{
    padding: "20px 20px",
    marginTop: "80px",
  }}
>

{/* Section Divider (OUTSIDE container) */}
<div
  style={{
    maxWidth: "1200px",
    margin: "0 auto 40px",
    height: "3px",
    borderRadius: "10px",
    background:
      "linear-gradient(90deg, transparent, #6C63FF, #8B5CF6, #06B6D4, transparent)",
  }}
></div>

{/* White Container */}
<div
  style={{
    maxWidth: "1200px",
    margin: "auto",
    background: "#ffffff",
    borderRadius: "20px",
    padding: "50px 40px",
  }}
>

{/* Heading */}
<h2
  style={{
    ...heading2Style,
    textAlign: "center",
  }}
>
  Websites We Build
</h2>

<p
  style={{
    maxWidth: "720px",
    margin: "0 auto 60px",
    textAlign: "center",
    color: "var(--text-color)",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.7",
    opacity: "0.9",
    letterSpacing: "0.4px",
  }}
>
  We create modern, high-performance websites tailored for different
  industries to help businesses grow online and attract more customers.
</p>

{/* GRID */}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
    gap: "30px",
  }}
>
{[
  {
    title: "Real Estate Website",
    desc: "Property listings with filters, maps and enquiry forms.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    title: "Cafe / Restaurant Website",
    desc: "Menus, table booking and online ordering systems.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    title: "Gym / Fitness Website",
    desc: "Membership plans, trainers and class scheduling.",
    img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
  },
  {
    title: "Clinic / Hospital Website",
    desc: "Doctor profiles, appointments and services.",
    img: "https://images.unsplash.com/photo-1588776814546-ec7e1c8a4f12",
  },
  {
    title: "Corporate Business Website",
    desc: "Professional branding and service showcase.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "E-Commerce Website",
    desc: "Online stores with products, payments and orders.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
  {
    title: "Portfolio Website",
    desc: "Personal websites for developers and creators.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Education / School Website",
    desc: "Admissions, announcements and school information.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
].map((project, i) => (
<div
  key={i}
  style={{
    borderRadius: "18px",
    overflow: "hidden",
    background: "var(--card-bg)",
    border: "1px solid rgba(108,99,255,0.25)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    transition: "all 0.35s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-12px)";
    e.currentTarget.style.boxShadow =
      "0 18px 40px rgba(108,99,255,0.25)";
    e.currentTarget.style.border =
      "1px solid rgba(108,99,255,0.55)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 8px 25px rgba(0,0,0,0.08)";
    e.currentTarget.style.border =
      "1px solid rgba(108,99,255,0.25)";
  }}
>

{/* Image */}
<div style={{ overflow: "hidden" }}>
<img
  src={`${project.img}?auto=format&fit=crop&w=800&q=60`}
  alt={project.title}
  loading="lazy"
  style={{
    width: "100%",
    height: "190px",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
/>
</div>

{/* Content */}
<div style={{ padding: "22px" }}>
<h3
  style={{
    color: "var(--primary-color)",
    marginBottom: "10px",
    fontSize: "19px",
    fontWeight: "600",
  }}
>
  {project.title}
</h3>

<p
  style={{
    color: "var(--text-color)",
    fontSize: "14px",
    lineHeight: "1.6",
  }}
>
  {project.desc}
</p>
</div>

</div>
))}
</div>

{/* Industries Note */}
<div
  style={{
    marginTop: "70px",
    padding: "35px",
    borderRadius: "18px",
    background: "linear-gradient(135deg,#6C63FF12,#8B5CF612)",
    border: "1px solid rgba(108,99,255,0.25)",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  }}
>
  {/* Heading */}
  <h3
    style={{
      color: "var(--primary-color)",
      fontSize: "22px",
      marginBottom: "20px",
      fontWeight: "700",
    }}
  >
    And Many More Industries 🚀
  </h3>

  {/* Quick list */}
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "12px",
      marginBottom: "20px",
    }}
  >
    {[
      "Startups",
      "Consultants",
      "Law Firms",
      "Travel Agencies",
      "Construction",
      "Beauty Salons",
      "Photographers",
      "Event Planners",
    ].map((item, i) => (
      <span
        key={i}
        style={{
          padding: "8px 14px",
          borderRadius: "20px",
          fontSize: "14px",
          background: "#ffffff",
          border: "1px solid rgba(108,99,255,0.25)",
          color: "var(--text-color)",
          fontWeight: "500",
        }}
      >
        {item}
      </span>
    ))}
  </div>

  {/* Closing line */}
  <p
    style={{
      fontSize: "16px",
      fontWeight: "600",
      color: "var(--text-color)",
    }}
  >
    Whatever your business is —{" "}
    <span style={{ color: "var(--primary-color)" }}>
      we can build a website for it.
    </span>
  </p>
</div>

</div>
</section>

{/* Section Divider */}

<div
  style={{
    width: "100%",
    height: "3px",
    margin: "40px auto 50px",
    borderRadius: "10px",
    background:
      "linear-gradient(90deg, transparent, #6C63FF, #8B5CF6, #06B6D4, transparent)",
  }}
></div>

{/* ================= TESTIMONIALS ================= */}

<section style={{ width: "100%" }}>
  <div
    style={{
      width: "100%",
      background: "#ffffff",
      padding: "20px 40px",
      overflow: "hidden",
    }}
  >
    {/* Header */}
    <div style={{ textAlign: "center", marginBottom: "60px" }}>
      <h2 style={{ ...heading2Style, textAlign: "center" }}>
        Client Reviews
      </h2>

  <p
    style={{
      maxWidth: "700px",
      margin: "0 auto",
      fontSize: "22px",
      color: "var(--text-color)",
      lineHeight: "0.2",
      opacity: "0.9",
    }}
  >
    Real feedback from businesses we helped build and launch online.
  </p>
</div>

{/* Reviews */}
<div
  style={{
    display: "flex",
    gap: "30px",
    width: "max-content",
    animation: "scrollReviews 90s linear infinite",
  }}
>
  {[
    {
      name: "Rahul Mehta",
      role: "Real Estate Consultant",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "BeyondIT built our property website and the design looks very professional. Clients can now easily view listings and contact us.",
    },
    {
      name: "Ananya Sharma",
      role: "Cafe Owner",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Our cafe website looks amazing. Customers now check our menu online and even find us through Google search.",
    },
    {
      name: "David Patel",
      role: "Gym Founder",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      review:
        "Very smooth experience working with them. They understood our requirements and delivered the website faster than expected.",
    },
    {
      name: "Priya Nair",
      role: "Clinic Manager",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review:
        "The website is clean and easy for patients to use. Appointment enquiries have increased after launch.",
    },
    {
      name: "Arjun Reddy",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      review:
        "Great team. They helped us design a modern website for our startup and guided us on SEO as well.",
    },
  ]
    .concat([
      {
        name: "Rahul Mehta",
        role: "Real Estate Consultant",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        review:
          "BeyondIT built our property website and the design looks very professional. Clients can now easily view listings and contact us.",
      },
      {
        name: "Ananya Sharma",
        role: "Cafe Owner",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        review:
          "Our cafe website looks amazing. Customers now check our menu online and even find us through Google search.",
      },
    ])
    .map((item, index) => (
      <div
        key={index}
        style={{
          width: "340px",
          padding: "28px",
          borderRadius: "16px",
          border: "1px solid rgba(108,99,255,0.25)",
          background: "#fff",
          boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
          flexShrink: 0,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow =
            "0 18px 40px rgba(108,99,255,0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 10px 25px rgba(0,0,0,0.06)";
        }}
      >
        {/* Stars */}
        <div
          style={{
            color: "#FFC107",
            fontSize: "18px",
            marginBottom: "10px",
          }}
        >
          ★★★★★
        </div>

        {/* Review */}
        <p
          style={{
            fontSize: "15px",
            color: "var(--text-color)",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          "{item.review}"
        </p>

        {/* Profile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid var(--primary-color)",
            }}
          />

          <div>
            <div
              style={{
                fontWeight: "600",
                color: "var(--primary-color)",
                fontSize: "15px",
              }}
            >
              {item.name}
            </div>

            <div
              style={{
                fontSize: "13px",
                color: "#777",
              }}
            >
              {item.role}
            </div>
          </div>
        </div>
      </div>
    ))}
</div>

{/* Animation */}
<style>
  {`
  @keyframes scrollReviews {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  `}
</style>
```

  </div>
</section>

 {/* Call to Action */}
       <section
  style={{
    position: "relative",
    textAlign: "center",
    padding: "5rem 2rem",
    background:
      "linear-gradient(180deg, #0f0f1a 0%, #151530 40%, #0f0f1a 100%)",
  }}
>
  <div
    style={{
      maxWidth: "700px",
      margin: "0 auto",
      padding: "3rem 2.5rem",
      borderRadius: "40px",
      background: "rgba(31,31,46,0.9)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(108,99,255,0.3)",
      boxShadow:
        "0 0 40px rgba(108,99,255,0.4), inset 0 0 20px rgba(108,99,255,0.2)",
      color: "#d3caff",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        marginBottom: "1.5rem",
        color: "#ffffff",
      }}
    >
      Let’s Build Something Amazing
    </h2>

    <p
      style={{
        fontSize: "1.2rem",
        lineHeight: "1.7",
        opacity: "0.9",
      }}
    >
      We build landing pages, UI/UX designs, logos, and AI voiceover videos
      to amplify your brand and help your business grow online.
    </p>

    <Link
      to="/contact"
      style={{
        display: "inline-block",
        marginTop: "2rem",
        padding: "0.9rem 2.7rem",
        borderRadius: "30px",
        background:
          "linear-gradient(135deg,#6c63ff,#8a7eff)",
        color: "#fff",
        fontSize: "1.2rem",
        fontWeight: "600",
        textDecoration: "none",
        boxShadow: "0 10px 25px rgba(108,99,255,0.6)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow =
          "0 15px 35px rgba(108,99,255,0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(108,99,255,0.6)";
      }}
    >
      Start Your Project
    </Link>
  </div>
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
