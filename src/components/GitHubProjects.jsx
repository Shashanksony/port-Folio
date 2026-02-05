import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Code2, Calendar } from 'lucide-react';

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your GitHub username
  const GITHUB_USERNAME = 'Shashanksony';

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
      );
      
      if (!response.ok) throw new Error('Failed to fetch repositories');
      
      const data = await response.json();
      
      // Filter out forks and sort by stars
      const filteredRepos = data
        .filter(repo => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);
      
      setRepos(filteredRepos);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="github-projects" className="py-16 sm:py-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          GitHub <span className="text-brand-cyan underline decoration-brand-cyan/30 underline-offset-8">Repositories</span>
        </h2>
        <p className="text-slate-500 font-mono tracking-tighter text-sm sm:text-base">
          04 // OPEN_SOURCE_CONTRIBUTIONS
        </p>
      </motion.div>

      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-brand-cyan/30 border-t-brand-cyan rounded-full animate-spin" />
        </div>
      )}

      {error && (
        <div className="text-center py-20">
          <p className="text-red-400 font-mono">Failed to load repositories: {error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-cyan to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
              
              <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:border-brand-cyan/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-brand-cyan/10 transition-colors">
                    <Github className="text-brand-cyan" size={24} />
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <ExternalLink size={18} className="text-slate-400 hover:text-brand-cyan" />
                  </a>
                </div>

                {/* Repo Name */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors line-clamp-1">
                  {repo.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4 flex-grow line-clamp-3">
                  {repo.description || 'No description available'}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-500" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={14} className="text-blue-400" />
                    <span>{repo.forks_count}</span>
                  </div>
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <Code2 size={14} className="text-brand-cyan" />
                      <span>{repo.language}</span>
                    </div>
                  )}
                </div>

                {/* Updated Date */}
                <div className="flex items-center gap-1 text-[10px] text-slate-600 font-mono pt-3 border-t border-white/5">
                  <Calendar size={12} />
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* View More on GitHub */}
      {!loading && !error && repos.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all duration-300 text-sm font-mono"
          >
            <Github size={18} />
            View All Repositories
            <ExternalLink size={14} />
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default GitHubProjects;
