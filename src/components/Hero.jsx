import { motion } from 'framer-motion';
import profilePic from '../docs/shashank.jpg'; 
import resumePDF from '../docs/Shashank_sony.pdf'; // Correct import from src/docs
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 pt-32 pb-10 md:pt-24 px-6 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex-1 text-center md:text-left z-10"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-4 block"
        >
          {/* SQL & Python Developer */}
        </motion.span>
        
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.1]">
          SQL & <br />
          <span className="text-brand-cyan">Python</span> Expert.
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-8 mx-auto md:mx-0">
          Bridging the gap between raw data and business intelligence @ **Aye Finance**.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={resumePDF} // Use the imported variable
            download="Shashank_Sony_Resume.pdf"
            className="bg-brand-cyan text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            <Download size={20} /> My Resume
          </motion.a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1,
          scale: 1,
          y: [0, -20, 0],
          rotate: [0, 2, 0]
        }}
        transition={{ 
          opacity: { duration: 1 },
          scale: { duration: 1 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-blue-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
        
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
          <img 
            src={profilePic} 
            alt="Shashank Sony" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;