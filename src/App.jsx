// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Experience from './components/Experience';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import DetailedFooter from './components/DetailedFooter';

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     // Added bg-dark and min-h-screen to ensure the dark theme covers the whole page
//     <div className="relative bg-[#030712] min-h-screen overflow-x-hidden text-slate-300">
      
//       {/* 1. Preloader */}
//       <AnimatePresence>
//         {loading && (
//           <motion.div 
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
//           >
//             <motion.div 
//               animate={{ scale: [0.8, 1.1, 1], opacity: [0.3, 1, 0.3] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="text-cyan-500 font-mono text-2xl tracking-[0.5em]"
//             >
//               SHASHANK_SONY
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* 2. Navigation */}
//       <Navbar />

//       {/* 3. Main Content Container */}
//       {/* Added pt-20 to prevent Navbar from covering the Hero section */}
//       <main className="container mx-auto px-6 space-y-32 pt-20">
//         <Hero />
//         <Experience />
//         <Skills />
//         <Projects />
//         <Navbar />
//       </main>
      
//       {/* 4. Detailed Footer */}
//       {/* We place this OUTSIDE the main container so the background goes wall-to-wall */}
//       <DetailedFooter />

//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubProjects from './components/GitHubProjects';
import Contact from './components/Contact';
import VisitorStats from './components/VisitorStats';
import DetailedFooter from './components/DetailedFooter';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-[#030712] min-h-screen overflow-x-hidden text-slate-300">
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Enhanced Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[200] bg-[#030712] flex items-center justify-center p-4"
          >
            <div className="relative flex flex-col items-center"> {/* Force centering */}
              <motion.div 
                animate={{ 
                  scale: [0.8, 1.2, 0.8],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        // Added responsive width/height: w-16 on mobile, w-20 on desktop
                className="w-16 h-16 md:w-20 md:h-20 border-4 border-brand-cyan/30 border-t-brand-cyan rounded-full"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
        // Changed absolute positioning to margin-top for better mobile behavior
                className="mt-8 text-center"
              >
                <span className="text-brand-cyan font-mono text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase">
                  LOADING PORTFOLIO
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Container */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-32">
        <Hero />
        <VisitorStats />
        <Experience />
        <Skills />
        <Projects />
        <GitHubProjects />
        <Contact />
      </main>
      
      {/* Detailed Footer */}
      <DetailedFooter />

      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-cyan/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
}

export default App;
