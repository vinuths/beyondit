import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  // Detect dark mode based on user system preference
  const darkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const containerStyle = {
    maxWidth: "1000px",
    margin: "3rem auto",
    padding: "1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#000", // dark black text color
    backgroundColor: darkMode ? "#121212" : "transparent",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "800",
    textAlign: "center",
    color: "#000", // black heading
    marginBottom: "2rem",
  };

  const contactInfoContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "1.5rem",
    marginBottom: "3rem",
  };

  const infoCard = {
    flex: "1 1 250px",
    backgroundColor: darkMode ? "#1f2937" : "#f8f9ff",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: darkMode
      ? "0 4px 12px rgba(255, 255, 255, 0.05)"
      : "0 4px 12px rgba(0, 0, 0, 0.05)",
    textAlign: "center",
    color: "#000", // black text inside cards
  };

  const iconStyle = {
    fontSize: "1.75rem",
    marginBottom: "0.5rem",
    color: "var(--primary-color, #5a67d8)",
  };

  const formContainer = {
    backgroundColor: darkMode ? "#1e293b" : "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: darkMode
      ? "0 4px 15px rgba(255, 255, 255, 0.1)"
      : "0 4px 15px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "600",
    color: "#000", // black labels
  };

  const inputStyle = {
    width: "100%",
    padding: "0.6rem 1rem",
    marginBottom: "1.25rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: darkMode ? "1px solid #374151" : "1px solid #ccc",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    transition: "border-color 0.3s ease",
    backgroundColor: darkMode ? "#1f2937" : "#fff",
    color: "#000", // black input text
  };

  const inputFocusStyle = {
    borderColor: "var(--primary-color, #5a67d8)",
    boxShadow: "0 0 6px rgba(90, 103, 216, 0.3)",
    backgroundColor: darkMode ? "#111827" : "#fff",
    color: "#000", // black input text on focus
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "none",
    minHeight: "120px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.85rem",
    fontSize: "1.1rem",
    backgroundColor: "var(--primary-color, #5a67d8)",
    color: "#fff",
    fontWeight: "700",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: darkMode ? "0 4px 10px rgba(90, 103, 216, 0.6)" : undefined,
  };

  const buttonHoverStyle = {
    backgroundColor: "#434190",
  };

  const successMsgStyle = {
    color: darkMode ? "#68d391" : "#2f855a",
    fontWeight: "600",
    fontSize: "1.125rem",
    textAlign: "center",
    padding: "2rem 1rem",
  };

  const mapStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "12px",
    border: "none",
    marginTop: "3rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const FocusableInput = (props) => {
    const [focused, setFocused] = useState(false);
    return (
      <input
        {...props}
        style={focused ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    );
  };

  const FocusableTextarea = (props) => {
    const [focused, setFocused] = useState(false);
    return (
      <textarea
        {...props}
        style={focused ? { ...textareaStyle, ...inputFocusStyle } : textareaStyle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    );
  };

  return (
    <>
      <Helmet>
        <title>BeyondIT - Contact</title>
        <meta
          name="description"
          content="Get in touch with BeyondIT for project inquiries and technical support."
        />
      </Helmet>

      {/* Mobile responsiveness styles */}
      <style>{`
        @media (max-width: 768px) {
          h1 { font-size: 2rem !important; }
          input, textarea { font-size: 0.95rem !important; padding: 0.5rem 0.9rem !important; }
          ${/* Stack contact cards vertically */ ""}
          div[style*='flex-wrap: wrap'] { flex-direction: column !important; align-items: center !important; }
          div[style*='flex: 1 1 250px'] { width: 90% !important; max-width: none !important; }
          ${/* Reduce map height on mobile */ ""}
          iframe { height: 250px !important; }
        }
      `}</style>

      <div style={containerStyle}>
        <h1 style={headingStyle}>Get in Touch</h1>

        {/* Contact Info Cards */}
        <div style={contactInfoContainer}>
          <div style={infoCard}>
            <div style={iconStyle}>
              <FaMapMarkerAlt />
            </div>
            <p>
              <strong>Our Office</strong>
            </p>
            <p>
              18 bachegowda layout anjnapura
              <br />
              Bengaluru, 560062
            </p>
          </div>

          <div style={infoCard}>
            <div style={iconStyle}>
              <FaPhoneAlt />
            </div>
            <p>
              <strong>Call Us</strong>
            </p>
            <p>
              +91 974388082
              <br />
              Mon–Fri, 9am–6pm
            </p>
          </div>

          <div style={infoCard}>
            <div style={iconStyle}>
              <FaEnvelope />
            </div>
            <p>
              <strong>Email</strong>
            </p>
            <p>
              support@beyondit.com
              <br />
              info@beyondit.com
            </p>
          </div>
        </div>

        {/* Form */}
        <div style={formContainer}>
          {submitted ? (
            <p style={successMsgStyle}>
              Thank you for your message! We'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" style={labelStyle}>
                Name
              </label>
              <FocusableInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />

              <label htmlFor="email" style={labelStyle}>
                Email
              </label>
              <FocusableInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />

              <label htmlFor="message" style={labelStyle}>
                Message
              </label>
              <FocusableTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                style={btnHover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Optional Map */}
        <iframe
          title="BeyondIT Office Location"
          style={mapStyle}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.728953273988!2d-74.00594168459453!3d40.71277577933183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1633293137375!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
