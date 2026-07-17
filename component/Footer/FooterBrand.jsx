import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FooterBrand() {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 text-gold"
      >
        <BookOpen size={28} strokeWidth={1.25} />
      </motion.div>

      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-serif text-navy"
        style={{ fontSize: '64px', fontWeight: 300, letterSpacing: '2px', lineHeight: 1.1 }}
      >
        MAGNUM EDITIONS
      </motion.h2>

      <motion.p
        variants={quoteVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-4 max-w-[600px] font-serif italic text-[#6B7280]"
        style={{ fontSize: '22px', fontWeight: 400, lineHeight: 1.5 }}
      >
        Publishing stories that deserve to be preserved.
      </motion.p>
    </div>
  );
}
