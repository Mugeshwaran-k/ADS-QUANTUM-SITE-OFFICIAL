import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import QuantumLogo from './QuantumLogo';

interface HeroSectionProps {
  scrollToServices: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToServices }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    const moveX = (x - 0.5) * 20;
    const moveY = (y - 0.5) * 20;
    
    containerRef.current.style.setProperty('--x', `${moveX}px`);
    containerRef.current.style.setProperty('--y', `${moveY}px`);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current || e.touches.length === 0) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.touches[0].clientX - left) / width;
    const y = (e.touches[0].clientY - top) / height;
    
    const moveX = (x - 0.5) * 10;
    const moveY = (y - 0.5) * 10;
    
    containerRef.current.style.setProperty('--x', `${moveX}px`);
    containerRef.current.style.setProperty('--y', `${moveY}px`);
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-8 px-4 md:px-8 lg:px-16 overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      style={{ 
        '--x': '0px', 
        '--y': '0px' 
      } as React.CSSProperties}
    >
      <div className="cyber-grid absolute inset-0 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <div className="mb-2 md:mb-4 w-full max-w-[500px] mx-auto mt-12">
            <QuantumLogo />
          </div>

          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-future font-bold gradient-text mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Next-Gen Quantum Solutions
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Pioneering the future with quantum computing and AI-driven solutions that transform industries and redefine possibilities.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.button
              className="glass-button flex items-center gap-2 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
            >
              Explore Services <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="border border-quantum-violet text-white rounded-lg px-6 py-2 transition-all duration-300 hover:bg-quantum-violet hover:bg-opacity-20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;