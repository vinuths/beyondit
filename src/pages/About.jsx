import React from "react";
import { Helmet } from "react-helmet";
import { FaLightbulb, FaBullseye, FaHandshake, FaUsers } from "react-icons/fa";

const About = () => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "3rem auto",
    padding: "0 1.25rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "var(--text-color, #2c3e50)",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "800",
    color: "var(--primary-color, #5a67d8)",
    marginBottom: "2rem",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
  };

  const sectionTitleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    color: "var(--primary-color, #5a67d8)",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const paragraphStyle = {
    fontSize: "1.125rem",
    lineHeight: 1.7,
    marginBottom: "1.5rem",
    color: "var(--text-secondary-color, #555)",
  };

  const flexRow = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "2rem",
    marginTop: "2rem",
  };

  const cardStyle = {
    flex: "1 1 250px",
    background: "var(--card-bg, #f8f9ff)",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 4px 10px rgb(90 103 216 / 0.15)",
    textAlign: "center",
    transition: "transform 0.3s ease",
  };

  const iconStyle = {
    fontSize: "3rem",
    color: "var(--primary-color, #5a67d8)",
    marginBottom: "0.75rem",
  };

  const teamSectionStyle = {
    marginTop: "4rem",
  };

  const teamGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "2rem",
  };

  const teamMember = {
    background: "var(--card-bg, #f8f9ff)",
    borderRadius: "12px",
    padding: "1rem",
    boxShadow: "0 4px 10px rgb(90 103 216 / 0.15)",
    textAlign: "center",
  };

  const memberPhoto = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "1rem",
    objectFit: "cover",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const memberName = {
    fontWeight: "700",
    fontSize: "1.1rem",
    marginBottom: "0.25rem",
    color: "var(--primary-color, #5a67d8)",
  };

  const memberRole = {
    fontSize: "0.9rem",
    color: "var(--text-secondary-color, #777)",
  };

  return (
    <>
      <Helmet>
        <title>BeyondIT - About Us</title>
        <meta
          name="description"
          content="Learn more about BeyondIT, our mission, vision, values, and team."
        />
      </Helmet>

      <section style={containerStyle}>
        <h1 style={headingStyle}>About BeyondIT</h1>

        <p style={paragraphStyle}>
          BeyondIT was founded with a mission to deliver innovative technology
          solutions that empower businesses worldwide. Our passionate team
          leverages the latest technologies to create custom software that drives
          success and growth.
        </p>

        <p style={paragraphStyle}>
          We believe in collaboration, transparency, and continuous learning to
          ensure our clients receive top-notch service every step of the way.
        </p>

        {/* Mission, Vision, Values */}
        <div style={flexRow}>
          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={iconStyle}>
              <FaLightbulb />
            </div>
            <h3 style={sectionTitleStyle}>Our Mission</h3>
            <p style={paragraphStyle}>
              To empower businesses by delivering cutting-edge, tailor-made technology
              solutions that fuel innovation and growth.
            </p>
          </div>

          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={iconStyle}>
              <FaBullseye />
            </div>
            <h3 style={sectionTitleStyle}>Our Vision</h3>
            <p style={paragraphStyle}>
              To be a global leader in technology services, recognized for
              creativity, integrity, and customer satisfaction.
            </p>
          </div>

          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={iconStyle}>
              <FaHandshake />
            </div>
            <h3 style={sectionTitleStyle}>Our Values</h3>
            <p style={paragraphStyle}>
              Collaboration, innovation, transparency, and commitment to excellence
              guide everything we do.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <section style={teamSectionStyle}>
          <h2 style={{ ...sectionTitleStyle, justifyContent: "center" }}>
            <FaUsers style={{ marginRight: "0.5rem" }} />
            Meet the Team
          </h2>

          <div style={teamGrid}>
            {/* Replace images and names with your real team data */}
            <div style={teamMember}>
              <img
                // src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="John Doe"
                style={memberPhoto}
              />
              <p style={memberName}>Vinuths</p>
              <p style={memberRole}>Founder & CEO</p>
            </div>

            <div style={teamMember}>
              <img
                // src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Jane Smith"
                style={memberPhoto}
              />
              <p style={memberName}>Jane Smith</p>
              <p style={memberRole}>Chief Technology Officer</p>
            </div>

            <div style={teamMember}>
              <img
                // src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="Michael Brown"
                style={memberPhoto}
              />
              <p style={memberName}>Michael Brown</p>
              <p style={memberRole}>Lead Software Engineer</p>
            </div>

            <div style={teamMember}>
              <img
                // src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Emily Davis"
                style={memberPhoto}
              />
              <p style={memberName}>Emily Davis</p>
              <p style={memberRole}>UX/UI Designer</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
