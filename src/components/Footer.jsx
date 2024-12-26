import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = ({ searchQuery}) => {
  return (
    <footer id="Footer" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Section 1: Brand Name and Description */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl font-bold text-yellow-300">
              Nagendra Yaparala
            </h1>
            <p className="text-sm leading-relaxed">
              Frontend Developer passionate about crafting seamless user
              experiences and bringing creative ideas to life. Let&apos;s build
              something remarkable together!
            </p>
          </div>

          {/* Section 2: Social Media Links */}
          <div className="flex justify-center md:justify-center space-x-6">
            <a
              href="https://github.com/Nagendra-Yaparala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nagendra-yaparala-18111919b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/nagendra76732"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/yaparalanagendra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Section 3: Quick Links or Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm mb-2">© {new Date().getFullYear()} Nagendra Yaparala.</p>
            <p className="text-sm">
              Crafted with <span className="text-red-500">&hearts;</span> and
              dedication.
            </p>
          </div>
        </div>

        {/* Divider and Footer Note */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-xs text-gray-500">
            Built with Next.js, Tailwind CSS, and a touch of creativity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
