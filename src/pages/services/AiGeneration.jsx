import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaRobot, FaPlayCircle, FaBullhorn, FaClock } from "react-icons/fa";

const AiGeneration = () => {
  return (
    <>
      <Helmet>
        <title>BeyondIT - AI Generation & Voice Over Videos</title>
        <meta
          name="description"
          content="Create captivating AI-generated videos with professional voice overs for marketing, training, and more."
        />
      </Helmet>

      <section
        style={{
          maxWidth: 900,
          margin: "3rem auto",
          padding: "0 1rem",
          fontFamily: "'Poppins', sans-serif",
          color: "#222",
          lineHeight: 1.6,
        }}
      >
        {/* Back Link */}
        <Link
          to="/services"
          style={{
            display: "inline-block",
            marginBottom: "1.5rem",
            color: "#6c63ff",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1rem",
          }}
          aria-label="Back to services"
        >
          ← Back to Services
        </Link>

        {/* Header */}
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "800",
            marginBottom: "1rem",
            color: "#6c63ff",
            letterSpacing: "1.2px",
            textShadow: "0 2px 6px rgba(108, 99, 255, 0.4)",
          }}
        >
          AI Generation & Voice Over Videos
        </h1>

        {/* Intro */}
        <p
          style={{
            fontSize: "1.25rem",
            marginBottom: "2rem",
            maxWidth: "720px",
            color: "#444",
          }}
        >
          Harness the power of AI to create captivating videos featuring
          lifelike avatars paired with professional voice overs. Ideal for
          marketing campaigns, explainer videos, training materials, and more.
          Elevate your brand with innovation and storytelling that engages your
          audience.
        </p>

        {/* Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {[{
            icon: <FaRobot size={36} color="#6c63ff" aria-hidden="true" />,
            title: "AI-Powered Avatars",
            desc: "Realistic and customizable avatars that speak with natural expressions."
          },{
            icon: <FaPlayCircle size={36} color="#6c63ff" aria-hidden="true" />,
            title: "High-Quality Video Output",
            desc: "Crisp HD videos optimized for all platforms and devices."
          },{
            icon: <FaBullhorn size={36} color="#6c63ff" aria-hidden="true" />,
            title: "Professional Voice Overs",
            desc: "Clear, engaging voice overs tailored to your brand's tone and style."
          },{
            icon: <FaClock size={36} color="#6c63ff" aria-hidden="true" />,
            title: "Fast Turnaround",
            desc: "Get your videos delivered quickly without compromising quality."
          }].map(({icon, title, desc}, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#f5f4ff",
                borderRadius: "16px",
                padding: "1.8rem 1.5rem",
                boxShadow: "0 4px 14px rgba(108, 99, 255, 0.12)",
                textAlign: "center",
                transition: "transform 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ marginBottom: "1rem" }}>{icon}</div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#4b47a0",
                  marginBottom: "0.5rem",
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#5a5a8a" }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <section
          style={{
            backgroundColor: "#6c63ff",
            color: "#fff",
            padding: "2.5rem 1.5rem",
            borderRadius: "24px",
            maxWidth: "720px",
            margin: "0 auto 4rem",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(108, 99, 255, 0.4)",
          }}
          aria-label="Benefits of AI video generation"
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1rem",
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            Why Choose Our AI Video Services?
          </h2>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              fontSize: "1.1rem",
              maxWidth: 550,
              margin: "0 auto",
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            <li>🚀 Boost engagement with cutting-edge AI technology.</li>
            <li>🎯 Deliver consistent brand messaging effortlessly.</li>
            <li>💡 Save time and resources compared to traditional video production.</li>
            <li>🌍 Reach global audiences with multilingual voice overs.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <div style={{ textAlign: "center" }}>
          <Link
            to="/contact"
            style={{
              backgroundColor: "#4b47a0",
              color: "#fff",
              padding: "1.1rem 3rem",
              borderRadius: "36px",
              fontWeight: "700",
              fontSize: "1.2rem",
              boxShadow: "0 6px 16px rgba(75, 71, 160, 0.75)",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
              display: "inline-block",
              userSelect: "none",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3a3780")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#4b47a0")}
          >
            Request a Free Consultation
          </Link>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.9rem",
              color: "#666",
              fontWeight: 500,
            }}
          >
            Or reach out via WhatsApp for a quick chat!
          </p>
        </div>
      </section>
    </>
  );
};

export default AiGeneration;
