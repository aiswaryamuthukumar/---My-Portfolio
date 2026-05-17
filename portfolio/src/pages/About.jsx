import React from "react";

const education = [
  {
    logo: "school",
    title: "Annamalaiyaar Matriculation Higher Secondary School",
    degree: "Higher Secondary Education",
    score: "Score: 93%",
    year: "Graduation Year: 2024",
  },
  {
    logo: "cit",
    title: "Chennai Institute of Technology",
    degree: "B.E CSE",
    score: "CGPA: 9.34 / 10",
    year: "Graduation Year: 2028",
  },
];

export default function About() {
  return (
    <section id="about" className="page-section px-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.58fr_1.42fr]">
        <div>
          <p className="section-heading uppercase text-primary">ABOUT ME</p>
          <div className="heading-line" />
          <div className="mt-7 space-y-5 text-[15px] leading-8 text-white/88">
            <p>I'm from Madurai and currently pursuing Computer Science and Engineering at Chennai Institute of Technology.</p>
            <p>I enjoy building modern AI applications and clean web experiences.</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.title} className="info-card flex items-center gap-6 p-5 sm:p-7">
              <div className="logo-circle">
                <span className={`logo-mark ${item.logo}`}>{item.logo === "school" ? "AMS" : "CIT"}</span>
              </div>
              <div className="space-y-3 text-sm">
                <h3 className="font-semibold leading-6 text-white">{item.title}</h3>
                <p className="text-white/90">{item.degree}</p>
                <p className="text-white/90">{item.score}</p>
                <p className="text-white/90">{item.year}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
