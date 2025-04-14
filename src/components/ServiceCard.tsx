import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, colorClass, delay = 0 }) => {
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
      <div className="p-6 h-full flex flex-col">
        <motion.div 
          className={`w-16 h-16 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center mb-6`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-2xl font-future font-semibold mb-3">{title}</h3>
        <p className="text-gray-300 mb-6 flex-grow">{description}</p>
        
        <motion.div 
          className="w-full h-1 bg-gradient-to-r from-transparent via-quantum-violet to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        />
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-quantum-violet">Explore Solution</span>
          <motion.div 
            className="w-8 h-8 rounded-full bg-quantum-violet bg-opacity-20 flex items-center justify-center"
            whileHover={{ 
              scale: 1.2,
              backgroundColor: 'rgba(155, 0, 255, 0.3)'
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-quantum-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;