import { motion } from 'framer-motion';
import profilePic from '../docs/shashank.jpg'; 
import resumePDF from '../docs/Shashank_sony.pdf';
import { Download, ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-24 sm:pt-32 pb-10 md:pt-28 px-4 sm:px-6 overflow-hidden relative">
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="flex-1 text-center md:text-left z-10 max-w-2xl"
      >
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 px-4 py-2 rounded-full mb-6 text-brand-cyan text-xs sm:text-sm font-mono uppercase tracking-wider"
        >
          <Sparkles size={16} />
          <span>Available for Opportunities</span>
        </motion.div> */}
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 leading-[1.1]">
          SQL & <br />
          <span className="text-brand-cyan bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-blue-500">
            Python
          </span> Expert.
        </h1>
        
        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-8 mx-auto md:mx-0 leading-relaxed">
          Bridging the gap between raw data and business intelligence at{' '}
          <span className="text-white font-semibold">Aye Finance</span>. 
          Transforming complex datasets into actionable insights.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.4)' }}
            whileTap={{ scale: 0.95 }}
            href={resumePDF}
            download="Shashank_Sony_Resume.pdf"
            className="bg-brand-cyan text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
          >
            <Download size={20} /> Download Resume
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="border-2 border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:border-brand-cyan/50 hover:bg-white/5 transition-all"
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 mt-8 sm:mt-12"
        >
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Completed' },
            { value: '10+', label: 'Technologies' }
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-brand-cyan font-mono">{stat.value}</p>
              <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1,
          scale: 1,
          y: [0, -20, 0]
        }}
        transition={{ 
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative flex justify-center items-center"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-brand-cyan via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
        
        {/* Rotating Border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-blue-500 rounded-3xl blur opacity-40 animate-spin-slow"></div>
        
        {/* Image Container */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
          <img 
            src={profilePic} 
            alt="Shashank Sony" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Floating Badge */}
        {/* <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -right-4 bg-brand-cyan text-black px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg hidden sm:block"
        >
          🚀 Available Now
        </motion.div> */}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 cursor-pointer"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-mono uppercase tracking-widest hidden sm:block">Scroll Down</span>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
