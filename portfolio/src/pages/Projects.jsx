import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const portfolioProjects = [
  {
    variant: "vector",
    title: "VectorHire",
    description: "AI-powered hiring platform with intelligent workflows and modern backend architecture.",
    tech: ["Python", "FastAPI", "PostgreSQL", "RAG", "LangChain"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    variant: "portfolio",
    title: "Personal Portfolio",
    description: "Modern responsive portfolio with smooth animations and interactive UI.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "#",
    repoLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="page-section px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="section-heading uppercase text-primary">PROJECTS</p>
        <div className="heading-line" />
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
