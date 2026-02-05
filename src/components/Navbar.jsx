import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Home, Briefcase, Code, Mail, Github } from 'lucide-react';
import resumePDF from '../docs/Shashank_sony.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero', icon: <Home size={16} /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={16} /> },
    { name: 'Skills', href: '#skills', icon: <Code size={16} /> },
    { name: 'Projects', href: '#projects', icon: <Github size={16} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={16} /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled 
        ? 'bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 shadow-lg' 
        : 'bg-transparent border-b border-white/5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <motion.a 
          href="#hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-brand-cyan font-mono font-bold text-lg sm:text-xl tracking-tighter hover:text-white transition-colors z-50"
        >
          <span className="hidden sm:inline">SHASHANK SONY</span>
          <span className="sm:hidden">SS</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-mono tracking-widest">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-slate-400 hover:text-brand-cyan transition-colors uppercase text-xs xl:text-sm flex items-center gap-2"
            >
              {link.icon}
              {link.name}
            </motion.a>
          ))}
          <motion.a 
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-brand-cyan border border-brand-cyan/50 px-4 py-2 rounded-lg hover:bg-brand-cyan/10 transition-all text-xs font-bold"
          >
            <FileText size={14} /> RESUME
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors z-50"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm lg:hidden"
              style={{ top: '64px' }}
            />

            {/* Menu Panel */}
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full sm:w-80 bg-[#030712] border-l border-white/10 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col gap-2 p-6">
                {/* Navigation Links */}
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 text-lg font-mono tracking-widest text-slate-300 hover:text-brand-cyan transition-colors py-3 px-4 rounded-lg hover:bg-white/5 uppercase"
                  >
                    {link.icon}
                    {link.name}
                  </motion.a>
                ))}

                {/* Divider */}
                <div className="h-px bg-white/10 my-4" />

                {/* Resume Button */}
                <motion.a 
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="flex items-center justify-center gap-2 text-black bg-brand-cyan py-4 rounded-lg font-bold shadow-lg hover:shadow-brand-cyan/50 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <FileText size={18} />
                  VIEW RESUME
                </motion.a>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Connect With Me</p>
                  <div className="flex gap-3">
                    {[
                      { icon: <Github size={20}/>, link: "https://github.com/Shashanksony" },
                      { icon: <Mail size={20}/>, link: "mailto:shashanksony82@gmail.com" }
                    ].map((social, idx) => (
                      <a 
                        key={idx} 
                        href={social.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-lg hover:bg-brand-cyan hover:text-black transition-all flex-1 flex items-center justify-center"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
