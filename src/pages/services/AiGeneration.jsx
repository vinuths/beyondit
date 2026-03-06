import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaRobot, FaPlayCircle, FaBullhorn, FaClock } from "react-icons/fa";

const AiGeneration = () => {

  const features = [
    {
      icon: <FaRobot size={38} />,
      title: "AI Avatars",
      desc: "Realistic AI avatars that speak naturally and present your content professionally."
    },
    {
      icon: <FaPlayCircle size={38} />,
      title: "HD Video Output",
      desc: "High-quality videos optimized for websites, ads, and social media."
    },
    {
      icon: <FaBullhorn size={38} />,
      title: "Voice Overs",
      desc: "Professional voice overs in multiple tones and languages."
    },
    {
      icon: <FaClock size={38} />,
      title: "Fast Delivery",
      desc: "Quick turnaround without compromising production quality."
    }
  ];

  return (
    <>
      <Helmet>
        <title>BeyondIT - AI Generation & Voice Over Videos</title>
        <meta
          name="description"
          content="Create AI generated marketing videos with professional voice overs for your business."
        />
      </Helmet>

      <section style={{ fontFamily: "'Poppins', sans-serif" }}>

       {/* HERO */}
<div
  style={{
    width: "100%",
    padding: "20px 8%",
    background: "linear-gradient(135deg,#6366f1,#7c3aed)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }}
>
  <h1
    style={{
      fontSize: "3.2rem",
      fontWeight: "800",
      marginBottom: "20px",
      textAlign: "center"
    }}
  >
    AI Generated Videos & Voice Overs
  </h1>

  <p
    style={{
      fontSize: "1.25rem",
      maxWidth: "750px",
      marginBottom: "30px",
      opacity: 0.9
    }}
  >
    Create powerful AI-generated videos using lifelike avatars and
    professional voice overs for marketing, training, product demos,
    and business promotions.
  </p>

  <Link
    to="/contact"
    style={{
      background: "white",
      color: "#6366f1",
      padding: "14px 38px",
      borderRadius: "40px",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: "1.1rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
    }}
  >
    Start Your AI Video
  </Link>
</div>
        {/* FEATURES */}
        <div
          style={{
            padding: "90px 8%",
            background: "#f8fafc"
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.4rem",
              fontWeight: "700",
              marginBottom: "60px",
              color: "#333"
            }}
          >
            Powerful AI Video Features
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "30px"
            }}
          >
            {features.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "40px 30px",
                  borderRadius: "18px",
                  textAlign: "center",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    color: "#6366f1",
                    marginBottom: "15px"
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    marginBottom: "10px"
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ color: "#666", fontSize: "0.95rem" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        <div
          style={{
            padding: "90px 8%",
            background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
            color: "white",
            textAlign: "center"
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "25px"
            }}
          >
            Why Businesses Use AI Videos
          </h2>

          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: 1.8
            }}
          >
            <p>🚀 Increase engagement and conversions.</p>
            <p>🎯 Deliver clear product explanations.</p>
            <p>💰 Reduce video production costs.</p>
            <p>🌍 Reach global audiences with multilingual voice overs.</p>
          </div>

          <Link
            to="/contact"
            style={{
              marginTop: "35px",
              display: "inline-block",
              background: "white",
              color: "#6366f1",
              padding: "14px 38px",
              borderRadius: "40px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "1.1rem"
            }}
          >
            Get Your AI Video
          </Link>
        </div>

      </section>
    </>
  );
};

export default AiGeneration;