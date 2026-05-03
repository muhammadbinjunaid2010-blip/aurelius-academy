import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';

const faqData = [
  {
    category: "General Information",
    items: [
      {
        question: "Where is Aurelius Academy located?",
        answer: "The Academy is situated on a sprawling 200-acre estate in the heart of Oxfordshire, United Kingdom, providing an inspiring and safe environment for elite learning."
      },
      {
        question: "Is Aurelius Academy a co-educational institution?",
        answer: "Yes, Aurelius is fully co-educational, welcoming exceptional students from all genders to grow and lead together."
      }
    ]
  },
  {
    category: "Academic Life",
    items: [
      {
        question: "Which curriculum is followed?",
        answer: "We follow our own bespoke 'Aurelius Honors' curriculum which integrates the International Baccalaureate (IB) framework with advanced modules in Leadership, Ethics, and Emerging Technologies."
      },
      {
        question: "What is the secondary language requirement?",
        answer: "All students are required to master at least one secondary language. Options include Mandarin, French, Spanish, Latin, and Arabic."
      }
    ]
  },
  {
    category: "Admissions & Entry",
    items: [
      {
        question: "When is the deadline for applications?",
        answer: "Standard applications open in September and close in late January for the following academic year. Early decision tracks are available for scholarship candidates."
      },
      {
        question: "Are entrance exams mandatory?",
        answer: "Yes, candidates undergo a proprietary holistic assessment that includes intellectual aptitude, personality profiling, and practical problem-solving tasks."
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-12 h-12 md:w-16 md:h-16 bg-navy dark:bg-gold text-gold dark:text-navy rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl transition-colors duration-500"
          >
            <HelpCircle className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-serif text-navy dark:text-paper mb-8 transition-colors duration-500">Common <br /> <span className="italic">Questions</span></h1>
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="How can we help you?"
              className="w-full bg-paper dark:bg-navy border border-navy/10 dark:border-paper/10 px-12 py-4 md:py-5 rounded-sm outline-none focus:border-gold dark:focus:border-gold transition-all font-medium text-navy/70 dark:text-paper/70"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/30 dark:text-paper/30" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {faqData.map((section, sIdx) => (
            <div key={sIdx}>
              <h3 className="text-gold uppercase tracking-[0.4em] text-[10px] font-black border-l-2 border-gold pl-6 mb-8">
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.items.map((item, iIdx) => {
                  const id = `${sIdx}-${iIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <motion.div 
                      key={id}
                      className="border border-navy/5 dark:border-paper/5 bg-white dark:bg-navy rounded-sm overflow-hidden transition-colors duration-500"
                    >
                      <button 
                        onClick={() => setOpenIndex(isOpen ? null : id)}
                        className="w-full text-left p-6 md:p-8 flex items-center justify-between hover:bg-paper/50 dark:hover:bg-paper/5 transition-colors group"
                      >
                        <span className={`font-serif text-lg md:text-xl transition-colors ${isOpen ? 'text-gold' : 'text-navy dark:text-paper group-hover:text-gold'}`}>{item.question}</span>
                        <div className={`transition-transform duration-500 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}>
                           {isOpen ? <Minus className="w-5 h-5 text-gold" /> : <Plus className="w-5 h-5 text-navy/30 dark:text-paper/30" />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          >
                            <div className="p-6 md:p-8 pt-0 dark:pt-0 text-navy/60 dark:text-paper/60 leading-loose text-sm border-t border-navy/5 dark:border-paper/5 mt-4 pt-8">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions? */}
      <section className="mt-32 px-6 md:px-12 text-center pb-12">
        <div className="max-w-2xl mx-auto p-8 md:p-12 border border-gold/20 bg-gold/5 dark:bg-gold/10 rounded-sm transition-colors duration-500">
           <h4 className="text-navy dark:text-paper font-serif text-xl md:text-2xl mb-4">Still have unanswered questions?</h4>
           <p className="text-navy/60 dark:text-paper/60 text-sm mb-8">Our dedicated admissions team is available for personal consultations.</p>
           <a href="mailto:admissions@aurelius.edu" className="inline-block bg-navy dark:bg-gold text-paper dark:text-navy px-8 py-4 text-[10px] md:text-xs uppercase tracking-widest font-black hover:bg-gold dark:hover:bg-paper hover:text-navy transition-all">Contact Support</a>
        </div>
      </section>
    </div>
  );
}
