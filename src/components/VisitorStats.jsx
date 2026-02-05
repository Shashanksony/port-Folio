import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Globe, Eye } from 'lucide-react';

const VisitorStats = () => {
  const [stats, setStats] = useState({
    totalVisitors: 0,
    location: 'Loading...',
    country: '',
    ip: '',
    uniqueToday: 0
  });

  useEffect(() => {
    // Get visitor location
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setStats(prev => ({
          ...prev,
          location: `${data.city}, ${data.region}`,
          country: data.country_name,
          ip: data.ip
        }));
      })
      .catch(() => {
        setStats(prev => ({
          ...prev,
          location: 'Location unavailable'
        }));
      });

    // Simulate visitor count (in production, use a backend API)
    const storedCount = localStorage.getItem('visitorCount');
    const count = storedCount ? parseInt(storedCount) : Math.floor(Math.random() * 5000) + 10000;
    
    // Check if this is a unique visitor today
    const lastVisit = localStorage.getItem('lastVisit');
    const today = new Date().toDateString();
    
    if (lastVisit !== today) {
      localStorage.setItem('visitorCount', (count + 1).toString());
      localStorage.setItem('lastVisit', today);
      setStats(prev => ({ ...prev, totalVisitors: count + 1 }));
    } else {
      setStats(prev => ({ ...prev, totalVisitors: count }));
    }

    // Simulate unique today count
    setStats(prev => ({ ...prev, uniqueToday: Math.floor(Math.random() * 50) + 20 }));
  }, []);

  const statCards = [
    {
      icon: <Users size={24} />,
      label: 'Total Visitors',
      value: stats.totalVisitors.toLocaleString(),
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Eye size={24} />,
      label: 'Unique Today',
      value: stats.uniqueToday,
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Your Location',
      value: stats.location,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Globe size={24} />,
      label: 'Country',
      value: stats.country || 'Detecting...',
      color: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <section className="py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {statCards.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
              style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
            />
            
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-brand-cyan/30 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 mb-4 flex items-center justify-center`}>
                {React.cloneElement(stat.icon, { className: 'text-white' })}
              </div>
              
              <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              
              <p className="text-white text-2xl font-bold font-mono">
                {stat.value}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Privacy Notice */}
      {/* <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-6 text-xs text-slate-600 font-mono"
      >
        🔒 Your privacy is respected. Location data is fetched client-side and not stored.
      </motion.p> */}
    </section>
  );
};

export default VisitorStats;
