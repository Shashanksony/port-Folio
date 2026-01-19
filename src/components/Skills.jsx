// import { Database, Code, BarChart, Server } from 'lucide-react';

// const skillGroups = [
//   {
//     title: "Database Architecture",
//     icon: <Database className="text-cyan-500" />,
//     skills: ["Advanced SQL", "Performance Tuning", "NoSQL (MongoDB)", "ETL Pipelines", "PySpark"]
//   },
//   {
//     title: "Backend Development",
//     icon: <Server className="text-cyan-500" />,
//     skills: ["Python", "FastAPI", "RESTful APIs", "JWT Auth"]
//   },
//   {
//     title: "Data Intelligence",
//     icon: <BarChart className="text-cyan-500" />,
//     skills: ["Power BI", "Pandas/NumPy", "Statistical Modeling", "Excel Automation"]
//   }
// ];

// const Skills = () => (
//   <section id="skills" className="py-20">
//     <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
//       <span className="text-cyan-500 font-mono text-xl">02.</span> Technical Stack
//     </h2>
//     <div className="grid md:grid-cols-3 gap-6">
//       {skillGroups.map((group, i) => (
//         <div key={i} className="glass-card p-8 rounded-2xl hover:border-cyan-500/30 transition-all group">
//           <div className="mb-4 transform group-hover:scale-110 transition-transform">{group.icon}</div>
//           <h3 className="text-xl font-bold text-white mb-4">{group.title}</h3>
//           <div className="flex flex-wrap gap-2">
//             {group.skills.map((skill) => (
//               <span key={skill} className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-slate-400">
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Skills;



import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, BarChart, Cpu } from 'lucide-react';

const skillGroups = [
  {
    title: "Database Architecture",
    icon: <Database className="text-brand-cyan" />,
    skills: ["Advanced SQL", "Performance Tuning", "MongoDB", "ETL Pipelines", "PySpark"]
  },
  {
    title: "Backend Development",
    icon: <Server className="text-brand-cyan" />,
    skills: ["Python", "FastAPI", "RESTful APIs", "JWT Auth", "Pandas"]
  },
  {
    title: "Data Intelligence",
    icon: <BarChart className="text-brand-cyan" />,
    skills: ["Power BI", "NumPy", "Statistical Modeling", "Excel Automation", "Tableau"]
  }
];

const Skills = () => (
  <section id="skills" className="py-24 scroll-mt-24">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-black text-white mb-16 flex items-center gap-4"
    >
      <span className="text-brand-cyan font-mono text-2xl">02.</span> Technical Matrix
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skillGroups.map((group, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-brand-cyan/20 transition-all group"
        >
          <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-brand-cyan/10 transition-colors">
            {React.cloneElement(group.icon, { size: 32 })}
          </div>
          <h3 className="text-2xl font-bold text-white mb-6 italic">{group.title}</h3>
          <div className="flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <span key={skill} className="text-xs font-mono font-medium bg-white/5 px-3 py-1.5 rounded-lg text-slate-400 border border-white/5 group-hover:border-brand-cyan/10 group-hover:text-slate-200 transition-all">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;