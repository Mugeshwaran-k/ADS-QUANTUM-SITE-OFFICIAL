import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Star, Sparkles, Code, Globe } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  industry: string;
  image: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 10 }, // Reduced from 20 to 10
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: { 
      opacity: 0,
      y: -10, // Reduced from -20 to -10
      transition: {
        duration: 0.2 // Reduced from 0.3 to 0.2
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
    >
      {/* Project List */}
      <motion.div className="glass-card p-6 space-y-6 relative overflow-hidden">
        {/* Premium Badge */}
        <motion.div 
          className="absolute -top-6 -right-6 w-24 h-24 rotate-45 bg-quantum-violet/20 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-3 right-3 flex items-center gap-2 bg-dark-matter/50 rounded-full px-3 py-1 z-20"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.7 }}
        >
          <Sparkles className="w-4 h-4 text-quantum-violet" />
          <span className="text-xs font-medium text-quantum-violet">Premium</span>
        </motion.div>

        <div className="flex items-center justify-between mb-8">
          <motion.h3 
            className="text-2xl font-future font-semibold gradient-text flex items-center gap-3"
            initial={{ x: -20 }} // Reduced from -50 to -20
            animate={{ x: 0 }}
            transition={{ type: "spring" }}
          >
            <Star className="w-6 h-6" />
            Featured Projects
          </motion.h3>
        </div>

        <AnimatePresence mode="wait">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={projectVariants}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden transform ${
                selectedProject === index
                  ? 'bg-quantum-violet bg-opacity-20 border-l-4 border-quantum-violet'
                  : 'hover:bg-dark-matter hover:bg-opacity-50'
              }`}
              onClick={() => setSelectedProject(index)}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ 
                x: 5, // Reduced from 10 to 5
                rotateY: 2, // Reduced from 5 to 2
                transition: { duration: 0.2 } // Reduced from 0.3 to 0.2
              }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-quantum-violet/10 via-quantum-violet/5 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ 
                  x: hoveredProject === index ? '100%' : '-100%'
                }}
                transition={{ duration: 0.8 }} // Reduced from 1 to 0.8
              />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-xl font-future font-semibold flex items-center gap-2">
                    {project.industry === 'Technology' && <Code className="w-5 h-5 text-quantum-violet" />}
                    {project.industry === 'Business' && <Globe className="w-5 h-5 text-quantum-violet" />}
                    {project.name}
                  </h4>
                  <motion.span 
                    className="text-xs px-3 py-1 rounded-full bg-dark-matter bg-opacity-50 text-quantum-violet border border-quantum-violet/30"
                    whileHover={{ scale: 1.02 }} // Reduced from 1.05 to 1.02
                  >
                    {project.industry}
                  </motion.span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <motion.div
                  className="flex items-center gap-2 text-quantum-violet text-sm"
                  animate={hoveredProject === index ? { x: 2 } : { x: 0 }} // Reduced from 5 to 2
                >
                  View Details
                  <motion.div
                    animate={hoveredProject === index ? { x: 2 } : { x: 0 }} // Reduced from 5 to 2
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              {hoveredProject === index && (
                <motion.div
                  className="absolute inset-0 bg-quantum-violet/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }} // Reduced from 0.3 to 0.2
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Preview */}
      <div className="relative h-[600px] glass-card overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          {projects.map((project, index) => (
            selectedProject === index && (
              <motion.div
                key={project.name}
                className="absolute inset-0"
                initial={{ opacity: 0, rotateY: -10 }} // Reduced from -20 to -10
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 10 }} // Reduced from 20 to 10
                transition={{ duration: 0.3 }} // Reduced from 0.4 to 0.3
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark-matter via-dark-matter/50 to-transparent z-10" />
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.02 }} // Reduced from 1.05 to 1.02
                  transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }} // Reduced from 10 to 8
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }} // Reduced from 20 to 10
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-quantum-violet/20 flex items-center justify-center"
                        animate={{ 
                          rotate: [0, 3, -3, 0], // Reduced from [0, 5, -5, 0]
                          scale: [1, 1.05, 1] // Reduced from [1, 1.1, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Star className="w-6 h-6 text-quantum-violet" />
                      </motion.div>
                      <h3 className="text-3xl font-future font-bold">{project.name}</h3>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                    
                    <div className="flex gap-4 pt-4">
                      <motion.button
                        className="glass-button flex items-center gap-2 group"
                        whileHover={{ scale: 1.02 }} // Reduced from 1.05 to 1.02
                        whileTap={{ scale: 0.98 }} // Reduced from 0.95 to 0.98
                      >
                        <span>View Project</span>
                        <motion.div
                          animate={{ x: [0, 2, 0] }} // Reduced from [0, 5, 0]
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                      <motion.button
                        className="px-6 py-2 rounded-lg border border-quantum-violet text-quantum-violet flex items-center gap-2 relative overflow-hidden group"
                        whileHover={{ scale: 1.02 }} // Reduced from 1.05 to 1.02
                        whileTap={{ scale: 0.98 }} // Reduced from 0.95 to 0.98
                      >
                        <motion.div
                          className="absolute inset-0 bg-quantum-violet opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                          initial={false}
                        />
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {selectedProject === null && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }} // Reduced from 0.9 to 0.95
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="w-20 h-20 rounded-2xl bg-quantum-violet/20 mx-auto mb-6 flex items-center justify-center"
                animate={{ 
                  rotate: [0, 5, -5, 0], // Reduced from [0, 10, -10, 0]
                  scale: [1, 1.05, 1] // Reduced from [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Star className="w-10 h-10 text-quantum-violet" />
              </motion.div>
              <p className="text-xl font-future text-gray-300">Select a project to view details</p>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;