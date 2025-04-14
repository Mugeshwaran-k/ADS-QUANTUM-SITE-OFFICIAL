import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CategoryFilterProps {
  buttons: Array<{
    id: string;
    label: string;
  }>;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  buttons,
  activeFilter,
  onFilterChange,
}) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      {buttons.map((button, index) => {
        const isActive = activeFilter === button.id;
        const isHovered = hoveredButton === button.id;

        return (
          <motion.button
            key={button.id}
            onClick={() => onFilterChange(button.id)}
            onMouseEnter={() => setHoveredButton(button.id)}
            onMouseLeave={() => setHoveredButton(null)}
            className={`
              relative px-5 py-2 rounded-lg text-xs font-medium 
              transition-all duration-300 cursor-pointer
              overflow-hidden group
              backdrop-blur-lg
              ${isActive 
                ? 'bg-gradient-to-r from-quantum-violet via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-quantum-violet/30'
                : 'bg-dark-matter/20 text-gray-300 hover:text-white'
              }
            `}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
          >
            {/* Ambient Light Effect */}
            <motion.div
              className="absolute -inset-1 bg-quantum-violet/20 blur-md rounded-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isActive ? [0.4, 0.6, 0.4] : 0,
                scale: isActive ? [1, 1.1, 1] : 1
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Premium Border Effect */}
            <motion.div
              className={`
                absolute inset-0 rounded-lg
                bg-gradient-to-r from-quantum-violet via-purple-500 to-fuchsia-500
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              `}
              animate={{
                opacity: isActive || isHovered ? 1 : 0,
              }}
              style={{ padding: '1px' }}
            >
              <div className={`
                h-full w-full rounded-lg
                ${isActive 
                  ? 'bg-gradient-to-r from-quantum-violet via-purple-600 to-fuchsia-600' 
                  : 'bg-dark-matter/95'
                }
              `} />
            </motion.div>

            {/* Holographic Overlay */}
            <motion.div
              className={`
                absolute inset-0 
                bg-gradient-to-r from-quantum-violet/10 via-purple-500/10 to-fuchsia-500/10
                mix-blend-overlay
              `}
              animate={{
                opacity: isHovered ? [0.3, 0.6, 0.3] : 0,
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                opacity: { duration: 1, repeat: Infinity },
                backgroundPosition: { duration: 3, repeat: Infinity }
              }}
            />

            {/* Button Content with Glow */}
            <span className={`
              relative z-10 font-future tracking-wide text-xs
              ${isActive ? 'text-white' : 'text-gray-300'}
              transition-colors duration-300
              flex items-center justify-center gap-1.5
            `}>
              {button.label}
            </span>

            {/* Premium Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={isActive || isHovered ? {
                x: ['-100%', '200%'],
                transition: {
                  repeat: Infinity,
                  duration: 1.5,
                  repeatDelay: 0.5
                }
              } : { x: '-100%' }}
            />

            {/* Active State Effects */}
            <AnimatePresence>
              {isActive && (
                <>
                  {/* Glowing Underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-quantum-violet via-white to-fuchsia-500"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />

                  {/* Particle Effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-quantum-violet/20 via-purple-500/20 to-fuchsia-500/20 blur-md"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: [0.8, 1.1, 0.8],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;