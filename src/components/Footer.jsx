// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = ({ darkMode }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Handle scroll position for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Social media links data
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/Manikandankb2403', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/manikandankb24/', label: 'LinkedIn' },
    // { icon: <FaTwitter size={20} />, url: 'https://twitter.com/manikandan', label: 'Twitter' },
    { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/manikandan_k_b?igsh=eG9vbDhuNDRkOTVs', label: 'Instagram' },
  ];

  // Footer navigation links
  const navLinks = [
    { name: 'Home', href: '#', section: 'hero' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  // Smooth scroll to section
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`py-12 transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-950' : 'bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back to top button */}
        {showBackToTop && (
          <motion.button
            className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 ${
              darkMode 
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/30' 
                : 'bg-white hover:bg-gray-200 text-gray-800 shadow-gray-500/30'
            } transition-all duration-300 shadow-xl`}
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, rotate: 6,boxShadow: "0 0 25px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <motion.h3 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Manikandan K B
            </motion.h3>
            <motion.p 
              className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-400'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Computer Science graduate and Software Engineer with expertise in AI Development, System Administration, and Full-Stack Web Solutions.
            </motion.p>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaHeart className="text-red-500 mr-1 animate-pulse" />
              <span className="ml-1 font-medium">Crafted with passion</span>
            </motion.div>
          </div>

          {/* Quick links */}
          <div className="flex justify-center">
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl font-bold text-white text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Quick Links
              </motion.h3>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.section);
                      }}
                      className={`inline-block relative text-lg font-medium transition-colors ${
                        darkMode ? 'text-gray-300' : 'text-gray-300'
                      }`}
                      onMouseEnter={() => setHoveredLink(index)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="relative z-10">{link.name}</span>
                      {hoveredLink === index && (
                        <motion.span 
                          className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 rounded-full z-0"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                          layoutId="underline"
                        />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Social media */}
          <div className="space-y-6">
            <motion.h3 
              className="text-2xl font-bold text-white text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Connect With Me
            </motion.h3>
            <div className="flex justify-center md:justify-start space-x-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full shadow-lg ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-indigo-600 text-gray-300 shadow-indigo-500/20' 
                      : 'bg-gray-800 hover:bg-indigo-600 text-gray-300 shadow-indigo-500/20'
                  } transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -5, 0, 5, 0],
                    transition: { duration: 0.5 } 
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (index * 0.1), type: "spring", stiffness: 300 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <motion.div 
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="/Manikandan_Resume.pdf" 
                download="Manikandan_K_B_Resume.pdf"
                className={`inline-flex items-center py-3 px-6 rounded-xl font-medium transition-all shadow-lg ${
                  darkMode 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-indigo-500/30' 
                    : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-indigo-500/30'
                } group`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="mb-4 md:mb-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-center md:text-left text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Manikandan K B. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
