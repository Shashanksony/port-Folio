import React from 'react';
import { ChevronRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const DetailedFooter = () => {
  const techStack = ['PostgreSQL', 'Python', 'FastAPI', 'MongoDB', 'Power BI', 'ETL', 'Pandas', 'Tailwind v4'];

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: About & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold text-xl uppercase tracking-widest mb-4">Shashank Sony</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Specializing in high-performance SQL, Python automation, and FastAPI backends. 
                Currently delivering data excellence at Aye Finance.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com/Shashanksony" target="_blank" className="p-2 bg-white/5 rounded-lg hover:text-brand-cyan transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/shashanksony" target="_blank" className="p-2 bg-white/5 rounded-lg hover:text-brand-cyan transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:shashanksony82@gmail.com" className="p-2 bg-white/5 rounded-lg hover:text-brand-cyan transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Career & Education */}
          <div className="space-y-4">
            <h4 className="text-brand-cyan font-mono text-sm uppercase tracking-[0.2em]">Background</h4>
            <ul className="text-slate-400 text-sm space-y-4">
              <li className="group">
                <span className="block text-white font-medium group-hover:text-brand-cyan transition-colors">Aye Finance</span>
                <span className="text-xs text-slate-500">Data Analyst (Current)</span>
              </li>
              <li className="group">
                <span className="block text-white font-medium group-hover:text-brand-cyan transition-colors">PDPL</span>
                <span className="text-xs text-slate-500">SQL & Python Developer (2022-24)</span>
              </li>
              <li className="group">
                <span className="block text-white font-medium group-hover:text-brand-cyan transition-colors">IGNOU</span>
                <span className="text-xs text-slate-500">MCA Candidate</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Matrix */}
          <div className="space-y-4">
            <h4 className="text-brand-cyan font-mono text-sm uppercase tracking-[0.2em]">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((skill) => (
                <span 
                  key={skill} 
                  className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] text-slate-300 hover:border-brand-cyan/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-brand-cyan font-mono text-sm uppercase tracking-[0.2em]">Connect</h4>
            <div className="flex flex-col gap-4 text-sm text-slate-400">
              <a href="mailto:shashanksony82@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} className="text-brand-cyan" /> shashanksony82@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-cyan" /> New Delhi, India
              </div>
              <div className="mt-2 p-3 bg-brand-cyan/5 border border-brand-cyan/10 rounded-lg">
                <p className="text-[11px] leading-relaxed text-slate-400">
                  <span className="text-brand-cyan font-bold">Note:</span> Currently open for high-impact data engineering projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-[10px] font-mono uppercase tracking-widest">
            © 2026 SHASHANK_SONY // DESIGNED_AND_ENGINEERED
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-slate-500 hover:text-brand-cyan text-xs font-mono flex items-center gap-2 uppercase tracking-tighter group transition-all"
          >
            Back to top 
            <ChevronRight size={14} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default DetailedFooter;