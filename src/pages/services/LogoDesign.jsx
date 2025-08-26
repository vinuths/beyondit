import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const LogoDesign = () => {
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
    fontSize: "1.25rem",
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
    boxShadow: "0 4px 18px rgba(90, 103, 216, 0.15)",
    transition: "transform 0.3s ease",
    cursor: "default",
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
      title: "Custom & Unique Designs",
      description:
        "Every logo we create is 100% original, tailored specifically to your brand identity and values.",
    },
    {
      title: "Versatile Usage",
      description:
        "Your logo will look perfect across all platforms – from business cards to billboards and digital media.",
    },
    {
      title: "Collaborative Process",
      description:
        "We work closely with you to incorporate feedback and ensure your vision shines through.",
    },
    {
      title: "Fast Delivery",
      description:
        "Get your final logo concepts quickly without compromising on quality or creativity.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>BeyondIT - Logo Design Services</title>
        <meta
          name="description"
          content="Professional, memorable logo design services tailored for your brand identity."
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

        <h1 style={headingStyle}>Logo Design That Speaks Your Brand</h1>
        <p style={subheadingStyle}>
          Bold, memorable, and timeless logos crafted to elevate your brand identity.
        </p>

        <p style={paragraphStyle}>
          We specialize in creating logos that are not just visually striking but also convey your brand's core message clearly and effectively. Our collaborative approach ensures your ideas are brought to life with creativity and precision.
        </p>

        <div style={featuresContainerStyle}>
          {features.map(({ title, description }, idx) => (
            <div
              key={idx}
              style={featureCardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              aria-label={title}
            >
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
          aria-label="Contact us to get your logo designed"
        >
          Get Your Custom Logo Now
        </button>
      </section>
    </>
  );
};

export default LogoDesign;
