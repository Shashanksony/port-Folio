// // import { motion } from 'framer-motion';
// // import { ExternalLink, Github, Database, Terminal } from 'lucide-react';

// // const projectData = [
// //   {
// //     title: "FastAPI Business Logic Layer",
// //     description: "Architected a high-concurrency API service for real-time data validation and JWT-secured user management.",
// //     tags: ["Python", "FastAPI", "PostgreSQL", "Pydantic"],
// //     icon: <Terminal className="text-cyan-400" />
// //   },
// //   {
// //     title: "ETL Warehouse Pipeline",
// //     description: "Engineered automated scripts to transform heterogeneous ERP data into structured SQL warehouses for BI reporting.",
// //     tags: ["SQL", "ETL", "NoSQL", "Data Modeling"],
// //     icon: <Database className="text-cyan-400" />
// //   }
// // ];

// // const Projects = () => (
// //   <section id="projects" className="py-20">
// //     <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
// //       <span className="text-cyan-500 font-mono text-xl">03.</span> Impactful Projects
// //     </h2>
// //     <div className="grid md:grid-cols-2 gap-8">
// //       {projectData.map((project, i) => (
// //         <motion.div 
// //           key={i}
// //           whileHover={{ y: -10 }}
// //           className="glass-card p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all"
// //         >
// //           <div className="flex justify-between items-start mb-6">
// //             <div className="p-3 bg-cyan-500/10 rounded-lg">
// //               {project.icon}
// //             </div>
// //             <div className="flex gap-4 text-slate-400">
// //               <Github size={20} className="hover:text-cyan-400 cursor-pointer" />
// //               <ExternalLink size={20} className="hover:text-cyan-400 cursor-pointer" />
// //             </div>
// //           </div>
// //           <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
// //           <p className="text-slate-400 text-sm leading-relaxed mb-6">
// //             {project.description}
// //           </p>
// //           <div className="flex flex-wrap gap-3">
// //             {project.tags.map((tag) => (
// //               <span key={tag} className="text-[10px] font-mono tracking-wider text-cyan-500 bg-cyan-500/5 px-2 py-1 rounded border border-cyan-500/10 uppercase">
// //                 {tag}
// //               </span>
// //             ))}
// //           </div>
// //         </motion.div>
// //       ))}
// //     </div>
// //   </section>
// // );

// // export default Projects;


// import { Database, TrendingUp, Zap } from 'lucide-react';

// const projects = [
//   {
//     title: "Data Warehousing",
//     desc: "Leveraged ERP systems and designed data pipelines to optimize business intelligence using SQL & NoSQL.",
//     icon: <Database className="text-brand-cyan" />,
//     tags: ["SQL", "ERP", "Pipelines"]
//   },
//   {
//     title: "Data Analytics",
//     desc: "Implemented advanced analytical models to identify patterns and support data-driven decision making.",
//     icon: <TrendingUp className="text-brand-cyan" />,
//     tags: ["Power BI", "Excel", "Visualization"]
//   },
//   {
//     title: "FastAPI Application",
//     desc: "Developed secure REST APIs with JWT authentication and full CRUD operations.",
//     icon: <Zap className="text-brand-cyan" />,
//     tags: ["Python", "FastAPI", "JWT"]
//   }
// ];

// const Projects = () => (
//   <section id="projects" className="py-20">
//     <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
//       <span className="text-brand-cyan font-mono">03.</span> Featured Projects
//     </h2>
//     <div className="grid md:grid-cols-3 gap-8">
//       {projects.map((p, i) => (
//         <div key={i} className="glass-card p-8 rounded-2xl hover:border-brand-cyan/50 transition-colors group">
//           <div className="mb-6 group-hover:scale-110 transition-transform">{p.icon}</div>
//           <h3 className="text-xl font-bold mb-3">{p.title}</h3>
//           <p className="text-slate-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
//           <div className="flex gap-2">
//             {p.tags.map(t => <span key={t} className="text-[10px] bg-white/5 px-2 py-1 rounded text-brand-cyan">{t}</span>)}
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Projects;


import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, Zap, Github, ExternalLink, Terminal } from 'lucide-react';

const projects = [
  {
    title: "FastAPI Business Logic Layer",
    desc: "Architected a high-concurrency API service for real-time data validation and JWT-secured user management.",
    icon: <Zap className="text-brand-cyan" />,
    tags: ["Python", "FastAPI", "PostgreSQL", "JWT"],
    link: "#",
    github: "https://github.com/Shashanksony"
  },
  {
    title: "ETL Warehouse Pipeline",
    desc: "Engineered automated scripts to transform heterogeneous ERP data into structured SQL warehouses for BI reporting.",
    icon: <Database className="text-brand-cyan" />,
    tags: ["SQL", "PySpark", "ETL", "NoSQL"],
    link: "#",
    github: "https://github.com/Shashanksony"
  },
  {
    title: "Advanced Data Analytics",
    desc: "Implemented analytical models to identify patterns and support data-driven decision making using Power BI.",
    icon: <TrendingUp className="text-brand-cyan" />,
    tags: ["Power BI", "Pandas", "Modeling"],
    link: "#",
    github: "https://github.com/Shashanksony"
  }
];

const Projects = () => (
  <section id="projects" className="py-24 scroll-mt-24">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-black text-white mb-4 flex items-center gap-4">
        <span className="text-brand-cyan font-mono text-2xl">03.</span> Featured Projects
      </h2>
      <div className="h-1 w-20 bg-brand-cyan rounded-full" />
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="glass-card p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-brand-cyan/40 transition-all group relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-cyan/5 blur-2xl rounded-full group-hover:bg-brand-cyan/10 transition-colors" />
          
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-brand-cyan/10 rounded-xl group-hover:scale-110 transition-transform">
              {p.icon}
            </div>
            <div className="flex gap-4 text-slate-500">
              <a href={p.github} className="hover:text-brand-cyan transition-colors"><Github size={20} /></a>
              <a href={p.link} className="hover:text-brand-cyan transition-colors"><ExternalLink size={20} /></a>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">{p.title}</h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed h-20 line-clamp-3">
            {p.desc}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {p.tags.map(t => (
              <span key={t} className="text-[10px] font-mono font-bold tracking-tighter bg-brand-cyan/5 border border-brand-cyan/10 px-2 py-1 rounded text-brand-cyan">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;