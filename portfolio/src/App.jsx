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
import MobileLayout from "./components/MobileLayout.jsx";

export default function App() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [introFinished, setIntroFinished] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll while intro is playing and handle desktop scrollbars
  useEffect(() => {
    if (!isMobile) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }, [introFinished, isMobile]);

  if (isMobile) {
    return <MobileLayout />;
  }

  return (
    <>
      <CustomCursor />

      {/* Intro Animation Overlay (Desktop Only) */}
      {!introFinished && (
        <IntroAnimation
          onRevealStart={() => setIsRevealing(true)}
          onComplete={() => setIntroFinished(true)}
        />
      )}

      {/* Main App Content - Cinematic Diary Entry Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(15px)" }}
        animate={{
          opacity: isRevealing ? 1 : 0,
          scale: isRevealing ? 1 : 0.95,
          y: isRevealing ? 0 : 30,
          filter: isRevealing ? "blur(0px)" : "blur(15px)"
        }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        className="portfolio-shell bg-transparent text-white selection:bg-primary selection:text-white"
        style={{ pointerEvents: isRevealing ? "auto" : "none" }}
      >
        <div className="cinematic-background" />
        <div className="ambient-glow glow-one" />
        <div className="ambient-glow glow-two" />
        <div className="ambient-glow glow-three" />

        <Navbar isMobile={isMobile} />

        <main className="cinematic-scroll">
          <Home isMobile={isMobile} />
          <About isMobile={isMobile} />
          <Skills />
          <Projects isMobile={isMobile} />
          <Hackathon />
          <Contact isMobile={isMobile} />
        </main>
      </motion.div>
    </>
  );
}
