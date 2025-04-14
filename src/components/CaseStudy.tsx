import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  delay?: number;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, description, image, tags, delay = 0 }) => {
  return (
    <motion.div
      className="glass-card overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-dark-matter to-transparent z-10"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-quantum-violet bg-opacity-70 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.1 * index }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-future font-semibold mb-3">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        
        <motion.div 
          className="mt-6 flex justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          <span className="text-sm text-quantum-violet">View Case Study</span>
          <motion.div 
            className="w-8 h-8 rounded-full bg-quantum-violet bg-opacity-20 flex items-center justify-center"
            whileHover={{ 
              scale: 1.2,
              backgroundColor: 'rgba(155, 0, 255, 0.3)'
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-quantum-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudy;