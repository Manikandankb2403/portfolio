// src/components/HeroScrollIndicator.jsx
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroScrollIndicator = ({ darkMode }) => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button 
      onClick={scrollToAbout} 
      className="group flex flex-col items-center"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <span className={`text-sm mb-2 ${
        darkMode ? 'text-gray-400' : 'text-gray-600'
      } group-hover:${
        darkMode ? 'text-white' : 'text-gray-900'
      } transition-colors font-mono`}>
        scroll_to_explore();
      </span>
      <div className={`border rounded-full p-2 ${
        darkMode ? 'border-white/30' : 'border-gray-700/30'
      } group-hover:${
        darkMode ? 'border-purple-400' : 'border-purple-600'
      } transition-colors`}>
        <ArrowDown className={`${
          darkMode ? 'text-white/60' : 'text-gray-700/60'
        } group-hover:${
          darkMode ? 'text-purple-400' : 'text-purple-600'
        } transition-colors duration-200`} size={20} />
      </div>
    </motion.button>
  );
};

export default HeroScrollIndicator;