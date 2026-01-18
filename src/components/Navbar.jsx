import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import resumePDF from '../docs/Shashank_sony.pdf'; // Correct import from src/docs

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#030712]/90 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        <motion.a 
          href="#hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-cyan-500 font-mono font-bold text-xl tracking-tighter"
        >
          SHASHANK SONY
        </motion.a>

        <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-cyan-400 transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={resumePDF} // Fixed link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-500 border border-cyan-500/50 px-4 py-2 rounded-lg hover:bg-cyan-500/10 transition-all text-xs font-bold"
          >
            <FileText size={14} /> RESUME
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030712] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-mono tracking-widest text-slate-300 hover:text-cyan-500 transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={resumePDF} // Fixed link
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-cyan-500 border border-cyan-500/50 py-3 rounded-lg font-bold"
              >
                VIEW RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;