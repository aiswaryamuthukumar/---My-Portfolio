import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Top 20 Finalist",
    hackathon: "INDCON Hackathon",
    venue: "College of Engineering Guindy",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3v2.25M7.5 3v2.25M3 7.5h18m-18 0c0 4.142 3.358 7.5 7.5 7.5h3c4.142 0 7.5-3.358 7.5-7.5m-18 0v-1.5c0-.828.672-1.5 1.5-1.5h15c.828 0 1.5.672 1.5 1.5v1.5M12 15v4.5m-4.5 0h9" />
      </svg>
    )
  },
  {
    title: "Top 15 Finalist",
    hackathon: "E-Summit Ideathon Hackathon",
    venue: "IIITDM Kancheepuram",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.148.621-.531 1.114-1.059.777l-4.69-2.981a.562.562 0 00-.586 0L6.982 20.665c-.528.337-1.207-.156-1.059-.777l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  },
  {
    title: "Finalist",
    hackathon: "Health Hack Hackathon",
    venue: "VIT Bhopal x Johns Hopkins University",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3v2.25M7.5 3v2.25M3 7.5h18m-18 0c0 4.142 3.358 7.5 7.5 7.5h3c4.142 0 7.5-3.358 7.5-7.5m-18 0v-1.5c0-.828.672-1.5 1.5-1.5h15c.828 0 1.5.672 1.5 1.5v1.5M12 15v4.5m-4.5 0h9" />
      </svg>
    )
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="page-section px-5 sm:px-8 lg:px-12 -mt-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-4 mb-14 w-full max-w-3xl mx-auto">
          <div className="flex-1 h-[1px] bg-gradient-to-l from-[#ff004f] to-transparent"></div>
          <div className="w-2.5 h-2.5 rotate-45 bg-[#ff004f]"></div>
          <motion.h2 
            initial={{ opacity: 0, y: 18 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.65, ease: "easeOut" }} 
            className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-[#ff004f] mx-4 text-center whitespace-nowrap"
          >
            ACHIEVEMENTS
          </motion.h2>
          <div className="w-2.5 h-2.5 rotate-45 bg-[#ff004f]"></div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ff004f] to-transparent"></div>
        </div>

        <motion.div 
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-[#0a0a0c] border border-white/10 rounded-2xl p-8 hover:border-[#ff004f]/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full border border-[#ff004f] flex items-center justify-center mb-8 bg-[#ff004f]/10">
                {item.icon}
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-[#ff004f] font-semibold text-[15px] mb-2 tracking-wide">{item.hackathon}</p>
              <p className="text-white/60 text-sm">{item.venue}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
