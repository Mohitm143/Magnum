import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import introImage from "../src/assets/image.png";

/**
 * Introduction.jsx
 * -----------------------------------------------------------------------
 * Premium editorial "01 — Introduction" section.
 * Apple x Aesop x National Geographic x Aloka.
 *
 * - Exactly one viewport (100vh) on desktop, no scroll inside the section.
 * - 70 / 30 split: editorial copy on the left, full-bleed image on the right.
 * - Framer Motion choreography: heading, quote, paragraphs and CTA
 *   sequence in on mount; image slides in from the right and performs
 *   a slow 8s Ken Burns zoom on hover.
 * -----------------------------------------------------------------------
 */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Introduction() {
  return (
    <section className="relative z-10 min-h-screen w-full overflow-hidden bg-cream px-20">
      <div
        className="
          mx-auto grid h-full max-w-[1600px]
          grid-cols-1 items-center
          gap-10 px-6
          sm:px-10
          md:px-14
          lg:grid-cols-[70%_30%] lg:gap-16 lg:px-16
        "
      >
        {/* ---------------------------------------------------------- */}
        {/* LEFT — EDITORIAL COPY (70%)                                 */}
        {/* ---------------------------------------------------------- */}
        <div className="flex max-h-full flex-col justify-center overflow-hidden py-8 lg:py-0">
          {/* Top label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 flex items-center gap-4"
          >
            
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="
  font-serif font-light text-[#21314B]
  text-2xl
  sm:text-3xl
  md:text-4xl
  lg:text-5xl
  xl:text-6xl
  leading-tight
"
          >
            Australia
            <br />
            A Symphony of
            <br />
            Majestic Landscapes
          </motion.h1>

          {/* Quote */}
          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="
              mt-6 border-l-2 border-[#C9A24B] pl-5
              font-serif text-[20px] italic leading-snug text-[#21314B]/80
              md:text-[24px] lg:text-[28px]
            "
          >
            &ldquo;The land of golden horizons and boundless skies.&rdquo;
          </motion.blockquote>

          {/* Paragraph 1 */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-7 max-w-[720px] font-sans text-[16px] leading-[1.9] text-[#21314B]/75 md:text-[18px] lg:text-[20px] lg:leading-[2]"
          >
            Australia is a place where nature paints its finest masterpiece.
            From rugged mountain ranges and ancient rainforests to golden
            deserts and crystal-clear coastlines, every landscape tells a
            story shaped by time, culture and wonder.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="mt-4 max-w-[720px] font-sans text-[16px] leading-[1.9] text-[#21314B]/75 md:text-[18px] lg:text-[20px] lg:leading-[2]"
          >
            This journey explores the soul of Australia through its diverse
            regions—Western Australia&apos;s pristine wilderness, Victoria&apos;s
            dramatic coastline, New South Wales&apos; vibrant harbours and
            Queensland&apos;s tropical paradise. Each destination reveals a
            different rhythm, inviting you to slow down, reconnect with
            nature and experience beauty beyond the ordinary.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="mt-9"
          >
            <a
              href="#introduction-full"
              className="group inline-flex w-full items-center gap-3 sm:w-auto"
            >
              <span className="relative font-sans text-xs uppercase tracking-[3px] text-[#21314B] transition-colors duration-500 group-hover:text-[#C9A24B]">
                Read Introduction
              </span>
              <span className="relative flex h-px w-10 items-center overflow-hidden bg-[#21314B]/40 group-hover:bg-[#C9A24B]">
                <HiArrowLongRight
                  className="absolute -left-1 h-4 w-4 text-[#21314B] transition-all duration-500 ease-out group-hover:left-6 group-hover:text-[#C9A24B]"
                />
              </span>
            </a>
          </motion.div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* RIGHT — IMAGE (30%)                                         */}
        {/* ---------------------------------------------------------- */}
        <div className="relative hidden h-full items-center justify-center lg:flex">
          {/* Decorative blurred gold circle */}
          <div className="pointer-events-none absolute h-[26rem] w-[26rem] rounded-full bg-[#C9A24B] opacity-10 blur-[120px]" />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[70vh] w-full overflow-hidden rounded-[28px] shadow-[0_40px_80px_-20px_rgba(33,49,75,0.35)]"
          >
            <motion.img
              src={introImage}
              alt="Australia's majestic landscape"
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
          </motion.div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* IMAGE — MOBILE / TABLET (stacked below text)                */}
        {/* ---------------------------------------------------------- */}
        <div className="relative flex h-[55vh] w-full items-center justify-center lg:hidden">
          <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#C9A24B] opacity-10 blur-[100px]" />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full overflow-hidden rounded-[28px] shadow-[0_30px_60px_-15px_rgba(33,49,75,0.3)]"
          >
            <motion.img
              src={introImage}
              alt="Australia's majestic landscape"
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}