import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Aye Finance",
      role: "SQL Developer",
      duration: "Nov 2025 - Present",
      description: "Architecting high-performance database solutions and automating complex financial data pipelines.",
      skills: ["SQL Optimization", "Architecture", "Data Governance"],
      current: true
    },
    {
      company: "Plus Distribution (PDPL)",
      role: "SQL & Python Developer",
      duration: "Aug 2024 - Oct 2025",
      description: "Engineered automated data workflows using Python and optimized cross-functional database security.",
      skills: ["Python Automation", "Database Security", "ETL"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-32 scroll-mt-24 relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-brand-cyan/5 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Professional <span className="text-brand-cyan underline decoration-brand-cyan/30 underline-offset-8">Trajectory</span>
        </h2>
        <p className="text-slate-500 font-mono tracking-tighter">01 // WORK_HISTORY & EDUCATION</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT: WORK TIMELINE (8 Columns) */}
        <div className="lg:col-span-8 space-y-8 relative">
          {/* Main vertical line */}
          <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-cyan via-slate-800 to-transparent ml-4 md:ml-0" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-16 group"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-[10px] md:-left-[6px] top-2 w-4 h-4 rounded-full border-2 border-[#030712] z-10 transition-all duration-500 
                ${exp.current ? 'bg-brand-cyan shadow-[0_0_15px_#06b6d4]' : 'bg-slate-700 group-hover:bg-brand-cyan'}`} 
              />

              <div className="glass-card p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group-hover:translate-x-2">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors italic">{exp.company}</h3>
                    <p className="text-brand-cyan font-mono text-sm uppercase tracking-wider">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-mono bg-white/5 px-3 py-1 rounded-full">
                    <Calendar size={12} /> {exp.duration}
                  </div>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-[10px] font-bold text-slate-300 border border-white/10 px-2 py-1 rounded bg-white/5 uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT: EDUCATION & HIGHLIGHTS (4 Columns) */}
        <div className="lg:col-span-4 space-y-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-brand-cyan/20 to-transparent border border-brand-cyan/20 relative overflow-hidden group"
          >
            <div className="absolute top-[-20%] right-[-10%] opacity-10 group-hover:rotate-12 transition-transform duration-700">
               <GraduationCap size={150} />
            </div>
            
            <GraduationCap className="text-brand-cyan mb-6" size={40} />
            <h3 className="text-white font-bold text-xl mb-2 italic">Academic Pursuit</h3>
            <p className="text-brand-cyan font-mono text-xs mb-4 uppercase">Master of Computer Application</p>
            <div className="space-y-4">
              <div className="border-l-2 border-brand-cyan pl-4">
                <p className="text-white font-medium">IGNOU</p>
                <p className="text-xs text-slate-500">2025 - Present (Pursuing)</p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Specializing in Advanced Database Systems and Enterprise Software Engineering.
              </p>
            </div>
          </motion.div>

          {/* Quick Stats/Badge */}
          <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                <Briefcase size={24} />
             </div>
             <div>
               <p className="text-white font-bold text-lg">2+ Years</p>
               <p className="text-slate-500 text-xs uppercase font-mono">SQL & PYTHON Experience</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;