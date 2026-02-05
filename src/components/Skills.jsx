import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, BarChart, Cpu, Zap, Shield } from 'lucide-react';

const skillGroups = [
  {
    title: "Database Architecture",
    icon: <Database className="text-brand-cyan" />,
    skills: ["Advanced SQL", "Performance Tuning", "MongoDB", "ETL Pipelines", "PySpark", "Query Optimization"],
    level: "Expert"
  },
  {
    title: "Backend Development",
    icon: <Server className="text-brand-cyan" />,
    skills: ["Python", "FastAPI", "RESTful APIs", "JWT Auth", "Pandas", "NumPy"],
    level: "Advanced"
  },
  {
    title: "Data Intelligence",
    icon: <BarChart className="text-brand-cyan" />,
    skills: ["Power BI", "Statistical Modeling", "Excel Automation", "Tableau", "Data Visualization"],
    level: "Advanced"
  },
  {
    title: "Cloud & DevOps",
    icon: <Cpu className="text-brand-cyan" />,
    skills: ["AWS", "Docker", "Git", "CI/CD", "Linux", "Shell Scripting"],
    level: "Intermediate"
  },
  {
    title: "Development Tools",
    icon: <Zap className="text-brand-cyan" />,
    skills: ["VS Code", "Jupyter", "Postman", "DBeaver", "PyCharm", "Git"],
    level: "Advanced"
  },
  {
    title: "Security & Best Practices",
    icon: <Shield className="text-brand-cyan" />,
    skills: ["Data Security", "Code Review", "Testing", "Documentation", "Agile", "SDLC"],
    level: "Advanced"
  }
];

const Skills = () => {
  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return 'text-green-400 border-green-400/30 bg-green-400/5';
      case 'Advanced': return 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/5';
      case 'Intermediate': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5';
      default: return 'text-slate-400 border-slate-400/30 bg-slate-400/5';
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 scroll-mt-24">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 sm:mb-16 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
      >
        <span className="text-brand-cyan font-mono text-xl sm:text-2xl">02.</span> 
        <span>Technical Matrix</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {skillGroups.map((group, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-brand-cyan/20 transition-all group relative overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon & Level Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 sm:p-4 bg-white/5 w-fit rounded-xl sm:rounded-2xl group-hover:bg-brand-cyan/10 transition-colors">
                  {React.cloneElement(group.icon, { size: 28 })}
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded border ${getLevelColor(group.level)}`}>
                  {group.level}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 italic leading-tight">
                {group.title}
              </h3>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-[11px] sm:text-xs font-mono font-medium bg-white/5 px-2.5 sm:px-3 py-1.5 rounded-lg text-slate-400 border border-white/5 group-hover:border-brand-cyan/10 group-hover:text-slate-200 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02]"
      >
        <h4 className="text-white font-bold mb-6 text-base sm:text-lg uppercase tracking-wider">Additional Proficiencies</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: 'Problem Solving', icon: '🧩' },
            { name: 'Team Leadership', icon: '👥' },
            { name: 'Code Review', icon: '👀' },
            { name: 'Technical Writing', icon: '📝' },
            { name: 'System Design', icon: '🏗️' },
            { name: 'Performance Optimization', icon: '⚡' },
            { name: 'Debugging', icon: '🐛' },
            { name: 'Agile Methodology', icon: '🔄' }
          ].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/5 hover:border-brand-cyan/20 transition-all"
            >
              <span className="text-xl sm:text-2xl">{skill.icon}</span>
              <span className="text-slate-300 text-xs sm:text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
