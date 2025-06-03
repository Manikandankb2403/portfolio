// src/components/HeroProfile.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Cpu } from 'lucide-react';

const HeroProfile = ({ darkMode }) => {
  return (
    <motion.div
      className="relative inline-block mt-[-90px]"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        {/* Enlarged Profile Circle: responsive sizing */}
        <div
          className={`w-82 h-82 mx-auto rounded-full overflow-hidden ring-4 ${
            darkMode ? 'ring-white/30' : 'ring-gray-700/30'
          } ring-offset-4 ring-offset-transparent hover:${
            darkMode ? 'ring-purple-400/50' : 'ring-purple-500/50'
          } transition-all duration-500 group relative`}
        >
          {/* Background gradient behind the image */}
          <div
            className={`w-full h-full flex items-center justify-center ${
              darkMode
                ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                : 'bg-gradient-to-br from-gray-100 to-gray-200'
            }`}
          >
            <img
              src="/profile.jpg"
              alt="Manikandan K.B"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Gradient overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              darkMode ? 'from-purple-900/20' : 'from-purple-700/10'
            } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
        </div>

        {/* Animated “status” dot: positioned relative to circle */}
        <motion.div
          className={`absolute bottom-[0.1rem] right-[-0.3rem] sm:bottom-[0.1rem] sm:right-[-0.5rem] md:bottom-[0.5rem] md:right-[-0.5rem] ${
            darkMode ? 'ring-white/20' : 'ring-gray-300'
          } ${
            darkMode
              ? 'bg-gradient-to-r from-green-400 to-emerald-500'
              : 'bg-gradient-to-r from-green-500 to-emerald-600'
          }`}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating “Code” icon */}
        <motion.div
          className="absolute top-0 left-[-3rem] sm:left-[-3.5rem] md:left-[-4rem]"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.2,
          }}
        >
          <div
            className={`${
              darkMode ? 'bg-gray-800/30' : 'bg-gray-100/70'
            } backdrop-blur-sm rounded-lg p-2`}
          >
            <Code
              className={darkMode ? 'text-blue-400' : 'text-blue-600'}
              size={24}
            />
          </div>
        </motion.div>

        {/* Floating “Terminal” icon */}
        <motion.div
          className="absolute top-[-2rem] right-[0.5rem] sm:top-[-2.5rem] sm:right-[0.75rem] md:top-[-3rem] md:right-[1rem]"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.4,
          }}
        >
          <div
            className={`${
              darkMode ? 'bg-gray-800/30' : 'bg-gray-100/70'
            } backdrop-blur-sm rounded-lg p-2`}
          >
            <Terminal
              className={darkMode ? 'text-green-400' : 'text-green-600'}
              size={20}
            />
          </div>
        </motion.div>

        {/* Floating “Database” icon */}
        <motion.div
          className="absolute bottom-[-0.5rem] right-[-0.5rem] w-15 h-15 sm:w-17 sm:h-17"
          animate={{
            y: [0, -8, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.6,
          }}
        >
          <div
            className={`${
              darkMode ? 'bg-gray-800/30' : 'bg-gray-100/70'
            } backdrop-blur-sm rounded-lg p-2`}
          >
            <Database
              className={darkMode ? 'text-purple-400' : 'text-purple-600'}
              size={24}
            />
          </div>
        </motion.div>

        {/* Floating “CPU” icon */}
        <motion.div
          className="absolute bottom-[-1.5rem] left-[-3rem] sm:bottom-[-2rem] sm:left-[-3.5rem] md:bottom-[-2.5rem] md:left-[-4rem]"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 7, -7, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.8,
          }}
        >
          <div
            className={`${
              darkMode ? 'bg-gray-800/30' : 'bg-gray-100/70'
            } backdrop-blur-sm rounded-lg p-2`}
          >
            <Cpu
              className={darkMode ? 'text-pink-400' : 'text-pink-600'}
              size={20}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroProfile;
