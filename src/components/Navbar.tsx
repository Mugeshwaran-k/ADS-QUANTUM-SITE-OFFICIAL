import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Phone, MapPin, ExternalLink, Mail, MessageSquare } from 'lucide-react';
import CompactQuantumLogo from './CompactQuantumLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { label: 'Home', section: 'home' },
    { label: 'Services', section: 'services' },
    { label: 'Case Studies', section: 'case-studies' },
    { label: 'About', section: 'about' },
    { 
      label: 'Contact', 
      section: 'contact',
      icon: <MessageSquare className="w-4 h-4" />,
      isSpecial: true 
    }
  ];

  const handleNavClick = (section: string) => {
    if (section === 'contact') {
      setShowContactInfo(!showContactInfo);
    } else {
      onNavigate(section);
      setIsMenuOpen(false);
      setShowContactInfo(false);
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      transition: {
        rotate: {
          duration: 0.4,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.2,
          ease: "easeOut"
        }
      }
    }
  };

  const containerVariants = {
    initial: { opacity: 0, y: -20, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div
        className={`absolute inset-0 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? "bg-midnight/85 backdrop-blur-xl border-b border-quantum-violet/20 shadow-lg shadow-quantum-violet/15" 
            : "bg-transparent border-b border-transparent"
        }`}
      />

      <div className={`relative py-4 transition-all duration-300 ${isScrolled ? 'py-2' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick('home')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 relative">
                <CompactQuantumLogo />
                <motion.div
                  className="absolute inset-0 rounded-full bg-quantum-violet/20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              <div className="ml-2 md:ml-3">
                <motion.div 
                  className="overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-future font-bold gradient-text whitespace-nowrap tracking-wider">
                    ADS QUANTUM VISION
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.section}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-lg overflow-hidden ${
                    item.isSpecial
                      ? 'bg-quantum-violet text-white shadow-lg shadow-quantum-violet/30'
                      : activeSection === item.section 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => handleNavClick(item.section)}
                  onHoverStart={() => setHoveredItem(item.section)}
                  onHoverEnd={() => setHoveredItem(null)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <AnimatePresence>
                    {((hoveredItem === item.section && !item.isSpecial) || (activeSection === item.section && !item.isSpecial)) && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-quantum-violet/20 to-purple-600/20 rounded-lg -z-10"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>

                  {!item.isSpecial && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-quantum-violet via-purple-500 to-fuchsia-500"
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: activeSection === item.section ? "70%" : "0%",
                      }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    {item.icon && (
                      <motion.span
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        {item.icon}
                      </motion.span>
                    )}
                    {item.label}
                  </span>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    initial={{ x: '-100%' }}
                    animate={hoveredItem === item.section ? {
                      x: '100%',
                      transition: {
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    } : { x: '-100%' }}
                  />
                </motion.button>
              ))}
            </div>

            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-quantum-violet/10 overflow-hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-quantum-violet/20 to-purple-600/20 opacity-0"
                animate={{ opacity: isMenuOpen ? 0.5 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <X className="w-4 h-4 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Menu className="w-4 h-4 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          <AnimatePresence>
            {showContactInfo && (
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute top-full right-0 mt-4 w-72 glass-card p-4 space-y-4"
              >
                <motion.h3 
                  className="text-lg font-future font-semibold mb-2 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    onHoverStart={() => setHoveredIcon('contact')}
                    onHoverEnd={() => setHoveredIcon(null)}
                  >
                    <ExternalLink className="w-5 h-5 text-quantum-violet" />
                  </motion.div>
                  Contact Information
                </motion.h3>
                <div className="space-y-3">
                  <motion.div 
                    className="flex items-start gap-3 group"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="w-8 h-8 rounded-lg bg-quantum-violet/10 flex items-center justify-center mt-0.5 group-hover:bg-quantum-violet/20 transition-colors"
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      onHoverStart={() => setHoveredIcon('location')}
                      onHoverEnd={() => setHoveredIcon(null)}
                    >
                      <MapPin className="w-4 h-4 text-quantum-violet" />
                    </motion.div>
                    <span className="text-gray-300 text-sm">2/146-2 Modern Nagar, Collectorate PO, Virudhunagar 626002</span>
                  </motion.div>
                  <motion.a 
                    href="mailto:info@adsquantumvision.com"
                    className="flex items-center gap-3 group"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="w-8 h-8 rounded-lg bg-quantum-violet/10 flex items-center justify-center group-hover:bg-quantum-violet/20 transition-colors"
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      onHoverStart={() => setHoveredIcon('email')}
                      onHoverEnd={() => setHoveredIcon(null)}
                    >
                      <Mail className="w-4 h-4 text-quantum-violet" />
                    </motion.div>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                      info@adsquantumvision.com
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 py-4 space-y-2 backdrop-blur-xl bg-gradient-to-b from-midnight/95 to-dark-matter/95 border-t border-quantum-violet/20">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.section}
                    className={`w-full px-6 py-3 rounded-lg text-left text-sm font-medium transition-all relative overflow-hidden flex items-center gap-2 ${
                      item.isSpecial
                        ? 'bg-quantum-violet text-white shadow-lg shadow-quantum-violet/30'
                        : activeSection === item.section 
                          ? 'bg-quantum-violet/20 text-white shadow-lg shadow-quantum-violet/20' 
                          : 'text-gray-300 hover:bg-quantum-violet/10'
                    }`}
                    onClick={() => handleNavClick(item.section)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.icon && (
                      <motion.span
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        {item.icon}
                      </motion.span>
                    )}
                    <span>{item.label}</span>
                    <motion.div
                      className="ml-auto"
                      initial={{ x: -5, opacity: 0 }}
                      animate={activeSection === item.section ? {
                        x: 0,
                        opacity: 1
                      } : {
                        x: -5,
                        opacity: 0
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={activeSection === item.section ? {
                        x: '100%',
                        transition: {
                          duration: 0.6,
                          ease: "easeOut"
                        }
                      } : { x: '-100%' }}
                    />
                  </motion.button>
                ))}

                <motion.div 
                  className="mt-6 space-y-3 p-4 rounded-lg bg-dark-matter/30 border border-quantum-violet/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.h3 
                    className="text-sm font-future font-semibold text-white mb-4 flex items-center gap-2"
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <ExternalLink className="w-4 h-4 text-quantum-violet" />
                    Contact Information
                  </motion.h3>
                  <motion.div 
                    className="flex items-start gap-3 text-sm text-gray-300 group"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div 
                      className="w-8 h-8 rounded-lg bg-quantum-violet/10 flex items-center justify-center mt-0.5 group-hover:bg-quantum-violet/20 transition-colors"
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <MapPin className="w-4 h-4 text-quantum-violet" />
                    </motion.div>
                    <span>2/146-2 Modern Nagar, Collectorate PO, Virudhunagar 626002</span>
                  </motion.div>
                  <motion.a 
                    href="mailto:info@adsquantumvision.com"
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div 
                      className="w-8 h-8 rounded-lg bg-quantum-violet/10 flex items-center justify-center group-hover:bg-quantum-violet/20 transition-colors"
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <Mail className="w-4 h-4 text-quantum-violet" />
                    </motion.div>
                    info@adsquantumvision.com
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;