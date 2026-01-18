import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DetailedFooter from './components/DetailedFooter';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // Added bg-dark and min-h-screen to ensure the dark theme covers the whole page
    <div className="relative bg-[#030712] min-h-screen overflow-x-hidden text-slate-300">
      
      {/* 1. Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <motion.div 
              animate={{ scale: [0.8, 1.1, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-cyan-500 font-mono text-2xl tracking-[0.5em]"
            >
              SHASHANK_SONY
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Navigation */}
      <Navbar />

      {/* 3. Main Content Container */}
      {/* Added pt-20 to prevent Navbar from covering the Hero section */}
      <main className="container mx-auto px-6 space-y-32 pt-20">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>
      
      {/* 4. Detailed Footer */}
      {/* We place this OUTSIDE the main container so the background goes wall-to-wall */}
      <DetailedFooter />

    </div>
  );
}

export default App;