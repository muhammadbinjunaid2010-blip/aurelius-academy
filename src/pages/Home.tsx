import { motion } from 'motion/react';
import Hero from '../components/ui/Hero';
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Academic Excellence",
    description: "Our curriculum is designed to challenge and inspire, fostering critical thinking and intellectual curiosity."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Distinguished Faculty",
    description: "Learn from industry experts and world-renowned educators dedicated to your success."
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Global Leadership",
    description: "We prepare our students to lead in an interconnected world with character and integrity."
  }
];

export default function Home() {
  return (
    <div className="pb-24">
      <Hero />

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-12 bg-white dark:bg-navy-dark transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6">Our Philosophy</h4>
              <h2 className="text-4xl md:text-6xl font-serif text-navy dark:text-paper leading-tight mb-8">
                Cultivating Minds, <br />
                <span className="italic">Elevating Spirits</span>
              </h2>
              <p className="text-navy/70 dark:text-paper/70 text-lg leading-relaxed mb-8 max-w-xl">
                At Aurelius Academy, we believe that education is more than just academic achievement. It is about the holistic development of an individual, combining rigorous intellectual pursuit with the refinement of character.
              </p>
              <Link to="/programs" className="inline-flex items-center gap-2 text-navy dark:text-paper font-bold uppercase tracking-widest text-sm border-b-2 border-gold pb-1 hover:text-gold transition-colors">
                View our Ethos <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                alt="Students in library"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 md:px-12 bg-paper dark:bg-midnight transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-10 bg-white dark:bg-navy border border-navy/5 dark:border-paper/5 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-navy dark:bg-midnight text-gold rounded-sm flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-navy transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif text-navy dark:text-paper mb-4">{feature.title}</h3>
                <p className="text-navy/60 dark:text-paper/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop"
            alt="Academy Background"
            className="w-full h-full object-cover grayscale brightness-[0.2]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-white mb-16"
          >
            By the Numbers
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Faculty Members", value: "120+" },
              { label: "Global Campus", value: "3" },
              { label: "Student Success", value: "98%" },
              { label: "Extracurriculars", value: "45+" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-2"
              >
                <p className="text-5xl font-serif text-gold">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-paper/40 font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
