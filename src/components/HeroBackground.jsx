// src/components/HeroBackground.jsx
import React from 'react';

const HeroBackground = ({ darkMode }) => {
  return (
    <>
      {/* Enhanced animated background with code theme */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${
          darkMode ? 'bg-purple-500/30' : 'bg-purple-400/20'
        } rounded-full blur-3xl animate-float opacity-70`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 ${
          darkMode ? 'bg-pink-500/30' : 'bg-pink-400/20'
        } rounded-full blur-3xl animate-float-delayed opacity-70`}></div>
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 ${
          darkMode ? 'bg-blue-500/30' : 'bg-blue-400/20'
        } rounded-full blur-2xl animate-pulse opacity-60`}></div>
        <div className={`absolute top-3/4 left-1/3 w-48 h-48 ${
          darkMode ? 'bg-emerald-500/20' : 'bg-emerald-400/15'
        } rounded-full blur-3xl animate-bounce opacity-50`}></div>
      </div>

      {/* Enhanced floating particles with tech theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/3 ${
          darkMode ? 'text-green-400/30' : 'text-green-600/20'
        } text-xs font-mono animate-float`}>001101</div>
        <div className={`absolute top-3/4 left-2/3 ${
          darkMode ? 'text-blue-400/30' : 'text-blue-600/20'
        } text-xs font-mono animate-pulse`}>function()</div>
        <div className={`absolute top-1/2 right-1/4 ${
          darkMode ? 'text-purple-400/30' : 'text-purple-600/20'
        } text-xs font-mono animate-bounce`}>{"{ }"}</div>
        <div className={`absolute bottom-1/4 left-1/6 ${
          darkMode ? 'text-pink-400/30' : 'text-pink-600/20'
        } text-xs font-mono animate-ping`}>console.log</div>
        <div className={`absolute top-1/6 right-1/2 ${
          darkMode ? 'text-yellow-400/30' : 'text-yellow-600/20'
        } text-xs font-mono animate-pulse`}>var x = 1;</div>
      </div>
    </>
  );
};

export default HeroBackground;