import { useEffect, useCallback } from 'react';

const PerformanceOptimizer = () => {
  // Handle viewport height for mobile browsers
  const setViewportHeight = useCallback(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  // Handle dynamic padding based on screen size
  const setDynamicPadding = useCallback(() => {
    const width = window.innerWidth;
    const padding = Math.min(Math.max(width * 0.05, 16), 32);
    document.documentElement.style.setProperty('--dynamic-padding', `${padding}px`);
  }, []);

  // Chrome-specific optimizations
  const setupChromeOptimizations = useCallback(() => {
    if (window.chrome) {
      document.documentElement.classList.add('chrome');
      
      // Enable layer creation for specific elements
      const elementsToOptimize = document.querySelectorAll(
        '.glass-card, .glass-button, .gradient-text, .premium-border'
      );
      
      elementsToOptimize.forEach(element => {
        element.classList.add('chrome-optimize');
      });

      // Set content-visibility for off-screen elements
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        section.style.contentVisibility = 'auto';
        section.style.containIntrinsicSize = '0 500px';
      });

      // Optimize paint performance
      document.body.style.transform = 'translateZ(0)';
      document.body.style.backfaceVisibility = 'hidden';
      document.body.style.perspective = '1000px';
    }
  }, []);

  // Optimize scroll performance
  const handleScroll = useCallback(() => {
    if (!document.body.classList.contains('is-scrolling')) {
      document.body.classList.add('is-scrolling');
      window.requestAnimationFrame(() => {
        document.body.classList.remove('is-scrolling');
      });
    }
  }, []);

  // Optimize resize performance
  const handleResize = useCallback(() => {
    if (!document.body.classList.contains('is-resizing')) {
      document.body.classList.add('is-resizing');
      setViewportHeight();
      setDynamicPadding();
      window.requestAnimationFrame(() => {
        document.body.classList.remove('is-resizing');
      });
    }
  }, [setViewportHeight, setDynamicPadding]);

  // Initialize intersection observer for lazy loading
  const setupLazyLoading = useCallback(() => {
    const lazyLoadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-viewport');
            if (entry.target instanceof HTMLImageElement) {
              entry.target.loading = 'eager';
              // Chrome-specific image optimization
              entry.target.decoding = 'async';
              entry.target.fetchPriority = 'high';
            }
            lazyLoadObserver.unobserve(entry.target);
          }
        });
      },
      { 
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    document.querySelectorAll('.lazy-load').forEach(el => {
      lazyLoadObserver.observe(el);
    });

    return lazyLoadObserver;
  }, []);

  // Handle orientation changes
  const handleOrientationChange = useCallback(() => {
    const timeout = setTimeout(() => {
      setViewportHeight();
      setDynamicPadding();
    }, 100);
    return () => clearTimeout(timeout);
  }, [setViewportHeight, setDynamicPadding]);

  // Setup performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    if (window.chrome && window.performance) {
      // Monitor long tasks
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry);
          }
        });
      });
      
      observer.observe({ entryTypes: ['longtask'] });

      // Monitor layout shifts
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.value > 0.1) {
            console.warn('Significant layout shift detected:', entry);
          }
        });
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  useEffect(() => {
    // Initial setup
    setViewportHeight();
    setDynamicPadding();
    setupChromeOptimizations();
    const lazyLoadObserver = setupLazyLoading();
    setupPerformanceMonitoring();

    // Event listeners with passive option for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleOrientationChange);

    // Chrome-specific event optimization
    if (window.chrome) {
      document.addEventListener('touchstart', () => {}, { passive: true });
      document.addEventListener('touchmove', () => {}, { passive: true });
      document.addEventListener('wheel', () => {}, { passive: true });
    }

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      lazyLoadObserver.disconnect();
    };
  }, [
    handleScroll, 
    handleResize, 
    handleOrientationChange, 
    setupLazyLoading,
    setupChromeOptimizations,
    setupPerformanceMonitoring,
    setViewportHeight, 
    setDynamicPadding
  ]);

  return null;
};

export default PerformanceOptimizer;