import { Database, Code, BarChart, Server } from 'lucide-react';

const skillGroups = [
  {
    title: "Database Architecture",
    icon: <Database className="text-cyan-500" />,
    skills: ["Advanced SQL", "Performance Tuning", "NoSQL (MongoDB)", "ETL Pipelines"]
  },
  {
    title: "Backend Development",
    icon: <Server className="text-cyan-500" />,
    skills: ["Python", "FastAPI", "RESTful APIs", "JWT Auth"]
  },
  {
    title: "Data Intelligence",
    icon: <BarChart className="text-cyan-500" />,
    skills: ["Power BI", "Pandas/NumPy", "Statistical Modeling", "Excel Automation"]
  }
];

const Skills = () => (
  <section id="skills" className="py-20">
    <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
      <span className="text-cyan-500 font-mono text-xl">02.</span> Technical Stack
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {skillGroups.map((group, i) => (
        <div key={i} className="glass-card p-8 rounded-2xl hover:border-cyan-500/30 transition-all group">
          <div className="mb-4 transform group-hover:scale-110 transition-transform">{group.icon}</div>
          <h3 className="text-xl font-bold text-white mb-4">{group.title}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span key={skill} className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-slate-400">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;