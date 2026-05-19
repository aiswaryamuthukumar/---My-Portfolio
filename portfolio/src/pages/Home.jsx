import React from "react";
import { motion } from "framer-motion";

const heroGroup = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export default function Home() {
  return (
    <section id="home" className="hero-section px-5 pb-3 pt-1 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <motion.div variants={heroGroup} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }}>
          <motion.div variants={heroItem} className="mb-5 flex items-center gap-4">
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff004f]"></div>
              <div className="w-8 h-[1px] bg-[#ff004f]"></div>
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#ff004f]">
              HELLO, I'M
            </p>
          </motion.div>

          <motion.h1 variants={heroItem} className="text-[clamp(3.8rem,8vw,5.95rem)] font-extrabold leading-tight tracking-normal text-white">
            Aiswarya <span className="text-[#ff004f]">M</span>
          </motion.h1>

          <motion.div variants={heroItem} className="mt-6 flex flex-wrap items-center gap-4 text-[15px] font-medium text-white/90">
            <div className="flex items-center gap-2">
              <span className="text-[#ff004f] font-mono text-sm font-bold">&lt;/&gt;</span>
              <span>Web Development</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff004f]"></div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#ff004f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <span>AI Projects</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff004f]"></div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#ff004f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <span>RAG & LangChain</span>
            </div>
          </motion.div>

          <motion.div variants={heroItem} className="mt-10 flex items-center gap-3">
            <span className="text-4xl font-black leading-none text-[#ff004f] font-serif translate-y-1">"</span>
            <p className="text-[17px] text-[#e2e8f0] italic font-light">
              Turning Ideas Into Projects with Messy Bun
            </p>
            <span className="text-4xl font-black leading-none text-[#ff004f] font-serif translate-y-1">"</span>
          </motion.div>

          <motion.div variants={heroItem} className="mt-8 h-[1px] w-full max-w-md bg-gradient-to-r from-[#ff004f]/40 to-transparent" />

          <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-5">
            <motion.a href="#projects" className="bg-[#ff004f] text-white font-semibold text-[15px] px-8 py-3.5 rounded-xl flex items-center gap-2 shadow-[0_4px_14px_rgba(255,0,79,0.39)] hover:bg-[#ff004f]/90 transition-colors" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              Explore Work <span>→</span>
            </motion.a>
            <motion.a href="/resume/resume.pdf" className="bg-transparent border border-[#ff004f]/40 text-white font-semibold text-[15px] px-8 py-3.5 rounded-xl flex items-center gap-3 hover:border-[#ff004f] hover:bg-[#ff004f]/10 transition-colors" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              Download Resume
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[500px] lg:ml-auto"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
          >
          <div className="relative rounded-[2rem] border-[1.5px] border-[#ff004f] p-1 bg-[#0a0a0c]">
            <img
              src="/images/profile.jpeg"
              alt="Aiswarya"
              className="w-full h-auto aspect-[4/5] lg:aspect-auto lg:h-[550px] object-cover rounded-[1.8rem]"
            />
            {/* The circular </> badge */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-[#0a0a0c] border-2 border-[#ff004f] flex items-center justify-center text-[#ff004f] font-mono font-bold text-xl shadow-[0_0_15px_rgba(255,0,79,0.25)]">
              &lt;/&gt;
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
