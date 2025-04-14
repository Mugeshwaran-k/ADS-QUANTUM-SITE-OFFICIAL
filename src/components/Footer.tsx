import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import CompactQuantumLogo from './CompactQuantumLogo';

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-deep-blue bg-opacity-30 mt-auto w-full">
      <div className="cyber-grid absolute inset-0 opacity-10"></div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-3">
                <CompactQuantumLogo />
              </div>
              <span className="text-2xl font-future font-bold gradient-text">ADS QUANTUM VISION</span>
            </div>
            <p className="text-gray-300 mb-6">
              Pioneering the future with quantum computing and AI-driven solutions that transform industries and redefine possibilities.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-matter flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(153, 0, 255, 0.2)' }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-matter flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(153, 0, 255, 0.2)' }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-matter flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(153, 0, 255, 0.2)' }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-future font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {['Quantum Computing', 'AI Development', 'Cybersecurity', 'IT Infrastructure', 'Blockchain Solutions'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a href="#" className="text-gray-300 hover:text-white transition-colors inline-block">
                    {item}
                    <motion.span 
                      className="block h-px bg-quantum-violet mt-1"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-future font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Case Studies', 'Careers', 'Blog', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a href="#" className="text-gray-300 hover:text-white transition-colors inline-block">
                    {item}
                    <motion.span 
                      className="block h-px bg-quantum-violet mt-1"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-future font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="w-5 h-5 text-quantum-violet mr-3 mt-1" />
                <span className="text-gray-300">2/146-2 Modern Nagar, Collectorate PO, Virudhunagar 626002</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="w-5 h-5 text-quantum-violet mr-3" />
                <a href="mailto:info@adsquantumvision.com" className="text-gray-300 hover:text-white">
                  info@adsquantumvision.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ADS Quantum Vision. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, index) => (
              <motion.a 
                key={item}
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
                whileHover={{ color: '#9900ff' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.5 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;