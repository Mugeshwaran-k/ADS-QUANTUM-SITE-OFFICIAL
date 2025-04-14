import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const templateParams = {
        to_email: 'info@adsquantumvision.com',
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        service: formState.service
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will contact you shortly.'
      });

      setFormState({
        name: '',
        email: '',
        message: '',
        service: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focused: {
      boxShadow: '0 0 15px rgba(153, 0, 255, 0.7)',
      borderColor: 'rgba(153, 0, 255, 0.7)',
      transition: { duration: 0.3 }
    },
    unfocused: {
      boxShadow: '0 0 0px rgba(153, 0, 255, 0)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="glass-card p-6 md:p-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Premium Background Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-quantum-violet/5 via-purple-500/5 to-fuchsia-500/5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-future font-semibold mb-6 gradient-text">Contact Us</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Your Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              required
              className="w-full bg-dark-matter/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none backdrop-blur-sm"
              variants={inputVariants}
              animate={focusedField === 'name' ? 'focused' : 'unfocused'}
              whileFocus={{ scale: 1.01 }}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              required
              className="w-full bg-dark-matter/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none backdrop-blur-sm"
              variants={inputVariants}
              animate={focusedField === 'email' ? 'focused' : 'unfocused'}
              whileFocus={{ scale: 1.01 }}
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
              Service of Interest
            </label>
            <motion.select
              id="service"
              name="service"
              value={formState.service}
              onChange={handleChange}
              onFocus={() => handleFocus('service')}
              onBlur={handleBlur}
              className="w-full bg-dark-matter/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none backdrop-blur-sm"
              variants={inputVariants}
              animate={focusedField === 'service' ? 'focused' : 'unfocused'}
              whileFocus={{ scale: 1.01 }}
            >
              <option value="">Select a service</option>
              <option value="quantum">Quantum Computing</option>
              <option value="ai">AI Development</option>
              <option value="cyber">Cybersecurity</option>
              <option value="it">IT Infrastructure</option>
            </motion.select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Your Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              rows={4}
              required
              className="w-full bg-dark-matter/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none backdrop-blur-sm"
              variants={inputVariants}
              animate={focusedField === 'message' ? 'focused' : 'unfocused'}
              whileFocus={{ scale: 1.01 }}
            />
          </div>

          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/20 text-green-200' 
                  : 'bg-red-500/20 text-red-200'
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full glass-button flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Button Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-quantum-violet via-purple-600 to-fuchsia-600"
              animate={{
                x: ['0%', '100%'],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ filter: 'blur(15px)' }}
            />
            
            {/* Button Content */}
            <motion.div className="relative flex items-center gap-2">
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Send className="w-4 h-4" />
              </motion.div>
            </motion.div>
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{
                x: ['100%'],
                transition: {
                  repeat: Infinity,
                  duration: 1,
                  repeatDelay: 0.5
                }
              }}
            />
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;