import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeftRight, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Testimonials() {
  const reviews = [
    {
      id: "rev1",
      author: "Elizabeth Sterling",
      rating: 5,
      date: "May 2026",
      location: "Bel-Air Estates",
      content: "Absolutely superb window wash. Our architect-designed glass walls run 22 feet tall. The CrystalClear rig came, set up mats to protect our stone paving, and finished the entire mansion spotless. Zero mineral spots, zero scale. Highly recommended!",
      servicePurchased: "Bespoke Luxury Estate Wash"
    },
    {
      id: "rev2",
      author: "Dr. Marcus Vance",
      rating: 5,
      date: "April 2026",
      location: "Malibu Beachfront",
      content: "Due to coastal salt sprayed fog, our beach windows become cloudy within days. The silica protective coating they applied has made a dramatic difference! It sheds mist immediately and has stayed crystal clear after two major ocean storms.",
      servicePurchased: "Coastal Silica Guard & Clean"
    },
    {
      id: "rev3",
      author: "Catherine & Paul DuPont",
      rating: 5,
      date: "May 2026",
      location: "Beverly Hills Central",
      content: "A uniformed, incredibly polite cleaning team. Quiet, highly efficient, and meticulous. They vacuumed tracks entirely and wiped frame hinges. My house feels twice as bright!",
      servicePurchased: "Double Side Frame Detailing"
    }
  ];

  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleTouchAndMouseMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      handleTouchAndMouseMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleTouchAndMouseMove(e.touches[0].clientX);
    }
  };

  const handleSliderClick = (e) => {
    handleTouchAndMouseMove(e.clientX);
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600">
            <Users className="h-3.5 w-3.5" />
            <span>CLIENT REPUTATION</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Trust Formed in Perfect Clarity
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-sm sm:text-base font-light leading-relaxed max-w-lg mx-auto">
            See what our clients say about our window cleaning, commercial cleaning, and residential cleaning services.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div
            ref={containerRef}
            onClick={handleSliderClick}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 cursor-ew-resize select-none"
          >
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/hero.avif"
                alt="Pristine After State"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl bg-sky-500/90 text-white font-bold text-xs font-mono uppercase tracking-wider shadow">
                After: Streakless Pure Clean
              </div>
            </div>

            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-[768px] sm:w-[768px] md:w-[768px] lg:w-[768px] h-[360px] sm:h-[450px]">
                <img
                  src="/before.png"
                  alt="Dirty Before State"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                />
<div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-slate-300 font-bold text-xs font-mono uppercase tracking-wider shadow">
                  Before: Calcium & Mud Spots
                </div>
              </div>
            </div>

            <div
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-white hover:bg-sky-50 text-slate-800 rounded-full flex items-center justify-center shadow-2xl border border-slate-300 -translate-x-1/2">
                <ArrowLeftRight className="h-4.5 w-4.5 text-sky-500" />
              </div>
            </div>

          </div>
          <div className="w-full text-center mt-3 text-xs text-slate-400 font-light flex items-center justify-center gap-2">
            <span>&larr; Drag slider to inspect active window cleaning transformations &rarr;</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {reviews.map((rev) => (
            <motion.div
              key={rev.id}
              variants={fadeUp}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100/80 text-left flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, sIdx) => (
                    <Star key={sIdx} className="h-4.5 w-4.5 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/50 flex justify-between items-center text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 block">{rev.author}</h4>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">{rev.location}</span>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 rounded bg-sky-50 text-sky-600 font-bold text-[9px] uppercase tracking-wide inline-block">
                    Verified Job
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1">{rev.servicePurchased}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
