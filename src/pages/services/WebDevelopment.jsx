import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { FaCode, FaDatabase, FaRocket, FaMobileAlt } from "react-icons/fa";

const WebDevelopment = () => {
  const navigate = useNavigate();

  const containerStyle = {
    maxWidth: 900,
    margin: "3rem auto",
    padding: "0 1.5rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.7,
    color: "#2d3748",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
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

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#4c51bf",
    marginBottom: "1rem",
    letterSpacing: "1.2px",
  };

  const subheadingStyle = {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#718096",
    marginBottom: "1.8rem",
  };

  const paragraphStyle = {
    fontSize: "1.125rem",
    color: "#4a5568",
    marginBottom: "2.5rem",
    maxWidth: "720px",
  };

  const featuresContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "2rem",
    marginBottom: "3rem",
  };

  const featureCardStyle = {
    flex: "1 1 280px",
    backgroundColor: "#fff",
    padding: "2rem 1.8rem",
    borderRadius: "14px",
    boxShadow: "0 5px 20px rgba(76, 81, 191, 0.12)",
    transition: "transform 0.3s ease",
    cursor: "default",
    textAlign: "center",
  };

  const iconStyle = {
    color: "#5a67d8",
    marginBottom: "1rem",
  };

  const featureTitleStyle = {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#4c51bf",
    marginBottom: "0.75rem",
  };

  const featureDescStyle = {
    fontSize: "1rem",
    color: "#6b7280",
  };

  const ctaButtonStyle = {
    display: "inline-block",
    backgroundColor: "#4c51bf",
    color: "#fff",
    padding: "1.1rem 3.2rem",
    borderRadius: "36px",
    fontWeight: "700",
    fontSize: "1.25rem",
    boxShadow: "0 6px 18px rgba(76, 81, 191, 0.75)",
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    marginTop: "1rem",
    transition: "background-color 0.3s ease",
  };

  const features = [
    {
      icon: <FaCode size={40} style={iconStyle} aria-hidden="true" />,
      title: "Modern Technologies",
      description:
        "We use React, Node.js, Python, and more to build fast, scalable, and secure web applications.",
    },
    {
      icon: <FaDatabase size={40} style={iconStyle} aria-hidden="true" />,
      title: "Robust Backend",
      description:
        "Our backend solutions power your applications with secure databases and efficient APIs.",
    },
    {
      icon: <FaMobileAlt size={40} style={iconStyle} aria-hidden="true" />,
      title: "Responsive & Mobile-first",
      description:
        "Your website will look stunning and perform flawlessly across all devices and screen sizes.",
    },
    {
      icon: <FaRocket size={40} style={iconStyle} aria-hidden="true" />,
      title: "Agile Development",
      description:
        "We follow agile methodologies ensuring transparent communication and timely delivery.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>BeyondIT - Web Development Services</title>
        <meta
          name="description"
          content="Professional web development services using modern tech stacks to build fast, secure, and scalable websites."
        />
      </Helmet>

      <section style={containerStyle}>
        <button
          style={backButtonStyle}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#434bbd")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5a67d8")}
          aria-label="Go back"
        >
          ← Back
        </button>

        <h1 style={headingStyle}>Web Development Services</h1>
        <p style={subheadingStyle}>
          Building performant and scalable websites tailored to your business needs.
        </p>

        <p style={paragraphStyle}>
          At BeyondIT, we deliver professional web development solutions that combine the latest technologies with best practices. Whether you need a simple landing page or a complex web application, our team ensures a smooth user experience, clean code, and responsive designs.
        </p>

        <div style={featuresContainerStyle}>
          {features.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              style={featureCardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              aria-label={title}
            >
              {icon}
              <h3 style={featureTitleStyle}>{title}</h3>
              <p style={featureDescStyle}>{description}</p>
            </div>
          ))}
        </div>

        <button
          style={ctaButtonStyle}
          onClick={() => navigate("/contact")}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3a3f9e")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4c51bf")}
          aria-label="Request a free consultation"
        >
          Request a Free Consultation
        </button>
      </section>
    </>
  );
};

export default WebDevelopment;
