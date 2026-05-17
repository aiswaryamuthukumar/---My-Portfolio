import React from "react";
import HackathonCarousel from "../components/HackathonCarousel.jsx";

export default function Hackathon() {
  return (
    <section id="hackathon" className="page-section px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="section-heading uppercase text-primary">HACKATHON EXPERIENCE</p>
        <div className="heading-line" />
        <HackathonCarousel />
      </div>
    </section>
  );
}
