import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const socials = ['Instagram', 'Facebook', 'LinkedIn'];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center font-sans text-[#6B7280] md:text-left"
        style={{ fontSize: '13px', fontWeight: 400, letterSpacing: '0.3px' }}
      >
        © 2026 Magnum Editions.{' '}
        <span
          className="font-serif italic text-navy"
          style={{ fontSize: '15px' }}
        >
          Crafted for collectors of extraordinary stories.
        </span>
      </motion.p>

      <div className="flex flex-col items-center gap-5 md:flex-row md:gap-7">
        <div className="flex items-center gap-5 md:gap-7">
          {socials.map((s) => (
            <a
              key={s}
              href="#"
              className="group relative font-sans text-navy transition-colors duration-500 hover:text-gold"
              style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px' }}
            >
              <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-0.5">
                {s}
              </span>
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 font-sans text-navy transition-colors duration-500 hover:text-gold"
          style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px' }}
        >
          Back to Top
          <ArrowUp
            size={15}
            strokeWidth={1.5}
            className="transition-transform duration-500 ease-out group-hover:-translate-y-1"
          />
        </button>
      </div>

       <div className="flex items-center gap-[8px] md:gap-[10px] p-[6px_10px] md:p-[8px_12px] border border-black/10 rounded-[10px] w-fit bg-black/5 backdrop-blur-[10px] mx-auto lg:mx-0">
        <a
          href="https://play.fabulousmedia.in"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="FabulousMedia"
          className="flex items-center justify-center bg-[#fff] p-[4px] rounded-[6px] opacity-60 transition-all duration-300 ease-out hover:opacity-100 hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(253,181,20,0.5)]"
        >
          <img
            src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
            alt="FabulousMedia"
            className="h-[10px] md:h-[12px] w-auto block"
          />
        </a>

        <div className="w-[1px] h-[12px] bg-black/10"></div>

        <a
          href="https://gocommercially.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GoCommercially"
          className="flex items-center justify-center bg-[#fff] p-[4px] rounded-[6px] opacity-60 transition-all duration-300 ease-out hover:opacity-100 hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(253,181,20,0.5)]"
        >
          <img
            src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
            alt="GoCommercially"
            className="h-[10px] md:h-[12px] w-auto block"
          />
        </a>
      </div>
    </div>
  );
}

