import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError('Please fill in all required fields.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Use Vite-style env access
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_0jl8zmv';
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_z3e2999';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'R_2a8TSStTTP-tAvj';

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'No subject',
          message: formData.message
        },
        publicKey
      );

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);

    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      boxShadow: darkMode 
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
        : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="contact" 
      className={`relative py-16 md:py-24 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}
    >
      {/* Decorative elements - Responsive positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -right-40 -top-40 w-80 h-80 md:-right-20 md:-top-20 md:w-64 md:h-64 rounded-full opacity-10 ${darkMode ? 'bg-purple-500' : 'bg-indigo-300'}`}></div>
        <div className={`absolute -left-40 -bottom-40 w-96 h-96 md:-left-20 md:-bottom-20 md:w-96 md:h-96 rounded-full opacity-10 ${darkMode ? 'bg-indigo-500' : 'bg-purple-300'}`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Header - Responsive sizing */}
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent ${
            darkMode 
              ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400' 
              : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500'
          }`}>
            Let's Connect
          </h2>
          <div className={`w-24 md:w-32 h-1 mx-auto rounded-full ${
            darkMode 
              ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' 
              : 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'
          }`}></div>
          <p className={`mt-6 md:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>
        
        {/* Content - Responsive layout */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 md:gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Information Card - Responsive sizing */}
          <motion.div 
            className={`w-full lg:w-2/5 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl backdrop-blur-sm border ${
              darkMode 
                ? 'bg-gray-800/70 border-gray-700 hover:border-indigo-500' 
                : 'bg-white/80 border-gray-200 hover:border-indigo-400'
            } transition-all duration-500`}
            variants={itemVariants}
            whileHover="hover"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
              }`}>
                Contact Details
              </h3>
              
              <div className="space-y-6 md:space-y-8">
                {/* Email - Responsive icon/text sizing */}
                <motion.div 
                  className="flex items-start group"
                  variants={itemVariants}
                >
                  <div className={`p-3 md:p-4 rounded-lg md:rounded-xl mr-4 md:mr-6 transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 group-hover:bg-indigo-900/30 group-hover:shadow-lg group-hover:shadow-indigo-500/10' 
                      : 'bg-indigo-50 group-hover:bg-indigo-100'
                  }`}>
                    <FaEnvelope className={`text-xl md:text-2xl transition-colors ${
                      darkMode ? 'text-indigo-400 group-hover:text-indigo-300' : 'text-indigo-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 md:mb-2 text-base md:text-lg ${
                      darkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Email
                    </h4>
                    <a 
                      href="mailto:manikandankb2403@gmail.com" 
                      className={`text-sm md:text-base lg:text-lg hover:text-indigo-500 transition-colors ${
                        darkMode ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-600'
                      }`}
                    >
                      manikandankb2403@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                {/* Phone - Responsive icon/text sizing */}
                <motion.div 
                  className="flex items-start group"
                  variants={itemVariants}
                >
                  <div className={`p-3 md:p-4 rounded-lg md:rounded-xl mr-4 md:mr-6 transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 group-hover:bg-indigo-900/30 group-hover:shadow-lg group-hover:shadow-indigo-500/10' 
                      : 'bg-indigo-50 group-hover:bg-indigo-100'
                  }`}>
                    <FaPhone className={`text-xl md:text-2xl transition-colors ${
                      darkMode ? 'text-indigo-400 group-hover:text-indigo-300' : 'text-indigo-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 md:mb-2 text-base md:text-lg ${
                      darkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Phone
                    </h4>
                    <a 
                      href="tel:+918946009695" 
                      className={`text-sm md:text-base lg:text-lg hover:text-indigo-500 transition-colors ${
                        darkMode ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-600'
                      }`}
                    >
                      +91 8946009695
                    </a>
                  </div>
                </motion.div>
                
                {/* Location - Responsive icon/text sizing */}
                <motion.div 
                  className="flex items-start group"
                  variants={itemVariants}
                >
                  <div className={`p-3 md:p-4 rounded-lg md:rounded-xl mr-4 md:mr-6 transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 group-hover:bg-indigo-900/30 group-hover:shadow-lg group-hover:shadow-indigo-500/10' 
                      : 'bg-indigo-50 group-hover:bg-indigo-100'
                  }`}>
                    <FaMapMarkerAlt className={`text-xl md:text-2xl transition-colors ${
                      darkMode ? 'text-indigo-400 group-hover:text-indigo-300' : 'text-indigo-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 md:mb-2 text-base md:text-lg ${
                      darkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Location
                    </h4>
                    <p className={`text-sm md:text-base lg:text-lg ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Tiruchirappalli, Tamil Nadu, India
                    </p>
                  </div>
                </motion.div>
                
                {/* Social Links - Responsive sizing */}
                <motion.div 
                  className="flex space-x-4 md:space-x-5 pt-4 md:pt-6"
                  variants={itemVariants}
                >
                  <a 
                    href="https://linkedin.com/in/manikandan-kb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-indigo-900/30 hover:shadow-lg hover:shadow-indigo-500/10' 
                        : 'bg-gray-100 hover:bg-indigo-100'
                    }`}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className={`text-xl md:text-2xl ${
                      darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600'
                    } transition-colors`} />
                  </a>
                  <a 
                    href="https://github.com/Manikandankb2403" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-indigo-900/30 hover:shadow-lg hover:shadow-indigo-500/10' 
                        : 'bg-gray-100 hover:bg-indigo-100'
                    }`}
                    aria-label="GitHub"
                  >
                    <FaGithub className={`text-xl md:text-2xl ${
                      darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600'
                    } transition-colors`} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form Card - Responsive sizing */}
          <motion.div 
            className={`w-full lg:w-3/5 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl backdrop-blur-sm border ${
              darkMode 
                ? 'bg-gray-800/70 border-gray-700 hover:border-purple-500' 
                : 'bg-white/80 border-gray-200 hover:border-purple-400'
            } transition-all duration-500`}
            variants={itemVariants}
            whileHover="hover"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
              }`}>
                Send Me a Message
              </h3>
              
              {/* Success/Error Messages - Responsive sizing */}
              {submitSuccess && (
                <motion.div 
                  className={`mb-6 md:mb-8 p-4 md:p-5 rounded-lg md:rounded-xl flex items-center ${
                    darkMode ? 'bg-green-900/30 border border-green-800' : 'bg-green-100 border border-green-200'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <HiCheckCircle className={`text-xl md:text-2xl mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  <p className={`text-sm md:text-base font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                    Thank you! Your message has been sent successfully.
                  </p>
                </motion.div>
              )}
              
              {submitError && (
                <motion.div 
                  className={`mb-6 md:mb-8 p-4 md:p-5 rounded-lg md:rounded-xl ${
                    darkMode ? 'bg-red-900/30 border border-red-800' : 'bg-red-100 border border-red-200'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <p className={`text-sm md:text-base font-medium ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
                    {submitError}
                  </p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                  {/* Name Field - Responsive sizing */}
                  <motion.div variants={itemVariants}>
                    <label 
                      htmlFor="name" 
                      className={`block mb-2 md:mb-3 font-medium text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 md:px-5 md:py-4 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                          darkMode 
                            ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' 
                            : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-300'
                        } border`}
                        placeholder="John Doe"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Email Field - Responsive sizing */}
                  <motion.div variants={itemVariants}>
                    <label 
                      htmlFor="email" 
                      className={`block mb-2 md:mb-3 font-medium text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 md:px-5 md:py-4 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                          darkMode 
                            ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' 
                            : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-300'
                        } border`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </motion.div>
                </div>
                
                {/* Subject Field - Responsive sizing */}
                <motion.div variants={itemVariants} className="mb-6 md:mb-8">
                  <label 
                    htmlFor="subject" 
                    className={`block mb-2 md:mb-3 font-medium text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 md:px-5 md:py-4 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        darkMode 
                          ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' 
                          : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-300'
                      } border`}
                      placeholder="What's this about?"
                    />
                  </div>
                </motion.div>
                
                {/* Message Field - Responsive sizing */}
                <motion.div variants={itemVariants} className="mb-8 md:mb-10">
                  <label 
                    htmlFor="message" 
                    className={`block mb-2 md:mb-3 font-medium text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className={`w-full px-4 py-3 md:px-5 md:py-4 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        darkMode 
                          ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' 
                          : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-300'
                      } border`}
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                </motion.div>
                
                {/* Submit Button - Responsive sizing */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 md:py-5 px-5 md:px-6 rounded-lg md:rounded-xl font-semibold text-base md:text-lg transition-all flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : darkMode
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg hover:shadow-indigo-500/20'
                        : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white shadow-lg hover:shadow-indigo-400/20'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg md:text-xl" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;