import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    logo: "school",
    image: "/images/school-logo.jpg",
    abbr: "AMS",
    color: "text-[#d9482b]",
    degree: "Higher Secondary Education",
    title: "Annamalaiyaar Matriculation Hr. Sec. School",
    score: "Score: 93%",
    year: "Graduation Year: 2024",
    icon1: (
      <svg className="w-5 h-5 text-[#ff004f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    logo: "cit",
    image: "/images/cit-logo.jpg",
    abbr: "CIT",
    color: "text-[#0f172a]",
    degree: "B.E CSE",
    title: "Chennai Institute of Technology",
    score: "CGPA: 9.34 / 10",
    year: "Graduation Year: 2028",
    icon1: (
      <svg className="w-5 h-5 text-[#ff004f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="page-section px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 18 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.65, ease: "easeOut" }} 
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider"
          >
            <span className="text-white">ABOUT</span> <span className="text-[#ff004f]">ME</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.55, ease: "easeOut" }} 
            className="mt-4 h-[2px] w-12 bg-[#ff004f]" 
          />
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="mt-8 text-[15px] leading-7 text-white/70 max-w-2xl mx-auto"
          >
            <p>I'm from Madurai and I have a strong passion for web development and AI,<br/>and I enjoy building modern AI applications and clean web experiences.</p>
          </motion.div>
        </div>

        <motion.div 
          className="grid gap-6 lg:grid-cols-2" 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          {education.map((item) => (
            <motion.article
              key={item.title}
              className="relative flex items-stretch gap-6 p-6 sm:p-8 rounded-2xl bg-[#08080a] border border-white/5 shadow-lg overflow-hidden group"
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Subtle Red Top Gradient */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff004f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Left Side: Circular Badge */}
              <div className="flex items-center justify-center pl-2">
                <div className="relative w-[100px] h-[100px] rounded-full border border-white/10 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-[#ff004f]/30 scale-110"></div>
                  <div className="absolute inset-0 rounded-full border border-[#ff004f]/10 scale-125"></div>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center font-black text-2xl tracking-wider shadow-inner overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.abbr} className="w-full h-full object-cover" />
                    ) : (
                      <span className={item.color}>{item.abbr}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Separator Line with Dot */}
              <div className="relative flex flex-col justify-center px-2">
                <div className="h-full w-[1px] bg-white/10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#ff004f] rounded-full shadow-[0_0_8px_rgba(255,0,79,0.8)]"></div>
              </div>

              {/* Right Side: Details */}
              <div className="flex flex-col justify-center gap-5 flex-1 py-1">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0">{item.icon1}</div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white/90 leading-snug">{item.degree}</h3>
                    <p className="text-[13px] text-white/50 mt-1">{item.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <svg className="w-5 h-5 text-[#ff004f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.148.621-.531 1.114-1.059.777l-4.69-2.981a.562.562 0 00-.586 0L6.982 20.665c-.528.337-1.207-.156-1.059-.777l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                  <p className="text-[14.5px] font-medium text-white/80">{item.score}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <svg className="w-5 h-5 text-[#ff004f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <p className="text-[14.5px] font-medium text-white/80">{item.year}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
