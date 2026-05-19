import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";

const portfolioProjects = [
  {
    variant: "vector",
    title: "VectorHire",
    description: "AI-powered hiring platform with intelligent resume screening, automated recruitment workflows, and modern backend architecture.",
    tech: ["Python", "FastAPI", "PostgreSQL", "RAG", "LangChain"],
    demoLink: "https://vectorhire.netlify.app/",
    repoLink: "https://github.com/aiswaryamuthukumar/VectorHire",
    imageUrl: "/images/VectorHire.png",
  },
  {
    variant: "portfolio",
    title: "Personal Portfolio",
    description: "Modern responsive portfolio with smooth animations and interactive UI.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "#",
    repoLink: "https://github.com/aiswaryamuthukumar/---My-Portfolio",
    imageUrl: "/images/portfolio.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="page-section px-5 sm:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }} 
            transition={{ duration: 0.65, ease: "easeOut" }} 
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider"
          >
            <span className="text-white">MY</span> <span className="text-[#ff004f]">PROJECTS</span>
          </motion.h2>
          <motion.div 
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }} 
            transition={{ duration: 0.55, ease: "easeOut" }} 
            className="mt-4 h-[2px] w-12 bg-[#ff004f]" 
          />
        </div>
        <motion.div className="mt-4 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
          {portfolioProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
