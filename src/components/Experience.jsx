import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Aye Finance",
      role: "SQL Developer",
      duration: "Nov 2025 - Present",
      location: "Remote",
      description: "Architecting high-performance database solutions and automating complex financial data pipelines. Leading initiatives in data governance and optimization strategies.",
      skills: ["SQL Optimization", "Database Architecture", "Data Governance", "Financial Analytics"],
      achievements: [
        "Optimized query performance by 60%",
        "Automated 15+ data pipelines",
        "Reduced processing time by 45%"
      ],
      current: true
    },
    {
      company: "Plus Distribution (PDPL)",
      role: "SQL & Python Developer",
      duration: "Aug 2024 - Oct 2025",
      location: "Hybrid",
      description: "Engineered automated data workflows using Python and optimized cross-functional database security. Implemented ETL processes for seamless data integration.",
      skills: ["Python Automation", "Database Security", "ETL Pipelines", "API Development"],
      achievements: [
        "Built 20+ Python automation scripts",
        "Enhanced database security protocols",
        "Streamlined data integration processes"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 scroll-mt-24 relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 w-48 sm:w-64 h-48 sm:h-64 bg-brand-cyan/5 blur-[100px] sm:blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          Professional <span className="text-brand-cyan underline decoration-brand-cyan/30 underline-offset-8">Trajectory</span>
        </h2>
        <p className="text-slate-500 font-mono tracking-tighter text-sm sm:text-base">01 // WORK_HISTORY & EDUCATION</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* LEFT: WORK TIMELINE (8 Columns) */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8 relative">
          {/* Main vertical line - hidden on mobile, visible on larger screens */}
          <div className="hidden sm:block absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-cyan via-slate-800 to-transparent ml-4 md:ml-0" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-0 sm:pl-12 md:pl-16 group"
            >
              {/* Timeline Dot - hidden on mobile */}
              <div className={`hidden sm:block absolute left-[10px] md:-left-[6px] top-2 w-4 h-4 rounded-full border-2 border-[#030712] z-10 transition-all duration-500 
                ${exp.current ? 'bg-brand-cyan shadow-[0_0_15px_#06b6d4]' : 'bg-slate-700 group-hover:bg-brand-cyan'}`} 
              />

              <div className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group-hover:translate-x-0 sm:group-hover:translate-x-2">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors italic">
                        {exp.company}
                      </h3>
                      {exp.current && (
                        <span className="bg-brand-cyan/20 text-brand-cyan text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-brand-cyan font-mono text-xs sm:text-sm uppercase tracking-wider">{exp.role}</p>
                  </div>
                  
                  {/* Duration & Location */}
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                      <Calendar size={12} /> {exp.duration}
                    </div>
                    <div className="flex items-center gap-1 text-slate-600 text-[10px] font-mono">
                      <MapPin size={10} /> {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6 space-y-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mb-3">Key Achievements:</p>
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="text-brand-cyan mt-1">▹</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-[10px] sm:text-xs font-bold text-slate-300 border border-white/10 px-2 sm:px-3 py-1 rounded bg-white/5 uppercase tracking-wide">
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
          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-cyan/20 to-transparent border border-brand-cyan/20 relative overflow-hidden group"
          >
            <div className="absolute top-[-20%] right-[-10%] opacity-10 group-hover:rotate-12 transition-transform duration-700">
               <GraduationCap size={120} className="sm:w-[150px] sm:h-[150px]" />
            </div>
            
            <GraduationCap className="text-brand-cyan mb-6" size={32} />
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2 italic">Academic Pursuit</h3>
            <p className="text-brand-cyan font-mono text-xs mb-4 uppercase">Master of Computer Application</p>
            <div className="space-y-4">
              <div className="border-l-2 border-brand-cyan pl-4">
                <p className="text-white font-medium text-sm sm:text-base">IGNOU</p>
                <p className="text-xs text-slate-500">2025 - Present (Pursuing)</p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Specializing in Advanced Database Systems and Enterprise Software Engineering.
              </p>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-4"
          >
             <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan flex-shrink-0">
                <Briefcase size={24} />
             </div>
             <div>
               <p className="text-white font-bold text-lg">2+ Years</p>
               <p className="text-slate-500 text-xs uppercase font-mono">Professional Experience</p>
             </div>
          </motion.div>

          {/* Certifications Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
          >
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Certifications</h4>
            <div className="space-y-3">
              {['SQL Advanced', 'Python Developer', 'Data Analytics'].map((cert, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  <span className="text-slate-400 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
