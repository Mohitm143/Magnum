import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const items = [
  { icon: MapPin, text: 'New Delhi, India' },
  { icon: Mail, text: 'hello@magnumeditions.com' },
  { icon: Phone, text: '+91 XXXXX XXXXX' },
];

export default function FooterContact() {
  return (
    <div className="flex flex-col items-center gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <item.icon size={15} strokeWidth={1.5} className="text-gold" />
          <span
            className="font-sans text-[#6B7280]"
            style={{ fontSize: '15px', fontWeight: 400, letterSpacing: '0.4px' }}
          >
            {item.text}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
