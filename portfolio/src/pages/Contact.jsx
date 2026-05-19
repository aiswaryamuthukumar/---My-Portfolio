import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";

export default function Contact() {
  return (
    <section id="contact" className="contact-section page-section pt-12 px-0 flex flex-col justify-center !pb-0">
      <div className="w-full flex flex-col justify-center px-5 sm:px-8 lg:px-12 mb-16">
        <div className="mx-auto max-w-7xl w-full">
          <motion.div
            className="grid items-center gap-16 lg:gap-32 lg:grid-cols-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Text and Socials on the Left */}
            <div className="text-center lg:text-left">
              <h2 className="font-black leading-none tracking-tight">
                <span className="text-[#D89A8F] block uppercase text-sm md:text-lg tracking-[0.25em] mb-3 font-bold">Let's</span>
                <span className="text-white block uppercase text-5xl md:text-6xl lg:text-7xl">
                  Connect<span className="text-[#D89A8F]">.</span>
                </span>
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mt-6 h-[2px] w-12 bg-[#D89A8F] mx-auto lg:mx-0"
              />
              <p className="contact-copy mt-8 text-[17px] leading-8 text-[#F8F7F4] max-w-md mx-auto lg:mx-0">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Form on the Right */}
            <div className="w-full max-w-[665px] mx-auto lg:ml-auto lg:mr-0">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
