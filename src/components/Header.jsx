import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-sky-500/15 backdrop-blur-xl shadow-sm border-b border-sky-400/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={logo}
              alt="Whimson Cleaners"
              className="h-14 w-auto group-hover:scale-105 transition-transform"
              style={{ mixBlendMode: 'screen' }}
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['services', 'about', 'gallery', 'faq'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-sky-500 cursor-pointer capitalize ${
                  isScrolled ? 'text-slate-600' : 'text-slate-600 md:text-white/95 md:hover:text-white'
                }`}
              >
                {section === 'faq' ? 'FAQ' : section}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <a
                href="tel:+14319905410"
                className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                  isScrolled ? 'text-slate-800 hover:text-sky-600' : 'text-slate-800 md:text-sky-100 hover:text-sky-500 md:hover:text-white'
                }`}
              >
                <Phone className="h-4 w-4 text-sky-500" />
                <span>+1 431-990-5410</span>
              </a>
              <div className="absolute top-full left-0 mt-1 w-48 rounded-xl bg-white shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="tel:+14319905410" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-t-xl transition-colors">+1 431-990-5410</a>
                <a href="tel:+14319971150" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-b-xl transition-colors">+1 431-997-1150</a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-xl transition-all cursor-pointer">
                <FaWhatsapp className="h-4 w-4" />
                <span>WhatsApp</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute top-full right-0 mt-1 w-52 rounded-xl bg-white shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="https://wa.me/14319905410" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-t-xl transition-colors">
                  <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                  +1 431-990-5410
                </a>
                <a href="https://wa.me/14319971150" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-b-xl transition-colors">
                  <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                  +1 431-997-1150
                </a>
              </div>
            </div>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+14319905410"
              className="p-2.5 text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-3 shadow-lg">
          {['services', 'about', 'gallery', 'faq'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left px-4 py-2 text-base font-medium text-slate-700 rounded-lg hover:bg-slate-50 capitalize hover:text-sky-500"
            >
              {section === 'faq' ? 'FAQ' : section}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-3 px-4">
            <div className="flex flex-col gap-1.5 text-slate-600 py-2">
              <a href="tel:+14319905410" className="flex items-center gap-2 hover:text-sky-500">
                <Phone className="text-sky-500 h-4 w-4 shrink-0" />
                <span className="font-semibold text-sm">+1 431-990-5410</span>
              </a>
              <a href="tel:+14319971150" className="flex items-center gap-2 hover:text-sky-500">
                <Phone className="text-sky-500 h-4 w-4 shrink-0" />
                <span className="font-semibold text-sm">+1 431-997-1150</span>
              </a>
            </div>
            <a
              href="https://wa.me/14319905410" target="_blank" rel="noreferrer"
              className="w-full text-center py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold rounded-xl shadow"
            >
              WhatsApp +1 431-990-5410
            </a>
            <a
              href="https://wa.me/14319971150" target="_blank" rel="noreferrer"
              className="w-full text-center py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold rounded-xl shadow"
            >
              WhatsApp +1 431-997-1150
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
