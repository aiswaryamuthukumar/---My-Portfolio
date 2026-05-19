import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioProjects = [
  {
    num: "01",
    title: "VectorHire",
    description: "AI recruitment platform for smarter hiring with semantic matching and automated screening workflow.",
    tech: ["FastAPI", "Supabase", "PostgreSQL", "pgvector", "RAG", "Vector Embeddings"],
    demoLink: "https://vectorhire.netlify.app/",
    repoLink: "https://github.com/aiswaryamuthukumar/VectorHire",
    variant: "vector",
  },
  {
    num: "02",
    title: "CSR HealthTrace",
    description: "A blockchain-based healthcare resource tracking platform and AI-powered inventory and transparency management.",
    tech: ["Web Dev", "Blockchain", "AI Dashboard"],
    demoLink: "https://csr-health-trace.onrender.com/",
    repoLink: "https://github.com/aiswaryamuthukumar/med_fusion_project",
    variant: "echoread",
  },
  {
    num: "03",
    title: "Gmail Voice Assist",
    description: "A voice-controlled Gmail assistant for visually challenged users with hands-free email access and AI-powered voice interactions.",
    tech: ["Python", "OpenAI Whisper", "Ollama", "Piper TTS", "Gmail API"],
    demoLink: "#",
    repoLink: "https://github.com/aiswaryamuthukumar/gmail-voiceassist",
    variant: "novapay",
  },
  {
    num: "04",
    title: "P2P Solar Energy Trading Platform",
    description: "A blockchain-based peer-to-peer solar energy trading platform for secure and transparent energy exchange.",
    tech: ["GreenTech", "React", "Blockchain"],
    demoLink: "#",
    repoLink: "https://github.com/aiswaryamuthukumar/dual_dev",
    variant: "taskflow",
  },
];

