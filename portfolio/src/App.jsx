import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Hackathon from "./pages/Hackathon.jsx";
import Contact from "./pages/Contact.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="portfolio-shell bg-background text-white selection:bg-primary selection:text-white"
    >
      <CustomCursor />
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
  );
}
