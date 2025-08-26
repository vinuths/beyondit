import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaMobileAlt, FaProjectDiagram, FaLaptopCode } from "react-icons/fa";

const UiUxDesign = () => {
  const navigate = useNavigate();

  const containerStyle = {
    maxWidth: 900,
    margin: "3rem auto",
    padding: "0 1.5rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.6,
    color: "#2d3748",
    backgroundColor: "#f9fafb",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
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
    marginBottom: "1.5rem",
  };

  const paragraphStyle = {
    fontSize: "1.125rem",
    color: "#4a5568",
    marginBottom: "2rem",
    maxWidth: "720px",
  };

  const featuresContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "1.8rem",
    marginBottom: "3rem",
  };

  const featureCardStyle = {
    flex: "1 1 280px",
    backgroundColor: "#fff",
    padding: "1.8rem 1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 18px rgba(76, 81, 191, 0.15)",
    transition: "transform 0.3s ease",
    cursor: "default",
    textAlign: "center",
  };

  const iconStyle = {
    color: "#5a67d8",
    marginBottom: "1rem",
  };

  const featureTitleStyle = {
    fontSize: "1.2rem",
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
    padding: "1rem 3rem",
    borderRadius: "36px",
    fontWeight: "700",
    fontSize: "1.25rem",
    boxShadow: "0 6px 16px rgba(76, 81, 191, 0.75)",
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    marginTop: "1rem",
    transition: "background-color 0.3s ease",
  };

  const features = [
    {
      icon: <FaUsers size={40} style={iconStyle} aria-hidden="true" />,
      title: "User-Centered Research",
      description:
        "We dive deep into user behavior and needs to create designs that resonate and engage.",
    },
    {
      icon: <FaMobileAlt size={40} style={iconStyle} aria-hidden="true" />,
      title: "Responsive Design",
      description:
        "Your products will shine across all devices – mobiles, tablets, and desktops.",
    },
    {
      icon: <FaProjectDiagram size={40} style={iconStyle} aria-hidden="true" />,
      title: "Wireframing & Prototyping",
      description:
        "Visualize the user journey with clear wireframes and interactive prototypes before development.",
    },
    {
      icon: <FaLaptopCode size={40} style={iconStyle} aria-hidden="true" />,
      title: "Seamless Collaboration",
      description:
        "We work closely with your team to ensure the design aligns perfectly with your business goals.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>BeyondIT - UI/UX Design Services</title>
        <meta
          name="description"
          content="Innovative UI/UX design services focused on creating engaging and intuitive digital experiences."
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

        <h1 style={headingStyle}>UI/UX Design that Connects</h1>
        <p style={subheadingStyle}>
          Crafting seamless, user-friendly digital experiences tailored to your audience.
        </p>

        <p style={paragraphStyle}>
          At BeyondIT, we believe that great design is more than just aesthetics. Our UI/UX design service focuses on understanding your users’ needs, simplifying interactions, and creating intuitive interfaces that keep your customers engaged and satisfied.
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

export default UiUxDesign;
