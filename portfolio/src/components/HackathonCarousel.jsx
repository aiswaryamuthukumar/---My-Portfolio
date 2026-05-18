import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "INDCON Hackathon @CEG",
    description: "We’re the only second-year students shortlisted for this hackathon",
    image: "/images/hackathon1.jpeg",
  },
  {
    title: "Visa AI Hackathon @IITM",
    description: "Our first Hackathon and it's very special to us ",
    image: "/images/hackathon2.jpeg",
  },
  {
    title: " Health Hack @ VIT Bhopal",
    description: "Felt like a dream,shortlisted & traveled 1400 kms across states, and lived an unforgettable journey.",
    image: "/images/hackathon3.jpeg",
  },
  {
    title: "E-summit Hackathon @IIITDM",
    description: "Learned how last-minute submissions play a key role in getting shortlisted.",
    image: "/images/hackathon4.jpeg",
  },
  {
    title: "VIT BHOPAL CAMPUS",
    description: "Three Memorable days @Bhopal",
    image: "/images/hackathon5.jpeg",
  },
  {
    title: "Didi",
    description: "We met a kind-hearted didi who helped us with accommodation and support.",
    image: "/images/hackathon6.jpeg",
  },
  {
    title: "Team IdeaFor",
    members: ["Prabanjan M","Aditi Baskaran", "Poovendhiran VS"],
    image: "/images/hackathon7.jpeg",
    isTeamCard: true,
  },
];

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

const wrapIndex = (index) => (index + cards.length) % cards.length;

const getOffset = (index, active) => {
  let offset = index - active;
  if (offset > cards.length / 2) offset -= cards.length;
  if (offset < -cards.length / 2) offset += cards.length;
  return offset;
};

const getCardMotion = (offset) => {
  const abs = Math.abs(offset);
  const direction = offset < 0 ? -1 : 1;

  if (offset === 0) {
    return { x: 0, y: -10, z: 40, rotateY: 0, scale: 1.02, opacity: 1 };
  }

  return {
    x: direction * (abs === 1 ? 130 : abs === 2 ? 220 : 320),
    y: abs === 1 ? 4 : abs === 2 ? 12 : 20,
    z: abs === 1 ? -40 : abs === 2 ? -90 : -150,
    rotateY: direction * (abs === 1 ? -20 : abs === 2 ? -24 : -30),
    scale: abs === 1 ? 0.82 : abs === 2 ? 0.72 : 0.58,
    opacity: abs === 1 ? 0.82 : abs === 2 ? 0.56 : 0.22,
  };
};

export default function HackathonCarousel() {
  const [active, setActive] = useState(3);
  const [paused, setPaused] = useState(false);

  const visibleCards = useMemo(
    () => cards.map((card, index) => ({ ...card, index, offset: getOffset(index, active) })),
    [active],
  );

  const move = (direction) => {
    setActive((current) => wrapIndex(current + direction));
  };

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => move(1), 3500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const handleDragEnd = (_, info) => {
    const swipe = info.offset.x + info.velocity.x * 0.18;
    if (swipe < -70) move(1);
    if (swipe > 70) move(-1);
  };

  return (
    <motion.div
      className="hackathon-coverflow relative mt-5"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      onHoverStart={() => setPaused(true)}
      onHoverEnd={() => setPaused(false)}
    >
      <button className="carousel-arrow left" type="button" aria-label="Previous" onClick={() => move(-1)}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <motion.div
        className="hackathon-row"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        onDragStart={() => setPaused(true)}
        onDragEnd={handleDragEnd}
      >
        <div className="active-card-bloom" />
        {visibleCards.map((card) => {
          const cardMotion = getCardMotion(card.offset);
          const isActive = card.offset === 0;

          return (
            <motion.div
              key={card.title}
              role="article"
              className={`hack-card ${isActive ? "active" : ""} ${card.members ? "members" : ""}`}
              animate={cardMotion}
              transition={spring}
              style={{
                zIndex: isActive ? 20 : Math.abs(card.offset) === 1 ? 10 : 5,
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: isActive ? 1.08 : cardMotion.scale + 0.035 }}
            >
              <div className="hack-photo-wrapper">
                <div className="hack-photo">
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={`${card.title} photo`}
                      className="h-full w-full rounded-lg object-contain"
                    />
                  ) : (
                    <span />
                  )}
                </div>
              </div>
              <div className="hack-content">
                <h3>{card.title}</h3>
                {card.description && !card.isTeamCard && (
                  <p className="mt-2 text-xs leading-5 text-white/82">{card.description}</p>
                )}
                {card.members && card.isTeamCard && (
                  <div className="mt-3 space-y-1">
                    {card.members.map((member) => (
                      <p key={member} className="text-xs font-medium leading-5 text-white/95">
                        {member}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <button className="carousel-arrow right" type="button" aria-label="Next" onClick={() => move(1)}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="carousel-pagination">
        {cards.map((card, index) => (
          <button
            key={card.title}
            type="button"
            className={`slider-dot ${index === active ? "active" : ""}`}
            onClick={() => setActive(index)}
            aria-label={`Show ${card.title}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
