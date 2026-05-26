import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 py-16 border-t border-slate-900 select-none text-left">
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-sky-500/0 via-sky-500/30 to-sky-500/0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-900">
          
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Whimson Cleaners"
                className="h-14 w-auto"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              Whimson Cleaners offers professional window cleaning, commercial cleaning, and residential cleaning services. We deliver crystal-clear results using eco-friendly products and expert techniques.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-900 flex items-center gap-3 w-fit">
              <ShieldCheck className="h-6 w-6 text-sky-400 shrink-0 animate-pulse" />
              <div>
                <span className="text-[10px] font-mono tracking-wider font-bold text-slate-300 block">SPECIAL OFFER</span>
                <span className="text-[11px] text-slate-400 block">45% OFF first booking - Call now!</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-medium text-white text-sm tracking-widest uppercase">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              {[
                { name: 'Window Cleaning', id: 'services' },
                { name: 'Commercial Cleaning', id: 'services' },
                { name: 'Residential Cleaning', id: 'services' },
                { name: 'Glass Polishing', id: 'services' },
                { name: 'Deep Cleaning', id: 'services' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-sky-400 hover:underline cursor-pointer transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-medium text-white text-sm tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4 text-xs font-light text-slate-400">
            <h4 className="font-display font-medium text-white text-sm tracking-widest uppercase">
              Contact Us
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+14319905410" className="hover:text-sky-400 hover:underline block">
                    +1 431-990-5410
                  </a>
                  <a href="tel:+14319971150" className="hover:text-sky-400 hover:underline block">
                    +1 431-997-1150
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-sky-400" />
                <a href="mailto:whimsoncleaners@gmail.com" className="hover:text-sky-400 hover:underline">
                  whimsoncleaners@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-sky-400" />
                <span>Mon - Sat: 7:00 AM - 6:00 PM</span>
              </div>
            </div>

          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p className="font-light">
            &copy; {new Date().getFullYear()} Whimson Cleaners. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>45% OFF First Booking</span>
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            <span>Call +1 431-990-5410</span>
          </div>
        </div>

      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <div className="relative group">
          <button className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-2xl transition-all hover:scale-105 select-none hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] cursor-pointer">
            <FaWhatsapp className="h-5 w-5 animate-pulse" />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
          </button>
          <div className="absolute bottom-full right-0 mb-2 w-56 rounded-xl bg-white shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
            <a href="https://wa.me/14319905410" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors">
              <FaWhatsapp className="h-5 w-5 text-[#25D366]" />
              <span>+1 431-990-5410</span>
            </a>
            <a href="https://wa.me/14319971150" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors border-t border-slate-100">
              <FaWhatsapp className="h-5 w-5 text-[#25D366]" />
              <span>+1 431-997-1150</span>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
