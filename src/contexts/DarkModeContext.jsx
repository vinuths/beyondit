import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    const root = document.documentElement;

    // Add smooth transition effect on background and color changes
    root.style.transition = "background-color 0.3s ease, color 0.3s ease";

    if (darkMode) {
      root.classList.add("dark");
      // Optionally update CSS variables here for dark theme
      root.style.setProperty("--background-color", "#121212");
      root.style.setProperty("--text-color", "#f0f0f0");
      root.style.setProperty("--primary-color", "#5a67d8");
    } else {
      root.classList.remove("dark");
      // Reset CSS variables or set light theme vars
      root.style.setProperty("--background-color", "#ffffff");
      root.style.setProperty("--text-color", "#1a202c");
      root.style.setProperty("--primary-color", "#5a67d8");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
