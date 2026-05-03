import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex pointer-events-none">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ duration: 1, delay: 2, ease: [0.87, 0, 0.13, 1] }}
        className="flex-1 bg-navy"
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ duration: 1, delay: 2, ease: [0.87, 0, 0.13, 1] }}
        className="flex-1 bg-navy"
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gold">
        <div className="relative flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-24 h-24 border-2 border-gold rounded-sm flex items-center justify-center">
              <GraduationCap className="w-12 h-12" />
            </div>
          </motion.div>
          
          <motion.div
            animate={{ 
              opacity: [0.5, 0],
              scale: [1, 3]
            }}
            transition={{ duration: 1.2, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-24 h-24 border border-gold/30 rounded-sm" />
          </motion.div>
        </div>
        
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-3xl tracking-[0.4em] uppercase"
          >
            Aurelius
          </motion.h1>
        </div>
        
        <div className="mt-8 overflow-hidden h-px w-48 bg-gold/20">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full bg-gold"
          />
        </div>
      </div>
    </div>
  );
}
