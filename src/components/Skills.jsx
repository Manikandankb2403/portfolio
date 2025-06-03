import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaRobot, FaServer, FaTools,
  FaPython, FaJs, FaHtml5, FaPhp, FaNodeJs, FaReact,
  FaMicrophone, FaChartLine, FaNetworkWired, FaWindows
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiMongodb, SiExpress,
  SiGit, SiDocker, SiTensorflow, SiPytorch,
  SiPostman, SiLinux, SiGooglecloud, SiNvidia
} from 'react-icons/si';
import { VscVm, VscTerminalLinux } from 'react-icons/vsc';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: <FaCode size={24} />,
      title: "Programming Languages",
      color: "from-blue-400 to-blue-600",
      bg: "bg-blue-100",
      skills: [
        { name: "C", icon: <SiC size={20} /> },
        { name: "C++", icon: <SiCplusplus size={20} /> },
        { name: "Python", icon: <FaPython size={20} /> },
        { name: "JavaScript", icon: <FaJs size={20} /> },
        { name: "PHP", icon: <FaPhp size={20} /> },
        { name: "HTML/CSS", icon: <FaHtml5 size={20} /> }
      ]
    },
    {
      icon: <FaRobot size={24} />,
      title: "AI/ML",
      color: "from-purple-400 to-pink-500",
      bg: "bg-purple-100",
      skills: [
        { name: "NLP", icon: <SiTensorflow size={20} /> },
        { name: "Speech Recognition", icon: <FaMicrophone size={20} /> },
        { name: "CNN Models", icon: <SiNvidia size={20} /> },
        { name: "Model Evaluation", icon: <FaChartLine size={20} /> }
      ]
    },
    {
      icon: <FaServer size={24} />,
      title: "Web Development",
      color: "from-green-400 to-emerald-600",
      bg: "bg-green-100",
      skills: [
        { name: "MERN Stack", icon: <SiMongodb size={20} /> },
        { name: "React.js", icon: <FaReact size={20} /> },
        { name: "Node.js", icon: <FaNodeJs size={20} /> },
        { name: "Express", icon: <SiExpress size={20} /> }
      ]
    },
    {
      icon: <FaTools size={24} />,
      title: "System Administration",
      color: "from-yellow-400 to-orange-400",
      bg: "bg-yellow-100",
      skills: [
        { name: "Windows", icon: <FaWindows size={20} /> },
        { name: "Linux", icon: <SiLinux size={20} /> },
        { name: "BIOS/UEFI", icon: <VscVm size={20} /> },
        { name: "Networking", icon: <FaNetworkWired size={20} /> }
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: <SiGit size={20} /> },
    { name: "VS Code", icon: <FaCode size={20} /> },
    { name: "Docker", icon: <SiDocker size={20} /> },
    { name: "TensorFlow", icon: <SiTensorflow size={20} /> },
    { name: "PyTorch", icon: <SiPytorch size={20} /> },
    { name: "Postman", icon: <SiPostman size={20} /> },
    { name: "Linux Terminal", icon: <VscTerminalLinux size={20} /> },
    { name: "Google Cloud", icon: <SiGooglecloud size={20} /> }
  ];

  return (
    <section id="skills" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors`}>
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent tracking-tight ${
            darkMode
              ? 'bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300'
              : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'
          }`}>
            Technical Expertise
          </h2>
          <p className={`mt-4 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My expertise across multiple domains and platforms
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={`rounded-2xl p-6 pt-10 relative shadow-lg backdrop-blur-md transition-all duration-300 border ${
                darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              {/* Icon bubble */}
              <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-md bg-gradient-to-r ${cat.color} text-white`}>
                {cat.icon}
              </div>

              {/* Title */}
              <h3 className={`text-xl font-semibold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {cat.title}
              </h3>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-4">
                {cat.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center text-sm font-medium rounded-xl p-3 hover:scale-105 transition-transform duration-200 ${
                      darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="mb-2">{skill.icon}</div>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mt-20">
          <h3 className={`text-2xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Tools & Platforms
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.06 }}
                className={`p-5 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-200 border ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700 shadow-md text-white'
                    : 'bg-white border-gray-200 hover:bg-gray-100 shadow-sm text-gray-800'
                }`}
              >
                <div className="mb-3 p-3 rounded-full bg-white shadow-lg dark:bg-gray-100">
                  <div className={`text-2xl ${darkMode ? 'text-gray-900' : 'text-gray-800'}`}>
                    {tool.icon}
                  </div>
                </div>
                <span className="text-sm font-semibold">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
