import React, { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Hackathon from "./pages/Hackathon.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useLenis from "./hooks/useLenis.js";

export default function App() {
  const scrollRef = useRef(null);
  useLenis(scrollRef);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="portfolio-shell bg-background text-white selection:bg-primary selection:text-white"
    >
      <div className="ambient-glow glow-one" />
      <div className="ambient-glow glow-two" />
      <Navbar />
      <main ref={scrollRef} className="cinematic-scroll">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Hackathon />
        <Contact />
        <Footer />
      </main>
    </motion.div>
  );
}
