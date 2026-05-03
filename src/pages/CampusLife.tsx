import { motion } from 'motion/react';
import { Camera, Music, Users, Trophy, Coffee, Map, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const activities = [
  {
    title: "Elite Athletics",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
    description: "From rowing on the private lake to fencing in our dedicated halls, discipline is forged in competition.",
    icon: <Trophy className="w-6 h-6" />
  },
  {
    title: "Creative Arts",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecea8f82?q=80&w=1780&auto=format&fit=crop",
    description: "Our arts center serves as a sanctuary for musicians, painters, and actors to refine their craft.",
    icon: <Music className="w-6 h-6" />
  },
  {
    title: "Residential Life",
    image: "https://images.unsplash.com/photo-1555854817-5b23605333f4?q=80&w=2070&auto=format&fit=crop",
    description: "Luxury boarding facilities that provide a home-away-from-home filled with camaraderie.",
    icon: <Coffee className="w-6 h-6" />
  }
];

export default function CampusLife() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/school background.jpg" 
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Campus"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h4
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            className="text-gold uppercase text-xs font-bold mb-6"
          >
            Life at Aurelius
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-9xl font-serif"
          >
            A Vibrant <br /> <span className="italic font-normal">Community</span>
          </motion.h1>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 md:px-12 bg-white dark:bg-navy-dark transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-navy dark:text-paper mb-8 leading-tight">Beyond the <br /> Lecture Halls</h2>
            <div className="w-16 h-1 bg-gold mb-8" />
            <p className="text-navy/70 dark:text-paper/70 text-lg leading-relaxed mb-8">
              Education at Aurelius continues long after classes end. Our campus is a thriving ecosystem where students explore passions, build lifelong bonds, and develop the social intelligence required of future leaders.
            </p>
            <div className="grid grid-cols-2 gap-8 font-mono text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-paper/40">
              <div className="flex flex-col gap-2">
                <Users className="text-gold w-5 h-5" />
                <span>45+ Clubs & Societies</span>
              </div>
              <div className="flex flex-col gap-2">
                <Map className="text-gold w-5 h-5" />
                <span>200-Acre Private Estate</span>
              </div>
            </div>

            <div className="mt-12">
              <Link to="/virtual-tour" className="inline-flex items-center gap-4 bg-navy dark:bg-gold text-paper dark:text-navy px-8 py-4 md:px-10 md:py-5 text-[10px] md:text-xs uppercase tracking-widest font-black hover:bg-gold dark:hover:bg-paper hover:text-navy transition-all group active:scale-95">
                Launch 360° Virtual Tour
                <Maximize2 className="w-4 h-4 group-hover:scale-125 transition-transform" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
              alt="Campus life" 
              className="w-full h-[350px] md:h-[500px] object-cover rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-paper dark:bg-navy p-6 md:p-10 border border-navy/5 dark:border-paper/5 shadow-xl hidden sm:block transition-colors duration-500">
              <span className="font-serif text-2xl md:text-3xl text-navy dark:text-paper">"Unforgettable moments."</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activity Grid */}
      <section className="py-24 px-6 md:px-12 bg-paper dark:bg-midnight transition-colors duration-500">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-24">
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-3/5 aspect-video overflow-hidden group">
                 <img 
                  src={act.image} 
                  alt={act.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full lg:w-2/5 p-8 md:p-12 border border-navy/5 dark:border-paper/5 bg-white dark:bg-navy shadow-sm flex flex-col items-start transition-colors duration-500">
                <div className="p-4 bg-navy dark:bg-midnight text-gold mb-6">{act.icon}</div>
                <h3 className="text-2xl md:text-3xl font-serif text-navy dark:text-paper mb-4">{act.title}</h3>
                <p className="text-navy/60 dark:text-paper/60 leading-relaxed mb-8 text-sm md:text-base">{act.description}</p>
                <button className="text-[10px] uppercase font-black tracking-widest text-navy dark:text-gold border-b border-gold pb-1 hover:text-gold dark:hover:text-paper transition-colors">Discover More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Feed Concept */}
      <section className="py-24 px-6 md:px-12 bg-white dark:bg-navy-dark text-center transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <Camera className="w-12 h-12 text-gold mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-serif text-navy dark:text-paper mb-16">Moments on Campus</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-paper dark:bg-navy overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                   <img 
                    src={`https://picsum.photos/seed/campus${i}/800/800`} 
                    alt="Gallery" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
             ))}
          </div>
          <p className="mt-12 text-[10px] uppercase tracking-[0.3em] font-bold text-navy/40 dark:text-paper/40">Follow our story @AureliusAcademy</p>
        </div>
      </section>
    </div>
  );
}
