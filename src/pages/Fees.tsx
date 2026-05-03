import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, Calculator, Download } from 'lucide-react';

const plans = [
  {
    name: "Foundation",
    price: 12000,
    description: "Ideal for early primary education focusing on curiosity and basics.",
    features: ["Standard Curriculum", "Art & Music Modules", "Sports Program", "Daily Meals"],
    popular: false
  },
  {
    name: "Excellence",
    price: 18500,
    description: "Our signature program with advanced sciences and leadership training.",
    features: ["IB Curriculum", "1-on-1 Mentorship", "International Trips", "Advanced Labs", "Elite Athletics"],
    popular: true
  },
  {
    name: "Global Scholar",
    price: 24000,
    description: "Designed for world-class achievers aiming for Ivy League success.",
    features: ["All Excellence Perks", "Boarding & High-End Living", "College App Concierge", "Internships", "Foreign Language Mastery"],
    popular: false
  }
];

export default function Fees() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [tuitionSlider, setTuitionSlider] = useState(15000);
  const [transport, setTransport] = useState(false);
  const [extracurricular, setExtracurricular] = useState(false);

  const calculateTotal = () => {
    let total = tuitionSlider;
    if (transport) total += 1200;
    if (extracurricular) total += 2500;
    return total;
  };

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 md:px-12 mb-20 text-center">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-6">Investment in the Future</h4>
          <h1 className="text-5xl md:text-8xl font-serif text-navy dark:text-paper transition-colors duration-500 mb-12">Fee Structure</h1>
          
          {/* Toggle */}
          <div className="inline-flex items-center p-1 bg-navy/5 dark:bg-paper/5 rounded-full border border-navy/10 dark:border-paper/10 relative transition-colors duration-500">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 md:px-8 py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-bold z-10 transition-colors ${isAnnual ? 'text-paper dark:text-navy' : 'text-navy dark:text-paper'}`}
            >
              Annual Billing
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 md:px-8 py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-bold z-10 transition-colors ${!isAnnual ? 'text-paper dark:text-navy' : 'text-navy dark:text-paper'}`}
            >
              Monthly Billing
            </button>
            <motion.div
              layout
              className="absolute bg-navy dark:bg-gold h-[80%] rounded-full shadow-lg"
              initial={false}
              animate={{
                left: isAnnual ? '4px' : '50%',
                width: isAnnual ? 'calc(50% - 4px)' : 'calc(50% - 4px)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative p-8 md:p-12 border rounded-sm flex flex-col transition-colors duration-500 ${plan.popular ? 'border-gold bg-navy dark:bg-navy-dark text-paper shadow-2xl' : 'border-navy/10 dark:border-paper/10 bg-white dark:bg-navy text-navy dark:text-paper'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-12 -translate-y-1/2 bg-gold text-navy px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-black rounded-sm">
                  Recommended
                </div>
              )}
              
              <h3 className="font-serif text-3xl mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className={`text-5xl font-serif ${plan.popular ? 'text-gold' : 'text-navy dark:text-gold'}`}>
                  ${isAnnual ? plan.price.toLocaleString() : Math.round(plan.price / 11).toLocaleString()}
                </span>
                <span className="text-xs uppercase tracking-widest opacity-60">/ {isAnnual ? 'Year' : 'Month'}</span>
              </div>
              
              <p className={`text-sm mb-10 leading-relaxed ${plan.popular ? 'text-paper/70' : 'text-navy/60 dark:text-paper/60'}`}>
                {plan.description}
              </p>
              
              <div className="w-full h-px bg-current opacity-10 mb-10" />
              
              <ul className="space-y-6 mb-12 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-4 text-[10px] md:text-xs uppercase tracking-widest font-medium">
                    <Check className={`w-4 h-4 text-gold`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => alert(`Prospectus request submitted for ${plan.name} plan. Our team will contact you shortly.`)}
                className={`w-full py-5 text-[10px] md:text-xs uppercase tracking-widest font-black transition-all ${plan.popular ? 'bg-gold text-navy hover:bg-gold-light' : 'bg-navy dark:bg-gold text-paper dark:text-navy hover:bg-navy/90 dark:hover:bg-paper'}`}
              >
                Request Prospectus
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fee Calculator Slider */}
      <section className="px-6 md:px-12 bg-navy dark:bg-navy-dark py-32 text-paper relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 bg-gold/5 dark:bg-gold/10 opacity-50 z-0" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-12 justify-center lg:justify-start">
            <Calculator className="w-8 h-8 text-gold" />
            <h2 className="font-serif text-3xl md:text-4xl text-center md:text-left">Investment Estimator</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 bg-white/5 p-8 md:p-12 backdrop-blur-xl border border-white/10 rounded-sm">
            <div className="space-y-12">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-6">Base Tuition</label>
                <input
                  type="range"
                  min="8000"
                  max="35000"
                  step="500"
                  value={tuitionSlider}
                  onChange={(e) => setTuitionSlider(parseInt(e.target.value))}
                  className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between mt-4 text-[10px] font-mono opacity-40">
                  <span>$8,000</span>
                  <span>$35,000</span>
                </div>
              </div>

              <div className="space-y-6">
                <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Additional Services</label>
                <div className="space-y-4">
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input type="checkbox" checked={transport} onChange={() => setTransport(!transport)} className="hidden" />
                    <div className={`w-6 h-6 border rounded-sm flex items-center justify-center transition-all ${transport ? 'bg-gold border-gold' : 'border-white/20 hover:border-gold'}`}>
                      {transport && <Check className="w-4 h-4 text-navy" />}
                    </div>
                    <span className="text-xs md:text-sm font-medium tracking-wide">Elite Transport Service (+$1,200)</span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <input type="checkbox" checked={extracurricular} onChange={() => setExtracurricular(!extracurricular)} className="hidden" />
                    <div className={`w-6 h-6 border rounded-sm flex items-center justify-center transition-all ${extracurricular ? 'bg-gold border-gold' : 'border-white/20 hover:border-gold'}`}>
                      {extracurricular && <Check className="w-4 h-4 text-navy" />}
                    </div>
                    <span className="text-xs md:text-sm font-medium tracking-wide">Extracurricular Mastery (+$2,500)</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-end border-t lg:border-t-0 lg:border-l border-white/10 pt-12 lg:pt-0 lg:pl-12">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2">Estimated Annual Investment</p>
              <motion.p
                key={calculateTotal()}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-serif text-gold"
              >
                ${calculateTotal().toLocaleString()}
              </motion.p>
              <button 
                onClick={() => window.print()}
                className="mt-12 flex items-center gap-2 text-paper hover:text-gold transition-colors font-bold uppercase tracking-widest text-[10px]"
              >
                <Download className="w-4 h-4" /> Download PDF Statement
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
