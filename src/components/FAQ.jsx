import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      id: "faq1",
      question: "What services does Whimson Cleaners offer?",
      answer: "Whimson Cleaners offers professional window cleaning, commercial cleaning, and residential cleaning services. We use eco-friendly products and professional-grade equipment to deliver crystal-clear results for homes and businesses. We also offer deep cleaning and glass polishing services."
    },
    {
      id: "faq2",
      question: "How can I get the 45% OFF promotion?",
      answer: "Getting 45% OFF your first booking is easy! Simply call us at +1 431-990-5410 or +1 431-997-1150, or email us at whimsoncleaners@gmail.com. Mention the promotion when booking, and we'll apply the discount to your first service."
    },
    {
      id: "faq3",
      question: "Is Whimson Cleaners fully insured?",
      answer: "Yes, fully! We carry a comprehensive General Liability insurance policy alongside complete worker's compensation cover for our technicians. Your property and interiors are safe under legal assurance when you hire Whimson Cleaners."
    },
    {
      id: "faq4",
      question: "Do you offer both residential and commercial cleaning?",
      answer: "Absolutely! We provide residential cleaning for homes and commercial cleaning for businesses, offices, and storefronts. Our team is trained to handle projects of all sizes, from single-family homes to large commercial properties."
    },
    {
      id: "faq5",
      question: "How often should I have my windows professionally cleaned?",
      answer: "We recommend quarterly cleaning (every 3 months) for most homes to maintain crystal-clear windows. For businesses and high-traffic areas, monthly or bi-monthly cleaning is recommended. We offer special rates for recurring service agreements."
    }
  ];

  const [activeFaqId, setActiveFaqId] = useState("faq1");

  const toggleFaq = (id) => {
    setActiveFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute bottom-1/2 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40 select-none pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>KNOWLEDGE DESK</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Common Inquiries Solved
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed">
            Find answers about our window cleaning, commercial cleaning, and residential cleaning services.
          </p>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all ${
                  isOpen ? 'border-sky-400 shadow-lg shadow-sky-500/5' : 'border-slate-100 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5.5 flex justify-between items-center text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-bold text-slate-900 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <span className={`p-1.5 rounded-lg shrink-0 ${isOpen ? 'bg-sky-50 text-sky-600' : 'bg-slate-50 text-slate-400'}`}>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed font-light border-t border-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
