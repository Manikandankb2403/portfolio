// src/components/ParticlesBackground.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ParticlesBackground = ({ darkMode }) => {
  const particles = Array.from({ length: 30 });
  
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {particles.map((_, i) => {
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode 
                ? 'bg-indigo-500/20' 
                : 'bg-indigo-400/30'
            }`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${posX}%`,
              top: `${posY}%`,
            }}
            animate={{
              y: [0, 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
      
      {/* Animated grid background */}
      <div className={`absolute inset-0 bg-grid ${
        darkMode ? 'bg-grid-dark' : 'bg-grid-light'
      }`}></div>
    </div>
  );
};

export default ParticlesBackground;