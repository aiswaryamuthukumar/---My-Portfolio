import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Hackathon from "./pages/Hackathon.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main className="overflow-hidden">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Hackathon />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
