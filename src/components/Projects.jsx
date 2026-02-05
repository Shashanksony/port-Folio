import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, Zap, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Enterprise Data Warehousing",
    desc: "Designed and implemented a comprehensive data warehousing solution leveraging ERP systems. Optimized data pipelines for business intelligence using advanced SQL techniques and NoSQL databases.",
    icon: <Database className="text-brand-cyan" />,
    tags: ["SQL", "ERP Integration", "ETL Pipelines", "MongoDB"],
    impact: "60% faster query performance",
    link: "#"
  },
  {
    title: "Advanced Analytics Dashboard",
    desc: "Built interactive Power BI dashboards with real-time data visualization. Implemented advanced analytical models to identify patterns and support data-driven decision making across departments.",
    icon: <TrendingUp className="text-brand-cyan" />,
    tags: ["Power BI", "Excel", "Data Visualization", "Python"],
    impact: "25+ stakeholders using daily",
    link: "#"
  },
  {
    title: "Secure FastAPI Backend",
    desc: "Developed a high-performance REST API with comprehensive JWT authentication and authorization. Implemented full CRUD operations with rate limiting and advanced security features.",
    icon: <Zap className="text-brand-cyan" />,
    tags: ["Python", "FastAPI", "JWT", "PostgreSQL"],
    impact: "99.9% uptime achieved",
    link: "#"
  },
  {
    title: "Automated Data Pipeline",
    desc: "Created automated ETL workflows using Python and PySpark for processing large-scale datasets. Reduced manual intervention by 80% and improved data accuracy.",
    icon: <Database className="text-brand-cyan" />,
    tags: ["Python", "PySpark", "Pandas", "Automation"],
    impact: "80% reduction in manual work",
    link: "#"
  },
  {
    title: "Financial Reporting System",
    desc: "Built comprehensive financial reporting system with real-time data synchronization. Integrated multiple data sources for unified reporting and analytics.",
    icon: <TrendingUp className="text-brand-cyan" />,
    tags: ["SQL", "Python", "Power BI", "Financial Analytics"],
    impact: "100% data accuracy",
    link: "#"
  },
  {
    title: "Database Optimization Suite",
    desc: "Developed suite of tools for database performance monitoring and optimization. Implemented automated query analysis and index recommendations.",
    icon: <Zap className="text-brand-cyan" />,
    tags: ["SQL", "Performance Tuning", "Monitoring", "Optimization"],
    impact: "45% performance improvement",
    link: "#"
  }
];

const Projects = () => (
  <section id="projects" className="py-16 sm:py-24 scroll-mt-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 sm:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <span className="text-brand-cyan font-mono text-xl sm:text-2xl">03.</span> 
        <span>Featured Projects</span>
      </h2>
      <p className="text-slate-500 font-mono tracking-tighter text-sm sm:text-base">
        SHOWCASE // SELECTED_WORK
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {projects.map((p, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ y: -8 }}
          className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-brand-cyan/30 transition-all group relative overflow-hidden flex flex-col h-full"
        >
          {/* Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon & Impact */}
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl group-hover:scale-110 group-hover:bg-brand-cyan/10 transition-all duration-300">
                {React.cloneElement(p.icon, { size: 28 })}
              </div>
              {p.impact && (
                <div className="bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
                  <p className="text-[10px] font-mono font-bold text-brand-cyan uppercase tracking-wide whitespace-nowrap">
                    {p.impact}
                  </p>
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-brand-cyan transition-colors">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
              {p.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map(t => (
                <span 
                  key={t} 
                  className="text-[10px] sm:text-xs bg-white/5 border border-white/10 px-2 sm:px-3 py-1 rounded-lg text-brand-cyan font-mono group-hover:border-brand-cyan/30 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <a 
                href={p.link} 
                className="flex items-center gap-2 text-slate-400 hover:text-brand-cyan transition-colors text-sm font-mono"
              >
                <ExternalLink size={16} />
                <span>View Details</span>
              </a>
              <a 
                href={p.link} 
                className="flex items-center gap-2 text-slate-400 hover:text-brand-cyan transition-colors text-sm font-mono ml-auto"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Call to Action */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="text-center mt-12 sm:mt-16"
    >
      <p className="text-slate-500 mb-6 text-sm sm:text-base">
        Want to see more of my work?
      </p>
      <motion.a
        href="https://github.com/Shashanksony"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-full hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all text-sm font-mono"
      >
        <Github size={18} />
        Explore GitHub Profile
        <ExternalLink size={14} />
      </motion.a>
    </motion.div>
  </section>
);

export default Projects;
