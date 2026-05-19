import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Hackathon from "./pages/Hackathon.jsx";
import Contact from "./pages/Contact.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import IntroAnimation from "./components/IntroAnimation.jsx";

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  // Lock scroll while intro is playing
  useEffect(() => {
    if (!introFinished) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [introFinished]);

  return (
    <>
      <CustomCursor />
      
      {/* Intro Animation Overlay */}
      {!introFinished && (
        <IntroAnimation onComplete={() => setIntroFinished(true)} />
      )}

      {/* Main App Content - Fades in softly once intro reveals it */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introFinished ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="portfolio-shell bg-background text-white selection:bg-primary selection:text-white"
        style={{ pointerEvents: introFinished ? "auto" : "none" }}
      >
        <div className="ambient-glow glow-one" />
        <div className="ambient-glow glow-two" />
        <Navbar />
        <main className="cinematic-scroll">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Hackathon />
          <Contact />
        </main>
      </motion.div>
    </>
  );
}
