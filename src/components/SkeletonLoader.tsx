import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  type: 'card' | 'text' | 'image' | 'button';
  width?: string;
  height?: string;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  type, 
  width = '100%', 
  height = '100%',
  className = '' 
}) => {
  const getSkeletonByType = () => {
    switch (type) {
      case 'card':
        return (
          <div 
            className={`rounded-xl bg-gradient-to-r from-dark-matter to-deep-blue ${className}`}
            style={{ width, height: height || '200px' }}
          />
        );
      case 'text':
        return (
          <div 
            className={`rounded-md bg-gradient-to-r from-dark-matter to-deep-blue ${className}`}
            style={{ width, height: height || '20px' }}
          />
        );
      case 'image':
        return (
          <div 
            className={`rounded-lg bg-gradient-to-r from-dark-matter to-deep-blue ${className}`}
            style={{ width, height: height || '200px' }}
          />
        );
      case 'button':
        return (
          <div 
            className={`rounded-lg bg-gradient-to-r from-dark-matter to-deep-blue ${className}`}
            style={{ width, height: height || '40px' }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      {getSkeletonByType()}
    </motion.div>
  );
};

export default SkeletonLoader;