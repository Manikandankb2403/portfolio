// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { scrollYProgress } = useScroll();
  const progressBar = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Manikandan_Resume.pdf';
    link.download = 'Manikandan_K_B_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <>
      {/* 📱 Mobile Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[99] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left md:hidden"
        style={{ scaleX: progressBar }}
      />

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? darkMode
              ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-800/50'
              : 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* 🔰 Logo */}
            <div className="flex items-center group">
              <div className="relative">
                <a
                  href="#" onClick={(e) => { e.preventDefault(); window.location.reload();}}
                  className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent"
                >
                  Manikandan K.B.
                </a>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-purple-600 to-pink-500" />
              </div>
            </div>

            {/* 🖥 Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative group font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  } text-sm sm:text-base`}
                  whileHover={{ y: isTablet ? -2 : -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
                </motion.button>
              ))}

              <motion.button
                onClick={downloadResume}
                className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium text-sm sm:text-base bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} className="mr-1 sm:mr-2" />
                {isTablet ? 'Resume' : 'Download Resume'}
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium text-sm sm:text-base bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isTablet ? 'Contact' : "Let's Connect"}
              </motion.button>

              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode
                    ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? '🌙' : '☀️'}
              </motion.button>
            </div>

            {/* 📱 Mobile Icons */}
            <div className="md:hidden flex items-center gap-2 sm:gap-4">
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode
                    ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? '🌙' : '☀️'}
              </motion.button>
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full ${
                  darkMode
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-300'
                } transition`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>

          {/* 📱 Mobile Dropdown */}
          {isMenuOpen && (
            <motion.div
              className={`md:hidden absolute top-16 sm:top-20 left-0 right-0 ${
                darkMode
                  ? 'bg-gray-800/95 backdrop-blur-xl border-b border-gray-700/50'
                  : 'bg-white/95 backdrop-blur-xl border-b border-gray-200'
              } shadow-xl`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left py-2 px-4 rounded-lg font-medium text-sm sm:text-base ${
                      darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                <motion.button
                  onClick={downloadResume}
                  className="w-full py-2 px-4 rounded-lg font-medium text-sm sm:text-base bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white hover:opacity-90"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.05 }}
                >
                  <Download size={16} className="inline mr-2" />
                  Download Resume
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full py-2 px-4 rounded-lg font-medium text-sm sm:text-base bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:opacity-90"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: (navItems.length + 1) * 0.05 }}
                >
                  Let's Connect
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>
    </>
  );
};

export default Header;
