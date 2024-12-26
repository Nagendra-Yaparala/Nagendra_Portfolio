import React from "react";
import { motion } from "framer-motion";
import rara from '../assets/Rara.png'
import musicWebPlayerImage from '../assets/vinmov.png'
import temperatureConverterImage from '../assets/temperature.png'
import weather from '../assets/weather.png'
import studentPortal from '../assets/StudenPortal.png'

const Projects = () => {
  const projects = [
    {
        id: 1,
        name: "Music Web Player",
        description:
          "A feature-rich music web player with playlist management, audio controls, and seamless UI. Built with React.js, Tailwind CSS, and Spotify API integration.",
        image: musicWebPlayerImage,
        link: "https://nagendra-yaparala.github.io/Music_Player/",
      }
      ,
    {
      id: 2,
      name: "E-Commerce Platform",
      description:
        "A  e-commerce platform with product listings, a shopping cart, and payment gateway integration.",
      image: rara,
      link: "https://nagendra-yaparala.github.io/Ecom_Raraa/",
    },
    {
        id: 3,
        name: "Temperature Converter",
        description:
          "An intuitive temperature converter app that allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin. Built with React.js and Tailwind CSS for a seamless user experience.",
        image: temperatureConverterImage, // Replace with the actual image variable or URL
        link: "https://nagendra-yaparala.github.io/Temperature_converter/",
      }
      ,
      {
        id: 4,
        name: "Student Portal Website",
        description:
          "A comprehensive student portal allowing users to access assignments, grades, schedules, and resources. Built with React.js, Tailwind CSS, and Firebase for real-time updates and secure authentication.",
        image: studentPortal, // Replace with the actual image variable or URL
        link: "https://example.com/student-portal",
      }
      
  ];

  return (
    <div id="projects" className="bg-gradient-to-br from-gray-800 via-gray-900 to-black py-20 px-5 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-yellow-300 border-b-4 border-yellow-500 inline-block pb-2 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
            transition: { duration: 0.5, staggerChildren: 0.3 },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {/* Image Section */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
