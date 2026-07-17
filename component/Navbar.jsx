import { useEffect, useRef, useState } from "react";
import { HiBars3, HiXMark, HiChevronDown } from "react-icons/hi2";

const CHAPTERS = [
  { num: "01", title: "Wild Ireland" },
  { num: "02", title: "Cliffs & Coastlines" },
  { num: "03", title: "Ancient Stone" },
  { num: "04", title: "Blue Mountains" },
  { num: "05", title: "Southern Shores" },
  { num: "06", title: "Golden Light" },
];

/**
 * Navbar.jsx
 * -----------------------------------------------------------------------
 * Standard fixed navbar — always solid, always visible, same look
 * whether the page is at the top or scrolled. Works over any content
 * (no dependence on a transparent hero underneath).
 * -----------------------------------------------------------------------
 */
export default function Navbar() {
  const [open, setOpen] = useState(false); // Chapters dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile menu
  const [isScrolled, setIsScrolled] = useState(false);
  const wrapRef = useRef(null);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Close the mobile menu whenever the viewport grows back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Handle scroll to detect if we've scrolled down
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 font-sans ${isScrolled ? 'bg-stone-50 shadow-sm' : 'bg-stone-50'}`}>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-end">
        {/* Logo as text */}
        <a
          href="#top"
          className={`absolute font-serif tracking-[0.08em] text-lg md:text-xl text-stone-900 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled ? "left-6 md:left-10 translate-x-0" : "left-1/2 -translate-x-1/2"
          }`}
        >
          Magnum <span className="text-orange-600">Edition</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 md:gap-10">
          <div className="relative" ref={wrapRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-haspopup="true"
              className="flex items-center gap-2 text-[11px] md:text-xs tracking-[0.2em] uppercase text-stone-900 hover:text-orange-600 transition-colors"
            >
              Chapters
              <HiChevronDown
                className={
                  "h-3 w-3 transition-transform duration-300 " +
                  (open ? "rotate-180" : "rotate-0")
                }
              />
            </button>

            <div
              className={
                "absolute right-0 mt-4 w-64 bg-stone-50 rounded-md shadow-2xl overflow-hidden origin-top-right transition-all duration-300 " +
                (open
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none")
              }
            >
              <ul className="py-2">
                {CHAPTERS.map((ch) => (
                  <li key={ch.num}>
                    <a
                      href={"#chapter-" + ch.num}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-4 px-5 py-3 hover:bg-stone-100 transition-colors"
                    >
                      <span className="text-[11px] tracking-widest text-orange-700 font-sans">
                        {ch.num}
                      </span>
                      <span className="font-serif text-sm text-stone-800">
                        {ch.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href="#contact"
            className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-stone-900 hover:text-orange-600 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden text-stone-900"
        >
          {mobileOpen ? (
            <HiXMark className="h-6 w-6" />
          ) : (
            <HiBars3 className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={
          "md:hidden overflow-hidden bg-stone-50 border-t border-stone-200 transition-all duration-300 " +
          (mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
        }
      >
        <div className="px-6 py-4">
          <span className="block text-[11px] tracking-[0.2em] uppercase text-stone-400 mb-2">
            Chapters
          </span>
          <ul className="mb-4">
            {CHAPTERS.map((ch) => (
              <li key={ch.num}>
                <a
                  href={"#chapter-" + ch.num}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-4 py-2.5"
                >
                  <span className="text-[11px] tracking-widest text-orange-700 font-sans">
                    {ch.num}
                  </span>
                  <span className="font-serif text-sm text-stone-800">
                    {ch.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-[11px] tracking-[0.2em] uppercase text-stone-900 py-2.5 border-t border-stone-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}