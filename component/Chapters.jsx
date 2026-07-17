import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark } from "react-icons/hi2";

import hero1 from "../src/assets/hero1.jpg";
import hero2 from "../src/assets/hero2.jpg";
import hero3 from "../src/assets/hero3.jpg";
import hero4 from "../src/assets/hero4.jpg";


/**
 * Chapters.jsx  (single-file version)
 * -----------------------------------------------------------------------
 * Premium editorial "02 — Chapters" section for a luxury coffee table
 * book website. Everything — data, small card, large card, stack,
 * fullscreen modal and the section itself — lives in this one file.
 *
 * Layout: pure Flexbox, no CSS Grid.
 *   [stack: 01, 02]  [large: 03]  [stack: 04, 05]  [large: 06]
 *
 * Desktop -> single flex row, justify-between, gap 40px.
 * Tablet  -> flex-col, groups stacked, centered.
 * Mobile  -> flex-col, one card per row.
 * -----------------------------------------------------------------------
 */

/* ------------------------------------------------------------------ */
/* DATA                                                                 */
/* ------------------------------------------------------------------ */

const chapters = [
  {
    id: 1,
    number: "01",
    title: "Pristine Shores",
    subtitle: "Emerald cliffs above a restless sea",
    description:
      "A windswept coastline of dark basalt and green pasture, where the Atlantic has spent millennia carving cathedrals out of stone.",
    image: hero1,
    size: "small",
  },
  {
    id: 2,
    number: "02",
    title: "victoria's Coastline",
    subtitle: "Basalt columns carved by fire and time",
    description:
      "Thousands of interlocking hexagonal columns rise from the sea — a geological wonder shaped by ancient volcanic flow.",
    image: 
    hero2,
    size: "small",
  },
  {
    id: 3,
    number: "03",
    title: "Wales'Coastal Jewels",
    subtitle: "A symphony of eucalyptus haze and sandstone",
    description:
      "Layered escarpments fade into a blue horizon, named for the fine mist of oil released by the eucalyptus forest below.",
    image: hero3,
    size: "large",
  },
  {
    id: 4,
    number: "04",
    title: " Desert wonders",
    subtitle: "Granite headlands meet turquoise water",
    description:
      "A remote coastline of pink granite boulders and impossibly clear water, untouched at the edge of the continent.",
    image:hero4,
    size: "small",
  },
  {
    id: 5,
    number: "05",
    title: "Queensland's",
    subtitle: "Where sand, stone and sea meet at dusk",
    description:
      "The last hour of daylight turns the coastline to amber — a fleeting, golden hush before the sky gives way to stars.",
    image: hero1,
    size: "small",
  },
  {
    id: 6,
    number: "06",
    title: "Blue mountains",
    subtitle: "Where the Atlantic meets ancient stone",
    description:
      "Sheer cliff faces plunge into the sea, home to seabird colonies and centuries of stories carried on the wind.",
    image: hero1,
    size: "large",
  },
];

/* ------------------------------------------------------------------ */
/* ANIMATION VARIANTS                                                   */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const largeCardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ------------------------------------------------------------------ */
/* SMALL CARD — 320 x 180                                               */
/* ------------------------------------------------------------------ */

