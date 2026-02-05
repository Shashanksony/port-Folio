import React from 'react';
import { ChevronRight, Github, Linkedin, Mail, MapPin, Heart, Code } from 'lucide-react';

const DetailedFooter = () => {
  const techStack = ['SQL', 'Python', 'FastAPI', 'MongoDB', 'Power BI', 'ETL', 'PySpark', 'Pandas', 'Docker', 'AWS'];

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-16 sm:pt-24 pb-8 sm:pb-12 relative overflow-hidden mt-20">
      {/* Accent Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-white font-black text-xl sm:text-2xl tracking-tighter">
              SHASHANK <span className="text-brand-cyan">SONY</span>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Engineering scalable data architectures and high-performance backend systems. 
              Focused on the intersection of data integrity and business intelligence.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {[
                { icon: <Github size={20}/>, link: "https://github.com/Shashanksony", label: "GitHub" },
                { icon: <Linkedin size={20}/>, link: "https://linkedin.com/in/shashanksony", label: "LinkedIn" },
                { icon: <Mail size={20}/>, link: "mailto:shashanksony82@gmail.com", label: "Email" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 bg-white/5 rounded-xl hover:bg-brand-cyan hover:text-black transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#hero" },
                { name: "Experience", href: "#experience" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href}
                    className="block text-slate-400 hover:text-brand-cyan transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Tech Matrix</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((skill) => (
                <span 
                  key={skill} 
                  className="bg-white/5 border border-white/5 px-2.5 sm:px-3 py-1 rounded text-[10px] font-mono text-slate-400 hover:border-brand-cyan/30 hover:text-brand-cyan transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Availability Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Availability</h4>
            <div className="p-4 sm:p-5 bg-brand-cyan/5 border border-brand-cyan/10 rounded-xl sm:rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-xs sm:text-sm text-white font-bold">Open for Collaboration</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mb-4">
                Available for high-impact Data Engineering and Backend contracts.
              </p>
              <a 
                href="mailto:shashanksony82@gmail.com" 
                className="text-brand-cyan text-xs font-bold hover:underline inline-flex items-center gap-1"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-slate-600 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-center sm:text-left order-2 sm:order-1">
              © 2026 Shashank Sony — Built with <Heart size={12} className="inline text-brand-cyan" /> using React & Tailwind
            </p>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 text-slate-400 hover:text-brand-cyan transition-all text-xs font-bold uppercase tracking-widest order-1 sm:order-2"
              aria-label="Scroll to top"
            >
              <span className="hidden sm:inline">Terminal Start</span>
              <span className="sm:hidden">Back to Top</span>
              <div className="p-2 bg-white/5 rounded-full group-hover:-translate-y-1 transition-transform">
                <ChevronRight size={14} className="-rotate-90" />
              </div>
            </button>
          </div>

          {/* Built With Section */}
          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <div className="flex items-center justify-center gap-2 text-slate-600 text-xs">
              <Code size={14} />
              <span>Crafted with precision and attention to detail</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DetailedFooter;
