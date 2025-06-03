import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Terminal, Cpu, Server, Linkedin, Award, Star } from 'lucide-react';

const HeroContent = ({ darkMode }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentCode, setCurrentCode] = useState(0);
  const roleRef = useRef(null);
  const [roleHeight, setRoleHeight] = useState(0);

  // Updated profile data with accurate experience and achievements
  const profile = {
    name: "Manikandan K B",
    roles: ['AI Developer', 'System Administrator', 'MERN Stack Developer', 'PC Hardware Specialist'],
    bio: "Computer Science graduate with expertise in AI development, system administration, and full-stack web solutions",
    stats: {
      projects: 4, // Tomato Quality, Complaint System, Voice Assistant, PC Builds
      experience: "5+", // Freelance since 2020
      internship: "6 months", // Internship experience
      satisfaction: 98
    },
    resumeFile: "/Manikandan_Resume.pdf",
    bioParagraphs: [
      "Developed a CNN-based tomato quality classification system achieving 97.5% accuracy, showcasing strong AI/ML skills.",
      "Built a comprehensive college complaint management system using MERN stack, demonstrating full-stack development capabilities.",
      "Specialized in custom PC builds and hardware troubleshooting with 500+ systems repaired.",
      "5+ years of freelance experience since 2020, complemented by 6 months of professional internship"
    ],
    linkedin: "https://linkedin.com/in/manikandan-kb",
    achievements: [
      "Developed CNN-based tomato quality classifier with 97.5% accuracy",
      "Built college complaint management system using MERN stack",
      "Specialized in custom PC builds with 500+ systems repaired",
      "5+ years of freelance experience since 2020"
    ]
  };

  const codeSnippets = [
    'model.add(Conv2D(32, (3,3), activation="relu")) // Tomato Classifier',
    'router.post("/complaints", authMiddleware); // MERN Complaint System',
    'speechRecognition.init(); // Voice Assistant Project',
    'pcBuild.optimizeFor("AI_Workloads"); // Custom PC Configs'
  ];

  // Set fixed heights for animation containers
  useEffect(() => {
    if (roleRef.current) setRoleHeight(roleRef.current.clientHeight);
  }, []);

  // Animation intervals for roles and code snippets
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % profile.roles.length);
    }, 3000);

    const codeInterval = setInterval(() => {
      setCurrentCode(prev => (prev + 1) % codeSnippets.length);
    }, 2500);

    return () => {
      clearInterval(roleInterval);
      clearInterval(codeInterval);
    };
  }, []);

  // Function to download resume
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = profile.resumeFile;
    link.download = 'Manikandan_KB_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className={`relative min-h-screen flex items-center overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-950' : 'bg-gradient-to-br from-gray-50 to-blue-50'}`}>
      {/* Starry background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {Array(30).fill(0).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              backgroundColor: darkMode ? '#818cf8' : '#a5b4fc',
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 3 + 1}s`
            }}
          />
        ))}
        
        <div className="absolute top-[15%] left-[10%] opacity-10 animate-float" style={{ animationDuration: '20s' }}>
          <Cpu size={64} className={darkMode ? 'text-indigo-500' : 'text-indigo-300'} aria-hidden="true" />
        </div>
        <div className="absolute bottom-[25%] right-[10%] opacity-10 animate-float-delayed" style={{ animationDuration: '25s' }}>
          <Server size={64} className={darkMode ? 'text-blue-500' : 'text-blue-300'} aria-hidden="true" />
        </div>
      </div>
      
      {/* Main content */}
      <motion.div 
        className="relative z-10 w-full py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Name and greeting */}
            <motion.div 
              variants={itemVariants}
              className="mb-8"
            >
              <motion.h1 
