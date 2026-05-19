import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

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
    ]
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
    ]
  },
  {
    id: "backend",
    title: "Backend & Data",
    items: [
      { name: "Python", key: "python" },
      { name: "FastAPI", key: "fastapi" },
      { name: "PostgreSQL", key: "postgresql" }
    ]
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
    ]
  }
];

const mobileProjects = [
  {
    title: "VECTORHIRE",
    description: "AI recruitment platform for smarter hiring with semantic matching and automated screening workflow.",
    tech: ["FastAPI", "Supabase", "PostgreSQL", "pgvector", "RAG", "Vector Embeddings"],
    demoLink: "https://vectorhire.netlify.app/",
    repoLink: "https://github.com/aiswaryamuthukumar/VectorHire"
  },
  {
    title: "CSR HEALTHTRACE",
    description: "A blockchain-based healthcare resource tracking platform and AI-powered inventory and transparency management.",
    tech: ["Web Dev", "Blockchain", "AI Dashboard"],
    demoLink: "https://csr-health-trace.onrender.com/",
    repoLink: "https://github.com/aiswaryamuthukumar/med_fusion_project"
  },
  {
    title: "GMAIL VOICE ASSIST",
    description: "A voice-controlled Gmail assistant for visually challenged users with hands-free email access and AI-powered voice interactions.",
    tech: ["Python", "OpenAI Whisper", "Ollama", "Piper TTS", "Gmail API"],
    demoLink: "#",
    repoLink: "https://github.com/aiswaryamuthukumar/gmail-voiceassist"
  },
  {
    title: "P2P SOLAR ENERGY TRADING PLATFORM",
    description: "A blockchain-based peer-to-peer solar energy trading platform for secure and transparent energy exchange.",
    tech: ["GreenTech", "React", "Blockchain"],
    demoLink: "#",
    repoLink: "https://github.com/aiswaryamuthukumar/dual_dev"
  }
];

const hackathonCards = [
  {
    title: "INDCON Hackathon @CEG",
    description: "We’re the only second-year students shortlisted for this hackathon.",
    image: "/images/hackathon1.jpeg"
  },
  {
    title: "Visa AI Hackathon @IITM",
    description: "Our first Hackathon and it's very special to us.",
    image: "/images/hackathon2.jpeg"
  },
  {
    title: "Health Hack @ VIT Bhopal",
    description: "Felt like a dream, shortlisted & traveled 1400 kms across states, and lived an unforgettable journey.",
    image: "/images/hackathon3.jpeg"
  },
  {
    title: "E-summit Hackathon @IIITDM",
    description: "Learned how last-minute submissions play a key role in getting shortlisted.",
    image: "/images/hackathon4.jpeg"
  },
  {
    title: "VIT BHOPAL CAMPUS",
    description: "Three Memorable days @Bhopal.",
    image: "/images/hackathon5.jpeg"
  },
  {
    title: "Didi",
    description: "We met a kind-hearted didi who helped us with accommodation and support.",
    image: "/images/hackathon6.jpeg"
  },
  {
    title: "Team IdeaFor",
    description: "Not just Shortlisted mail but first Step of our journey.",
    image: "/images/hackathon7.jpeg"
  }
];

