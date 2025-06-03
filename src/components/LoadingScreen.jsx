// src/components/LoadingScreen.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Terminal, Code, Database } from 'lucide-react';

const LoadingScreen = ({ darkMode }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing systems...');
  const [statusIndex, setStatusIndex] = useState(0);
  
  const statusMessages = [
    'Loading core components...',
    'Compiling assets...',
    'Optimizing performance...',
    'Establishing connections...',
    'Finalizing setup...'
  ];

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Update status text every 20% progress
        if (newProgress % 20 === 0) {
          setStatusIndex(prevIndex => (prevIndex + 1) % statusMessages.length);
          setStatusText(statusMessages[statusIndex]);
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [statusIndex]);

  // Generate floating particles
  const particles = Array.from({ length: 30 });
  
  return (
    <motion.div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-50'
      }`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating tech particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                  ? i % 3 === 0 ? 'bg-indigo-500/20' : 
                    i % 3 === 1 ? 'bg-purple-500/20' : 'bg-blue-500/20'
                  : i % 3 === 0 ? 'bg-indigo-400/20' : 
                    i % 3 === 1 ? 'bg-purple-400/20' : 'bg-blue-400/20'
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${posX}%`,
                top: `${posY}%`,
              }}
              animate={{
                y: [0, 30, 0],
                x: [0, Math.random() * 50 - 25, 0],
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
      </div>
      
      {/* Tech icons floating around */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Cpu 
          size={48} 
          className={darkMode ? 'text-blue-500/30' : 'text-blue-600/30'} 
        />
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-1/4"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Server 
          size={48} 
          className={darkMode ? 'text-purple-500/30' : 'text-purple-600/30'} 
        />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 left-1/3"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 15, -15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Terminal 
          size={48} 
          className={darkMode ? 'text-indigo-500/30' : 'text-indigo-600/30'} 
        />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 right-1/3"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Database 
          size={48} 
          className={darkMode ? 'text-blue-500/30' : 'text-blue-600/30'} 
        />
      </motion.div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with animated border */}
        <motion.div
          className="relative"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-xl`}>
            <span className={`text-4xl font-bold ${
              darkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>MK</span>
          </div>
          <div className={`absolute inset-0 rounded-full border-4 ${
            darkMode ? 'border-indigo-500' : 'border-indigo-400'
          } border-t-transparent animate-spin`}></div>
        </motion.div>
        
        {/* Animated text */}
        <motion.h1 
          className={`mt-8 text-3xl font-bold ${
            darkMode ? 'text-indigo-400' : 'text-indigo-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Manikandan K B
        </motion.h1>
        
        {/* Status text with typing animation */}
        <motion.div 
          className={`mt-4 text-lg font-mono ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="inline-block min-w-[280px]">
            {statusText}
            <span className="ml-1 inline-block w-2 h-5 bg-gray-400 animate-pulse"></span>
          </span>
        </motion.div>
        
        {/* Progress bar */}
        <motion.div 
          className={`mt-8 w-64 h-2 rounded-full overflow-hidden ${
            darkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div 
            className={`h-full rounded-full ${
              darkMode 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                : 'bg-gradient-to-r from-indigo-400 to-purple-400'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>
        
        {/* Progress percentage */}
        <motion.div 
          className={`mt-2 text-sm font-medium ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {progress}%
        </motion.div>
        
        {/* Tech stack indicators */}
        <motion.div 
          className="flex space-x-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className={`p-2 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-md`}>
            <Code className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
          </div>
          <div className={`p-2 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-md`}>
            <Cpu className={darkMode ? 'text-green-400' : 'text-green-600'} size={20} />
          </div>
          <div className={`p-2 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-md`}>
            <Terminal className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={20} />
          </div>
          <div className={`p-2 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-md`}>
            <Database className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} size={20} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;