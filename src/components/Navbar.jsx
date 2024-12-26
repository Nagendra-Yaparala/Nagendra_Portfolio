import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-scroll';

const Navbar = ({ searchQuery,setSearchQuery}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navelements = [
    { name: 'About', id: 'about' },
    { name: 'MySkills', id: 'my-skills' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false); // Close the menu on mobile
    }
  };
  console.log(searchQuery);
 

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-xl font-bold">
          <span className="text-yellow-400">Nagendra</span> Yaparala
        </div>

        {/* Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col py-3 md:flex-row md:gap-8 gap-4 md:items-center font-semibold md:static absolute bg-gray-900 w-full md:w-auto left-0 transition-transform duration-300 ${
            isMenuOpen ? "top-16" : "top-[-300px]"
          }`}
        >
          {navelements.map((item, index) => (
            <li
              key={index}
              className="hover:text-yellow-600 cursor-pointer text-center md:text-left"
              onClick={() => handleScroll(item.id)}
            >
              <Link to={item.id} smooth={true} duration={500}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2">
          <CiSearch className="text-2xl text-yellow-400" />
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="focus:outline-none text-black bg-gray-200 rounded-md p-2 w-48"
            onChange={(e)=>setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
