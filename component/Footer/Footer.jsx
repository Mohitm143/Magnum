import { motion } from 'framer-motion';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterBottom from './FooterBottom';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cream px-6 py-2 md:px-12 md:py-2">
      {/* Watermark decoration */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-20  flex justify-center"
        aria-hidden="true"
      >
        <span
          className="select-none font-serif leading-none text-navy"
          style={{ fontSize: '150px', fontWeight: 300, opacity: 0.03 }}
        >
          MAGNUM
          EDITIONS

        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex max-w-[1600px] flex-col gap-6"
      >
        {/* TOP — divider + brand */}
        <div className="h-px w-full bg-[#E5E0D8]" />
        <FooterBrand />

        {/* MIDDLE — editorial columns */}
        <FooterLinks />

        {/* CONTACT STRIP */}
        <FooterContact />

        {/* BOTTOM — meta + back to top */}
        <div className="flex flex-col gap-8">
          <div className="h-px w-full bg-[#E5E0D8]" />
          <FooterBottom />
        </div>
      </motion.div>
    </footer>
  );
}
