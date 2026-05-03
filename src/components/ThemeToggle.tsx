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
        "relative flex items-center h-8 md:h-9 rounded-full transition-all duration-500 border overflow-hidden",
        scrolled 
          ? "border-paper/20 bg-white/10" 
          : theme === 'dark' 
            ? "border-paper/20 bg-white/5" 
            : "border-navy/10 bg-navy/5"
      )}
      aria-label="Toggle Theme"
      style={{ width: '56px' }}
    >
      <motion.div
        className={cn(
          "absolute top-1 bottom-1 w-6 rounded-full transition-colors duration-500 shadow-lg z-0",
          theme === 'dark' ? "bg-gold" : "bg-navy"
        )}
        animate={{ x: theme === 'dark' ? 28 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      
      <div className={cn(
        "absolute left-0 w-[28px] h-full flex items-center justify-center transition-colors duration-500 z-10",
        theme === 'light' ? "text-paper" : "text-paper/30"
      )}>
        <Sun size={12} />
      </div>
      
      <div className={cn(
        "absolute right-0 w-[28px] h-full flex items-center justify-center transition-colors duration-500 z-10",
        theme === 'dark' ? "text-navy" : scrolled ? "text-paper/30" : "text-navy/30"
      )}>
        <Moon size={12} />
      </div>
    </button>
  );
}
