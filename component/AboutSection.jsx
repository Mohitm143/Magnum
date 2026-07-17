import React from "react";
import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import about2 from "../src/assets/about2.jpg";


export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 bg-cream min-h-screen flex items-center py-12 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
        {/* Section Heading */}
        <div className="mb-10 lg:mb-14">
  

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-navy font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-5xl"
          >
            Alok Sardana
            <span className="italic font-extralight">
              {" "}
              — Photographer, Artist & Author
            </span>
          </motion.h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group">
              {/* Background Accent */}
              <div className="absolute -right-5 -bottom-5 w-full h-full rounded-[32px] bg-gold/10"></div>

              {/* Image */}
              <img
                src={about2}
                alt="Alok Sardana"
                className="relative w-full max-w-[300px] h-[420px] rounded-[28px] shadow-2xl object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Decorative Label */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-6 left-6 bg-white shadow-xl rounded-xl px-5 py-3"
              >
                <p className="text-xs tracking-[3px] uppercase text-gold">
                  Author
                </p>
                <p className="text-navy font-medium">
                  Alok Sardana
                </p>
              </motion.div>
            </div>
          </div>

          {/* Biography */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-base lg:text-lg leading-9 text-gray-600"
              >
                Alok Sardana is a celebrated photographer, artist,
                author, and technocrat who brings a unique blend of
                creativity and precision to his work. A distinguished
                alumnus of the National Defence Academy and IIM
                Bangalore, Alok also holds B.Tech and M.Tech degrees
                in Electronics Engineering, enabling him to merge
                technological expertise with an artist’s eye for
                detail.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base lg:text-lg leading-9 text-gray-600"
              >
                As a veteran who has traversed diverse geographies and
                cultures, Alok’s photography reflects his deep
                appreciation for the beauty of the world around us. In{" "}
                <span className="italic">
                  Wonderful World: Australia's Majestic Landscapes
                </span>
                , his love for Australia's extraordinary seascapes,
                coastlines, cityscapes, and nightscapes comes alive
                through stunning imagery.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base lg:text-lg leading-9 text-gray-600"
              >
                Known for his innovative storytelling and masterful
                compositions, Alok transforms the grandeur of everyday
                scenes into compelling visual narratives. His work
                resonates with connoisseurs of photography,
                travellers, and anyone seeking to connect with the
                soul of a place.
              </motion.p>
            </div>

            {/* Read More Button */}
            <button className="group flex items-center gap-5 mt-10">
              <div className="w-16 h-px bg-navy group-hover:w-24 transition-all duration-300"></div>

              <span className="uppercase tracking-[5px] text-navy font-medium">
                Read More
              </span>

              <HiArrowLongRight className="text-2xl text-navy transition-all duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}