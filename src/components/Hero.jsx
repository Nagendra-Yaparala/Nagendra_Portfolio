import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";
import mainImage from '../assets/top.png'

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-20 px-5 md:px-20 relative overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="bubble-container absolute inset-0 w-full h-full">
          {[...Array(15)].map((_, index) => (
            <motion.div
              key={index}
              className="bubble absolute bg-white rounded-full opacity-30"
              initial={{ y: "100%" }}
              animate={{
                y: ["100%", "-10%"],
                x: `${Math.random() * 100}%`,
                scale: [Math.random() * 0.4 + 0.6, Math.random() * 0.5 + 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatDelay: Math.random() * 3 + 2,
                ease: "easeInOut",
              }}
              style={{
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-gray-800 text-whiteopacity-30 z-0 animate-pulse"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center max-w-6xl mx-auto relative z-10">
        {/* Left Section */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Animated Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I&apos;M <span className="text-yellow-400">Nagendra Yaparala</span>
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            className="text-lg md:text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Frontend Developer | Crafting Interactive & Responsive Experiences
          </motion.p>

          {/* CTA Button with Hover Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Button
              href="#contact"
              type="primary"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg px-6 py-3 rounded-md shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-110 hover:shadow-xl"
              size="large"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Right Section (Image) */}
        <div className="relative mt-10 md:mt-0 flex justify-center">
          {/* Framer Motion Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="rounded-xl shadow-xl overflow-hidden transform hover:scale-105 hover:rotate-2 transition duration-500 ease-in-out"
          >
           {/*  <Image
              src={top}
              alt="Hero Image"
              width={500}
              height={500}
              priority
              className="object-cover"
            /> */}
            <img src={mainImage} alt="HeroImage" />
          </motion.div>
        </div>
      </div>

      {/* Floating Animated Element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-ping">
        <motion.div
          className="bg-yellow-400 p-4 rounded-full shadow-lg"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          <i className="fas fa-arrow-down text-white"></i>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
