import { useState, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, CheckCircle2, ChevronRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: "Discovery & Inquiry",
    description: "Begin your journey by exploring our programs and requesting a personal tour of our elite campus facilities.",
    details: "Visit our campus during our semi-annual open house or schedule a private consultation with our admissions team."
  },
  {
    title: "Comprehensive Application",
    description: "Submit a detailed application including academic transcripts, personal statements, and letters of recommendation.",
    details: "Our holistic review process considers character, leadership potential, and academic curiosity."
  },
  {
    title: "Personal Interview",
    description: "Qualified candidates are invited for a formal interview with our senior academic panel.",
    details: "This is a chance for us to understand the student beyond the paper application."
  },
  {
    title: "Final Decision",
    description: "Prospective students receive their admission status within 14 days of the final interview.",
    details: "Accepted students receive a personalized package detailing their path at Aurelius."
  }
];

const faqs = [
  {
    question: "What is the typical class size at Aurelius?",
    answer: "To ensure personalized attention, our class sizes are strictly limited to an 8:1 student-to-faculty ratio, with an average of 14 students per class."
  },
  {
    question: "Do you offer scholarships for international students?",
    answer: "Yes, Aurelius Academy offers several merit-based scholarships for exceptionally talented students from around the globe, covering up to 75% of tuition."
  },
  {
    question: "What curriculum do you follow?",
    answer: "We follow a bespoke 'Academy Curriculum' that blends the best of the International Baccalaureate with our unique focus on leadership and innovation."
  }
];

