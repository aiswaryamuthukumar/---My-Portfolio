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
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8B4AA]"></div>
              <div className="w-8 h-[1px] bg-[#E8B4AA]"></div>
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#E8B4AA]">
              HELLO, I'M
            </p>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="text-[clamp(2.5rem,10vw,5.95rem)] lg:text-[clamp(3.8rem,8vw,5.95rem)] font-extrabold leading-tight tracking-normal pb-2 text-white"
          >
            Aiswarya <span className="text-[#D89A8F]">M</span>
            <motion.span
              className="inline-block ml-2 text-[#E8B4AA] text-4xl align-top mt-4 drop-shadow-[0_0_8px_rgba(216, 154, 143, 0.8)]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >✦</motion.span>
          </motion.h1>

          <motion.div variants={heroItem} className="mt-6 flex flex-wrap items-center gap-4 text-[15px] font-medium text-white/90">
            <div className="flex items-center gap-2">
              <span className="text-[#E8B4AA] font-mono text-sm font-bold">&lt;/&gt;</span>
              <span>Web Development</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8B4AA]"></div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E8B4AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <span>AI Projects</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8B4AA]"></div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E8B4AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <span>RAG & LangChain</span>
            </div>
          </motion.div>

          <motion.div variants={heroItem} className="mt-10 flex items-center gap-3">
            <span className="text-4xl font-black leading-none text-[#E8B4AA] font-serif translate-y-1">"</span>
            <p className="text-[17px] text-[#F6E4DE] italic font-light opacity-90">
              Turning Ideas Into Projects with Messy Bun
            </p>
            <span className="text-4xl font-black leading-none text-[#E8B4AA] font-serif translate-y-1">"</span>
          </motion.div>

          <motion.div variants={heroItem} className="mt-8 h-[1px] w-full max-w-md bg-gradient-to-r from-[#E8B4AA]/40 to-transparent" />

          <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-5">
            <motion.a
              href="#projects"
              className="text-[#04070D] font-semibold text-[15px] px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #E8B4AA 0%, #D89A8F 100%)",
                boxShadow: "0 4px 20px rgba(216, 154, 143, 0.3), inset 0 1px 0 rgba(255,255,255,0.4)"
              }}
              whileHover={{ y: -2, boxShadow: "0 6px 25px rgba(216, 154, 143, 0.5), inset 0 1px 0 rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My Work <span>→</span>
            </motion.a>
            <motion.a
              href="/resume/Aiswarya%20M%204th%20semResume.pdf"
              download="Aiswarya_M_Resume.pdf"
              className="bg-transparent border border-[#E8B4AA]/50 text-[#F6E4DE] font-semibold text-[15px] px-8 py-3.5 rounded-xl flex items-center gap-3 hover:border-[#E8B4AA] hover:bg-[#E8B4AA]/15 hover:shadow-[0_0_20px_rgba(216, 154, 143, 0.2)] transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
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
          <div className="relative rounded-[2rem] border-[1.5px] border-[#E8B4AA] p-1 bg-[#05080E]">
            <img
              src="/images/profile.jpeg"
              alt="Aiswarya"
              className="w-full h-auto aspect-[4/5] lg:aspect-auto lg:h-[550px] object-cover rounded-[1.8rem]"
            />
            {/* The circular </> badge */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-[#05080E] border-2 border-[#E8B4AA] flex items-center justify-center text-[#E8B4AA] font-mono font-bold text-xl shadow-[0_0_15px_rgba(216, 154, 143, 0.25)]">
              &lt;/&gt;
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
