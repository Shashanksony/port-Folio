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
    // Lock scroll when loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <div className="relative bg-[#030712] min-h-screen overflow-x-hidden text-slate-300 selection:bg-cyan-500/30">
      
      {/* 1. Ultra Pro Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: -1000, // Slides up like a curtain
              opacity: 0,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[999] bg-[#030712] flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Outer Ring Animation */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-cyan-500/20 rounded-full border-t-cyan-500"
              />
              
              <motion.div 
                initial={{ opacity: 0, letterSpacing: "1em" }}
                animate={{ opacity: 1, letterSpacing: "0.5em" }}
                className="text-white font-black text-xl md:text-3xl font-mono"
              >
                SHASHANK<span className="text-cyan-500">_</span>SONY
              </motion.div>
            </div>
            
            {/* Progress Bar Line */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-[1px] bg-cyan-500 mt-6"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Navigation */}
      <Navbar />

      {/* 3. Main Content */}
      {/* Changed space-y to avoid layout shifts; used padding-bottom for sections */}
      <main className="relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <section className="min-h-screen flex items-center">
            <Hero />
          </section>
          
          <div className="space-y-24 md:space-y-40 pb-20">
            <Experience />
            <Skills />
            <Projects />
          </div>
        </div>
      </main>
      
      {/* 4. Footer */}
      <DetailedFooter />

      {/* Background Ambient Glows (Mobile Responsive) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

    </div>
  );
}

export default App;