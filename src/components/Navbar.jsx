import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

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
      
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const sectionPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth"
      });
      
      // Close mobile menu after clicking
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 shadow-lg backdrop-blur-sm py-2' : 'bg-black py-4'
    } text-white px-4 md:px-8 lg:px-24`}>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold'>Moxesh</div>
        
        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-4 lg:space-x-6 text-sm md:text-base'>
          <a onClick={() => scrollToSection('home')} className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>Home</a>
          <a onClick={() => scrollToSection('about')} className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>About Me</a>
          <a onClick={() => scrollToSection('skills')} className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>Skills</a>
          <a onClick={() => scrollToSection('journey')} className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>My Journey</a>
          <a onClick={() => scrollToSection('projects')} className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>Projects</a>
          <a onClick={() => scrollToSection('contact')} className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>Contact</a>
        </div>
        
        {/* Connect Me Button (Desktop) */}
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
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm shadow-lg py-4 px-4 z-50"
        >
          <div className="flex flex-col space-y-4">
            <a onClick={() => scrollToSection('home')} className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>Home</a>
            <a onClick={() => scrollToSection('about')} className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>About Me</a>
            <a onClick={() => scrollToSection('skills')} className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>Skills</a>
            <a onClick={() => scrollToSection('journey')} className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>My Journey</a>
            <a onClick={() => scrollToSection('projects')} className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>Projects</a>
            <a onClick={() => scrollToSection('contact')} className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>Contact</a>
            
            {/* Social Links for Mobile */}
            <div className="flex space-x-4 py-2">
              <a 
                href="https://www.linkedin.com/in/moxesh-mehta-26409025a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 transition-all duration-300"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/MehtaMoxesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 transition-all duration-300"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/moxesh.m/?next=%2Fwebfx%2F%3Fhl%3Den&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 transition-all duration-300"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;