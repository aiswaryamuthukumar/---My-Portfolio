import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background px-5 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[0.8fr_1fr_0.8fr]">
        <p className="text-[25px] font-semibold text-primary">அவளின் உலகம்</p>
        <div className="text-center">
          <p className="footer-name">
            <span /> A i s w a r y a <b>M</b> <span />
          </p>
          <p className="mt-2 text-sm text-white/65">Trust the process and you'll see the magic.</p>
          <p className="mt-2 text-sm text-white/45">© 2026 அவளின் உலகம். All rights reserved.</p>
        </div>
        <div className="flex items-center justify-start gap-5 lg:justify-end">
          {["GH", "in", "✉", "◎"].map((item) => (
            <a key={item} href="#" className="social-link" aria-label={item}>{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
