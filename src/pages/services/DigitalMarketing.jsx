import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { FaBullhorn, FaChartLine, FaUsers, FaGlobe } from "react-icons/fa";

const DigitalMarketing = () => {
  const navigate = useNavigate();

  const containerStyle = {
    maxWidth: 900,
    margin: "3rem auto",
    padding: "0 1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.6,
    color: "#2d3748",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "700",
    color: "#5a67d8",
    marginBottom: "1rem",
    letterSpacing: "1.1px",
  };

  const paragraphStyle = {
    fontSize: "1.15rem",
    color: "#4a5568",
    marginBottom: "2.5rem",
    maxWidth: "720px",
  };

  const backButtonStyle = {
    display: "inline-block",
    marginBottom: "2rem",
    backgroundColor: "#5a67d8",
    color: "#fff",
    padding: "12px 22px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1rem",
    boxShadow: "0 4px 14px rgba(90, 103, 216, 0.3)",
    transition: "background-color 0.3s ease",
  };

  const featureCardStyle = {
    backgroundColor: "#f7f9fc",
    borderRadius: "16px",
    padding: "2rem 1.8rem",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(90, 103, 216, 0.12)",
    cursor: "default",
    transition: "transform 0.3s ease",
  };

  const buttonCTAStyle = {
    backgroundColor: "#4b47a0",
    color: "#fff",
    padding: "1.1rem 3rem",
    borderRadius: "36px",
    fontWeight: "700",
    fontSize: "1.25rem",
    boxShadow: "0 6px 16px rgba(75, 71, 160, 0.75)",
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    marginTop: "3rem",
    display: "inline-block",
  };

  const features = [
    {
      icon: <FaBullhorn size={36} color="#5a67d8" aria-hidden="true" />,
      title: "Social Media Marketing",
      description:
        "Boost your brand presence and engagement across platforms like Facebook, Instagram, LinkedIn, and Twitter.",
    },
    {
      icon: <FaChartLine size={36} color="#5a67d8" aria-hidden="true" />,
      title: "SEO Optimization",
      description:
        "Improve your website rankings, drive organic traffic, and convert visitors into customers.",
    },
    {
      icon: <FaUsers size={36} color="#5a67d8" aria-hidden="true" />,
      title: "Targeted Ads",
      description:
        "Reach your ideal customers with precision through Google Ads, Facebook Ads, and other paid campaigns.",
    },
    {
      icon: <FaGlobe size={36} color="#5a67d8" aria-hidden="true" />,
      title: "Content Marketing",
      description:
        "Engage and educate your audience with compelling blogs, videos, and newsletters.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>BeyondIT - Digital Marketing Services</title>
        <meta
          name="description"
          content="Comprehensive digital marketing services to grow your brand and boost online presence."
        />
      </Helmet>

      <section style={containerStyle}>
        <button
          style={backButtonStyle}
          onClick={() => navigate(-1)}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4a56c8")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#5a67d8")}
          aria-label="Go back"
        >
          ← Back
        </button>

        <h1 style={headingStyle}>Digital Marketing Services</h1>
        <p style={paragraphStyle}>
          Elevate your business with our full suite of digital marketing solutions.
          From growing your social media presence to driving targeted traffic through SEO and paid ads, we tailor strategies that deliver measurable results.
        </p>

        {/* Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {features.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              style={featureCardStyle}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              aria-label={title}
            >
              <div style={{ marginBottom: "1rem" }}>{icon}</div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "#4a4e69",
                  marginBottom: "0.5rem",
                }}
              >
                {title}
              </h3>
              <p style={{ color: "#61688b", fontSize: "1rem" }}>{description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
       <button
  style={buttonCTAStyle}
  onClick={() => navigate("/contact")}
  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3a3780")}
  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#4b47a0")}
  aria-label="Request a free consultation"
>
  Request a Free Consultation
</button>

      </section>
    </>
  );
};

export default DigitalMarketing;