batik="true"                className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              >
                <span className={`bg-clip-text text-transparent ${
                  darkMode
                    ? 'bg-gradient-to-r from-indigo-400 to-purple-400'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600'
                }`}>
                  {profile.name}
                </span>
                <span className='bg-clip-text font-bold mb-4 '>👋🏼</span>
              </motion.h1>
              
              <motion.p 
                className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}
              >
                {profile.bio}
              </motion.p>
            </motion.div>
            
            {/* Role animation */}
            <motion.div 
              variants={itemVariants}
              className="mb-8"
              style={{ height: roleHeight || 'auto' }}
            >
              <div 
                className="flex items-center"
                ref={roleRef}
              >
                <div className={`relative inline-block px-4 py-2 rounded-full ${
                  darkMode ? 'bg-gray-800/80' : 'bg-purple-100'
                } transition-colors duration-300`}>
                  <span className={`font-medium bg-clip-text text-transparent bg-gradient-to-r ${
                    darkMode ? 'from-blue-300 to-purple-300' : 'from-blue-500 to-purple-500'
                  }`}>
                    {profile.roles[currentRole]}
                  </span>
                </div>
              </div>
            </motion.div>
            
            {/* Bio paragraphs */}
            <motion.div 
              variants={itemVariants}
              className="mb-12"
            >
              <div className="space-y-4">
                {profile.bioParagraphs.map((paragraph, index) => (
                  <motion.p 
                    key={index}
                    className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Achievements section */}
            <motion.div 
              variants={itemVariants}
              className="mb-12"
            >
              <div className="flex items-center mb-4">
                <Award className={`mr-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} size={24} />
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Key Achievements
                </h3>
              </div>
              <div className="space-y-3 pl-8">
                {profile.achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`absolute -left-6 top-1.5 w-3 h-3 rounded-full ${
                      darkMode ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></div>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-12"
              variants={itemVariants}
            >
              <motion.button
                className={`px-5 py-2 rounded-lg font-medium flex items-center ${
                  darkMode 
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-indigo-500 hover:bg-indigo-600 text-white'
                } transition-colors duration-200`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="View Projects"
              >
                <Code size={18} className="mr-2" />
                Projects
              </motion.button>
              
              <motion.button 
                onClick={downloadResume}
                className={`px-5 py-2 rounded-lg font-medium flex items-center ${
                  darkMode 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                } transition-colors duration-200`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Download Resume"
              >
                <Download size={18} className="mr-2" />
                Resume
              </motion.button>

              <motion.button
                className={`px-5 py-2 rounded-lg font-medium flex items-center ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                } transition-colors duration-200`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(profile.linkedin, '_blank')}
                aria-label="View LinkedIn Profile"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </motion.button>
              
              <motion.button
                className={`px-5 py-2 rounded-lg font-medium flex items-center ${
                  darkMode 
                    ? 'border border-gray-600 hover:bg-gray-800/50 text-white'
                    : 'border border-gray-300 hover:bg-gray-100 text-gray-700'
                } transition-colors duration-200`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Contact Me"
              >
                <Terminal size={18} className="mr-2" />
                Contact
              </motion.button>
            </motion.div>
            
            {/* Stats section with updated experience */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
              variants={itemVariants}
            >
              {Object.entries(profile.stats).map(([key, value], index) => {
                const colors = [
                  darkMode ? 'text-blue-400' : 'text-blue-600',
                  darkMode ? 'text-purple-400' : 'text-purple-600',
                  darkMode ? 'text-green-400' : 'text-green-600',
                  darkMode ? 'text-pink-400' : 'text-pink-600'
                ];
                
                const icons = [
                  <Code key="projects" size={24} />,
                  <Terminal key="experience" size={24} />,
                  <Award key="internship" size={24} />,
                  <Star key="satisfaction" size={24} />
                ];
                
                const labels = {
                  projects: "Projects",
                  experience: "Freelance Exp",
                  internship: "Internship",
                  satisfaction: "Satisfaction"
                };
                
                const descriptions = {
                  projects: "Completed professional projects",
                  experience: "Years of freelance experience",
                  internship: "Professional internship",
                  satisfaction: "Client satisfaction rate"
                };
                
                return (
                  <div 
                    key={key}
                    className={`p-3 rounded-lg text-center ${
                      darkMode ? 'bg-gray-800/50' : 'bg-white'
                    } border ${
                      darkMode ? 'border-gray-700' : 'border-gray-200'
                    } shadow-sm group relative overflow-hidden`}
                  >
                    <div className="flex justify-center mb-2">
                      {icons[index]}
                    </div>
                    <div className={`text-2xl font-bold ${colors[index]}`}>
                      {value}{key === 'satisfaction' ? '%' : ''}
                    </div>
                    <div className={`text-xs uppercase tracking-wider mt-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {labels[key]}
                    </div>
                    {/* Description on hover */}
                    <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-${colors[index].split('-')[1]} to-transparent p-2 text-xs text-gray rounded-b-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out`}>
                      {descriptions[key]}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Code snippet */}
            <motion.div 
              variants={itemVariants}
              className="mt-12"
            >
              <motion.div 
                className={`${darkMode ? 'bg-gray-800/50' : 'bg-white'} rounded-lg p-4 max-w-2xl border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                } shadow-sm`}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${darkMode ? 'bg-red-500' : 'bg-red-400'}`}></div>
                  <div className={`w-2.5 h-2.5 rounded-full ${darkMode ? 'bg-yellow-500' : 'bg-yellow-400'}`}></div>
                  <div className={`w-2.5 h-2.5 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-400'}`}></div>
                </div>
                
                <div className="text-left">
                  <div className="font-mono text-sm flex items-start">
                    <span className={`mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>$</span>
                    <div>
                      <div className={`${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                        {codeSnippets[currentCode]}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContent;