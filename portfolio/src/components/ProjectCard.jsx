import React from "react";

export default function ProjectCard({ title, description, tech, demoLink, repoLink, variant }) {
  return (
    <article className="project-card">
      <div className={`project-shot ${variant}`}>
        <div className="shot-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="shot-body">
          <div className="shot-sidebar" />
          <div className="shot-panel" />
          <div className="shot-panel small" />
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 max-w-[300px] text-sm leading-6 text-white/72">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="tech-pill">{item}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          <a href={demoLink} className="small-button primary">
            Live Demo <span aria-hidden="true">↗</span>
          </a>
          <a href={repoLink} className="small-button dark">
            GitHub <span aria-hidden="true">●</span>
          </a>
        </div>
      </div>
    </article>
  );
}
