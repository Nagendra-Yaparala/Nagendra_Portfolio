import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    name: "HTML",
    image: "https://img.icons8.com/color/48/html-5--v1.png",
    description: "Markup language for creating web pages.",
  },
  {
    id: 2,
    name: "CSS",
    image: "https://img.icons8.com/color/144/css3.png",
    description: "Style sheet language used for describing the presentation of a document written in HTML.",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "https://img.icons8.com/color/144/javascript--v1.png",
    description: "Programming language that allows you to implement complex features on web pages.",
  },
  {
    id: 4,
    name: "React",
    image: "https://img.icons8.com/officel/80/react.png",
    description: "JavaScript library for building user interfaces.",
  },
  {
    id: 5,
    name: "Next.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    description: "React framework for server-rendered and static web applications.",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    description: "Utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    id: 7,
    name: "Bootstrap",
    image: "https://img.icons8.com/color/144/bootstrap.png",
    description: "Popular CSS framework for developing responsive and mobile-first websites.",
  },
];

const MySkills = () => {
  return (
    <div id="my-skills" className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 px-6 md:px-20">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-yellow-300">
        My Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="group bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg p-6 flex flex-col items-center text-center relative hover:scale-105 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Hover Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            {/* Skill Icon */}
            {skill.image ? (
              <img
                className="mb-4 w-16 h-16 object-contain transform group-hover:scale-110 transition-transform duration-300"
                src={skill.image}
                alt={`${skill.name} icon`}
              />
            ) : (
              <div className="text-gray-400 mb-6">No image</div>
            )}

            {/* Skill Name */}
            <h2 className="text-xl font-semibold text-yellow-200 group-hover:text-white transition-colors duration-300">
              {skill.name}
            </h2>

            {/* Skill Description */}
            <p className="text-gray-300 text-sm mt-3 group-hover:text-gray-100 transition-colors duration-300">
              {skill.description}
            </p>

            {/* Animated Circles */}
            <div className="absolute -bottom-1 -left-1 w-16 h-16 bg-yellow-400 rounded-full opacity-10 transform scale-0 group-hover:scale-125 transition-all duration-500"></div>
            <div className="absolute -top-1 -right-1 w-16 h-16 bg-yellow-500 rounded-full opacity-10 transform scale-0 group-hover:scale-125 transition-all duration-500"></div>

            {/* Interactive Element for Highlight */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-yellow-500 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"
              animate={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