export default function Admissions() {
  const [activeStep, setActiveStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would send this to a backend
  };

  return (
    <div className="pt-32 pb-24">
      {/* Hero Header */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif text-navy dark:text-paper transition-colors duration-500 mb-8"
          >
            Admissions
          </motion.h1>
          <div className="w-24 h-1 bg-gold mb-12 mx-auto lg:mx-0" />
          <p className="text-xl text-navy/60 dark:text-paper/60 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Joining Aurelius Academy is the first step toward a lifetime of leadership. We look for students who are not only academically gifted but possess the curiosity to change the world.
          </p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="px-6 md:px-12 bg-white dark:bg-navy-dark transition-colors duration-500 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-12">The Journey</h4>
            <div className="space-y-12 relative">
              {/* Vertical Line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-navy/10 dark:bg-paper/10" />
              
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-10 cursor-pointer group"
                  onClick={() => setActiveStep(idx)}
                >
                  <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500
                    ${activeStep === idx 
                      ? 'bg-navy dark:bg-gold border-navy dark:border-gold text-gold dark:text-navy shadow-lg scale-110' 
                      : 'bg-white dark:bg-navy border-navy/10 dark:border-paper/10 text-navy dark:text-paper group-hover:border-gold group-hover:text-gold'}`}
                  >
                    {activeStep > idx ? <CheckCircle2 className="w-5 h-5" /> : (idx + 1)}
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className={`font-serif text-2xl mb-2 transition-colors ${activeStep === idx ? 'text-navy dark:text-paper' : 'text-navy/40 dark:text-paper/40'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-opacity ${activeStep === idx ? 'opacity-100 text-navy/70 dark:text-paper/70' : 'opacity-40 text-navy/40 dark:text-paper/40'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-paper dark:bg-navy p-16 rounded-sm h-full flex flex-col justify-center transition-colors duration-500"
              >
                <h3 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Part {activeStep + 1} of 4</h3>
                <h2 className="text-4xl font-serif text-navy dark:text-paper mb-8">{steps[activeStep].title}</h2>
                <div className="w-12 h-px bg-gold mb-8" />
                <p className="text-navy/70 dark:text-paper/70 text-lg leading-relaxed">{steps[activeStep].details}</p>
                
                <Link to="/programs" className="mt-12 flex items-center gap-2 text-navy dark:text-paper font-bold uppercase tracking-widest text-xs hover:text-gold transition-colors">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="px-6 md:px-12 py-24 bg-paper dark:bg-midnight transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Ready to Apply?</h4>
            <h2 className="font-serif text-4xl text-navy dark:text-paper">Application for Admission</h2>
            <p className="mt-4 text-navy/60 dark:text-paper/60 text-sm italic">Academic Year 2026-2027</p>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleFormSubmit} 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-navy p-6 md:p-12 border border-navy/5 dark:border-paper/5 shadow-xl rounded-sm transition-colors duration-500"
              >
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-paper/40">Student Full Name</label>
                  <input required type="text" className="w-full bg-paper dark:bg-midnight border-b border-navy/10 dark:border-paper/10 py-3 px-4 focus:border-gold dark:focus:border-gold outline-none transition-colors text-sm text-navy dark:text-paper" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-paper/40">Parent/Guardian Name</label>
                  <input required type="text" className="w-full bg-paper dark:bg-midnight border-b border-navy/10 dark:border-paper/10 py-3 px-4 focus:border-gold dark:focus:border-gold outline-none transition-colors text-sm text-navy dark:text-paper" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-paper/40">Contact Email</label>
                  <input required type="email" className="w-full bg-paper dark:bg-midnight border-b border-navy/10 dark:border-paper/10 py-3 px-4 focus:border-gold dark:focus:border-gold outline-none transition-colors text-sm text-navy dark:text-paper" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-paper/40">Program of Interest</label>
                  <select className="w-full bg-paper dark:bg-midnight border-b border-navy/10 dark:border-paper/10 py-3 px-4 focus:border-gold dark:focus:border-gold outline-none transition-colors text-sm text-navy dark:text-paper">
                    <option>Advanced Sciences</option>
                    <option>Global Humanities</option>
                    <option>Creative Arts</option>
                    <option>Leadership & Ethics</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-paper/40">Personal Statement Snippet</label>
                  <textarea className="w-full bg-paper dark:bg-midnight border-b border-navy/10 dark:border-paper/10 py-3 px-4 focus:border-gold dark:focus:border-gold outline-none transition-colors text-sm text-navy dark:text-paper h-32" placeholder="Tell us about your aspirations..."></textarea>
                </div>
                <div className="md:col-span-2 pt-6">
                  <button type="submit" className="w-full bg-navy dark:bg-gold text-paper dark:text-navy py-5 text-sm uppercase tracking-widest font-black hover:bg-gold dark:hover:bg-paper hover:text-navy transition-all flex items-center justify-center gap-3">
                    Submit Formal Inquiry <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-navy p-20 border border-navy/5 dark:border-paper/5 shadow-2xl rounded-sm text-center flex flex-col items-center transition-colors duration-500"
              >
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-3xl font-serif text-navy dark:text-paper mb-4">Application Received</h3>
                <p className="text-navy/60 dark:text-paper/60 max-w-sm mb-12 leading-relaxed">
                  Thank you for your interest in Aurelius Academy. Our admissions team has received your inquiry and will contact you via email within 48 hours to schedule a consultation.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[10px] uppercase tracking-[0.3em] font-black text-gold hover:text-navy dark:hover:text-paper transition-colors"
                >
                  Submit another inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 py-24 bg-white dark:bg-navy-dark transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-16 text-navy dark:text-paper">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-navy/5 dark:border-paper/5 rounded-sm overflow-hidden bg-white dark:bg-navy shadow-sm transition-colors duration-500">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between hover:bg-paper/50 dark:hover:bg-midnight transition-colors"
                >
                  <span className="font-serif text-lg md:text-xl text-navy dark:text-paper">{faq.question}</span>
                  {openFaq === idx ? <Minus className="w-5 h-5 text-gold" /> : <Plus className="w-5 h-5 text-gold" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 text-navy/60 dark:text-paper/60 leading-relaxed text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Apply Button */}
      <motion.button
        onClick={scrollToForm}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-40 bg-navy dark:bg-gold text-paper dark:text-navy px-6 md:px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-gold dark:hover:bg-paper hover:text-navy transition-all group scale-100 hover:scale-105 active:scale-95 transition-colors duration-500"
      >
        <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Apply Now</span>
        <div className="w-8 h-8 md:w-8 md:h-8 bg-gold dark:bg-navy rounded-full flex items-center justify-center group-hover:bg-navy dark:group-hover:bg-gold transition-colors">
          <ChevronRight className="w-4 h-4 text-navy dark:text-gold group-hover:text-gold dark:group-hover:text-navy transition-colors" />
        </div>
      </motion.button>
    </div>
  );
}
