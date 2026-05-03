import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { cn } from '../lib/utils';

export default function ThemeToggle({ scrolled }: { scrolled?: boolean }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative flex items-center h-8 md:h-10 px-1 rounded-full transition-all duration-500 border overflow-hidden",
        scrolled 
          ? "border-paper/20 bg-white/10" 
          : theme === 'dark' 
            ? "border-paper/20 bg-white/5" 
            : "border-navy/10 bg-navy/5"
      )}
      aria-label="Toggle Theme"
      style={{ width: '60px' }}
    >
      <motion.div
        className={cn(
          "absolute inset-y-1 w-6 md:w-8 rounded-full transition-colors duration-500 shadow-lg",
          theme === 'dark' ? "bg-gold" : "bg-navy"
        )}
        animate={{ x: theme === 'dark' ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      
      <div className={cn(
        "relative z-10 w-6 md:w-8 h-full flex items-center justify-center transition-colors duration-500",
        theme === 'light' ? "text-paper" : "text-paper/30"
      )}>
        <Sun size={12} className="md:size-[14px]" />
      </div>
      
      <div className={cn(
        "relative z-10 w-6 md:w-8 h-full flex items-center justify-center transition-colors duration-500",
        theme === 'dark' ? "text-navy" : scrolled ? "text-paper/30" : "text-navy/30"
      )}>
        <Moon size={12} className="md:size-[14px]" />
      </div>
    </button>
  );
}
