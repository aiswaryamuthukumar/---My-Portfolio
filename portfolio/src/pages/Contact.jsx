import React from "react";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <section id="contact" className="page-section border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[0.58fr_1.1fr_0.78fr]">
        <div>
          <p className="section-heading uppercase text-primary">CONTACT ME</p>
          <div className="heading-line" />
          <p className="mt-7 max-w-[270px] text-[15px] leading-8 text-white/88">
            If you'd like to collaborate on AI, RAG, or web projects, feel free to send a message.
          </p>
        </div>
        <ContactForm />
        <div className="contact-illustration" aria-hidden="true">
          <div className="paper-plane">▲</div>
          <div className="envelope">
            <div className="letter" />
          </div>
          <div className="chat-bubble">•••</div>
          <div className="sparkle s1">✦</div>
          <div className="sparkle s2">✦</div>
        </div>
      </div>
    </section>
  );
}
