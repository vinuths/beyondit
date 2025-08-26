import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from "./components/ChatWidget";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const UiUxDesign = lazy(() => import("./pages/services/UiUxDesign"));
const LogoDesign = lazy(() => import("./pages/services/LogoDesign"));
const DigitalMarketing = lazy(() => import("./pages/services/DigitalMarketing"));
const AiGeneration = lazy(() => import("./pages/services/AiGeneration"));

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Navbar />
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />

              {/* Service detail routes */}
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
              <Route path="/services/logo-design" element={<LogoDesign />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/services/ai-generation" element={<AiGeneration />} />

              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Suspense>
      </ErrorBoundary>
      <Footer />
      <ChatWidget />
    </div>
  );
};

const NotFound = () => (
  <section className="text-center py-20">
    <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
    <p className="text-xl text-gray-700 dark:text-gray-300">Page not found.</p>
  </section>
);

export default App;
