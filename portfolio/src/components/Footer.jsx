import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-transparent bg-transparent px-5 sm:px-8 lg:px-12 py-1"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between max-w-7xl gap-10 lg:gap-8">

        {/* Left Side */}
        <div className="text-center lg:text-left leading-tight flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#AFAFAF] mb-2.5">STOP STALKING</p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            <span className="text-[#D89A8F]">Connect</span> <span className="text-white">with me</span>
          </h2>
        </div>

        {/* Center Side */}
        <div className="text-center flex flex-col items-center justify-center flex-[1.5]">
          <div className="flex items-center gap-4 text-white font-semibold tracking-[0.35em] uppercase text-[13px] sm:text-sm">



          </div>
          <p className="mt-4 text-[13px] text-[#AFAFAF] font-medium">Trust the process and see the magic 🦋</p>
          <p className="mt-2 text-[12.5px] text-white/40">© 2026 Aiswarya MuthuKumar. All rights reserved.</p>
          <div className="mt-5 flex items-center justify-center gap-4 text-[22px]">

          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center lg:justify-end gap-5 flex-1">
          <a href="https://github.com/aiswaryamuthukumar" target="_blank" rel="noopener noreferrer" className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#D89A8F]/40 text-white transition-all hover:bg-[#D89A8F]/10 hover:border-[#D89A8F]">
            <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/aiswarya-muthukumar-191a51319/" target="_blank" rel="noopener noreferrer" className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#D89A8F]/40 text-white transition-all hover:bg-[#D89A8F]/10 hover:border-[#D89A8F]">
            <span className="font-bold text-[17px] tracking-wide mt-0.5">in</span>
          </a>
          <a href="mailto:aiswaryam.cse2024@citchennai.net" className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#D89A8F]/40 text-white transition-all hover:bg-[#D89A8F]/10 hover:border-[#D89A8F]">
            <svg className="w-[19px] h-[19px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
