import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Lenis from "@studio-freight/lenis";

function Root() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkModeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);