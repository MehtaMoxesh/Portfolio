import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll event to change navbar styling when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSocialLinks(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 shadow-lg backdrop-blur-sm py-2' : 'bg-black py-4'
    } text-white px-8 md:px-16 lg:px-24`}>
      <div className='container mx-auto flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Moxesh</div>
        <div className='space-x-4 lg:space-x-6 text-sm md:text-base'>
          <a href="#home" className='hover:text-gray-400 transition-colors duration-300'>Home</a>
          <a href="#about" className='hover:text-gray-400 transition-colors duration-300'>About Me</a>
          <a href="#skills" className='hover:text-gray-400 transition-colors duration-300'>Skills</a>
          <a href="#journey" className='hover:text-gray-400 transition-colors duration-300'>My Journey</a>
          <a href="#projects" className='hover:text-gray-400 transition-colors duration-300'>Projects</a>
          <a href="#contact" className='hover:text-gray-400 transition-colors duration-300'>Contact</a>
        </div>
        <div className="relative hidden md:block" ref={dropdownRef}>
          <button 
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full flex items-center'
            onClick={() => setShowSocialLinks(!showSocialLinks)}
          >
            Connect Me
          </button>
          
          {/* Social media links dropdown */}
          {showSocialLinks && (
            <div 
              className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
            >
              <a 
                href="https://www.linkedin.com/in/moxesh-mehta-26409025a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
              >
                <FaLinkedin className="mr-3 h-5 w-5 text-blue-400" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/MehtaMoxesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
              >
                <FaGithub className="mr-3 h-5 w-5 text-gray-300" />
                GitHub
              </a>
              <a 
                href="https://www.instagram.com/moxesh.m/?next=%2Fwebfx%2F%3Fhl%3Den&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
              >
                <FaInstagram className="mr-3 h-5 w-5 text-pink-400" />
                Instagram
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;