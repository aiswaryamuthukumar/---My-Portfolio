import React from "react";
import { motion } from "framer-motion";
import HackathonCarousel from "../components/HackathonCarousel.jsx";

export default function Hackathon() {
  return (
    <section id="hackathon" className="page-section pb-1 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-1 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 18 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.65, ease: "easeOut" }} 
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider"
          >
            <span className="text-white">HACKATHON</span> <span className="text-[#ff004f]">EXPERIENCE</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.55, ease: "easeOut" }} 
            className="mt-4 h-[2px] w-12 bg-[#ff004f]" 
          />
        </div>
        <HackathonCarousel />
      </div>
    </section>
  );
}
