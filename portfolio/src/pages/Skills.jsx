import React from "react";

const stacks = [
  { icon: "AI", title: "AI & TECHNOLOGY", items: ["RAG", "LangChain", "Prompt Engineering", "AI Integration"] },
  { icon: "</>", title: "FRONTEND", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { icon: "DB", title: "BACKEND & DATA", items: ["Python", "FastAPI", "PostgreSQL"] },
  { icon: "↗", title: "WORKFLOW & DELIVERY", items: ["Git", "GitHub", "VS Code", "Render", "Netlify"] },
];

export default function Skills() {
  return (
    <section id="skills" className="page-section px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="section-heading uppercase text-primary">TECH STACKS</p>
        <div className="heading-line" />
        <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stacks.map((stack) => (
            <article key={stack.title} className="info-card min-h-[250px] p-6">
              <div className="mb-7 flex items-center gap-4">
                <span className="skill-icon">{stack.icon}</span>
                <h3 className="text-sm font-semibold text-white">{stack.title}</h3>
              </div>
              <div className="space-y-0 text-sm text-white/90">
                {stack.items.map((item) => (
                  <p key={item} className="border-b border-white/10 py-2 last:border-b-0">{item}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
