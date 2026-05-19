import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stacks", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathon Experience", href: "#hackathon" },
  { label: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [achievementsOpen, setAchievementsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const container = document.querySelector(".cinematic-scroll") || window;
    const handleScroll = () => setScrolled((container.scrollTop ?? window.scrollY) > 12);
    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active nav link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: document.querySelector(".cinematic-scroll"),
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Prevent scrolling when panel is open
  useEffect(() => {
    const container = document.querySelector(".cinematic-scroll");
    if (!container) return;
    if (achievementsOpen) {
      container.style.overflow = "hidden";
    } else {
      container.style.overflow = "";
    }
  }, [achievementsOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className={`sticky top-0 z-40 border-b border-white/10 bg-[#030405]/95 backdrop-blur-xl ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="leading-none flex-shrink-0">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/90">WELCOME TO</p>
            <p className="mt-3 text-[25px] font-semibold leading-none text-[#ff004f]">அவளின் உலகம்</p>
          </a>
          
          <div className="flex items-center gap-6 lg:gap-10">
            <nav className="hidden items-center gap-8 lg:gap-10 text-[13px] font-semibold text-white/90 md:flex">
              {navItems.map((item) => {
                const isActive = item.href === `#${activeSection}`;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={`nav-link hover:text-[#ff004f] transition-colors ${isActive ? "text-[#ff004f] active" : ""}`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>
            
            <button
              type="button"
              onClick={() => setAchievementsOpen(true)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-[#ff004f] transition-colors hover:border-[#ff004f] hover:bg-[#ff004f]/5"
              aria-label="Achievements"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {achievementsOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setAchievementsOpen(false)}
            />
            
            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#030405] border-l border-white/5 shadow-2xl p-8 sm:p-12 overflow-y-auto"
            >
              <button
                onClick={() => setAchievementsOpen(false)}
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-4 mb-2 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#ff004f]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-widest text-white">ACHIEVEMENTS</h2>
              </div>
              <p className="text-[13px] text-white/50 mb-12 ml-12">Milestones that drive me forward</p>

              <div className="relative pl-10 pr-2 pb-10">
                {/* Vertical Timeline Line */}
                <div className="absolute left-[9px] top-6 bottom-4 w-[1px] bg-white/5"></div>

                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
                  className="flex flex-col gap-8"
                >
                  {[
                    { title: "Top 20 Finalist", hackathon: "INDCON Hackathon", location: "College of Engineering Guindy" },
                    { title: "Top 15 Finalist", hackathon: "E-Summit Ideathon Hackathon", location: "IIITDM Kancheepuram" },
                    { title: "Finalist", hackathon: "Health Hack Hackathon", location: "VIT Bhopal x Johns Hopkins University" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative"
                    >
                      {/* Timeline Dot & Number */}
                      <div className="absolute -left-[54px] top-1/2 -translate-y-1/2 flex items-center justify-center gap-3">
                        <span className="text-[#ff004f] text-[13px] font-bold font-mono">0{index + 1}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff004f]"></div>
                      </div>

                      {/* Card */}
                      <div className="bg-[#060608] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors group">
                        <div className="flex gap-4 sm:gap-5 items-start">
                          <div className="shrink-0 mt-0.5">
                            <svg className="w-8 h-8 text-white/40 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5l1.09 2.21 2.44.35-1.77 1.72.42 2.43-2.18-1.15-2.18 1.15.42-2.43-1.77-1.72 2.44-.35L12 7.5z" stroke="#ff004f" strokeWidth="1.5" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-white font-bold text-base mb-1.5">{item.title}</h3>
                            <p className="text-[#ff004f] text-[13px] font-medium mb-3">{item.hackathon}</p>
                            <div className="flex items-center gap-2 text-white/50 text-[11px] font-medium uppercase tracking-wider">
                              <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.315 48.315 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                              </svg>
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

