import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

interface GlowControlProps {
  glowIntensity: number;
  setGlowIntensity: (value: number) => void;
}

const GlowControl: React.FC<GlowControlProps> = ({ glowIntensity, setGlowIntensity }) => {
  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-dark-matter/80 backdrop-blur-lg rounded-full px-3 py-2 shadow-lg border border-quantum-violet/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="flex items-center justify-center w-8 h-8"
        animate={{ 
          rotate: [0, 180],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 10, ease: "linear" },
          scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <Sun className="text-quantum-violet w-5 h-5" />
      </motion.div>
      <input
        type="range"
        min="0.2"
        max="2"
        step="0.1"
        value={glowIntensity}
        onChange={(e) => setGlowIntensity(parseFloat(e.target.value))}
        className="w-24 accent-quantum-violet"
        aria-label="Adjust glow intensity"
      />
    </motion.div>
  );
};

export default GlowControl;