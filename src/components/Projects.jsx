import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMicrophone, FaGithub, FaExternalLinkAlt, FaRobot } from 'react-icons/fa';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Voice-Based AI Shop Assistant",
      description: "AI-powered voice commerce assistant that uses fine-tuned Whisper STT, LLMs, React, and RAG to enable hands-free product search, cart management, and checkout.",
      technologies: [
        "Whisper STT",
        "LLMs",
        "RAG",
        "React",
        "FastAPI",
        "Node.js"
      ],
      achievements: [
        "Fine-tuned Whisper STT for domain-specific speech recognition",
        "Integrated Retrieval-Augmented Generation (RAG)",
        "Enabled end-to-end voice shopping workflow"
      ],
      links: {
        source: "https://github.com/Manikandankb2403/Voice-Based-AI-Shop-Assistant",
        demo: "Demo unavailable due to model size constraints — local testing only"
      },
      icon: <FaMicrophone />,
      color: "text-pink-500",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Tomato Quality Classification",
      description: "Deep learning application using CNN and Transfer Learning for automated tomato quality classification with a React and Node.js interface.",
      technologies: [
        "CNN",
        "Transfer Learning",
        "TensorFlow",
        "React",
        "Node.js"
      ],
      achievements: [
        "97.5% binary classification accuracy",
        "96.67% multi-class accuracy",
        "Real-time image classification"
      ],
      links: {
        source: "https://github.com/Manikandankb2403/Tomato-Quality-Classification",
        demo: "Demo unavailable due to model size constraints — local testing only"
      },
      icon: <FaLaptopCode />,
      color: "text-indigo-500",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "College Complaint Management System",
      description: "Full-stack complaint management system with role-based dashboards, complaint tracking, and automated notifications.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "REST API"
      ],
      achievements: [
        "Role-based authentication",
        "Complaint lifecycle tracking",
        "Automated notification system"
      ],
      links: {
        source: "https://github.com/Manikandankb2403/College-Complaint-Management-System",
        demo: "https://college-complaint-management-system-hve6.onrender.com"
      },
      icon: <FaLaptopCode />,
      color: "text-green-500",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Voice Dataset Collector",
      description: "Web application for collecting and managing speech datasets to train domain-specific Speech-to-Text models.",
      technologies: ["React", "Node.js", "Express", "Multer", "Audio API", "JSON"],
      achievements: [
        "Live JSON-based prompt loading",
        "Supports training-ready dataset generation",
        "Collected over 5,500 audio samples",
        "Automatic audio-ID mapping",
      ],
      links: {
        source: "https://github.com/Manikandankb2403/data_collection_voice",
        demo: "https://data-collection-voice-frontend.onrender.com"
      },
      icon: <FaMicrophone />,
      color: "text-purple-500",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Workflow Automation",
      description:
        "Built AI-powered workflow automation solutions using Microsoft Copilot Studio and GoHighLevel to streamline business processes, CRM operations, appointment management, and enterprise workflows.",
      technologies: [
        "Microsoft Copilot Studio",
        "GoHighLevel",
        "JIRA",
        "Confluence",
        "AI Automation",
        "CRM"
      ],
      achievements: [
        "Automated CRM and business workflows",
        "Integrated AI-powered enterprise processes",
        "Built intelligent appointment and workflow automation"
      ],
      links: {
        source: "https://github.com/Manikandankb2403/",
        demo: "Private enterprise project"
      },
      icon: <FaRobot />,
      color: "text-purple-500",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -10px rgba(0, 0, 0, 0.15)",
      transition: { type: "spring", stiffness: 300 }
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Featured Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Real-world software, AI, and full-stack applications built to solve practical problems.
          </p>
        </motion.div>

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
              className={`rounded-xl overflow-hidden h-full flex flex-col ${darkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'
                }`}
            >
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

              <div className="p-6 flex flex-col flex-grow">
                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>

                <div className="mb-4 mt-auto">
                  <h4 className={`font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        variants={techVariants}
                        viewport={{ once: true }}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-gray-700/50 text-gray-200' : 'bg-gray-100 text-gray-800'
                          }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

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

                {/* Buttons */}
                <div className="flex justify-between gap-3 pt-4 border-t border-gray-700/30 mt-auto">
                  {project.links.demo === "#" ||
                    project.links.demo.toLowerCase().includes("unavailable") ||
                    project.links.demo.toLowerCase().includes("private") ? (
                    <div
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm cursor-not-allowed ${darkMode
                          ? "bg-gray-700 text-gray-400"
                          : "bg-gray-200 text-gray-500"
                        }`}
                      title={project.links.demo}
                    >
                      <FaExternalLinkAlt />
                      {project.links.demo.toLowerCase().includes("private")
                        ? "Private Project"
                        : "Demo Unavailable"}
                    </div>
                  ) : (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm ${darkMode
                          ? "bg-gray-700 hover:bg-gray-600 text-white"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                        }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  )}

                  <motion.a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm ${darkMode
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white"
                        : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white"
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
