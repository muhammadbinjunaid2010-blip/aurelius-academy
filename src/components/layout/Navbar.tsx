import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Programs', href: '/programs' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Fees', href: '/fees' },
  { name: 'Scholarships', href: '/scholarships' },
  { name: 'Campus Life', href: '/campus-life' },
  { name: 'Tour', href: '/virtual-tour' },
  { name: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 md:px-12',
          scrolled ? 'py-4 glass-dark' : 'py-10 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <span className={cn(
              "font-serif text-2xl tracking-[0.2em] uppercase transition-colors duration-500",
              scrolled ? "text-paper" : "text-navy"
            )}>
              Aurelius
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'relative text-[11px] xl:text-[12px] uppercase tracking-[0.2em] xl:tracking-[0.3em] font-medium transition-all duration-300 hover:text-gold',
                  scrolled ? 'text-paper/80' : 'text-navy',
                  location.pathname === link.href && 'text-gold'
                )}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                  />
                )}
              </Link>
            ))}
            
            <Link 
              to="/admissions" 
              className={cn(
                "px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-500 rounded-sm ml-4",
                scrolled 
                  ? "bg-gold text-navy hover:bg-white hover:text-navy" 
                  : "bg-navy text-paper hover:bg-gold hover:text-navy shadow-xl"
              )}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden group"
          >
            <div className="flex flex-col gap-1.5 items-end transition-all group-hover:gap-2">
              <div className={cn("h-px transition-all duration-500", scrolled ? "bg-paper w-8" : "bg-navy w-8")} />
              <div className={cn("h-px transition-all duration-500", scrolled ? "bg-paper w-6" : "bg-navy w-6")} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[60] bg-paper flex flex-col p-8 md:p-12 transition-colors duration-500 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-16 md:mb-24">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase text-navy">Aurelius</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-navy p-3 bg-navy/5 border border-navy/10 rounded-full hover:bg-gold hover:text-navy transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col space-y-6 md:space-y-8 overflow-y-auto no-scrollbar py-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2, type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "font-serif text-4xl md:text-6xl transition-all duration-300 flex items-center gap-6 group",
                      location.pathname === link.href ? "text-gold" : "text-navy hover:text-gold"
                    )}
                  >
                    <span className="text-[10px] md:text-xs font-mono text-gold/40 group-hover:text-gold transition-colors font-bold tracking-widest mt-2">0{idx + 1}</span>
                    <span className="tracking-tight">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto pt-10 border-t border-navy/5 flex flex-col gap-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/admissions"
                  onClick={() => setIsOpen(false)}
                  className="bg-navy text-paper px-6 py-5 text-[10px] uppercase tracking-[0.2em] font-black rounded-sm text-center shadow-lg active:scale-95 transition-all"
                >
                  Apply Now
                </Link>
                <Link
                  to="/virtual-tour"
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent border border-navy text-navy px-6 py-5 text-[10px] uppercase tracking-[0.2em] font-black rounded-sm text-center active:scale-95 transition-all"
                >
                  Virtual Tour
                </Link>
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] font-black text-navy/30 pb-4">
                <span>Admissions: +44 123 456 789</span>
                <div className="flex gap-4">
                  <span 
                    className="hover:text-gold cursor-pointer transition-colors"
                    onClick={() => alert("Instagram is currently under maintenance.")}
                  >
                    IG
                  </span>
                  <span 
                    className="hover:text-gold cursor-pointer transition-colors"
                    onClick={() => alert("Twitter is currently under maintenance.")}
                  >
                    TW
                  </span>
                  <span 
                    className="hover:text-gold cursor-pointer transition-colors"
                    onClick={() => alert("LinkedIn is currently under maintenance.")}
                  >
                    LI
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