export default function Projects() {
  const [isDealt, setIsDealt] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  const dealCards = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setIsDealt(true);
      setIsShuffling(false);
    }, 1200); // Shuffling animation time
  };

  return (
    <section id="projects" className="page-section px-5 sm:px-8 lg:px-12 relative overflow-hidden flex flex-col items-center justify-center pt-16 pb-32 mb-20">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(216,154,143,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="mx-auto max-w-6xl w-full relative z-10 flex flex-col items-center">
        
        {/* Title & Cursive Subtitle */}
        <div className="flex flex-col items-center mb-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-2"
          >
            MY <span className="text-[#D89A8F]">PROJECTS</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-[1.5px] w-12 bg-[#D89A8F] mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm font-medium tracking-[0.3em] uppercase text-[#D89A8F]/80"
          >
            Interactive. Elegant. Impactful.
          </motion.p>
        </div>

        {/* ─── INTERACTIVE DEALT CANVAS ─── */}
        <div className="w-full relative min-h-[380px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            {!isDealt ? (
              /* ─── STATE A: STACKED CARD SHUFFLE ─── */
              <motion.div 
                key="stacked-canvas"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative flex flex-col items-center justify-center py-6"
              >
                
                {/* Stacked Cards Container */}
                <div 
                  onClick={dealCards}
                  className="relative w-64 h-[350px] cursor-pointer group flex items-center justify-center"
                >
                  {/* Glowing halo behind stacked deck */}
                  <div className="absolute inset-0 bg-[#D89A8F]/5 rounded-3xl blur-2xl pointer-events-none transform scale-90 transition-transform group-hover:scale-105" />

                  {portfolioProjects.map((project, index) => {
                    const rot = index * 4 - 8; // Card tilt offsets
                    const tx = index * 3 - 6;
                    const ty = index * -4;
                    const tz = index * -3;

                    return (
                      <motion.div
                        key={project.title}
                        animate={isShuffling ? {
                          x: [tx, tx - 30, tx + 30, tx],
                          rotate: [rot, rot + 12, rot - 12, rot],
                          scale: [1, 1.05, 0.95, 1],
                        } : {}}
                        transition={{
                          duration: 1.1,
                          ease: "easeInOut",
                        }}
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          transform: `rotate(${rot}deg) translateX(${tx}px) translateY(${ty}px) translateZ(${tz}px)`,
                          zIndex: index,
                        }}
                        className="rounded-3xl border border-[#D89A8F]/25 bg-[#04070D]/95 shadow-[0_15px_35px_rgba(0,0,0,0.6)] p-6 flex flex-col items-center justify-center select-none transition-all group-hover:border-[#D89A8F]/50"
                      >
                        {/* Elegant Card Back Sigil */}
                        <div className="w-full h-full border border-[#D89A8F]/10 rounded-2xl flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgba(216,154,143,0.03)_0%,transparent_70%)] relative">
                          
                          {/* Fine technical border accents */}
                          <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-[#D89A8F]/20" />
                          <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-[#D89A8F]/20" />
                          <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-[#D89A8F]/20" />
                          <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-[#D89A8F]/20" />

                          {/* Central Technical Folder Badge */}
                          <div className="w-16 h-16 rounded-2xl border border-[#D89A8F]/30 bg-[#04070D] flex flex-col items-center justify-center mb-6 shadow-[0_0_15px_rgba(216,154,143,0.15)] group-hover:shadow-[0_0_25px_rgba(216,154,143,0.3)] transition-all">
                            <svg className="w-6 h-6 text-[#D89A8F] mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            <span className="text-[12px] font-mono font-bold text-white/90">{"</>"}</span>
                          </div>
                          
                          <span className="text-sm font-black uppercase tracking-[0.25em] text-[#D89A8F]/90 mb-2">4 PROJECTS</span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D89A8F]/40 group-hover:text-[#D89A8F]/80 transition-colors">
                            {isShuffling ? "SHUFFLING..." : "CLICK TO SHUFFLE ≫"}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Elegant Cursive Cursive Hand Callout Script (Desktop Only) */}
                <div className="absolute left-full ml-8 top-1/3 w-64 pointer-events-none hidden md:block">
                  <span className="font-['Allura',_cursive] text-3xl text-[#D89A8F]/85 italic block leading-relaxed">
                    Click to Shuffle<br />& reveal the cards
                  </span>
                  
                  {/* Curly Hand-drawn SVG Arrow */}
                  <svg className="w-20 h-16 text-[#D89A8F]/60 mt-2 ml-4" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M 10,10 C 25,45 60,5 50,45" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeDasharray="4 4" 
                    />
                    <path 
                      d="M 42,38 L 50,45 L 53,36" 
                      stroke="currentColor" 
                      strokeWidth="1.8" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

              </motion.div>
            ) : (
              /* ─── STATE B: DISTRIBUTED REVEAL ─── */
              <motion.div
                key="revealed-showcase"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 65, damping: 14 }}
                className="w-full flex flex-col items-center py-4"
              >
                
                {/* Grid layout for 4 cards without scrolling */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-6">
                  {portfolioProjects.map((project, index) => {
                    const cardNum = project.num;

                    return (
                      <div 
                        key={project.title}
                        className="w-full rounded-2xl border border-[#D89A8F]/15 bg-[#04070D]/75 backdrop-blur-xl p-4 flex flex-col group hover:border-[#D89A8F]/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                      >
                        {/* Card Header: 01 .. ... */}
                        <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D89A8F] shadow-[0_0_8px_rgba(216,154,143,0.8)]" />
                            <span className="text-[11px] font-mono text-[#D89A8F] font-bold">{cardNum}</span>
                          </div>
                          <span className="text-white/40 text-[12px] tracking-widest font-bold">● ● ●</span>
                        </div>

                        {/* Card Preview Shot */}
                        <div className="w-full aspect-[4/3] overflow-hidden bg-[#05080E] rounded-xl border border-white/5 mb-3.5 relative">
                          <div className={`w-full h-full project-shot ${project.variant}`}>
                            {/* Inner Mock preview panel layout */}
                            <div className="shot-topbar flex gap-1.5 p-2 border-b border-white/5 bg-[#05080E]/80">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            </div>
                            
                            <div className="shot-body grid grid-cols-1 gap-2 p-3">
                              <div className="h-2 w-12 bg-white/10 rounded-sm" />
                              <div className="min-h-[24px] h-auto w-full bg-[#D89A8F]/5 border border-[#D89A8F]/15 rounded-md flex items-center justify-center py-1 px-2">
                                <span className="text-[7px] md:text-[8px] leading-tight font-mono text-[#D89A8F]/80 uppercase tracking-widest font-black text-center break-words">
                                  {project.title}
                                </span>
                              </div>
                              <div className="h-2.5 w-3/4 bg-white/5 rounded-sm" />
                            </div>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1.5">
                          {project.title}
                        </h4>
                        <p className="text-[11px] leading-[1.6] text-[#AFAFAF] mb-3.5 flex-1 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.map((item) => (
                            <span 
                              key={item} 
                              className="text-[9px] px-2 py-0.5 rounded border border-[#D89A8F]/15 bg-[#D89A8F]/5 text-white/90"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        {/* Links Footer */}
                        <div className="flex justify-between items-center border-t border-white/5 pt-2.5 mt-auto">
                          <a 
                            href={project.repoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[#AFAFAF] hover:text-[#D89A8F] transition-colors flex items-center gap-1.5 text-[11px] font-bold"
                          >
                            {/* GitHub Technical Circle Mark */}
                            <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#D89A8F] transition-colors" />
                            GitHub
                          </a>
                          
                          <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[#D89A8F] hover:text-white transition-colors flex items-center gap-1 text-[11px] font-black uppercase tracking-wider"
                          >
                            Live Link
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
