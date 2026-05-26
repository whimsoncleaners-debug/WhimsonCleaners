import { Award, Flame, Users, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
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
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden pt-24 pb-16 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/40 to-slate-900 z-10" />
      
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXSNrdx8dOu6_YU9a2UPCewgm8hCfwxewQmnCZXN1beoITILuq6tih2e4H8GeXHCq9fJtBtRVFDThGetM_72mu_aKptC4GORPB3JTacLzTXfjNEn33FIj5_5Xw8XkoYx1AqRzMvoHCA3wqq0kSnTihMpne0x5Ug4Ip-ES622XJJbvNyjU3N0HzD9AQbahr8j2gJ750TJclmfKa4NDJSJD0KQj6WOb5V3ClJdacpg_DXfTlbcwl0VQBYcl2GW23OTyyoP7wwKQtZ0o2"
          alt="Professional High-Rise Window Cleaning Team"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full w-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>🔥 45% OFF - First Booking</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight lg:leading-[1.1]">
              Whimson Cleaners <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400">
                Professional Window Cleaning
              </span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl max-w-xl font-light leading-relaxed">
              We offer professional window cleaning, commercial cleaning, and residential cleaning services. Using eco-friendly products and expert techniques, we deliver crystal-clear results for homes and businesses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
<div className="flex items-start gap-2.5">
                <div className="p-1 bg-sky-500/25 rounded-md text-sky-400 mt-1">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100 text-sm">Streak-Free Guarantee</h4>
                  <p className="text-xs text-slate-400">Free re-clean within 48 hours if rain spots appear</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={scrollToGallery}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 text-white font-semibold text-base rounded-xl transition-all cursor-pointer"
              >
                <span>View Recent Work</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-8 rounded-3xl bg-slate-950/85 backdrop-blur-xl border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-sky-500/10 rounded-2xl text-sky-400">
                  <Flame className="h-6 w-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg leading-normal">Whimson Cleaners</h3>
                  <p className="text-xs text-slate-400">Trusted window cleaning experts</p>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-6 grid grid-cols-2 gap-6">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-display block">500+</span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-1 block">Happy Clients</span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-display block">3+</span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-1 block">Years Experience</span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-display block">99%</span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-1 block">Satisfaction Rate</span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-display block">45%</span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-1 block">OFF First Booking</span>
                </div>
              </div>

              <div className="bg-sky-500/5 border border-sky-500/10 rounded-2xl p-4 flex items-center gap-3">
                <Users className="h-5 w-5 text-sky-400 shrink-0" />
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Join hundreds of satisfied clients who trust Whimson Cleaners for their window cleaning, commercial cleaning, and residential cleaning needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
