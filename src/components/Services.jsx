import { motion } from 'framer-motion';
import { Layers, Sparkles, Wand2, ShieldCheck, Sun, Building, ArrowRight } from 'lucide-react';

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Services() {
  const serviceList = [
    {
      id: "exterior",
      icon: Sparkles,
      title: "Pure-Water Exterior Polish",
      description: "Our core double-filtration system feeds 100% pure ionized water (0 TDS) to lightweight carbon poles, leaving a pristine crystalline finish without soaps or chemical residue.",
      price: 180,
      benefits: ["Zero scale spot drying", "Soap-free repels future dust", "Safe ground-level Pole-reach up to 4 stories", "Chemical-free & landscape safe"]
    },
    {
      id: "interior",
      icon: Layers,
      title: "Bespoke Interior & Frame Detailing",
      description: "Surgical detailing of interior glass panels using specialty micro-weave towels matched with complete track scraping, felt vacuuming, and frame wipe-down.",
      price: 250,
      benefits: ["Ultra-absorbent lint-free detailing", "Vacuuming track bug-collection", "Felt deep-scrub screen wash", "Pristine sill polish"]
    },
    {
      id: "restoration",
      icon: Wand2,
      title: "Glass Stain & Calcium Restoration",
      description: "Proprietary cerium oxide buffering compounds safely polish out etched white calcium rings, sprinkler spray spots, and heavy oxidation layer damage.",
      price: 380,
      benefits: ["Restores structural transparency", "Removes hard-layered sprinkler etchings", "Protective transparent polymer sealing", "Hydrofluoric acid-free formula"]
    },
    {
      id: "solar",
      icon: Sun,
      title: "A-Grade Solar Panel Wash",
      description: "Dust and spot treatment on rooftop solar arrays using soft-head pure water brushes. Instantly restores optimal multi-grid photovoltaic efficiency.",
      price: 150,
      benefits: ["Guaranteed up to 25% efficiency rebound", "Strict non-scratch materials", "Free pre & post-clean wattage test", "Reduces hot-spot thermal cells"]
    },
    {
      id: "commercial",
      icon: Building,
      title: "Storefronts & Commercial Estates",
      description: "Fixed service scheduling for prestige storefronts, auto dealerships, country clubs, and corporate low-rises. Keeps your business facade shining.",
      price: 320,
      benefits: ["Flexible after-hours booking", "General Public liability insured", "Instant unified digital invoicing", "Predictable periodic frequencies"]
    },
    {
      id: "shield",
      icon: ShieldCheck,
      title: "Sill Guard & Silica Coating",
      description: "Application of microscopic silica polymers onto exterior window planes, forming a hydrophobic layer that sheds rainwater spot-free for 6 months.",
      price: 120,
      benefits: ["6-Month spot-shedding guarantee", "Prevents future mineral etching", "Ultra-smooth high-gloss feel", "Speeds up future cleaning turnarounds"]
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
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <div className="lg:col-span-7 space-y-4 text-left">
            <motion.span
              className="text-xs font-bold text-sky-500 uppercase tracking-widest block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              OUR SERVICES
            </motion.span>
            <motion.h2
              className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professional Cleaning Solutions
            </motion.h2>
            <motion.p
              className="text-slate-500 text-base sm:text-lg font-light leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Whimson Cleaners offers window cleaning, commercial cleaning, and residential cleaning services. Our expert team uses eco-friendly products for crystal-clear results.
            </motion.p>
          </div>
          <motion.div
            className="lg:col-span-5 flex lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={scrollToCalculator}
              className="group flex items-center gap-2 px-6 py-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-800 font-semibold text-sm rounded-xl transition-all cursor-pointer hover:shadow"
            >
              <span>Get 45% OFF Your First Booking</span>
              <ArrowRight className="h-4 w-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {serviceList.map((srv) => {
            const IconComponent = srv.icon;
            return (
              <motion.div
                key={srv.id}
                variants={fadeUp}
                className="group p-8 rounded-3xl bg-slate-50/20 hover:bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="p-3.5 bg-sky-50 group-hover:bg-sky-500 text-sky-500 group-hover:text-white rounded-2xl w-fit transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl tracking-tight leading-snug group-hover:text-sky-600 transition-colors">
                        {srv.title}
                      </h3>
                    </div>
<p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed pt-2">
                      {srv.description}
                    </p>
                  </div>

                  <ul className="space-y-2 border-t border-slate-100 pt-5 text-left">
                    {srv.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2 text-xs text-slate-600 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 flex justify-end">
                  <span
                    onClick={scrollToCalculator}
                    className="flex items-center gap-1.5 text-xs font-bold text-sky-500 group-hover:text-sky-600 cursor-pointer select-none"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
