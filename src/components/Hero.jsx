// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import Hero3D from './Hero3D';
import HeroContent from './HeroContent';
import HeroProfile from './HeroProfile';
import HeroScrollIndicator from './HeroScrollIndicator';

const Hero = ({ darkMode }) => {
  return (
    <section
      id="hero"
      className={`
        min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden
        transition-colors duration-500
        ${darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50'}
      `}
    >
      <HeroBackground darkMode={darkMode} />
      <Hero3D darkMode={darkMode} />

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* on small screens: HeroContent is stacked above HeroProfile (flex-col-reverse)
            on md+ screens: they sit side-by-side (flex-row) */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <HeroContent darkMode={darkMode} />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <HeroProfile darkMode={darkMode} />
        </motion.div>
      </div>

      <motion.div
        className="container mx-auto px-4 mt-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <HeroScrollIndicator darkMode={darkMode} />
      </motion.div>
    </section>
  );
};

export default Hero;
