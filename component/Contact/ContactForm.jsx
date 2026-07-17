import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import contact from "../../src/assets/hero4.jpg";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const fields = [
    {
      label: "Name",
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Subject",
      name: "subject",
      type: "text",
    },
  ];

  return (
    <div className="relative flex flex-col justify-between h-full p-8 lg:p-12 bg-white">

      {/* Hero Image */}

      <div className="group overflow-hidden rounded-[30px] mb-6 shadow-xl">

        <img
          src={contact}
          alt=""
          className="w-full h-[200px] object-cover transition duration-700 group-hover:scale-105"
        />

      </div>

      {/* Heading */}

      <div className="mb-6">

        <span className="uppercase tracking-[6px] text-xs text-gold">
          Contact Form
        </span>

        <h2 className="text-4xl mt-2 font-light text-navy leading-tight">

          Send Me
          <br />

          <span className="italic font-extralight">
            A Message
          </span>

        </h2>

      </div>

      {/* Inputs */}

      <form className="space-y-6">

        {fields.map((field) => (

          <div key={field.name} className="relative">

            <input
              type={field.type}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-transparent border-0 border-b border-gray-300 py-3 text-navy outline-none focus:border-gold"
            />

            <label
              className="
              absolute
              left-0
              top-3
              text-gray-500
              transition-all
              duration-300
              pointer-events-none

              peer-placeholder-shown:text-base
              peer-placeholder-shown:top-3

              peer-focus:-top-4
              peer-focus:text-xs
              peer-focus:text-gold

              peer-not-placeholder-shown:-top-4
              peer-not-placeholder-shown:text-xs
              "
            >
              {field.label}
            </label>

          </div>

        ))}

        {/* Message */}

        <div className="relative">

          <textarea
            rows={3}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full bg-transparent border-0 border-b border-gray-300 py-3 resize-none outline-none focus:border-gold"
          />

          <label
            className="
            absolute
            left-0
            top-3
            text-gray-500
            transition-all
            duration-300
            pointer-events-none

            peer-placeholder-shown:text-base
            peer-placeholder-shown:top-3

            peer-focus:-top-4
            peer-focus:text-xs
            peer-focus:text-gold

            peer-not-placeholder-shown:-top-4
            peer-not-placeholder-shown:text-xs
            "
          >
            Message
          </label>

        </div>

      </form>

      {/* Button */}

      <button className="group mt-8 flex items-center gap-5">

        <div className="w-20 h-px bg-navy transition-all duration-300 group-hover:w-32"></div>

        <span className="uppercase tracking-[5px] font-medium text-navy group-hover:text-gold transition">

          Send Message

        </span>

        <HiArrowLongRight className="text-3xl text-navy transition-all duration-300 group-hover:text-gold group-hover:translate-x-2" />

      </button>

    </div>
  );
}