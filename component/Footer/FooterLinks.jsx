import { motion } from 'framer-motion';

const columns = [
  {
    heading: 'ABOUT',
    links: [
      { label: 'The Studio', href: '#' },
      { label: 'The Author', href: '#' },
      { label: 'Our Philosophy', href: '#' },
      { label: "Collector's Editions", href: '#' },
    ],
  },
  {
    heading: 'EXPLORE',
    links: [
      { label: 'Australia', href: '#' },
      { label: 'Morocco', href: '#' },
      { label: 'Bhutan', href: '#' },
      { label: 'Peru', href: '#' },
    ],
  },
  {
    heading: 'CONNECT',
    links: [
      { label: 'Contact', href: '#' },
      { label: 'Email', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
  },
];

const columnVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function FooterLinks() {
  return (
    <div className="flex flex-col gap-14">
      <div className="grid w-full grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
        {columns.map((col, i) => (
          <motion.div
            key={col.heading}
            custom={i}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h3
              className="font-sans uppercase text-gold"
              style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '6px' }}
            >
              {col.heading}
            </h3>
            <ul className=" flex flex-col gap-4">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group relative inline-block font-sans text-navy transition-colors duration-500 hover:text-gold"
                    style={{ fontSize: '18px', fontWeight: 400 }}
                  >
                    <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {link.label}
                    </span>
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

     
    </div>
  );
}
