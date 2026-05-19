import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(""); // "success" or "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
          setStatus("success");
          form.current.reset();
      }, (error) => {
          console.error(error);
          setStatus("error");
      })
      .finally(() => {
          setIsSubmitting(false);
          // Auto-hide success message after 5 seconds
          setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 border border-[#C9877B]/30 rounded-2xl p-6 lg:p-8 bg-black/20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.72, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 bg-[#05080E] border border-[#D89A8F]/12 rounded-xl px-5 focus-within:border-[#C9877B]/50 transition-all overflow-hidden">
        <svg className="w-5 h-5 text-[#C9877B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        <input type="text" name="user_name" required placeholder="Your Name" className="flex-1 min-w-0 bg-transparent border-0 text-white text-[15px] py-4 outline-none placeholder:text-white/40" />
      </div>

      <div className="flex items-center gap-4 bg-[#05080E] border border-[#D89A8F]/12 rounded-xl px-5 focus-within:border-[#C9877B]/50 transition-all overflow-hidden">
        <svg className="w-5 h-5 text-[#C9877B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        <input type="email" name="user_email" required placeholder="Your Email" className="flex-1 min-w-0 bg-transparent border-0 text-white text-[15px] py-4 outline-none placeholder:text-white/40" />
      </div>

      <div className="flex items-start gap-4 bg-[#05080E] border border-[#D89A8F]/12 rounded-xl px-5 pt-4 focus-within:border-[#C9877B]/50 transition-all overflow-hidden">
        <svg className="w-5 h-5 text-[#C9877B] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
        <textarea name="message" rows="4" required placeholder="Your Message" className="flex-1 min-w-0 bg-transparent border-0 text-white text-[15px] outline-none resize-none placeholder:text-white/40" />
      </div>

      {status === "success" && (
        <p className="text-green-400 text-sm text-center font-medium mt-1">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center font-medium mt-1">Failed to send. Please try again.</p>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full bg-[#C9877B] text-[#111111] font-bold text-[15px] py-4 rounded-xl flex items-center justify-center gap-2 transition-transform shadow-[0_4px_14px_rgba(216, 154, 143, 0.39)] disabled:opacity-70"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && (
          <svg className="w-4 h-4 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        )}
      </motion.button>
    </motion.form>
  );
}
