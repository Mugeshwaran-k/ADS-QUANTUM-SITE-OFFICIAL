import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkeletonLoader from './SkeletonLoader';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  width = '100%',
  height = 'auto'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [src, isInView]);

  return (
    <div style={{ width, height }} className="relative overflow-hidden">
      {!isLoaded && (
        <SkeletonLoader 
          type="image" 
          width={width} 
          height={height} 
          className="absolute inset-0"
        />
      )}
      
      <motion.img
        src={isInView ? src : ''}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ width, height }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onViewportEnter={() => setIsInView(true)}
      />
    </div>
  );
};

export default LazyImage;