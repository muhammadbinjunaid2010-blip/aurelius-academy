import { motion } from 'motion/react';
import { Award, Globe2, BookOpen, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const scholarshipTypes = [
  {
    title: "The Aurelius Merit Award",
    scope: "Academic Excellence",
    coverage: "Up to 75% Tuition",
    description: "Awarded to students who demonstrate exceptional intellectual capability and a history of high academic achievement."
  },
  {
    title: "Global Leadership Grant",
    scope: "Community & Impact",
    coverage: "Up to 50% Tuition",
    description: "For students who have demonstrated significant leadership and contributed positively to their local or global communities."
  },
  {
    title: "President's Arts Scholarship",
    scope: "Creative Distinction",
    coverage: "Up to 60% Tuition",
    description: "Awarded to exceptionally talented individuals in visual arts, music, or performing arts with a portfolio of excellence."
  }
];

export default function Scholarships() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6"
          >
            Nurturing Excellence
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif text-navy dark:text-paper mb-8 transition-colors duration-500"
          >
            Scholarships <br /> & <span className="italic">Grants</span>
          </motion.h1>
          <p className="text-xl text-navy/60 dark:text-paper/60 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Aurelius Academy is committed to making elite education accessible to the most brilliant minds, regardless of their financial background.
          </p>
        </div>
      </section>

      {/* Scholarship Cards */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarshipTypes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 md:p-12 bg-white dark:bg-navy border border-navy/5 dark:border-paper/5 shadow-sm flex flex-col group hover:shadow-2xl transition-all duration-500"
            >
              <Award className="text-gold w-10 h-10 mb-8 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-serif text-navy dark:text-paper mb-4 group-hover:text-gold transition-colors">{item.title}</h3>
              <div className="flex gap-4 mb-8">
                <span className="text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-paper/40 border border-navy/10 dark:border-paper/10 px-2 py-1">{item.scope}</span>
              </div>
              <p className="text-navy/60 dark:text-paper/60 text-sm leading-loose mb-12 flex-grow">{item.description}</p>
              <div className="pt-8 border-t border-navy/5 dark:border-paper/5">
                <p className="text-xs uppercase tracking-widest text-gold font-black mb-1">Benefit</p>
                <p className="text-2xl font-serif text-navy dark:text-paper">{item.coverage}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application CTA */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto bg-navy dark:bg-navy-dark p-12 md:p-24 text-paper relative overflow-hidden text-center md:text-left transition-colors duration-500">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Ready to showcase your talent?</h2>
              <p className="text-paper/60 leading-relaxed mb-12 text-lg">
                The scholarship application cycle for the 2026 academic year is now open. We invite you to begin your formal request.
              </p>
              <Link to="/admissions" className="inline-flex items-center gap-3 bg-gold text-navy px-10 py-5 text-sm uppercase tracking-widest font-black hover:bg-gold-light hover:scale-105 active:scale-95 transition-all rounded-sm">
                Apply for Aid <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/5 flex flex-col items-center justify-center p-6 md:p-8 border border-white/10">
                <Star className="text-gold w-6 md:w-8 h-6 md:h-8 mb-4" />
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-60">Merit Based</p>
              </div>
              <div className="aspect-square bg-white/5 flex flex-col items-center justify-center p-6 md:p-8 border border-white/10">
                <Globe2 className="text-gold w-6 md:w-8 h-6 md:h-8 mb-4" />
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-60">Global Scope</p>
              </div>
              <div className="aspect-square bg-white/5 flex flex-col items-center justify-center p-6 md:p-8 border border-white/10">
                <BookOpen className="text-gold w-6 md:w-8 h-6 md:h-8 mb-4" />
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-60">Academic Focus</p>
              </div>
              <div className="aspect-square bg-white/5 flex flex-col items-center justify-center p-6 md:p-8 border border-white/10">
                <Award className="text-gold w-6 md:w-8 h-6 md:h-8 mb-4" />
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-60">Distinction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
