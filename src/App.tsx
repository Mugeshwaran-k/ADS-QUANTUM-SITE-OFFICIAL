import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Brain,
  Shield,
  Server,
  Cpu,
  MessageSquare,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Zap,
  Lock,
  Database,
  Network,
  Eye,
  UserCheck,
} from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceCard from './components/ServiceCard';
import CaseStudy from './components/CaseStudy';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import FeaturedProjects from './components/FeaturedProjects';
import CategoryFilter from './components/CategoryFilter';
import ServicesSection from './components/ServicesSection';
import ScrollProgress from './components/ScrollProgress';
import SectionTransition from './components/SectionTransition';

// Data constants
const featuredProjects = [
  {
    name: "Quantum Encryption System",
    description: "State-of-the-art quantum encryption system for enterprise data security",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1740&q=80"
  },
  {
    name: "AI-Driven Analytics",
    description: "Advanced analytics platform powered by quantum machine learning",
    industry: "Business",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1740&q=80"
  },
  {
    name: "Quantum Cloud Platform",
    description: "Cloud computing platform optimized for quantum algorithms",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=1740&q=80"
  },
  {
    name: "Enterprise Security Suite",
    description: "Comprehensive security solution with quantum-resistant encryption",
    industry: "Business",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1740&q=80"
  }
];

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'technology', label: 'Technology' },
  { id: 'business', label: 'Business' }
];

const caseStudies = [
  {
    title: "Quantum Security Implementation",
    description: "Implementing quantum-safe encryption for a Fortune 500 company",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1740&q=80",
    tags: ["Quantum", "Security", "Enterprise"]
  },
  {
    title: "AI-Driven Analytics Platform",
    description: "Building a next-gen analytics system using quantum algorithms",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1740&q=80",
    tags: ["AI", "Analytics", "Big Data"]
  },
  {
    title: "Cloud Infrastructure Upgrade",
    description: "Modernizing cloud infrastructure with quantum computing capabilities",
    image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=1740&q=80",
    tags: ["Cloud", "Infrastructure", "Quantum"]
  }
];

function App() {
  const [activeServiceFilter, setActiveServiceFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('home');
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const scrollToSection = (section: string) => {
    let ref;
    switch (section) {
      case 'services':
        ref = servicesRef;
        break;
      case 'case-studies':
        ref = caseStudiesRef;
        break;
      case 'about':
        ref = aboutRef;
        break;
      case 'contact':
        ref = contactRef;
        break;
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
  };

  const filteredProjects = activeServiceFilter === 'all'
    ? featuredProjects
    : featuredProjects.filter(project => 
        project.industry.toLowerCase() === activeServiceFilter.toLowerCase()
      );

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-midnight to-dark-matter">
      <ScrollProgress />
      <ParticleBackground />
      <Navbar 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />

      <main className="flex-grow">
        <SectionTransition>
          <HeroSection scrollToServices={() => scrollToSection('services')} />
        </SectionTransition>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => scrollToSection('services')}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>

        <section
          ref={servicesRef}
          id="services"
          className="relative overflow-hidden"
        >
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          <SectionTransition>
            <ServicesSection />
          </SectionTransition>
        </section>

        <section
          ref={caseStudiesRef}
          id="case-studies"
          className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-deep-blue bg-opacity-30"
        >
          <SectionTransition>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <motion.h2
                  className="text-4xl md:text-5xl font-future font-bold gradient-text mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Case Studies
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Explore our groundbreaking projects and transformative solutions
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <CaseStudy
                    key={index}
                    title={study.title}
                    description={study.description}
                    image={study.image}
                    tags={study.tags}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </SectionTransition>
        </section>

        <section
          ref={aboutRef}
          id="about"
          className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
        >
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          <SectionTransition>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <motion.h2
                  className="text-4xl md:text-5xl font-future font-bold gradient-text mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Featured Projects
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Explore our groundbreaking implementations of quantum technology across various industries
                </motion.p>
              </div>

              <CategoryFilter
                buttons={filterCategories}
                activeFilter={activeServiceFilter}
                onFilterChange={setActiveServiceFilter}
              />

              <FeaturedProjects projects={filteredProjects} />
            </div>
          </SectionTransition>
        </section>

        <section
          ref={contactRef}
          id="contact"
          className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
        >
          <div className="cyber-grid absolute inset-0 opacity-10"></div>
          <SectionTransition>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl font-future font-bold gradient-text mb-6">
                    Let's Build The Future Together
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Ready to transform your business with quantum computing and AI?
                    Our team of experts is here to guide you through the next
                    technological revolution.
                  </p>
                  <div className="flex items-center space-x-6 mb-8">
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  </div>
                  <div className="glass-card p-6 inline-flex items-center space-x-4 max-w-md">
                    <MessageSquare className="w-10 h-10 text-quantum-violet" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">24/7 Support</h3>
                      <p className="text-gray-300">
                        Our quantum AI support team is always available to assist
                        you
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </SectionTransition>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;