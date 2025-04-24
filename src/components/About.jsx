import React from 'react';
import AboutImage from '../assets/Home.jpg';

const About = () => {
  return (
    <div className='bg-black text-white py-16 md:py-20' id='about'>
      <div className='container mx-auto px-6 md:px-16 lg:px-24'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='flex justify-center mt-8 mb-8 md:mb-0'>
            <img 
              src={AboutImage} 
              alt="About Me" 
              className='w-56 h-84 md:w-72 md:h-82 rounded object-cover shadow-lg transform transition-transform duration-500 hover:scale-105'
            />
          </div>
          <div className="flex-1">
            <p className='text-base md:text-lg mb-8 mt-0 md:mt-9'>
              I am a passionate Full-Stack Developer with expertise in building
              modern web applications.
              I love coding and enjoy solving complex problems. 
              Additionally, I strive to stay updated with the latest technologies
              and best practices in the industry. My goal is to create user-friendly and 
              efficient software solutions that make a difference.
            </p>
            <div className='space-y-4'>
              <div className='flex flex-col sm:flex-row sm:items-center'>
                <label htmlFor="htmlandcss" className='w-full sm:w-2/12 mb-1 sm:mb-0'>HTML & CSS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row sm:items-center'>
                <label htmlFor="react" className='w-full sm:w-2/12 mb-1 sm:mb-0'>React.Js</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row sm:items-center'>
                <label htmlFor="nodejs" className='w-full sm:w-2/12 mb-1 sm:mb-0'>Node.Js</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row sm:items-center'>
                <label htmlFor="mongodb" className='w-full sm:w-2/12 mb-1 sm:mb-0'>MongoDB</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-8/12'></div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row sm:items-center'>
                <label htmlFor="expressjs" className='w-full sm:w-2/12 mb-1 sm:mb-0'>Express.Js</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-8/12'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;