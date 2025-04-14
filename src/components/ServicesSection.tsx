import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Brain,
  Shield,
  Globe,
  Lock,
  Bot,
  Eye,
  BarChart,
  Database,
  Code,
  Smartphone,
  Zap
} from 'lucide-react';

interface ServiceCategory {
  title: string;
  description: string;
  category: string;
  services: {
    icon: React.ReactNode;
    name: string;
    description: string;
  }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Quantum Technology",
    description: "Pioneering quantum solutions for next-generation computing challenges",
    category: "quantum",
    services: [
      {
        icon: <Cpu className="w-6 h-6" />,
        name: "Quantum Computing Infrastructure",
        description: "Scalable, high-coherence quantum systems"
      },
      {
        icon: <Code className="w-6 h-6" />,
        name: "Quantum Algorithm Development",
        description: "Custom algorithms for complex computations"
      },
      {
        icon: <Database className="w-6 h-6" />,
        name: "Quantum Cloud Services",
        description: "Secure, scalable quantum computing in the cloud"
      },
      {
        icon: <Brain className="w-6 h-6" />,
        name: "Quantum Machine Learning",
        description: "Hybrid quantum-classical ML for advanced insights"
      },
      {
        icon: <Lock className="w-6 h-6" />,
        name: "Post-Quantum Cryptography",
        description: "Future-proof security against quantum threats"
      }
    ]
  },
  {
    title: "AI Development",
    description: "Advanced AI solutions powered by cutting-edge machine learning",
    category: "ai",
    services: [
      {
        icon: <Brain className="w-6 h-6" />,
        name: "Advanced Neural Networks",
        description: "Custom architectures for AI-driven solutions"
      },
      {
        icon: <Bot className="w-6 h-6" />,
        name: "Conversational AI",
        description: "Intelligent chatbots & virtual assistants"
      },
      {
        icon: <Eye className="w-6 h-6" />,
        name: "Computer Vision",
        description: "Image, video, and anomaly detection systems"
      },
      {
        icon: <BarChart className="w-6 h-6" />,
        name: "Predictive Analytics",
        description: "AI-powered trend forecasting & decision-making"
      }
    ]
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions for the digital age",
    category: "security",
    services: [
      {
        icon: <Shield className="w-6 h-6" />,
        name: "Advanced Threat Protection",
        description: "Real-time intelligence & automated defense"
      },
      {
        icon: <Lock className="w-6 h-6" />,
        name: "Biometric Authentication",
        description: "Secure, frictionless user authentication"
      },
      {
        icon: <Database className="w-6 h-6" />,
        name: "Data Recovery",
        description: "Advanced data recovery and protection systems"
      }
    ]
  },
  {
    title: "Web Design & Development",
    description: "Creating exceptional digital experiences",
    category: "web",
    services: [
      {
        icon: <Globe className="w-6 h-6" />,
        name: "Responsive Web Design",
        description: "Mobile-first, adaptive websites"
      },
      {
        icon: <Zap className="w-6 h-6" />,
        name: "UI/UX Design",
        description: "Stunning visuals & intuitive experiences"
      },
      {
        icon: <Code className="w-6 h-6" />,
        name: "Web Application Development",
        description: "Scalable, high-performance apps"
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        name: "Progressive Web Apps",
        description: "Fast, offline-ready, and app-like experiences"
      }
    ]
  }
];

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const filteredCategories = activeCategory === 'all' 
    ? serviceCategories 
    : serviceCategories.filter(category => category.category === activeCategory);

  return (
    <div className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-future font-bold gradient-text mb-4">
            Our Advanced Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Transforming industries with cutting-edge solutions in Quantum Technology,
            AI Development, Cybersecurity, and Web Design.
          </p>
        </motion.div>

        {/* Premium Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { id: 'all', label: 'All Services', icon: <Zap className="w-4 h-4" /> },
            { id: 'quantum', label: 'Quantum', icon: <Cpu className="w-4 h-4" /> },
            { id: 'ai', label: 'AI & ML', icon: <Brain className="w-4 h-4" /> },
            { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
            { id: 'web', label: 'Web Dev', icon: <Globe className="w-4 h-4" /> }
          ].map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveCategory(filter.id)}
              onMouseEnter={() => setHoveredButton(filter.id)}
              onMouseLeave={() => setHoveredButton(null)}
              className={`relative overflow-hidden rounded-xl px-6 py-3 flex items-center gap-2 transition-all duration-300
                ${activeCategory === filter.id 
                  ? 'bg-quantum-violet text-white shadow-lg shadow-quantum-violet/30' 
                  : 'bg-dark-matter/40 text-gray-300 hover:text-white'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-quantum-violet/20 to-neon-pink/20"
                initial={{ x: '-100%' }}
                animate={{
                  x: hoveredButton === filter.id || activeCategory === filter.id ? '100%' : '-100%'
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              
              {/* Icon */}
              <motion.div
                animate={{
                  rotate: hoveredButton === filter.id ? 360 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                {filter.icon}
              </motion.div>
              
              {/* Label */}
              <span className="relative z-10 font-future text-sm">
                {filter.label}
              </span>
              
              {/* Active Indicator */}
              {activeCategory === filter.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  layoutId="activeFilterIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <div className="space-y-20">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-future font-bold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-300">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    className="glass-card p-6 hover:shadow-lg hover:shadow-quantum-violet/20 transition-all duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: serviceIndex * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-quantum-violet bg-opacity-20 p-3 rounded-lg">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {service.name}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;