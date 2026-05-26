import { Droplets, CheckCircle2, Eye } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: Droplets,
      title: "0 TDS Pure Water Filtration",
      desc: "Standard tap water carries mineral micro-crystals. We run our water through dual reverse-osmosis and premium de-ionization tanks, rendering 100% pure H2O. It functions like an organic magnet, lifting dirt and drying flawless without scaling residues."
    },
    {
      icon: Eye,
      title: "Electrostatic Dirt Repel Technique",
      desc: "Commercial cleaning soaps leave microscopic grease coatings that attract airborne dust. Our chemical-free pure-water methods keep your glass clean up to 3x longer by preserving a perfectly balanced neutral static state."
    }
  ];

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
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
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30 select-none pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white">
              <img
                src="/hero.avif"
                alt="Luxury Home Interior Window showing pristine sunlight wash"
                className="w-full h-[500px] object-cover scale-100 object-center hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl text-white">
                    <Droplets className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Signature Pure-Water Clean</h5>
                    <p className="text-[11px] text-slate-500 font-light mt-0.5">Dual de-ionization system for luxury window glass.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-64 h-64 border-4 border-dashed border-sky-200/50 rounded-full z-[-1]" />
          </div>

          <div className="lg:col-span-6 space-y-8 text-left">
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-sky-500 uppercase tracking-widest block">
                WHY CHOOSE US
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
                Expert Window Cleaning Services
              </h2>
              <p className="text-slate-500 text-base sm:text-lg font-light leading-relaxed">
                At Whimson Cleaners, we specialize in window cleaning, commercial cleaning, and residential cleaning. Our team uses professional-grade equipment and eco-friendly products to deliver spotless results every time.
              </p>
            </div>

            <div className="space-y-6">
              {coreValues.map((val, index) => {
                const CoreIcon = val.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="p-3 bg-white border border-slate-100 text-sky-500 rounded-xl h-fit shadow-sm shrink-0">
                      <CoreIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm leading-snug">{val.title}</h4>
                      <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed mt-1">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white flex flex-col sm:flex-row items-center gap-4 shadow-lg shadow-sky-500/10">
              <div className="p-3 bg-white/10 rounded-xl animate-pulse shrink-0">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-base">45% OFF First Booking</h4>
                <p className="text-xs text-sky-100 font-light mt-0.5">
                  Call us today at +1 431-990-5410 or +1 431-997-1150 to claim your 45% OFF discount on your first window cleaning service!
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToCalculator}
                className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-widest rounded-xl transition-colors cursor-pointer"
              >
                Book Now - 45% OFF
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
