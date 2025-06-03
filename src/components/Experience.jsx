import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaLaptopCode, FaTools } from 'react-icons/fa';

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      position: "AI Developer Intern",
      company: "Tech Vaseegrah",
      period: "Jan 2025 – Present",
      description: "Voice AI Solutions for Customer Service and Retail",
      responsibilities: [
        "Developed a call-handling AI assistant capable of executing voice commands using NLP",
        "Integrated speech-to-text and LLM-based query classification for module routing",
        "Built a fully voice-oriented shop assistant with fine-tuned Whisper STT model and React frontend",
        "Enhanced user interaction accuracy and reduced latency in task execution"
      ],
      skills: ["Python", "NLP", "LLMs", "Speech Recognition", "React", "Whisper STT"],
      icon: <FaLaptopCode />,
      color: "text-blue-500",
      accent: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      position: "Freelance PC Technician",
      company: "Independent",
      period: "Jan 2020 – Present",
      description: "System Assembly and Troubleshooting",
      responsibilities: [
        "Diagnosed and repaired over 500 PC issues involving CPUs, RAM, SSDs, and motherboards",
        "Built customized desktops for gaming, AI workloads, and general use",
        "Configured OS installations, BIOS/UEFI, and local area network (LAN) setups"
      ],
      skills: ["Hardware", "Troubleshooting", "Networking", "System Configuration"],
      icon: <FaTools />,
      color: "text-emerald-500",
      accent: "bg-gradient-to-r from-emerald-500 to-teal-500"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "backOut" }
    },
    hover: {
      y: -8,
      boxShadow: darkMode 
        ? "0 20px 40px -15px rgba(79, 70, 229, 0.3)" 
        : "0 20px 40px -15px rgba(99, 102, 241, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const bulletVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 600,
        damping: 12
      }
    }
  };

  return (
    <section 
      id="experience" 
      className={`py-16 md:py-24 lg:py-28 transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-950' : 'bg-gradient-to-b from-gray-50 to-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block relative">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400' 
                : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
            }`}>
              Professional Journey
            </h2>
            <motion.div 
              className="w-20 md:w-24 h-1 md:h-1.5 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "5rem", opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <p className={`text-base md:text-lg max-w-2xl mx-auto mt-4 md:mt-6 leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My work experience and technical contributions across different domains
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Gradient Timeline Line - Hidden on mobile, visible on md+ */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 z-0"
            style={{
              background: darkMode 
                ? 'linear-gradient(to bottom, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.2))' 
                : 'linear-gradient(to bottom, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.15))'
            }}
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className={`mb-12 md:mb-16 lg:mb-20 relative w-full flex flex-col md:flex-row ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Dot - Positioned differently for mobile vs desktop */}
                <div className={`absolute top-0 left-0 md:left-1/2 md:top-8 w-6 h-6 md:w-8 md:h-8 rounded-full z-10 flex items-center justify-center ${
                  darkMode ? 'bg-gray-950' : 'bg-white'
                } ring-4 ${darkMode ? 'ring-gray-950' : 'ring-white'} md:transform md:-translate-x-1/2`}>
                  <motion.div 
                    className={`w-4 h-4 md:w-5 md:h-5 rounded-full ${exp.accent}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  />
                </div>

                {/* Card Container */}
                <div className={`w-full md:w-[90%] lg:w-[46%] pl-10 md:pl-0 ${
                  isLeft ? 'md:pr-4 lg:pr-16' : 'md:pl-4 lg:pl-16'
                }`}>
                  <motion.div 
                    className={`p-5 md:p-6 lg:p-7 rounded-2xl md:rounded-3xl transition-all duration-300 relative overflow-hidden ${
                      darkMode 
                        ? 'bg-gradient-to-br from-gray-800 to-gray-900/90 backdrop-blur-sm border border-gray-700/30 shadow-lg md:shadow-2xl shadow-blue-900/10' 
                        : 'bg-gradient-to-br from-white to-gray-50 shadow-md md:shadow-xl border border-gray-100/70'
                    }`}
                    whileHover="hover"
                    variants={itemVariants}
                  >
                    {/* Accent bar */}
                    <div className={`absolute top-0 left-0 w-1 md:w-1.5 h-full ${exp.accent}`}></div>
                    
                    {/* Header */}
                    <div className="flex items-start mb-4 md:mb-5">
                      <div className={`p-2.5 md:p-3.5 rounded-lg md:rounded-xl mr-3 md:mr-4 transition-all ${
                        darkMode ? 'bg-gray-700/40' : 'bg-indigo-50'
                      }`}>
                        <div className={`${exp.color} text-lg md:text-xl`}>
                          {exp.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl md:text-xl lg:text-2xl font-bold mb-1.5 ${
                          darkMode ? 'text-gray-100' : 'text-gray-800'
                        }`}>
                          {exp.position}
                        </h3>
                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                          <p className={`font-medium ${
                            darkMode ? 'text-indigo-400' : 'text-indigo-600'
                          }`}>
                            {exp.company}
                          </p>
                          <span className={`hidden md:inline text-sm ${
                            darkMode ? 'text-gray-500' : 'text-gray-400'
                          }`}>
                            •
                          </span>
                          <p className={`text-sm md:text-base mt-1 md:mt-0 ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Period */}
                    <div className={`flex items-center mb-4 md:mb-5 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <FaCalendarAlt className="mr-2 flex-shrink-0" />
                      <span className="font-medium text-sm md:text-base">{exp.period}</span>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-5 md:mb-6">
                      <h4 className={`text-xs md:text-sm font-semibold uppercase tracking-wide mb-3 md:mb-4 pb-1 border-b ${
                        darkMode ? 'text-gray-300 border-gray-700' : 'text-gray-700 border-gray-200'
                      }`}>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2.5 md:space-y-3.5">
                        {exp.responsibilities.map((item, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-20px" }}
                          >
                            <motion.div 
                              className={`mt-1.5 mr-3 flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${exp.color}`}
                              variants={bulletVariants}
                            />
                            <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm md:text-base leading-relaxed`}>
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className={`text-xs md:text-sm font-semibold uppercase tracking-wide mb-3 md:mb-4 pb-1 border-b ${
                        darkMode ? 'text-gray-300 border-gray-700' : 'text-gray-700 border-gray-200'
                      }`}>
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2 md:gap-2.5">
                        {exp.skills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            className={`text-[0.7rem] md:text-xs font-medium px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-full transition-all ${
                              darkMode 
                                ? 'bg-indigo-900/30 text-indigo-200 hover:bg-indigo-900/50' 
                                : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                            } hover:scale-[1.03]`}
                            variants={itemVariants}
                            whileHover={{
                              scale: 1.05,
                              transition: { type: "spring", stiffness: 400 }
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;