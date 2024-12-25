'use client'; // For Next.js app directory

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "LBYH (Learning Beyond With Your Horizon)",
      role: "Frontend Developer",
      duration: "3 months",
      description: `
        Collaborated with the UI/UX team using Figma for wireframing and design. 
        Developed engaging user interfaces using HTML, CSS, and JavaScript.
      `,
    },
    {
      company: "goCosmic.ai",
      role: "Full Stack Developer Intern",
      duration: "3 months",
      description: `
        Created and optimized front-end components using React.js and Bootstrap. 
        Developed APIs with Node.js and managed databases with MySQL and XAMPP. 
        Used Git for version control and collaboration.
      `,
    },
    {
      company: "Bytup",
      role: "Frontend Developer (Freelancer)",
      duration: "Project-based",
      description: `
        Built dynamic web applications using React.js and explored Next.js, 
        Tailwind CSS, and Ant Design to create responsive and accessible designs.
      `,
    },
    {
      company: "AI ACME Solutions",
      role: "UI/UX Developer (Freelancer)",
      duration: "Project-based",
      description: `
        Designed user-centered prototypes with Figma to enhance usability and aesthetics. 
        Focused on delivering high-quality interfaces for multiple projects.
      `,
    },
    {
      company: "Personal Projects",
      role: "Frontend Developer",
      duration: "Ongoing",
      description: `
        Working on various personal projects to showcase expertise in modern technologies, 
        including React.js, Tailwind CSS, and advanced UI/UX techniques.
      `,
    },
  ];

  return (
    <div id="portfolio" className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-yellow-300 mb-12 text-center">
          Experience
        </h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-blue-500 via-blue-700 to-gray-800 p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white">{exp.company}</h2>
                <span className="bg-blue-600 text-sm text-white py-1 px-3 rounded-full">
                  {exp.duration}
                </span>
              </div>
              <h3 className="text-lg text-yellow-300 mb-3">
                {exp.role}
              </h3>
              <p className="text-gray-200 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
