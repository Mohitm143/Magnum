import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen bg-cream flex items-center py-8 lg:py-12"
    >
      <div className="max-w-[1300px] mx-auto px-8 lg:px-16 w-full">

        {/* Book Container */}
        <div className="relative bg-white rounded-[32px] shadow-2xl overflow-hidden">

          {/* Book Fold */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent z-20"></div>

          <div className="grid lg:grid-cols-2">

            {/* Left Page */}
            <ContactInfo />

            {/* Right Page */}
            <ContactForm />

          </div>

        </div>
      </div>
    </section>
  );
}