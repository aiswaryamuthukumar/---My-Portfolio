import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ title, description, tech, demoLink, repoLink, variant, imageUrl, index }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const num = ((index || 0) + 1).toString().padStart(2, "0");

  return (
    <motion.article
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#08080a] flex flex-col group cursor-pointer"
      variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.72, ease: "easeOut" }}
      whileHover={!isRevealed ? { y: -4, borderColor: "rgba(255,0,79,0.5)" } : { y: -6, borderColor: "rgba(255,0,79,0.5)" }}
      onClick={() => { if (!isRevealed) setIsRevealed(true); }}
    >
      
      {/* ─── ACTUAL CARD CONTENT ─── */}
      <motion.div
        className="flex flex-col flex-1"
        initial="hidden"
        animate={isRevealed ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 1 }, 
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
        }}
      >
        <div className="w-full aspect-video overflow-hidden bg-[#0a0a0c] shrink-0">
          <motion.div
            variants={{ hidden: { scale: 1 }, visible: { scale: 1.05, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="w-full h-full"
          >
            {imageUrl ? (
              <img src={imageUrl} alt={title} className="w-full h-full object-cover object-top block" />
            ) : (
              <div className={`w-full h-full project-shot ${variant}`}>
                <div className="shot-topbar"><span /><span /><span /></div>
                <div className="shot-body">
                  <div className="shot-sidebar" />
                  <div className="shot-panel" />
                  <div className="shot-panel small" />
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <div className="flex flex-col flex-1 p-4">
          <motion.h3 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-base font-semibold text-white">
            {title}
          </motion.h3>
          
          <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="mt-1 text-xs leading-5 text-white/60">
            {description}
          </motion.p>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="mt-2 flex flex-wrap gap-1.5">
            {tech.map((item) => (
              <span key={item} className="tech-pill">{item}</span>
            ))}
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="mt-3 flex gap-3">
            <a href={demoLink} className="small-button primary hover:-translate-y-[2px] transition-transform">
              Live Demo <span aria-hidden="true">↗</span>
            </a>
            <a href={repoLink} className="small-button dark hover:-translate-y-[2px] transition-transform">
              GitHub <span aria-hidden="true">●</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── FROSTED GLASS REVEAL OVERLAY ─── */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            className="absolute inset-0 z-10 flex flex-col justify-between p-6 bg-[#0a0a0c]/60 backdrop-blur-md"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Subtle red glow in the corner */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#ff004f]/25 rounded-full blur-[50px] pointer-events-none"></div>

            {/* Top Bar */}
            <div className="relative flex justify-between items-center text-[#ff004f] font-mono text-[11px] font-bold tracking-widest z-20">
              <div className="flex items-center gap-2">
                <span>{num}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff004f]"></div>
              </div>
              <div className="flex gap-1 opacity-60">
                <div className="w-1 h-1 rounded-full bg-white"></div>
                <div className="w-1 h-1 rounded-full bg-white"></div>
                <div className="w-1 h-1 rounded-full bg-white"></div>
              </div>
            </div>

            {/* Center Lock Icon / Text */}
            <div className="relative flex-1 flex flex-col items-center justify-center z-20 mt-4">
              <div className="text-[#ff004f] text-[9.5px] font-black tracking-[0.25em] uppercase mb-2">Project</div>
              <div className="text-xl font-black tracking-tight text-white mb-2 text-center">{title}</div>
            </div>

            {/* Click to Reveal Button */}
            <div className="relative mt-auto pt-4 z-20">
              <div className="w-full max-w-[180px] px-5 py-2.5 rounded-xl border border-[#ff004f]/40 bg-[#0a0a0c]/80 backdrop-blur-md text-[#ff004f] text-[12px] font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,0,79,0.15)] transition-all group-hover:border-[#ff004f]/80 group-hover:bg-[#ff004f]/10 mx-auto">
                Click to reveal
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.article>
  );
}
