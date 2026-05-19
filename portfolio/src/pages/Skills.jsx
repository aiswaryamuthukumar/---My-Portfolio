import React from "react";
import { motion } from "framer-motion";

// High-fidelity custom inline SVG icons for standard logos
const ICONS = {
  html: (
    <svg className="w-5 h-5 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.165l-.426 4.826-2.872.774-2.893-.777-.184-2.121H6.182l.348 4.117 5.447 1.512 5.485-1.51 1.054-12.016H8.531z" />
    </svg>
  ),
  css: (
    <svg className="w-5 h-5 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.165l-.426 4.826-2.872.774-2.893-.777-.184-2.121H6.182l.348 4.117 5.447 1.512 5.485-1.51 1.054-12.016H8.531z" transform="rotate(180 12 12)" />
    </svg>
  ),
  javascript: (
    <svg className="w-5 h-5 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm20.06 15.52c-.67-.8-1.53-1.37-2.67-1.37-1.2 0-1.84.55-1.84 1.28 0 .87.57 1.17 1.54 1.58l.94.39c1.6.67 2.66 1.49 2.66 3.65 0 2.24-1.74 3.73-4.56 3.73-2.39 0-3.9-1.2-4.66-2.73l2.03-1.18c.55.83 1.17 1.42 2.47 1.42 1.04 0 1.76-.49 1.76-1.18 0-.75-.52-.99-1.44-1.39l-.9-.38c-1.55-.65-2.64-1.46-2.64-3.5 0-2.02 1.63-3.48 4.17-3.48 2.1 0 3.48 1.02 4.14 2.3l-2.06 1.25zM9.04 9.94v8.37c0 1.45-.63 2.1-1.92 2.1-1.13 0-1.79-.6-1.79-1.97V9.94H2.76v8.83c0 3.32 1.76 4.96 4.7 4.96 3.03 0 4.8-1.64 4.8-4.96V9.94H9.04z" />
    </svg>
  ),
  react: (
    <svg className="w-5 h-5 text-[#58C4DC]" viewBox="-11.5 -10.23174 23 20.46348">
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  tailwind: (
    <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.002 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.002 12z" />
    </svg>
  ),
  python: (
    <svg className="w-5 h-5 text-[#3776AB]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.97 0C5.352 0 5.617 2.87 5.617 2.87l.006 2.978h6.425v.91h-8.87S0 6.115 0 12.723c0 6.607 2.81 6.38 2.81 6.38l2.5-.002.008-3.535s-.08-4.24 4.16-4.24h4.162s4.113-.03 4.113-4.053V3.125S17.75 0 11.97 0zm.06 24c6.617 0 6.353-2.87 6.353-2.87l-.006-2.978h-6.425v-.91h8.87s3.183.643 3.183-5.965c0-6.608-2.81-6.38-2.81-6.38l-2.5.002-.008 3.535s.08 4.24-4.16 4.24h-4.162s-4.113.03-4.113 4.053v4.162S6.25 24 12.03 24z" />
    </svg>
  ),
  fastapi: (
    <svg className="w-5 h-5 text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L3.5 12h7L9 24l8.5-12h-7L12 0z" />
    </svg>
  ),
  postgresql: (
    <svg className="w-5 h-5 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.66 0 3 1.34 3 3v1.9c1.22.42 2 1.56 2 2.9 0 1.09-.59 2.05-1.1 2.59z" />
    </svg>
  ),
  langchain: (
    <svg className="w-5 h-5 text-[#D89A8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  rag: (
    <svg className="w-5 h-5 text-[#D89A8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  prompt: (
    <svg className="w-5 h-5 text-[#D89A8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  ai_integration: (
    <svg className="w-5 h-5 text-[#D89A8F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M12 3v2M5 9h14M5 21h14M10 9v12M14 9v12M9 13h6" />
    </svg>
  ),
  git: (
    <svg className="w-5 h-5 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.624l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.655 1.258.428 1.9l2.747 2.747c.642-.226 1.385-.088 1.9.43.746.745.746 1.957 0 2.704-.746.747-1.958.747-2.705 0-.525-.526-.659-1.282-.42-1.942L12.57 9.42c-.21.066-.425.1-.639.1-.48 0-.946-.188-1.298-.54-.515-.515-.653-1.254-.43-1.89L7.464 4.346l-7.01 7.01c-.604.604-.604 1.581 0 2.185l10.478 10.478c.604.604 1.582.604 2.187 0l10.427-10.427c.606-.603.606-1.58 0-2.184z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  vscode: (
    <svg className="w-5 h-5 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.985 17.56L12.566 2.41a1.272 1.272 0 00-1.793-.198L1.416 9.475A1.27 1.27 0 001.218 11.27l11.42 10.32a1.272 1.272 0 001.791-.198l9.556-3.834a1.272 1.272 0 000-2.002zM12.9 14.15V9.85l3.05 2.15-3.05 2.15z" />
    </svg>
  ),
  netlify: (
    <svg className="w-5 h-5 text-[#00AD9F]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V17h-2v-.07a7.002 7.002 0 01-5.93-5.93H5V9h1.07A7.002 7.002 0 0112 3.07V3h2v.07a7.002 7.002 0 015.93 5.93H21v2h-1.07A7.002 7.002 0 0113 16.93z" />
    </svg>
  ),
  render: (
    <svg className="w-5 h-5 text-[#46E3B7]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm8.5 16.6L12 21.5l-8.5-4.9V7.4L12 2.5l8.5 4.9v9.2z" />
    </svg>
  )
};

const PANEL_DATA = [
  {
    id: "ai",
    title: "AI & Technology",
    items: [
      { name: "LangChain", key: "langchain" },
      { name: "RAG", key: "rag" },
      { name: "Prompt Eng.", key: "prompt" },
      { name: "AI Integration", key: "ai_integration" }
    ],
    col: "left"
  },
  {
    id: "backend",
    title: "Backend & Data",
    items: [
      { name: "Python", key: "python" },
      { name: "FastAPI", key: "fastapi" },
      { name: "PostgreSQL", key: "postgresql" }
    ],
    col: "left"
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { name: "HTML", key: "html" },
      { name: "CSS", key: "css" },
      { name: "JavaScript", key: "javascript" },
      { name: "React", key: "react" },
      { name: "Tailwind CSS", key: "tailwind" }
    ],
    col: "right"
  },
  {
    id: "workflow",
    title: "Workflow & Delivery",
    items: [
      { name: "Git", key: "git" },
      { name: "GitHub", key: "github" },
      { name: "VS Code", key: "vscode" },
      { name: "Netlify", key: "netlify" },
      { name: "Render", key: "render" }
    ],
    col: "right"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="page-section px-5 sm:px-8 lg:px-12 relative overflow-hidden flex items-center justify-center !py-4">
      

      <div className="mx-auto max-w-7xl relative z-10 w-full flex flex-col items-center">
        
        {/* Title Section */}
        <div className="flex flex-col items-center text-center mb-3">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-[#D89A8F] mb-1.5"
          >
            WHAT I USE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white"
          >
            TECH <span className="text-[#D89A8F]">STACKS</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-2.5 h-[2px] w-12 bg-[#D89A8F]"
          />
        </div>

        {/* Cinematic Centerpiece Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center justify-center min-h-[380px] relative">
          
          {/* Background Subtle Curved Connectors (Desktop Only) */}
          <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Top-Left Curve */}
              <path d="M 31.5 25 C 38 25, 44 42, 50 50" stroke="url(#connector-gradient-left)" strokeWidth="0.25" strokeDasharray="0.6 0.6" fill="none" />
              {/* Bottom-Left Curve */}
              <path d="M 31.5 75 C 38 75, 44 58, 50 50" stroke="url(#connector-gradient-left)" strokeWidth="0.25" strokeDasharray="0.6 0.6" fill="none" />
              {/* Top-Right Curve */}
              <path d="M 68.5 25 C 62 25, 56 42, 50 50" stroke="url(#connector-gradient-right)" strokeWidth="0.25" strokeDasharray="0.6 0.6" fill="none" />
              {/* Bottom-Right Curve */}
              <path d="M 68.5 75 C 62 75, 56 58, 50 50" stroke="url(#connector-gradient-right)" strokeWidth="0.25" strokeDasharray="0.6 0.6" fill="none" />
              
              <defs>
                <linearGradient id="connector-gradient-left" x1="31.5" y1="0" x2="50" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(216, 154, 143, 0.25)" />
                  <stop offset="75%" stopColor="rgba(216, 154, 143, 0.08)" />
                  <stop offset="100%" stopColor="rgba(216, 154, 143, 0)" />
                </linearGradient>
                <linearGradient id="connector-gradient-right" x1="68.5" y1="0" x2="50" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(216, 154, 143, 0.25)" />
                  <stop offset="75%" stopColor="rgba(216, 154, 143, 0.08)" />
                  <stop offset="100%" stopColor="rgba(216, 154, 143, 0)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Left Columns: AI & Backend Panels */}
          <div className="lg:col-span-4 flex flex-col gap-4 w-full max-w-sm mx-auto z-10">
            {PANEL_DATA.filter(p => p.col === "left").map((panel) => (
              <motion.article
                key={panel.id}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="relative rounded-2xl bg-[#04070D]/40 border border-[#D89A8F]/15 shadow-xl p-4 backdrop-blur-xl group hover:border-[#D89A8F]/30 transition-colors flex flex-col"
              >
                {/* Accent Panel Glow Tag */}
                <div className="flex items-center gap-2 mb-3 pb-1.5 border-b border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D89A8F] shadow-[0_0_8px_rgba(216,154,143,0.8)]" />
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">{panel.title}</h3>
                </div>

                {/* Tech Icons Grid */}
                <div className="grid grid-cols-4 gap-3 items-center justify-items-center">
                  {panel.items.map((item) => (
                    <div key={item.key} className="flex flex-col items-center gap-1.5 group/item">
                      <div className="w-8 h-8 rounded-full bg-[#05080E]/80 border border-[#D89A8F]/12 flex items-center justify-center group-hover/item:border-[#D89A8F]/40 transition-colors shadow-inner">
                        {ICONS[item.key]}
                      </div>
                      <span className="text-[9px] font-bold tracking-wider text-white/50 group-hover/item:text-white transition-colors text-center whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Center Column: Feathered Blended Character */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[260px]">
            {/* Cinematic Rose-Gold Ambient Diffusion Backdrop */}
            <div className="absolute w-[280px] h-[280px] bg-[radial-gradient(circle_at_center,rgba(216,154,143,0.06)_0%,rgba(4,7,13,0)_70%)] pointer-events-none z-0" />

            {/* Circular holographic rings fading out */}
            <div className="absolute w-[190px] h-[190px] rounded-full border border-dashed border-[#D89A8F]/10 flex items-center justify-center pointer-events-none z-0">
              <div className="absolute inset-6 rounded-full border border-[#D89A8F]/5 scale-105" />
              <div className="absolute inset-12 rounded-full bg-[radial-gradient(circle,rgba(216,154,143,0.03)_0%,transparent_80%)]" />
            </div>

            {/* Floating Character Container */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 6.0,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-[210px] h-[210px] flex items-center justify-center pointer-events-none"
            >
              <img
                src="/images/tech-girl.png"
                alt="Tech Illustration Character"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(4,7,13,0.85)]"
              />
            </motion.div>
          </div>

          {/* Right Columns: Frontend & Workflow Panels */}
          <div className="lg:col-span-4 flex flex-col gap-4 w-full max-w-sm mx-auto z-10">
            {PANEL_DATA.filter(p => p.col === "right").map((panel) => (
              <motion.article
                key={panel.id}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="relative rounded-2xl bg-[#04070D]/40 border border-[#D89A8F]/15 shadow-xl p-4 backdrop-blur-xl group hover:border-[#D89A8F]/30 transition-colors flex flex-col"
              >
                {/* Accent Panel Glow Tag */}
                <div className="flex items-center gap-2 mb-3 pb-1.5 border-b border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D89A8F] shadow-[0_0_8px_rgba(216,154,143,0.8)]" />
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">{panel.title}</h3>
                </div>

                {/* Tech Icons Grid */}
                <div className="grid grid-cols-4 gap-3 items-center justify-items-center">
                  {panel.items.map((item) => (
                    <div key={item.key} className="flex flex-col items-center gap-1.5 group/item">
                      <div className="w-8 h-8 rounded-full bg-[#05080E]/80 border border-[#D89A8F]/12 flex items-center justify-center group-hover/item:border-[#D89A8F]/40 transition-colors shadow-inner">
                        {ICONS[item.key]}
                      </div>
                      <span className="text-[9px] font-bold tracking-wider text-white/50 group-hover/item:text-white transition-colors text-center whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
