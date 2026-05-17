import React, { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stacks", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathon Experience", href: "#hackathon" },
  { label: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030405]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="leading-none">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/90">WELCOME TO</p>
          <p className="mt-3 text-[25px] font-semibold leading-none text-primary">அவளின் உலகம்</p>
        </a>
        <nav className="hidden items-center gap-10 text-sm font-medium text-white lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`nav-link ${item.label === "Home" ? "active" : ""}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="menu-button"
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#030405] px-5 py-4 text-sm text-white lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