function SmallChapterCard({ chapter, onOpen }) {
  return (
    <motion.button
      type="button"
      variants={cardVariants}
      onClick={() => onOpen(chapter)}
      className="group relative flex h-[250px] w-full max-w-[320px] cursor-pointer overflow-hidden rounded-[28px] text-left shadow-[0_20px_45px_-15px_rgba(33,49,75,0.35)] transition-transform duration-500 ease-out hover:scale-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <img
        src={chapter.image}
        alt={chapter.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-5">
        <span className="font-sans text-[11px] tracking-[3px] text-gold">
          {chapter.number}
        </span>
        <div>
          <h3 className="font-serif text-[22px] font-light leading-tight text-cream">
            {chapter.title}
          </h3>
          <p className="mt-1 font-sans text-[12px] leading-snug text-cream/75">
            {chapter.subtitle}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/* LARGE CARD — 480 x 560                                               */
/* ------------------------------------------------------------------ */

function LargeChapterCard({ chapter, onOpen }) {
  return (
    <motion.button
      type="button"
      variants={largeCardVariants}
      onClick={() => onOpen(chapter)}
      className="group relative flex h-[420px] w-full max-w-[480px] cursor-pointer overflow-hidden rounded-[32px] text-left shadow-[0_35px_70px_-20px_rgba(33,49,75,0.4)] transition-transform duration-500 ease-out hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:h-[480px] lg:h-[560px]"
    >
      <img
        src={chapter.image}
        alt={chapter.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-8">
        <span className="font-sans text-xs tracking-[4px] text-gold">
          {chapter.number}
        </span>
        <div>
          <h3 className="font-serif text-[34px] font-light leading-[1.1] text-cream md:text-[40px]">
            {chapter.title}
          </h3>
          <p className="mt-2 max-w-[320px] font-sans text-sm leading-relaxed text-cream/80">
            {chapter.subtitle}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/* STACK — two small cards, vertical, Flexbox only                      */
/* ------------------------------------------------------------------ */

function ChapterStack({ children }) {
  return (
    <motion.div
      variants={containerVariants}
      className="flex w-full max-w-[320px] flex-col items-center gap-10"
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* FULLSCREEN MODAL                                                     */
/* ------------------------------------------------------------------ */

function ChapterModal({ chapter, onClose }) {
  return (
    <AnimatePresence>
      {chapter && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/70 p-4 backdrop-blur-md sm:p-8"
          onClick={onClose}
        >
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-full max-h-[720px] w-full max-w-[1100px] flex-col overflow-hidden rounded-[28px] bg-cream shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] sm:flex-row"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 text-navy shadow-md transition-colors duration-300 hover:bg-gold hover:text-cream"
            >
              <HiXMark className="h-5 w-5" />
            </button>

            {/* Image */}
            <div className="relative h-[45%] w-full overflow-hidden sm:h-full sm:w-1/2">
              <img
                src={chapter.image}
                alt={chapter.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent sm:bg-gradient-to-r" />
            </div>

            {/* Copy */}
            <div className="flex w-full flex-col justify-center gap-5 p-8 sm:w-1/2 sm:p-12">
              <span className="font-sans text-xs tracking-[5px] text-gold">
                {chapter.number} &nbsp;—&nbsp; CHAPTER
              </span>
              <h2 className="font-serif text-[36px] font-light leading-[1.05] text-navy sm:text-[48px]">
                {chapter.title}
              </h2>
              <p className="font-serif text-lg italic text-navy/70">
                {chapter.subtitle}
              </p>
              <p className="max-w-[440px] font-sans text-[15px] leading-[1.9] text-navy/70">
                {chapter.description}
              </p>

              <button
                type="button"
                onClick={onClose}
                className="group mt-2 inline-flex w-fit items-center gap-3"
              >
                <span className="font-sans text-xs uppercase tracking-[3px] text-navy transition-colors duration-500 group-hover:text-gold">
                  Close Chapter
                </span>
                <span className="h-px w-8 bg-navy/40 transition-colors duration-500 group-hover:bg-gold" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* MAIN SECTION                                                         */
/* ------------------------------------------------------------------ */

export default function Chapters() {
  const [activeChapter, setActiveChapter] = useState(null);
  const [c1, c2, c3, c4, c5, c6] = chapters;

  return (
    <section className="relative z-10 w-full bg-cream py-24">
      <div className="mx-auto flex w-full max-w-container flex-col px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Top label */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 font-serif text-[40px] font-light leading-[1.1] text-navy sm:text-[52px] lg:text-[60px]"
        >
          Six Stories, One Horizon
        </motion.h2>

        {/* Flexbox layout — no Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <ChapterStack>
            <SmallChapterCard chapter={c1} onOpen={setActiveChapter} />
            <SmallChapterCard chapter={c2} onOpen={setActiveChapter} />
          </ChapterStack>

          <LargeChapterCard chapter={c3} onOpen={setActiveChapter} />

          <ChapterStack>
            <SmallChapterCard chapter={c4} onOpen={setActiveChapter} />
            <SmallChapterCard chapter={c5} onOpen={setActiveChapter} />
          </ChapterStack>

          <LargeChapterCard chapter={c6} onOpen={setActiveChapter} />
        </motion.div>
      </div>

      <ChapterModal chapter={activeChapter} onClose={() => setActiveChapter(null)} />
    </section>
  );
}