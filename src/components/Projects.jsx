// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Database, Terminal } from 'lucide-react';

// const projectData = [
//   {
//     title: "FastAPI Business Logic Layer",
//     description: "Architected a high-concurrency API service for real-time data validation and JWT-secured user management.",
//     tags: ["Python", "FastAPI", "PostgreSQL", "Pydantic"],
//     icon: <Terminal className="text-cyan-400" />
//   },
//   {
//     title: "ETL Warehouse Pipeline",
//     description: "Engineered automated scripts to transform heterogeneous ERP data into structured SQL warehouses for BI reporting.",
//     tags: ["SQL", "ETL", "NoSQL", "Data Modeling"],
//     icon: <Database className="text-cyan-400" />
//   }
// ];

// const Projects = () => (
//   <section id="projects" className="py-20">
//     <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
//       <span className="text-cyan-500 font-mono text-xl">03.</span> Impactful Projects
//     </h2>
//     <div className="grid md:grid-cols-2 gap-8">
//       {projectData.map((project, i) => (
//         <motion.div 
//           key={i}
//           whileHover={{ y: -10 }}
//           className="glass-card p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all"
//         >
//           <div className="flex justify-between items-start mb-6">
//             <div className="p-3 bg-cyan-500/10 rounded-lg">
//               {project.icon}
//             </div>
//             <div className="flex gap-4 text-slate-400">
//               <Github size={20} className="hover:text-cyan-400 cursor-pointer" />
//               <ExternalLink size={20} className="hover:text-cyan-400 cursor-pointer" />
//             </div>
//           </div>
//           <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
//           <p className="text-slate-400 text-sm leading-relaxed mb-6">
//             {project.description}
//           </p>
//           <div className="flex flex-wrap gap-3">
//             {project.tags.map((tag) => (
//               <span key={tag} className="text-[10px] font-mono tracking-wider text-cyan-500 bg-cyan-500/5 px-2 py-1 rounded border border-cyan-500/10 uppercase">
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </section>
// );

// export default Projects;


import { Database, TrendingUp, Zap } from 'lucide-react';

const projects = [
  {
    title: "Data Warehousing",
    desc: "Leveraged ERP systems and designed data pipelines to optimize business intelligence using SQL & NoSQL.",
    icon: <Database className="text-brand-cyan" />,
    tags: ["SQL", "ERP", "Pipelines"]
  },
  {
    title: "Data Analytics",
    desc: "Implemented advanced analytical models to identify patterns and support data-driven decision making.",
    icon: <TrendingUp className="text-brand-cyan" />,
    tags: ["Power BI", "Excel", "Visualization"]
  },
  {
    title: "FastAPI Application",
    desc: "Developed secure REST APIs with JWT authentication and full CRUD operations.",
    icon: <Zap className="text-brand-cyan" />,
    tags: ["Python", "FastAPI", "JWT"]
  }
];

const Projects = () => (
  <section id="projects" className="py-20">
    <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
      <span className="text-brand-cyan font-mono">03.</span> Featured Projects
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <div key={i} className="glass-card p-8 rounded-2xl hover:border-brand-cyan/50 transition-colors group">
          <div className="mb-6 group-hover:scale-110 transition-transform">{p.icon}</div>
          <h3 className="text-xl font-bold mb-3">{p.title}</h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
          <div className="flex gap-2">
            {p.tags.map(t => <span key={t} className="text-[10px] bg-white/5 px-2 py-1 rounded text-brand-cyan">{t}</span>)}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;