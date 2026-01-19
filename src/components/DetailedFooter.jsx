import React from 'react';
import { ChevronRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const DetailedFooter = () => {
  const techStack = ['SQL', 'Python', 'FastAPI', 'MongoDB', 'Power BI', 'ETL', 'PySpark', 'Pandas'];

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Accent Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-white font-black text-2xl tracking-tighter">SHASHANK <span className="text-brand-cyan">SONY</span></h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Engineering scalable data architectures and high-performance backend systems. 
              Focused on the intersection of data integrity and business intelligence.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20}/>, link: "https://github.com/Shashanksony" },
                { icon: <Linkedin size={20}/>, link: "https://linkedin.com/in/shashanksony" },
                { icon: <Mail size={20}/>, link: "mailto:shashanksony82@gmail.com" }
              ].map((social, idx) => (
                <a key={idx} href={social.link} target="_blank" className="p-2.5 bg-white/5 rounded-xl hover:bg-brand-cyan hover:text-black transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Background Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Trajectory</h4>
            <ul className="space-y-4">
              {[
                { name: "Aye Finance", sub: "SQL Developer (Current)" },
                { name: "PDPL", sub: "Python/SQL Dev (2024)" },
                { name: "IGNOU", sub: "MCA (Pursuing)" }
              ].map((item, idx) => (
                <li key={idx} className="group cursor-default">
                  <span className="block text-slate-300 font-medium group-hover:text-brand-cyan transition-colors">{item.name}</span>
                  <span className="text-[10px] text-slate-600 font-mono uppercase tracking-tighter">{item.sub}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Tech Matrix</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((skill) => (
                <span key={skill} className="bg-white/5 border border-white/5 px-3 py-1 rounded text-[10px] font-mono text-slate-400">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Availability Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Availability</h4>
            <div className="p-4 bg-brand-cyan/5 border border-brand-cyan/10 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-xs text-white font-bold">Open for Collaboration</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                Available for high-impact Data Engineering and Backend contracts.
              </p>
              <a href="mailto:shashanksony82@gmail.com" className="text-brand-cyan text-xs font-bold hover:underline">Get in touch →</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] font-mono tracking-widest uppercase text-center md:text-left">
            © 2026 Shashank Sony — Built with React & Tailwind v4
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 text-slate-400 hover:text-brand-cyan transition-all text-xs font-bold uppercase tracking-widest"
          >
            Terminal Start
            <div className="p-2 bg-white/5 rounded-full group-hover:-translate-y-1 transition-transform">
              <ChevronRight size={14} className="-rotate-90" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default DetailedFooter;