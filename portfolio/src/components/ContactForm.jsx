import React from "react";

export default function ContactForm() {
  return (
    <form className="contact-form">
      <div className="grid gap-3 sm:grid-cols-2">
        <label>
          <span>♙</span>
          <input type="text" placeholder="Your Name" />
        </label>
        <label>
          <span>✉</span>
          <input type="email" placeholder="Your Email" />
        </label>
      </div>
      <label className="message-field">
        <span>□</span>
        <textarea rows="4" placeholder="Your Message" />
      </label>
      <button type="submit">
        Send Message <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
