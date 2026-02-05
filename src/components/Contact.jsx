
  // Google Sheets Web App URL
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwxc42uO8VfvB9xGgtD13ZBfA-wnd8Jch2oKypGxJjRiCS6AWMmKTMTXlJA06al49az/exec';



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  // Google Sheets Web App URL - UPDATE THIS with your actual deployment URL
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwxc42uO8VfvB9xGgtD13ZBfA-wnd8Jch2oKypGxJjRiCS6AWMmKTMTXlJA06al49az/exec';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    // Method 1: Try POST with FormData (works better with Google Apps Script)
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('timestamp', new Date().toISOString());

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        body: formDataToSend
      });

      // Check if we got a response
      console.log('Response received:', response);
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Error:', error);
      
      // Try Method 2: GET request with URL parameters as fallback
      try {
        const params = new URLSearchParams({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        });

        await fetch(`${GOOGLE_SHEETS_URL}?${params.toString()}`, {
          method: 'GET'
        });

        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        
        setFormData({ name: '', email: '', subject: '', message: '' });

      } catch (fallbackError) {
        console.error('Fallback error:', fallbackError);
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please email directly at shashanksony82@gmail.com'
        });
      }
    }

    // Clear status after 5 seconds
    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          Get In <span className="text-brand-cyan underline decoration-brand-cyan/30 underline-offset-8">Touch</span>
        </h2>
        <p className="text-slate-500 font-mono tracking-tighter text-sm sm:text-base">
          05 // CONTACT_FORM
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-gradient-to-br from-brand-cyan/20 to-transparent border border-brand-cyan/20 rounded-2xl p-8">
            <Mail className="text-brand-cyan mb-6" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Have a project in mind or want to discuss opportunities? Feel free to reach out. 
              I'm always open to interesting conversations and collaborations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-sm text-slate-300">Usually responds within 24 hours</span>
              </div>
              
              <a 
                href="mailto:shashanksony82@gmail.com"
                className="block text-brand-cyan font-mono text-sm hover:underline"
              >
                shashanksony82@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/shashanksony"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-brand-cyan transition-colors text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/Shashanksony"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-brand-cyan transition-colors text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                GitHub Portfolio
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-slate-400 mb-2 uppercase tracking-wider">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:border-brand-cyan/50 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-slate-400 mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:border-brand-cyan/50 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-mono text-slate-400 mb-2 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:border-brand-cyan/50 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-slate-400 mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:border-brand-cyan/50 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status.type === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-brand-cyan text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.type === 'loading' ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center gap-2 p-4 rounded-xl ${
                  status.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <span className="text-sm">{status.message}</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;