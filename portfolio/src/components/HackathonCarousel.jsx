import React from "react";

const cards = [
  { title: "VIT Bhopal Hackathon" },
  { title: "National Level Hackathon" },
  { title: "HackFest 2025" },
  { title: "Internal Innovation Challenge", active: true },
  { title: "CodeSprint Hackathon" },
  { title: "Innovation Summit" },
  { title: "Team Members", members: ["Prabanjan M", "Aditi Baskaran", "Poovendhiran VS"] },
];

export default function HackathonCarousel() {
  return (
    <div className="relative mt-5">
      <button className="carousel-arrow left" type="button" aria-label="Previous">‹</button>
      <div className="hackathon-row">
        {cards.map((card) => (
          <article key={card.title} className={`hack-card ${card.active ? "active" : ""} ${card.members ? "members" : ""}`}>
            <span className="star">★</span>
            {card.members ? (
              <div className="team-icon">♧</div>
            ) : (
              <div className="hack-photo">
                <span />
              </div>
            )}
            <h3>{card.title}</h3>
            {card.members && (
              <div className="mt-2 text-xs leading-5 text-white/82">
                {card.members.map((member) => <p key={member}>{member}</p>)}
              </div>
            )}
          </article>
        ))}
      </div>
      <button className="carousel-arrow right" type="button" aria-label="Next">›</button>
      <div className="mt-5 flex justify-center gap-4">
        {[0, 1, 2, 3, 4].map((dot, index) => (
          <span key={dot} className={`slider-dot ${index === 0 ? "active" : ""}`} />
        ))}
      </div>
    </div>
  );
}
