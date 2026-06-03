import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, FlaskConical, Globe, Palette, Sparkles, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const programs = [
  {
    id: "sci",
    title: "Advanced Sciences",
    icon: <FlaskConical className="w-8 h-8" />,
    color: "bg-blue-900/10",
    description: "Our science program emphasizes research-led discovery and experimental rigor.",
    details: "Students have access to state-of-the-art laboratories and collaborate with leading universities. We cover Physics, Bio-Engineering, and Quantum Computing at an advanced level."
  },
  {
    id: "hum",
    title: "Global Humanities",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-amber-900/10",
    description: "Fostering an understanding of world cultures, politics, and historical narratives.",
    details: "Deep dives into geopolitics, philosophy, and classical literature. Includes an mandatory international exchange module in the final year."
  },
  {
    id: "art",
    title: "Creative Arts",
    icon: <Palette className="w-8 h-8" />,
    color: "bg-rose-900/10",
    description: "Developing the next generation of visual and performing artists.",
    details: "Curated by industry professionals. Facilities include high-end digital studios, a private gallery, and a 400-seat theater."
  },
  {
    id: "lea",
    title: "Leadership & Ethics",
    icon: <Sparkles className="w-8 h-8" />,
    color: "bg-emerald-900/10",
    description: "The core of Aurelius Academy: building character and integrity.",
    details: "A program unique to our academy, focusing on decision-making, public speaking, and the moral philosophy of leadership."
  },
  {
    id: "spo",
    title: "Elite Athletics",
    icon: <Trophy className="w-8 h-8" />,
    color: "bg-orange-900/10",
    description: "Promoting physical excellence and discipline through sport.",
    details: "Professional coaching in Rowing, Equestrianism, and Fencing. Our athletes consistently compete at the national level."
  },
  {
    id: "lit",
    title: "Literary Excellence",
    icon: <Book className="w-8 h-8" />,
    color: "bg-slate-900/10",
    description: "Mastery of languages and the written word.",
    details: "Intensive training in rhetoric, creative writing, and multiple foreign languages including Latin and Mandarin."
  }
];

export default function Programs() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12">
            <div>
              <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-6">Educational Tracks</h4>
              <h1 className="text-5xl md:text-8xl font-serif text-navy transition-colors duration-500">Academic <br /> Programs</h1>
            </div>
            <p className="text-navy/60 max-w-lg text-lg leading-relaxed border-l-2 border-gold pl-8">
              We offer a diverse range of programs designed to nurture unique talents. Each track is customizable to fit the student's aspirations and strengths.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Grid */}
      <section className="px-6 md:px-12 min-h-[600px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <motion.div
              layoutId={program.id}
              key={program.id}
              onClick={() => setExpandedId(program.id)}
              className={cn(
                "relative p-12 cursor-pointer bg-white border border-navy/5 shadow-sm overflow-hidden group hover:shadow-2xl transition-all h-[400px] flex flex-col justify-between",
                expandedId === program.id && "z-50"
              )}
            >
              <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700", program.color)} />
              
              <div className="relative z-10">
                <div className="text-gold mb-8 group-hover:scale-110 transition-transform origin-left">
                  {program.icon}
                </div>
                <h3 className="text-3xl font-serif text-navy mb-6 group-hover:text-gold transition-colors">{program.title}</h3>
                <p className="text-navy/60 leading-relaxed text-sm">
                  {program.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-navy group-hover:text-gold transition-colors">
                Explore Module <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {expandedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedId(null)}
              className="fixed inset-0 bg-navy/80 backdrop-blur-md z-[60] cursor-pointer"
            />
            <motion.div
              layoutId={expandedId}
              className="fixed inset-6 md:inset-20 lg:inset-x-60 lg:inset-y-32 bg-white z-[70] shadow-2xl p-12 md:p-24 overflow-y-auto rounded-sm flex flex-col items-start transition-colors duration-500"
            >
              <button
                onClick={() => setExpandedId(null)}
                className="absolute top-12 right-12 text-navy/30 hover:text-navy uppercase tracking-widest text-xs font-bold transition-colors"
              >
                Close Module [×]
              </button>
              
              <div className="text-gold mb-12">
                {programs.find(p => p.id === expandedId)?.icon}
              </div>
              
              <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">In-Depth View</h4>
              <h2 className="text-5xl md:text-7xl font-serif text-navy mb-12 leading-none">
                {programs.find(p => p.id === expandedId)?.title}
              </h2>
              
              <div className="w-24 h-1 bg-gold mb-12" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <p className="text-xl text-navy/80 leading-relaxed mb-8">
                    {programs.find(p => p.id === expandedId)?.description}
                  </p>
                  <p className="text-navy/60 leading-loose">
                    {programs.find(p => p.id === expandedId)?.details}
                  </p>
                </div>
                <div className="space-y-8">
                  <div className="aspect-video bg-navy/5 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                     <img 
                        src={`https://picsum.photos/seed/${expandedId}/800/600`} 
                        alt="Program facility" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-gold/10" />
                    <div className="h-20 bg-gold/20" />
                    <div className="h-20 bg-gold/10" />
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-6">
                <Link to="/admissions" className="bg-navy text-paper px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-gold hover:text-navy transition-all">
                  Inquire Program
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
