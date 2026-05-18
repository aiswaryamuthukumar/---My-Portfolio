import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, demoLink, repoLink, variant, imageUrl }) {
  return (
    <motion.article
      className="rounded-2xl overflow-hidden border border-white/10 bg-[#08080a] flex flex-col group"
      variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.72, ease: "easeOut" }}
      whileHover={{ y: -6, borderColor: "rgba(255,0,79,0.5)" }}
    >
      {/* Full-width image thumbnail */}
      <div className="w-full aspect-video overflow-hidden bg-[#0a0a0c] shrink-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-top block"
          />
        ) : (
          <div className={`w-full project-shot ${variant}`}>
            <div className="shot-topbar"><span /><span /><span /></div>
            <div className="shot-body">
              <div className="shot-sidebar" />
              <div className="shot-panel" />
              <div className="shot-panel small" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-white/60">{description}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tech.map((item) => (
            <span key={item} className="tech-pill">{item}</span>
          ))}
        </div>
        <div className="mt-3 flex gap-3">
          <motion.a href={demoLink} className="small-button primary" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            Live Demo <span aria-hidden="true">↗</span>
          </motion.a>
          <motion.a href={repoLink} className="small-button dark" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            GitHub <span aria-hidden="true">●</span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
