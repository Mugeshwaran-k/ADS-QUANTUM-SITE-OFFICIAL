import React from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  children, 
  className = '',
  delay = 0 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        whileInView={{ 
          scale: 1,
          transition: {
            duration: 0.8,
            delay: delay + 0.1,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SectionTransition;