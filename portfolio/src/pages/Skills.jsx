import React from "react";
import { motion } from "framer-motion";

const stacks = [
  { icon: "AI", title: "AI & TECHNOLOGY", items: ["RAG", "LangChain", "Prompt Engineering", "AI Integration"] },
  { icon: "</>", title: "FRONTEND", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { icon: "DB", title: "BACKEND & DATA", items: ["Python", "FastAPI", "PostgreSQL"] },
  { icon: "↗", title: "WORKFLOW & DELIVERY", items: ["Git", "GitHub", "VS Code", "Render", "Netlify"] },
];

export default function Skills() {
  return (
    <section id="skills" className="page-section px-5 sm:px-8 lg:px-12 relative overflow-hidden">
      
      {/* Faint Background Watermark Text */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none opacity-[0.02] flex justify-center overflow-hidden">
        <h1 className="text-[9vw] font-black tracking-widest text-white whitespace-nowrap mt-4">TECH STACKS</h1>
      </div>

      <motion.div
        className="mx-auto max-w-7xl relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11 } } }}
      >
        {/* Title Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} 
            className="text-xs font-bold uppercase tracking-[0.4em] text-[#ff004f] mb-3"
          >
            WHAT I USE
          </motion.p>
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} 
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider mb-6"
          >
            <span className="text-white">TECH</span> <span className="text-[#ff004f]">STACKS</span>
          </motion.h2>

          {/* Geometric Separator Graphic */}
          <motion.div 
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-2xl flex items-center justify-center relative scale-90"
          >
            {/* Left Line */}
            <div className="flex-1 flex items-center justify-end">
              <div className="h-[2px] w-full max-w-[150px] bg-gradient-to-r from-transparent to-[#ff004f]"></div>
              <div className="w-3 h-3 border-b-2 border-r-2 border-[#ff004f] transform rotate-45 -mr-1"></div>
              <div className="h-[2px] w-8 bg-[#ff004f]"></div>
            </div>
            
            {/* Center Hexagon & Icon */}
            <div className="mx-2 relative flex items-center justify-center w-10 h-10">
              <svg className="w-10 h-10 text-[#ff004f] absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 22 8 22 16 12 22 2 16 2 8 12 2" />
              </svg>
              <svg className="w-4 h-4 text-[#ff004f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.418.33" />
              </svg>
            </div>
            
            {/* Right Line */}
            <div className="flex-1 flex items-center justify-start">
              <div className="h-[2px] w-8 bg-[#ff004f]"></div>
              <div className="w-3 h-3 border-t-2 border-l-2 border-[#ff004f] transform rotate-45 -ml-1"></div>
              <div className="h-[2px] w-full max-w-[150px] bg-gradient-to-l from-transparent to-[#ff004f]"></div>
            </div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 px-2" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
          {stacks.map((stack) => (
            <motion.article
              key={stack.title}
              className="relative rounded-xl bg-[#09090b] border border-white/5 shadow-lg overflow-hidden flex flex-col p-6 group hover:border-white/10 transition-colors"
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Top Center Circular Badge */}
              <div className="flex justify-center mb-5 relative">
                <div className="w-16 h-16 rounded-full border border-dashed border-[#ff004f]/40 flex items-center justify-center relative">
                  <div className="absolute inset-1.5 rounded-full border border-solid border-[#ff004f]/20 shadow-[0_0_15px_rgba(255,0,79,0.15)] flex items-center justify-center">
                    <span className="text-lg font-bold text-[#ff004f]">{stack.icon}</span>
                  </div>
                </div>
              </div>

              {/* Title & Red Line */}
              <div className="text-center mb-5">
                <h3 className="text-[13px] font-bold text-white uppercase tracking-wide">{stack.title}</h3>
                <div className="h-[1.5px] w-6 bg-[#ff004f] mx-auto mt-2.5 rounded-full"></div>
              </div>

              {/* List Items */}
              <div className="space-y-0 text-[13px] font-medium text-white/80">
                {stack.items.map((item, index) => (
                  <div key={item} className="flex items-center gap-3 border-b border-white/10 py-2.5 last:border-b-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff004f] shrink-0 mt-0.5"></div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              {/* Bottom Right Red Triangle */}
              <div 
                className="absolute bottom-0 right-0 w-5 h-5 bg-[#ff004f] shadow-[0_0_10px_rgba(255,0,79,0.8)]"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
              ></div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
