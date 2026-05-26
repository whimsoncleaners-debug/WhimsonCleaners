import { useState, useEffect } from 'react';
import { Image, Search, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const images = [
    {
      id: "gal1",
      title: "Priscilla Luxury Manor Wash",
      category: "residential",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh0gCx-6mephBa97NmxK1Gjo0ebZiZTPkG4YlFs5NJgyeSW9gNqSTiOo6rTKtA6e7wK2HjdD-_D86LzKMGZo1ngfaiEJMZ3tqolXpSoLZ3a5wnATj4cZXXCTOY-Bm0YIXjTEuHWpt-s9ZViox4eve31eZZE9ExyagOI63a_w3ty4EV72eSDkgTnF-9t3aWq_8X638pR56vkBNJJHGErPSE1bI6EV3PNZEFVCc00f3JGMUPO7b0sdSO5FwWCAaa5M7BUHpYTBDV2G3S",
      description: "Complete exterior & interior wash for luxury floor-to-ceiling glass panel facades."
    },
    {
      id: "gal2",
      title: "Commercial Facade Skyline Wash",
      category: "commercial",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmOpvGj9Jf6Rykzvt8rVtBUZ1UmxoGAxzP4oO36daaLgQcKOaMv7r9GjGFKZIDhVgQynppYiA4E2nS-kg8CSqyRvlKpYuNTPD9QZvolfnLTCXuxsM_2GDgYC65SFEbuyz3kHo9XabztUUjXVW-5hlpe4UmnGZ0Z90kAeUe5-1WPyLG7ttdlW1YQYuHwvdaw6eHznsQNBmy1vMuGuTEhGIFUE98lS5sigGlrBX95qPh0XP4Jj94ZH3EPVeikNd8I51oEulK086fz64e",
      description: "Prestige office high-reach window wash reflecting clear blue skies."
    },
    {
      id: "gal3",
      title: "Precision Squeegee Detailing",
      category: "equipment",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8z6-4SDOn98EJIhAtOiUBFaA9QS_LL3pGSxUDog2NveOTiYOqmdiEom_hSY9VXMVtTIqE-L7RNujK6r2Abg-rBFJ3DFTE-S9XiYRjQOFBRxxvdz3t9Ao5VGDa2SzT59-jqvb6B5XelC0dT6fJPcCF1pQH4CrXQDGJBhpsKx8qUVjWpzH2Nc6Z2B4oUj3EQOjWmVGeXYjxBAundNXK1T7H5wBSjidXp9sb4mvjrGlC5XbDvMcsS9ypneiXPvqgV8bjYHJLjXiPC4xx",
      description: "Highly focused detailing removing every trace of water spot residue close up."
    },
    {
      id: "gal4",
      title: "Engineered Pure Water Equipment",
      category: "equipment",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY_vkbwMNLrxoJlzIjnaRqyZnoldE8t8N3jrru9dZw74bbqg_etdLP6wstrJj-kVZ1Sddq4-bayQvY4fIMrhFPTQQc9-ofohje9p_r9nmJ2NDzRDUNQJ5ElrLTMUJsfqpoiVzaJGu-o1WouzFkkfaINfEOPmKG-Lj_gUpZF9ni1rCTHtyrexVUJlPv-RKR09pSBUZfsE1YXVh8rTZU1zskS6GfsGMoeioJ0nFaKD8jSaSrsA73DNIis8CtRXI0N42ec-gT20mIdAgX",
      description: "Our carbon fiber poles and pristine silicon squeegee wash equipment arrayed on-location."
    }
  ];

  const [filter, setFilter] = useState('all');
  const [activeModalItemIndex, setActiveModalItemIndex] = useState(null);

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalItemIndex === null) return;
      if (e.key === 'Escape') setActiveModalItemIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItemIndex]);

  const handleNext = () => {
    setActiveModalItemIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveModalItemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600">
            <Image className="h-3.5 w-3.5" />
            <span>PORTFOLIO EXHIBITION</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Crystalline Clarity Captured
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed max-w-lg mx-auto">
            Browse through our work - professional window cleaning, commercial cleaning, and residential cleaning projects by Whimson Cleaners.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 mb-10 max-w-lg mx-auto bg-slate-150/40 p-1.5 rounded-2xl border border-slate-100">
          {[
            { id: 'all', title: 'All Projects' },
            { id: 'residential', title: 'Residential' },
            { id: 'commercial', title: 'Commercial' },
            { id: 'equipment', title: 'Crew & Tools' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === item.id
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 bg-transparent'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setActiveModalItemIndex(index)}
              className="group relative h-[320px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all cursor-pointer hover:-translate-y-1"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />
              
              <div className="absolute top-4 right-4 p-2 bg-white/25 backdrop-blur-md rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Search className="h-4 w-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-left text-white space-y-1">
                <span className="text-[10px] font-mono tracking-wider uppercase text-sky-300 font-bold block">
                  {img.category === 'residential' ? 'Luxury Home' : img.category === 'commercial' ? 'Commercial Facade' : 'Premium Tooling'}
                </span>
                <h4 className="font-display font-semibold text-white text-sm sm:text-base tracking-tight leading-snug">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No gallery images found for the active filter selection.
          </div>
        )}

      </div>

      {activeModalItemIndex !== null && filteredImages[activeModalItemIndex] && (
        <div
          className="fixed inset-0 z-55 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalItemIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center text-white mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-sky-400" />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                  Resolution Capture Frame
                </span>
              </div>
              <button
                onClick={() => setActiveModalItemIndex(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white cursor-pointer hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative w-full aspect-video md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group">
              <img
                src={filteredImages[activeModalItemIndex].imageUrl}
                alt={filteredImages[activeModalItemIndex].title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/60 hover:bg-slate-900/80 border border-slate-700/80 text-white cursor-pointer transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/60 hover:bg-slate-900/80 border border-slate-700/80 text-white cursor-pointer transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="w-full text-left text-white mt-4 space-y-1.5 bg-slate-900/50 p-6 rounded-2xl border border-slate-850">
              <span className="text-xs uppercase text-sky-400 font-bold font-mono tracking-wider">
                {filteredImages[activeModalItemIndex].category} Client Showcase
              </span>
              <h3 className="font-display font-bold text-lg md:text-xl">
                {filteredImages[activeModalItemIndex].title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {filteredImages[activeModalItemIndex].description}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
