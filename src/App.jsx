import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900'}`}>
      <>
        <ParticlesBackground darkMode={darkMode} />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </>
    </div>
  );
}

export default App;