export default function MobileLayout() {
  const form = useRef();
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(""); // "success" or "error"
  const [hackathonIndex, setHackathonIndex] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(""), 5000);
      });
  };

  const navTo = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevHackathon = () => {
    setHackathonIndex((prev) => (prev === 0 ? hackathonCards.length - 1 : prev - 1));
  };

  const nextHackathon = () => {
    setHackathonIndex((prev) => (prev === hackathonCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#04070D] text-white font-sans flex flex-col justify-between">
      
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-[#04070D]/90 backdrop-blur-md border-b border-white/5 px-5 py-4 flex items-center justify-between w-full">
        <button onClick={() => navTo("home")} className="text-left flex flex-col leading-none">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/90">WELCOME TO</p>
          <p className="mt-1 text-[17px] font-semibold leading-none text-[#D89A8F]">அவளின் உலகம்</p>
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-11 h-11 rounded-full border border-[#D89A8F]/20 flex items-center justify-center text-white"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Hamburger Overlay Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[73px] bottom-0 z-40 bg-[#04070D]/98 backdrop-blur-lg px-6 py-8 flex flex-col gap-6"
          >
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Me" },
              { id: "techstack", label: "Tech Stacks" },
              { id: "projects", label: "Projects" },
              { id: "hackathon", label: "Hackathon Experience" },
              { id: "contact", label: "Contact" }
            ].map((menuItem) => (
              <button
                key={menuItem.id}
                onClick={() => navTo(menuItem.id)}
                className={`text-left uppercase text-sm sm:text-base font-semibold tracking-[0.3em] pb-3.5 border-b border-white/5 transition-colors ${
                  activeTab === menuItem.id ? "text-[#D89A8F]" : "text-white/70"
                }`}
              >
                {menuItem.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Tabbed Content Container */}
      <main className="flex-grow px-5 py-8 flex flex-col gap-8">
        
        {/* Tab 1: HOME */}
        {activeTab === "home" && (
          <section className="flex flex-col items-center text-center gap-6 mt-4">
            {/* Hello badge */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#E8B4AA]/40"></div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E8B4AA]">
                Hello, I'm
              </span>
              <div className="w-8 h-[1px] bg-[#E8B4AA]/40"></div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Aiswarya <span className="text-[#D89A8F]">M</span>
              <span className="inline-block ml-1 text-[#E8B4AA] text-2xl align-top">✦</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#E8B4AA]/90 font-medium text-[15px] tracking-wide">
              Web Developer <span className="text-[#D89A8F] mx-2">•</span> AI Enthusiast
            </p>

            {/* Quote */}
            <p className="italic text-white/80 text-xs xs:text-sm tracking-wide whitespace-nowrap">
              " Turning Ideas Into Projects with Messy Bun "
            </p>

            {/* Circular Avatar */}
            <div className="relative w-44 h-44 mt-4">
              <span className="absolute -top-1 -right-1 text-[#E8B4AA] text-xl">✦</span>
              <span className="absolute -bottom-1 -left-1 text-[#E8B4AA] text-xl">✦</span>
              <div className="w-full h-full rounded-full border-[3px] border-[#D89A8F] overflow-hidden p-1 bg-[#04070D]">
                <img
                  src="/images/profile.jpeg"
                  alt="Aiswarya M"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 mt-4 w-full">
              <button
                onClick={() => navTo("contact")}
                className="w-full max-w-[240px] bg-[#D89A8F] text-[#04070D] font-bold text-sm py-3.5 px-8 rounded-full flex items-center justify-center gap-2 hover:bg-[#C9877B] transition-colors shadow-lg shadow-[#D89A8F]/10"
              >
                Let's Connect <span>→</span>
              </button>

              <a
                href="/resume/Aiswarya%20M%204th%20semResume.pdf"
                download="Aiswarya_M_Resume.pdf"
                className="w-full max-w-[240px] bg-transparent border border-[#E8B4AA]/50 text-[#F6E4DE] font-semibold text-sm py-3.5 px-8 rounded-full flex items-center justify-center gap-2.5 hover:border-[#E8B4AA] hover:bg-[#E8B4AA]/15 transition-all duration-300"
              >
                Download Resume
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-5 mt-2">
              <a
                href="https://github.com/aiswaryamuthukumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D89A8F]/40 text-[#D89A8F] hover:bg-[#D89A8F]/10"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/aiswarya-muthukumar-191a51319/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D89A8F]/40 text-[#D89A8F] hover:bg-[#D89A8F]/10"
              >
                <span className="font-bold text-[16px] tracking-wide">in</span>
              </a>
            </div>

            {/* Banner (Home tab ONLY) */}
            <div className="border border-[#D89A8F]/20 bg-[#080D16]/60 rounded-2xl p-5 flex items-center gap-4 mt-6 text-left w-full max-w-sm">
              <div className="text-[#E8B4AA] shrink-0">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[14px] text-white">For Tech Stacks, Projects & More</p>
                <p className="text-[12px] text-white/60 leading-relaxed mt-0.5">View in PC or Laptop for the best experience</p>
              </div>
              <span className="text-[#E8B4AA] text-sm shrink-0">✦</span>
            </div>
          </section>
        )}

        {/* Tab 2: ABOUT ME */}
        {activeTab === "about" && (
          <section className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-black tracking-tight uppercase">
                About <span className="text-[#D89A8F]">Me</span>
              </h2>
              <div className="mt-2.5 h-[1.5px] w-12 bg-[#D89A8F]" />
              <p className="mt-5 text-sm leading-relaxed text-white/80 max-w-sm px-2">
                I'm from Madurai and I have a strong passion for web development and AI, and I enjoy building modern AI applications and clean web experiences.
              </p>
            </div>

            {/* Education Cards */}
            <div className="flex flex-col gap-5">
              {/* ARMHSS Card */}
              <div className="relative flex flex-col p-5 rounded-2xl bg-[#080D16]/30 border border-[#D89A8F]/15">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full border border-white/10 overflow-hidden shrink-0 flex items-center justify-center bg-white">
                    <img src="/images/school-logo.jpg" alt="ARMHSS" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-xs text-[#E8B4AA]">📖</span>
                    <h3 className="font-bold text-sm text-white leading-tight mt-0.5">Higher Secondary Education</h3>
                    <p className="text-xs text-white/50 mt-1">Annamalaiayaar Matriculation Hr. Sec. School</p>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-white/5 mb-3"></div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5 text-xs text-white/85">
                    <span className="text-[#D89A8F] text-sm">⭐</span>
                    <p>Score: <span className="font-bold">93%</span></p>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/85">
                    <span className="text-[#D89A8F] text-sm">📅</span>
                    <p>Graduation Year: <span className="font-bold">2024</span></p>
                  </div>
                </div>
              </div>

              {/* CIT Card */}
              <div className="relative flex flex-col p-5 rounded-2xl bg-[#080D16]/30 border border-[#D89A8F]/15">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full border border-white/10 overflow-hidden shrink-0 flex items-center justify-center bg-[#0f172a]">
                    <img src="/images/cit-logo.jpg" alt="CIT" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-xs text-[#E8B4AA]">🎓</span>
                    <h3 className="font-bold text-sm text-white leading-tight mt-0.5">B.E CSE</h3>
                    <p className="text-xs text-white/50 mt-1">Chennai Institute of Technology</p>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-white/5 mb-3"></div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5 text-xs text-white/85">
                    <span className="text-[#D89A8F] text-sm">⭐</span>
                    <p>CGPA: <span className="font-bold">9.34 / 10</span></p>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/85">
                    <span className="text-[#D89A8F] text-sm">📅</span>
                    <p>Graduation Year: <span className="font-bold">2028</span></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab 3: TECH STACKS */}
        {activeTab === "techstack" && (
          <section className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-black uppercase">
                Tech <span className="text-[#D89A8F]">Stacks</span>
              </h2>
              <div className="mt-2.5 h-[1.5px] w-12 bg-[#D89A8F]" />
              <p className="mt-4 text-xs text-white/60 leading-relaxed px-4">
                Technologies and tools I use to build ideas into real experiences.
              </p>
            </div>

            {/* Avatar Centerpiece */}
            <div className="flex justify-center relative my-4">
              <div className="absolute w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(216,154,143,0.08)_0%,transparent_70%)] pointer-events-none -top-4 z-0"></div>
              <div className="relative z-10 w-36 h-36 rounded-full border border-[#D89A8F]/40 flex items-center justify-center p-1.5 overflow-hidden bg-[#04070D] shadow-[0_0_20px_rgba(216,154,143,0.15)]">
                <img
                  src="/images/tech-girl.png"
                  alt="Tech Illustration Character"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Tech Categories */}
            <div className="flex flex-col gap-4">
              {PANEL_DATA.map((panel) => (
                <div
                  key={panel.id}
                  className="rounded-2xl bg-[#080D16]/30 border border-[#D89A8F]/15 p-4 flex flex-col gap-3.5"
                >
                  <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D89A8F] shadow-[0_0_8px_rgba(216,154,143,0.8)]" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{panel.title}</h4>
                  </div>

                  <div className="grid grid-cols-4 gap-3 items-center justify-items-center">
                    {panel.items.map((item) => (
                      <div key={item.key} className="flex flex-col items-center gap-1.5">
                        <div className="w-9 h-9 rounded-full bg-[#05080E]/80 border border-[#D89A8F]/12 flex items-center justify-center">
                          {ICONS[item.key]}
                        </div>
                        <span className="text-[8px] font-bold tracking-wider text-white/50 text-center whitespace-nowrap">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab 4: PROJECTS */}
        {activeTab === "projects" && (
          <section className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-black tracking-tight uppercase">
                My <span className="text-[#D89A8F]">Projects</span>
              </h2>
              <div className="mt-2.5 h-[1.5px] w-12 bg-[#D89A8F]" />
              <p className="mt-4 text-xs text-white/60 tracking-wider">
                INTERACTIVE. ELEGANT. IMPACTFUL.
              </p>
            </div>

            {/* Project List */}
            <div className="flex flex-col gap-6">
              {mobileProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-[#D89A8F]/15 bg-[#080D16]/30 p-5 flex flex-col gap-4"
                >
                  {/* Browser Mock Icon */}
                  <div className="flex items-center justify-between bg-[#05080E] border border-[#D89A8F]/12 rounded-xl p-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#D89A8F]/60"></span>
                      <span className="w-2 h-2 rounded-full bg-[#D89A8F]/60"></span>
                      <span className="w-2 h-2 rounded-full bg-[#D89A8F]/60"></span>
                    </div>
                    <div className="bg-[#D89A8F]/5 border border-[#D89A8F]/15 rounded-md px-3.5 py-0.5 text-[8px] font-bold tracking-wider text-[#D89A8F]">
                      {project.title}
                    </div>
                    <div className="w-9"></div> {/* Balancer spacer */}
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-[#D89A8F] font-bold">0{index + 1}</span>
                      <h3 className="font-black text-[15px] tracking-wide text-white uppercase">{project.title}</h3>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed mt-2">{project.description}</p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] px-2 py-0.5 rounded border border-[#D89A8F]/15 bg-[#D89A8F]/5 text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer Links */}
                  <div className="h-[1px] w-full bg-white/5 mt-1"></div>
                  <div className="flex justify-between items-center text-xs">
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#AFAFAF] hover:text-[#D89A8F] font-bold flex items-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                    
                    {project.demoLink !== "#" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D89A8F] hover:text-white font-bold flex items-center gap-1 uppercase tracking-wider"
                      >
                        Live Link
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab 5: HACKATHON EXPERIENCE */}
        {activeTab === "hackathon" && (
          <section className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-black tracking-tight uppercase text-center leading-tight">
                Hackathon <span className="text-[#D89A8F]">Experience</span>
              </h2>
              <div className="mt-2.5 h-[1.5px] w-12 bg-[#D89A8F]" />
              <p className="mt-4 text-xs text-white/60 leading-relaxed px-4">
                Milestones, shortlists, and cross-state journeys build up our team story.
              </p>
            </div>

            {/* Mobile Carousel View */}
            <div className="flex flex-col items-center gap-6 mt-2 relative">
              
              {/* Slide Card */}
              <div className="w-full max-w-sm border border-[#D89A8F]/15 bg-[#080D16]/30 rounded-2xl overflow-hidden flex flex-col">
                <div className="aspect-[4/3] bg-black/60 relative overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={hackathonCards[hackathonIndex].image}
                    alt={hackathonCards[hackathonIndex].title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-bold text-base text-white border-b border-white/5 pb-2">
                    {hackathonCards[hackathonIndex].title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed mt-1 min-h-[50px]">
                    {hackathonCards[hackathonIndex].description}
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-6">
                <button
                  onClick={prevHackathon}
                  className="w-10 h-10 rounded-full border border-[#D89A8F]/30 flex items-center justify-center text-[#D89A8F] hover:bg-[#D89A8F]/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Pagination Dots Indicator */}
                <div className="flex gap-2">
                  {hackathonCards.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setHackathonIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === hackathonIndex ? "w-6 bg-[#D89A8F]" : "w-2 bg-white/20"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextHackathon}
                  className="w-10 h-10 rounded-full border border-[#D89A8F]/30 flex items-center justify-center text-[#D89A8F] hover:bg-[#D89A8F]/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

            </div>
          </section>
        )}

        {/* Tab 6: CONTACT */}
        {activeTab === "contact" && (
          <section className="flex flex-col gap-6 mt-2">
            {/* Header */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-black tracking-tight uppercase">
                Let's <span className="text-[#D89A8F]">Connect</span>
              </h2>
              <div className="mt-2.5 h-[1.5px] w-12 bg-[#D89A8F]" />
              <p className="mt-4 text-xs text-white/70 leading-relaxed px-4">
                Have a project in mind or want to say hi? I'd love to hear from you!
              </p>
            </div>

            {/* Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 bg-[#080D16]/30 border border-[#D89A8F]/15 rounded-2xl p-5"
            >
              {/* Name */}
              <div className="flex items-center gap-3.5 bg-[#05080E] border border-[#D89A8F]/12 rounded-xl px-4 py-3.5 focus-within:border-[#D89A8F]/40 transition-colors">
                <svg className="w-5 h-5 text-[#C9877B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="flex-1 bg-transparent border-none text-white text-sm outline-none placeholder:text-white/35"
                />
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 bg-[#05080E] border border-[#D89A8F]/12 rounded-xl px-4 py-3.5 focus-within:border-[#D89A8F]/40 transition-colors">
                <svg className="w-5 h-5 text-[#C9877B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your Email"
                  className="flex-1 bg-transparent border-none text-white text-sm outline-none placeholder:text-white/35"
                />
              </div>

              {/* Message */}
              <div className="flex items-start gap-3.5 bg-[#05080E] border border-[#D89A8F]/12 rounded-xl px-4 py-3.5 focus-within:border-[#D89A8F]/40 transition-colors">
                <svg className="w-5 h-5 text-[#C9877B] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Your Message"
                  className="flex-1 bg-transparent border-none text-white text-sm outline-none resize-none placeholder:text-white/35"
                />
              </div>

              {status === "success" && (
                <p className="text-green-400 text-xs text-center font-medium">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-xs text-center font-medium">Failed to send. Please try again.</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#D89A8F] text-[#04070D] font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#C9877B] transition-colors disabled:opacity-75"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                )}
              </button>
            </form>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-white/40 py-5 border-t border-white/5 flex flex-col gap-1 items-center bg-[#04070D]">
        <p>© 2026 Aiswarya M. All rights reserved. <span className="text-[#D89A8F]">♡</span></p>
      </footer>

    </div>
  );
}
