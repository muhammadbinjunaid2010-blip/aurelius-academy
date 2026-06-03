import { useState } from 'react';
import { GraduationCap, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<null | 'privacy' | 'terms' | 'accessibility'>(null);

  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Our social media channels are currently under maintenance. Please check back later.");
  };

  const policiesContent = {
    privacy: {
      title: "Privacy Policy",
      subtitle: "Aurelius Academy Data Protection & Privacy Standard",
      lastUpdated: "Effective June 2026",
      paragraphs: [
        {
          heading: "1. Information We Collect",
          body: "Aurelius Academy collects basic personal identity details provided during inquiry processes, registration stages, and portal authentication, including full legal names, contact email addresses, academic background dossiers, and basic browser usage statistics for rendering our interactive virtual systems."
        },
        {
          heading: "2. Information Utilization",
          body: "Any collected data is used exclusively for evaluating prospective cadet admission applications, organizing institutional operations, maintaining the security of our high-fidelity virtual networks, keeping logs of scholarly performance, and sending important updates regarding campus programs and academy news."
        },
        {
          heading: "3. Cryptographic Security Standards",
          body: "All user databases and private session interactions are protected under multi-layer cryptographic hashing and physical security keys. Aurelius Academy strictly forbids the lease, exchange, or commercial transmission of student data to third-party institutions without explicit written consent."
        },
        {
          heading: "4. Your Rights & Policy Inquiries",
          body: "Under modern data guidelines, visitors and registered cadets possess the right to request comprehensive reports of any stored information, demand complete removal or anonymization of non-essential profile data, or raise administrative privacy questions via admissions@aurelius.edu."
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      subtitle: "Academic Enrollment & Institutional Usage Agreement",
      lastUpdated: "Effective June 2026",
      paragraphs: [
        {
          heading: "1. Covenant of Academic Trust",
          body: "By applying to or navigating the virtual platforms of Aurelius Academy, all students, sponsors, and community visitors agree to carry themselves with the highest level of intellectual integrity, honesty, and mutual respect, aligning with our historically grounded four core values."
        },
        {
          heading: "2. Intellectual Property Rights",
          body: "All scholastic software, interactive 3D media, architecture diagrams, video recordings, branding guidelines, syllabus files, and portal curriculum layouts remain the sovereign, exclusive intellectual property of Aurelius Academy. Unauthorized replication, distribution, or resale is strictly prohibited."
        },
        {
          heading: "3. Tuition, Schedules & Financial Policies",
          body: "Acceptance into any track of our curriculum obligates compliance with the designated fee structure schedules. Withdrawal conditions, scholarship awards, and reimbursement terms must follow the precise specifications defined inside our primary institutional bylaws."
        },
        {
          heading: "4. Liability Boundaries & Safety",
          body: "While Aurelius Academy strives for consistent excellence across physical campuses and remote classrooms, the academy is not responsible for temporary, unplanned service interruptions of virtual labs or server hosting channels caused by upstream telecom provider failures."
        }
      ]
    },
    accessibility: {
      title: "Accessibility Standard",
      subtitle: "Bridging Communities Through Inclusive Design Standards",
      lastUpdated: "Effective June 2026",
      paragraphs: [
        {
          heading: "1. Dedication to Complete Inclusivity",
          body: "Physical and intellectual accessibility are key pillars of the Aurelius educational philosophy. We design all modern digital touchpoints, 360-degree tours, and course interfaces to align closely with the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 Level AA benchmarks."
        },
        {
          heading: "2. Dynamic Accessibility Adjustments",
          body: "Our layouts support custom browser zooming, assistive technology voiceover structures, fully descriptive alternative imaging descriptions, high-contrast typography scaling, and structured sequential navigation layouts that eliminate dependencies on physical fine-motor precision."
        },
        {
          heading: "3. Constant Optimization Reviews",
          body: "We carry out comprehensive audits of our virtual portal, immersive visual tours, and registrar systems on a bi-annual basis, deploying custom updates, resolving interactive contrast issues, and testing interfaces with various software packages."
        },
        {
          heading: "4. Share Your Feedback",
          body: "If you encounter any section, document, or feature within our digital tools that presents a barrier to your experience, we encourage you to file a report with our specialized system coordinators at admissions@aurelius.edu. We strive to deploy fixes and alternative formats within three business days."
        }
      ]
    }
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
          <button onClick={() => setActivePolicy('privacy')} className="hover:text-gold cursor-pointer transition-colors uppercase">Privacy Policy</button>
          <button onClick={() => setActivePolicy('terms')} className="hover:text-gold cursor-pointer transition-colors uppercase">Terms of Service</button>
          <button onClick={() => setActivePolicy('accessibility')} className="hover:text-gold cursor-pointer transition-colors uppercase">Accessibility</button>
        </div>
      </div>

      <AnimatePresence>
        {activePolicy && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePolicy(null)}
              className="absolute inset-0 bg-navy/95 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="relative w-full max-w-2xl bg-white text-navy p-8 md:p-12 rounded-sm shadow-2xl overflow-y-auto max-h-[85vh] border-t-4 border-gold z-10"
            >
              <button 
                onClick={() => setActivePolicy(null)}
                className="absolute top-6 right-6 text-navy/40 hover:text-navy transition-all p-2 bg-navy/5 rounded-full"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-8">
                <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs">Official Document</span>
                <h3 className="text-3xl md:text-4xl font-serif text-navy mt-1 mb-2">
                  {policiesContent[activePolicy].title}
                </h3>
                <p className="text-navy/60 italic text-sm font-sans">
                  {policiesContent[activePolicy].subtitle}
                </p>
                <div className="mt-4 border-b border-navy/10 pb-4 text-[10px] uppercase font-mono tracking-wider text-navy/40">
                  {policiesContent[activePolicy].lastUpdated}
                </div>
              </div>
              
              <div className="space-y-8 font-sans">
                {policiesContent[activePolicy].paragraphs.map((p, index) => (
                  <div key={index} className="space-y-2">
                    <h5 className="font-serif text-lg text-navy font-bold">{p.heading}</h5>
                    <p className="text-navy/70 leading-relaxed text-sm">{p.body}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-6 border-t border-navy/10 flex justify-end">
                <button 
                  onClick={() => setActivePolicy(null)}
                  className="bg-navy text-paper px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-navy active:scale-95 transition-all"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
