import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="relative flex flex-col justify-between p-8 lg:p-12 bg-cream min-h-[80vh]">

      {/* Heading */}
      <div>

        {/* Title */}

        <h1 className="text-navy text-4xl lg:text-6xl font-light leading-[1.05]">

          Let's Begin
          <br />

          <span className="italic font-extralight">
            A Conversation
          </span>

        </h1>

        {/* Quote */}

        <div className="mt-6 border-l-2 border-gold pl-6">

          <p className="italic text-xl lg:text-2xl text-navy leading-relaxed">

            "Every remarkable journey
            begins with a single
            conversation."

          </p>

        </div>

        {/* Description */}

        <p className="mt-6 text-gray-600 leading-8 max-w-md text-base">

          Whether you're interested in photography,
          books, licensing, exhibitions or creative
          collaborations, I'd love to hear from you.
          Every conversation begins with curiosity.

        </p>

      </div>

      {/* Contact Details */}

      <div className="mt-8 space-y-6">

        {/* Email */}

        <div>

          <p className="uppercase tracking-[4px] text-xs text-gold mb-2">
            Email
          </p>

          <h3 className="text-xl text-navy">
            hello@aloksardana.com
          </h3>

        </div>

        {/* Phone */}

        <div>

          <p className="uppercase tracking-[4px] text-xs text-gold mb-2">
            Phone
          </p>

          <h3 className="text-xl text-navy">
            +91 98765 43210
          </h3>

        </div>

        {/* Location */}

        <div>

          <p className="uppercase tracking-[4px] text-xs text-gold mb-2">
            Location
          </p>

          <h3 className="text-xl text-navy">
            New Delhi, India
          </h3>

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-8">

        <p className="uppercase tracking-[5px] text-xs text-gold mb-6">
          Follow
        </p>

        <div className="flex gap-5">

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center hover:bg-navy hover:text-white transition-all duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center hover:bg-navy hover:text-white transition-all duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center hover:bg-navy hover:text-white transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>

        </div>

      </div>

    </div>
  );
}