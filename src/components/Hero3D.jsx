// src/components/Hero3D.jsx
import React from 'react';

const Hero3D = ({ darkMode }) => {
  return (
    <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-30">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* CSS-based 3D floating elements */}
        <div className="absolute animate-float">
          <div className={`w-16 h-16 ${
            darkMode ? 'bg-purple-500/40' : 'bg-purple-400/30'
          } rounded-lg transform rotate-45 animate-spin-slow border ${
            darkMode ? 'border-purple-400/30' : 'border-purple-300/20'
          }`}></div>
        </div>
        
        <div className="absolute top-1/4 right-1/4 animate-float-delayed">
          <div className={`w-12 h-12 ${
            darkMode ? 'bg-pink-500/40' : 'bg-pink-400/30'
          } rounded-full animate-pulse border-2 ${
            darkMode ? 'border-pink-400/30' : 'border-pink-300/20'
          }`}></div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/3 animate-bounce">
          <div className={`w-8 h-8 ${
            darkMode ? 'bg-blue-500/40' : 'bg-blue-400/30'
          } transform rotate-12 border ${
            darkMode ? 'border-blue-400/30' : 'border-blue-300/20'
          }`}></div>
        </div>
        
        <div className="absolute top-1/2 right-1/2 animate-float">
          <div className={`w-6 h-6 ${
            darkMode ? 'bg-emerald-500/40' : 'bg-emerald-400/30'
          } rounded-sm transform -rotate-45 animate-spin-slow border ${
            darkMode ? 'border-emerald-400/30' : 'border-emerald-300/20'
          }`}></div>
        </div>
        
        {/* Floating code text */}
        <div className="absolute top-1/3 right-1/5 animate-float-delayed">
          <div className={`${
            darkMode ? 'text-white/30' : 'text-gray-700/30'
          } font-mono text-sm transform rotate-12`}>
            {'<Developer />'}
          </div>
        </div>
        
        <div className="absolute bottom-1/4 right-1/6 animate-pulse">
          <div className={`${
            darkMode ? 'text-green-400/30' : 'text-green-600/20'
          } font-mono text-xs transform -rotate-6`}>
            function() { }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3D;