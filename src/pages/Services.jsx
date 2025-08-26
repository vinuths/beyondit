import React from "react";
import { Helmet } from "react-helmet";
import ServiceCard from "../components/ServiceCard";
import {
  FaCode,
  FaDatabase,
  FaNetworkWired,
  FaLock,
  FaPencilRuler,
} from "react-icons/fa";

const containerStyle = {
  maxWidth: "1200px",
  margin: "3rem auto",
  padding: "0 1rem",
};

const headingStyle = {
  fontSize: "2.75rem",
  fontWeight: "700",
  marginBottom: "2.5rem",
  color: "var(--primary-color, #5a67d8)",
  textAlign: "center",
};

const baseGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2.5rem",
};

const smGridStyle = {
  gridTemplateColumns: "repeat(2, 1fr)",
};

const mdGridStyle = {
  gridTemplateColumns: "repeat(3, 1fr)",
};

const lgGridStyle = {
  gridTemplateColumns: "repeat(5, 1fr)",
};

const useResponsiveGrid = () => {
  const [columns, setColumns] = React.useState(baseGridStyle);

  React.useEffect(() => {
    const updateGrid = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setColumns({ ...baseGridStyle, ...lgGridStyle });
      } else if (width >= 900) {
        setColumns({ ...baseGridStyle, ...mdGridStyle });
      } else if (width >= 600) {
        setColumns({ ...baseGridStyle, ...smGridStyle });
      } else {
        setColumns(baseGridStyle);
      }
    };
    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  return columns;
};

const Services = () => {
  const services = [
    {
      icon: <FaCode style={{ color: "#5a67d8", fontSize: "3rem" }} />,
      title: "Web Development",
      description:
        "Creating responsive and modern websites tailored to your business needs.",
      link: "/services/web-development",
    },
    {
      icon: <FaPencilRuler style={{ color: "#5a67d8", fontSize: "3rem" }} />,
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user interfaces for optimal experience.",
      link: "/services/ui-ux-design",
    },
    {
      icon: <FaDatabase style={{ color: "#5a67d8", fontSize: "3rem" }} />,
      title: "Logo Design",
      description: "Crafting unique and memorable logos to represent your brand identity.",
      link: "/services/logo-design",
    },
    {
      icon: <FaNetworkWired style={{ color: "#5a67d8", fontSize: "3rem" }} />,
      title: "Digital Marketing",
      description: "Boost your online presence with targeted marketing strategies.",
      link: "/services/digital-marketing",
    },
    {
      icon: <FaLock style={{ color: "#5a67d8", fontSize: "3rem" }} />,
      title: "AI Generation & Voice Over Videos",
      description:
        "Produce engaging AI-generated videos with professional voice overs.",
      link: "/services/ai-generation",
    },
  ];

  const gridStyle = useResponsiveGrid();

  return (
    <>
      <Helmet>
        <title>BeyondIT - Services</title>
        <meta
          name="description"
          content="Explore the wide range of IT services offered by BeyondIT."
        />
      </Helmet>

      <section style={containerStyle}>
        <h1 style={headingStyle}>Our Services</h1>

        <div style={gridStyle}>
          {services.map(({ icon, title, description, link }, idx) => (
            <ServiceCard
              key={idx}
              icon={icon}
              title={title}
              description={description}
              link={link}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
