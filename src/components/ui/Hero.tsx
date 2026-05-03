import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMagnetic } from './useMagnetic';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const { ref, x, y } = useMagnetic();

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-6 md:p-12 mb-0">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop"
          alt="Academy Background"
          className="w-full h-[140%] object-cover brightness-[0.35] scale-110"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center md:text-left pt-24 md:pt-32">
        <div className="overflow-hidden mb-4">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm font-bold"
          >
            Est. 1982 | Excellence in Learning
          </motion.p>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif leading-[1.1] md:leading-[1.05] tracking-tighter"
          >
            The Future <br /> 
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light py-2 inline-block">Belongs</span> To You
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-8 mt-8 md:mt-12 items-center"
        >
          <div ref={ref} className="w-full md:w-auto">
            <motion.div animate={{ x, y }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}>
              <Link to="/admissions" className="group relative block bg-gold text-navy px-8 md:px-12 py-4 md:py-5 text-sm uppercase tracking-widest font-bold overflow-hidden rounded-sm transition-transform active:scale-95 text-center">
                <span className="relative z-10 flex items-center justify-center md:justify-start gap-2">
                  Start Your Journey <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>
          
          <Link to="/programs" className="text-paper/80 border-b border-paper/30 pb-1 text-sm uppercase tracking-[0.2em] font-medium hover:text-gold hover:border-gold transition-all">
            Explore Programs
          </Link>
        </motion.div>
      </div>


      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-12 hidden md:block"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-gold/50" />
          <span className="text-[10px] uppercase tracking-widest text-paper/40 font-mono">SCROLL TO DISCOVER</span>
        </div>
      </motion.div>
    </section>
  );
}
