import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';
import { FiArrowRight } from 'react-icons/fi';

const About = ({ darkMode }) => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "SASTRA Deemed to be University, Thanjavur",
      period: "2023 – 2025",
      cgpa: "CGPA: 6.93 / 10 ",
      icon: <IoIosSchool className="text-3xl" />,
      highlights: [
        "Specialized in Artificial Intelligence and Application Development",
        "Built Generative AI and Voice AI applications",
        "Worked on LLMs, Whisper STT and NLP systems",
        "Developed scalable Full-Stack applications using React and FastAPI"
      ]
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "St. Joseph's College, Tiruchirappalli",
      period: "2020 – 2023",
      cgpa: "CGPA: 7.80 / 10",
      icon: <FaGraduationCap className="text-3xl" />,
      highlights: [
        "Built Full-Stack web applications using React and Node.js",
  "Implemented SQL and MongoDB database solutions",
  "Strengthened Core Java, OOPs and Data Structures",
  "Developed REST APIs and software engineering fundamentals",
  "Participated in technical workshops and collaborative projects"
      ]
    },
    {
      degree: "Higher Secondary (CBSE)",
      institution: "Nava Bharath Vidyalaya, Tiruchirappalli",
      period: "2019 – 2020",
      cgpa: "Percentage: 60.6%",
      icon: <FaAward className="text-3xl" />,
      highlights: [
        "Built a strong foundation in Mathematics and Computer Science",
        "Developed logical and analytical problem-solving skills",
        "Started learning programming fundamentals",
        "Explored software development concepts"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="about" 
      className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-950' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent ${
            darkMode 
              ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400' 
              : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500'
          }`}>
            About Me
          </h2>
          <div className={`w-32 h-1.5 mx-auto rounded-full ${
            darkMode 
              ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' 
              : 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'
          }`}></div>
        </motion.div>
        
        {/* Enhanced Introduction */}
        <motion.div 
          className="max-w-5xl mx-auto mb-20 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 0.6,
            duration: 0.8
          }}
        >
          <div className={`text-xl md:text-2xl leading-relaxed md:leading-loose space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            <p>
              I'm a <span className={`font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Software Developer</span>
              passionate about building scalable, user-focused applications and intelligent automation solutions. My experience spans
              <span className={`font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}> Java</span>,
              <span className={`font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}> Full-Stack Development</span>,
              <span className={`font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}> Generative AI</span>, and
              <span className={`font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}> Voice AI systems</span>.
            </p>

            <p>
              Through my AI internship and freelance software development experience, I've built AI-powered Voice Commerce platforms, workflow automation systems, CRM solutions, and LLM-based applications using Java, Python, React, FastAPI, Node.js, MongoDB, Whisper STT, Microsoft Copilot, JIRA, and Confluence.
            </p>

            <p>
              I enjoy designing clean, maintainable software that solves real-world problems. As a continuous learner, I'm expanding my expertise in Java, Spring Boot, backend development, cloud technologies, and modern AI systems while building scalable applications for enterprise environments.
            </p>
          </div>

        </motion.div>
        
        {/* Education Section */}
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className={`text-3xl md:text-4xl font-bold mb-16 ${
              darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}
            variants={itemVariants}
          >
            My <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Education</span> Journey
          </motion.h3>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
            variants={containerVariants}
          >
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className={`group p-8 rounded-3xl transition-all duration-500 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                    : 'bg-white hover:bg-gray-50 border border-gray-200'
                } shadow-lg hover:shadow-xl`}
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="flex flex-col items-center h-full"
                >
                  <div className={`p-5 rounded-full mb-6 ${
                    darkMode ? 'bg-gray-700 group-hover:bg-gray-600' : 'bg-indigo-50 group-hover:bg-indigo-100'
                  } transition-colors duration-300 shadow-inner`}>
                    <div className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      {edu.icon}
                    </div>
                  </div>
                  <h4 className={`text-xl md:text-2xl font-bold mb-4 ${
                    darkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>
                    {edu.degree}
                  </h4>
                  <div className="flex items-center mb-3 justify-center space-x-2">
                    <FaUniversity className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex items-center mb-5 justify-center space-x-2">
                    <FaCalendarAlt className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
                      {edu.period}
                    </p>
                  </div>
                  
                  {/* Education Highlights */}
                  <div className="w-full mb-6">
                    <ul className="space-y-2 text-left">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <FiArrowRight className={`flex-shrink-0 mt-1 mr-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className={`font-semibold text-lg mt-auto px-4 py-2 rounded-full ${
                    darkMode 
                      ? 'bg-gray-700 text-indigo-400' 
                      : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    {edu.cgpa}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
