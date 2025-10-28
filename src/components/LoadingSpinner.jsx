import React, { useState, useEffect } from "react";

const LoadingSpinner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spinnerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: isMobile ? "60px 0" : "80px 0",
    width: "100%",
    animation: "fadeIn 0.5s ease-in-out",
  };

  const svgStyle = {
    height: isMobile ? 32 : 48,
    width: isMobile ? 32 : 48,
    color: "#5a67d8", // indigo-600
    animation: "spin 1s linear infinite",
  };

  const circleStyle = {
    opacity: 0.25,
  };

  const pathStyle = {
    opacity: 0.75,
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>

      <div style={spinnerStyle} aria-label="Loading" role="status">
        <svg
          style={svgStyle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            style={circleStyle}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            style={pathStyle}
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      </div>
    </>
  );
};

export default LoadingSpinner;
