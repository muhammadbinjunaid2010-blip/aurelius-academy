import { GraduationCap, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Our social media channels are currently under maintenance. Please check back later.");
  };

  return (
    <footer className="bg-navy text-paper pt-24 pb-12 px-6 md:px-12 border-t border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6 sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
              <GraduationCap className="text-navy w-6 h-6" />
            </div>
            <span className="font-serif text-2xl tracking-widest uppercase">
              Aurelius
            </span>
          </Link>
          <p className="text-paper/60 text-sm leading-relaxed max-w-xs">
            Cultivating global leaders through academic excellence, character building, and innovative thinking since 1982.
          </p>
          <div className="flex gap-4">
            <a href="#" onClick={handleSocialClick}>
              <Twitter className="w-5 h-5 text-paper/40 hover:text-gold cursor-pointer transition-colors" />
            </a>
            <a href="#" onClick={handleSocialClick}>
              <Instagram className="w-5 h-5 text-paper/40 hover:text-gold cursor-pointer transition-colors" />
            </a>
            <a href="#" onClick={handleSocialClick}>
              <Linkedin className="w-5 h-5 text-paper/40 hover:text-gold cursor-pointer transition-colors" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-8 text-gold">Explore</h4>
          <ul className="space-y-4 text-sm text-paper/60">
            <li><Link to="/programs" className="hover:text-gold transition-colors">Academic Programs</Link></li>
            <li><Link to="/admissions" className="hover:text-gold transition-colors">Admissions</Link></li>
            <li><Link to="/scholarships" className="hover:text-gold transition-colors">Scholarships</Link></li>
            <li><Link to="/campus-life" className="hover:text-gold transition-colors">Campus Life</Link></li>
            <li><Link to="/virtual-tour" className="hover:text-gold transition-colors font-bold text-gold/80 hover:text-white">Virtual Tour</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-8 text-gold">Admissions</h4>
          <ul className="space-y-4 text-sm text-paper/60">
            <li><Link to="/admissions" className="hover:text-gold transition-colors">Apply Today</Link></li>
            <li><Link to="/admissions" className="hover:text-gold transition-colors">Events & Open Days</Link></li>
            <li><Link to="/fees" className="hover:text-gold transition-colors">Fee Structure</Link></li>
            <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-8 text-gold">Contact</h4>
          <ul className="space-y-4 text-sm text-paper/60">
            <li className="flex items-center gap-3 font-mono">
              <Phone className="w-4 h-4 text-gold" />
              +1 (234) 567-890
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold" />
              admissions@aurelius.edu
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
              123 Elite Way, Luxury District,<br />Oxfordshire, OX1 2BE
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-paper/30 font-medium">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p>© 2026 Aurelius Academy. Prestige in Education.</p>
          <a 
            href="https://mo-developer.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors group"
          >
            <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
              <span className="text-[8px] font-bold">MO</span>
            </div>
            Built by Mo
          </a>
        </div>
        <div className="flex gap-8">
          <span className="hover:text-gold cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-gold cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-gold cursor-pointer transition-colors">Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
