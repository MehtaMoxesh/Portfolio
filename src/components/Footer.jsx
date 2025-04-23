import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='relative bg-gray-900 text-white py-8 overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500'></div>
      <div className='absolute -top-24 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl'></div>
      <div className='absolute -bottom-32 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl'></div>
      
      <div className='container mx-auto px-8 md:px-16 lg:px-24 relative z-10'>
        {/* Main footer content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-6'>
          {/* About section */}
          <div className='text-center md:text-left'>
            <h3 className='text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>Moxesh Mehta</h3>
            <p className='text-gray-300'>Full-Stack Developer passionate about creating modern web applications.</p>
          </div>
          
          {/* Social Links */}
          <div className='text-center md:text-right'>
            <h3 className='text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>Connect With Me</h3>
            <div className='flex justify-center md:justify-end space-x-4'>
              <a 
                href="https://www.linkedin.com/in/moxesh-mehta-26409025a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110'
                aria-label="LinkedIn"
              >
                <FaLinkedin className='w-5 h-5' />
              </a>
              <a 
                href="https://github.com/MehtaMoxesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-500 transition-all duration-300 transform hover:scale-110'
                aria-label="GitHub"
              >
                <FaGithub className='w-5 h-5' />
              </a>
              <a 
                href="https://www.instagram.com/moxesh.m/?next=%2Fwebfx%2F%3Fhl%3Den&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110'
                aria-label="Instagram"
              >
                <FaInstagram className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-4'></div>
        
        {/* Copyright */}
        <div className='text-center md:text-left text-gray-400'>
          &copy; {currentYear} Moxesh Mehta. All Rights Reserved.
        </div>
        
        {/* Back to top button */}
        <div className='absolute right-8 -top-6'>
          <a 
            href="#top" 
            className='bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center'
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;