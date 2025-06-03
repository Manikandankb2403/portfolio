import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMicrophone, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Voice-Based AI Shop Assistant",
      description: "Fully voice-driven shopping assistant using fine-tuned Whisper STT with React frontend for product browsing, cart and checkout.",
      technologies: ["Whisper STT", "React", "Vite", "Fine-Tuning", "Speech Recognition"],
      achievements: [
        "Real-time speech-to-text conversion",
        "94% voice command accuracy",
        "Reduced UI interactions by 70%"
      ],
      links: {
        source: "https://github.com/Manikandankb2403",
        demo: "#"
      },
      icon: <FaMicrophone />,
      color: "text-pink-500",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Tomato Quality Classification",
      description: "CNN-based system with 97.5% accuracy using transfer learning. Deployed using a full-stack React + Node.js interface.",
      technologies: ["CNN", "TensorFlow", "React", "Node.js"],
      achievements: [
        "97.5% binary classification accuracy",
        "96.67% multiclass accuracy",
        "Real-time grading via image upload"
      ],
      links: {
        source: "https://github.com/Manikandankb2403",
        demo: "#"
      },
      icon: <FaLaptopCode />,
      color: "text-indigo-500",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "College Complaint Management System",
      description: "MERN-based complaint tracking platform with role-based dashboards and real-time updates.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      achievements: [
        "Reduced resolution time by 40%",
        "Automated notifications",
        "Role-based access control"
      ],
      links: {
        source: "https://github.com/Manikandankb2403",
        demo: "#"
      },
      icon: <FaLaptopCode />,
      color: "text-green-500",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Voice Dataset Collector",
      description: "Web-based tool to record voice samples from text for STT model training. Automatically maps recordings with unique IDs.",
      technologies: ["React", "Node.js", "Express", "Multer", "Audio API", "JSON"],
      achievements: [
        "Live JSON-based prompt loading",
        "Voice saved as .wav with ID mapping",
        "Supports training-ready dataset generation"
      ],
      links: {
        source: "https://github.com/Manikandankb2403",
        demo: "https://data-collection-voice-frontend.onrender.com"
      },
      icon: <FaMicrophone />,
      color: "text-purple-500",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -10px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const techVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="projects" className={`py-24 ${darkMode ? 'bg-gray-900/95' : 'bg-gray-50/95'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Technical Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            AI and Full-Stack innovations crafted from real-world needs
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`rounded-xl overflow-hidden h-full flex flex-col ${
                darkMode 
                  ? 'bg-gray-800/80 border border-gray-700' 
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-1`}>
                <div className={`h-40 flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="text-center px-4">
                    <div className={`mx-auto mb-3 text-5xl ${project.color}`}>
                      {project.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-4 mt-auto">
                  <h4 className={`font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span 
                        key={idx}
                        variants={techVariants}
                        viewport={{ once: true }}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-gray-700/50 text-gray-200' 
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Key Results:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li 
                        key={idx}
                        className={`flex items-start ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                      >
                        <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${project.color}`}></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Project Links */}
                <div className="flex justify-between gap-3 pt-4 border-t border-gray-700/30 mt-auto">
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                  <motion.a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm ${
                      darkMode 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white' 
                        : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaGithub /> Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;