import React from "react";

export default function Home() {
  return (
    <section id="home" className="hero-section px-5 pb-4 pt-14 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div className="fade-up">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.44em] text-primary">
            HELLO, I'M
          </p>
          <h1 className="text-[clamp(3.8rem,8vw,5.95rem)] font-extrabold leading-none tracking-normal text-white">
            Aiswarya <span className="text-primary">M</span>
          </h1>
          <p className="mt-7 text-lg text-white/90">
            Web Development | AI Projects | RAG &amp; LangChain
          </p>
          <p className="mt-8 flex items-center gap-2 text-lg text-white/95">
            <span className="text-4xl font-black leading-none text-primary">“</span>
            Turning Ideas Into Projects with Messy Buns
            <span className="text-4xl font-black leading-none text-primary">”</span>
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <a href="#projects" className="button-primary">
              Explore Work <span aria-hidden="true">→</span>
            </a>
            <a href="/resume.pdf" className="button-outline">
              Download Resume <span aria-hidden="true">⇩</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[450px] fade-up">
          <div className="portrait-card">
            <div className="portrait-glow" />
            <div className="portrait-person">
              <div className="portrait-hair" />
              <div className="portrait-face" />
              <div className="portrait-neck" />
              <div className="portrait-hoodie" />
            </div>
          </div>
          <div className="pattern-dots absolute -right-16 bottom-10 hidden h-32 w-28 lg:block" />
        </div>
      </div>
    </section>
  );
}
