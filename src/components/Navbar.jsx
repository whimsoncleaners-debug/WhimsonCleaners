import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { MdCleaningServices } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,194,232,0.1)] border-b border-[rgba(0,194,232,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-[var(--cyan)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <MdCleaningServices className="text-[var(--navy)] text-lg" />
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-none tracking-wide">Whimson</span>
              <br />
              <span style={{ color: 'var(--cyan)' }} className="text-xs font-medium tracking-widest uppercase">Cleaners</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link text-[var(--gray)] hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative group">
              <button className="text-sm font-semibold text-[var(--cyan)] border border-[rgba(0,194,232,0.3)] hover:border-[var(--cyan)] hover:bg-[rgba(0,194,232,0.08)] px-4 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1">
                Call Now <FiChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute top-full right-0 mt-1.5 w-48 rounded-xl bg-[#0a1628] border border-[rgba(0,194,232,0.2)] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="tel:+14319905410" className="block px-4 py-2.5 text-sm text-white hover:text-[var(--cyan)] transition-colors rounded-t-xl">+1 431-990-5410</a>
                <a href="tel:+14319971150" className="block px-4 py-2.5 text-sm text-white hover:text-[var(--cyan)] transition-colors rounded-b-xl">+1 431-997-1150</a>
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm font-semibold text-[var(--navy)] bg-[var(--cyan)] hover:bg-[var(--cyan-bright)] px-5 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer">
                <FaWhatsapp className="h-4 w-4" /> WhatsApp <FiChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute top-full right-0 mt-1.5 w-52 rounded-xl bg-[#0a1628] border border-[rgba(0,194,232,0.2)] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="https://wa.me/14319905410" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 text-sm text-white hover:text-[var(--cyan)] transition-colors rounded-t-xl">
                  <FaWhatsapp className="h-4 w-4 text-[#25D366]" /> +1 431-990-5410
                </a>
                <a href="https://wa.me/14319971150" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 text-sm text-white hover:text-[var(--cyan)] transition-colors rounded-b-xl">
                  <FaWhatsapp className="h-4 w-4 text-[#25D366]" /> +1 431-997-1150
                </a>
              </div>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a1628]/98 backdrop-blur-xl border-t border-[rgba(0,194,232,0.15)] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setOpen(false)}
                  className="text-white font-medium text-lg py-2 border-b border-[rgba(255,255,255,0.06)] hover:text-[var(--cyan)] transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <a href="tel:+14319905410" className="text-center py-2.5 border border-[var(--cyan)] text-[var(--cyan)] rounded-full font-semibold text-sm">Call +1 431-990-5410</a>
                <a href="tel:+14319971150" className="text-center py-2.5 border border-[var(--cyan)] text-[var(--cyan)] rounded-full font-semibold text-sm">Call +1 431-997-1150</a>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <a href="https://wa.me/14319905410" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2.5 bg-[var(--cyan)] text-[var(--navy)] rounded-full font-semibold text-sm">
                  <FaWhatsapp className="h-4 w-4" /> +1 431-990-5410
                </a>
                <a href="https://wa.me/14319971150" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2.5 bg-[var(--cyan)] text-[var(--navy)] rounded-full font-semibold text-sm">
                  <FaWhatsapp className="h-4 w-4" /> +1 431-997-1150
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
