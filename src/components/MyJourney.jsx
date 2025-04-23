import React from 'react';
// Import your logos - you'll need to add these to your assets folder
import SchoolLogo from '../assets/experimental-logo.jpg'; // Add your school logo
import CollegeLogo from '../assets/charusat-logo.png'; // Add your college logo
import CompanyLogo from '../assets/dsu-logo.jpg'; // Add your company logo

const Journey = () => {
  return (
    <div className='bg-black text-white py-20' id='journey'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Journey</h2>

        <div className='relative'>
          {/* Timeline center line */}
          <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 to-blue-500'></div>

          {/* School - 10th and 12th */}
          <div className='flex flex-col md:flex-row mb-16 relative'>
            <div className='md:w-1/2 md:pr-12 md:text-right'>
              <div className='bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'>
                <div className='flex items-center justify-end mb-3'>
                  <h3 className='text-xl font-bold mr-3'>R.S.M. Poonawala Sarvajanik Experimental School</h3>
                  <img src={SchoolLogo} alt="School Logo" className='w-10 h-10 object-contain' />
                </div>
                <p className='text-gray-300'>2018 - 2022</p>
                <p className='mt-3'>
                  Completed my 10th and 12th standard education with focus on academics and building a strong foundation.
                </p>
              </div>
            </div>
            <div className='hidden md:block md:w-1/2'></div>
            {/* Timeline dot */}
            <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full mt-6'></div>
          </div>

          {/* College */}
          <div className='flex flex-col md:flex-row mb-16 relative'>
            <div className='hidden md:block md:w-1/2'></div>
            <div className='md:w-1/2 md:pl-12'>
              <div className='bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'>
                <div className='flex items-center mb-3'>
                  <img src={CollegeLogo} alt="College Logo" className='w-10 h-10 object-contain mr-3' />
                  <h3 className='text-xl font-bold'>Charusat University</h3>
                </div>
                <p className='text-gray-300'>2022 - 2026</p>
                <p className='mt-3'>
                  Currently pursuing B.Tech in Computer Engineering, focusing on web development technologies and computer science fundamentals.
                </p>
              </div>
            </div>
            {/* Timeline dot */}
            <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-green-400 rounded-full mt-6'></div>
          </div>

          {/* Internship */}
          <div className='flex flex-col md:flex-row relative'>
            <div className='md:w-1/2 md:pr-12 md:text-right'>
              <div className='bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'>
                <div className='flex items-center justify-end mb-3'>
                  <h3 className='text-xl font-bold mr-3'>DSU Infotech</h3>
                  <img src={CompanyLogo} alt="Company Logo" className='w-10 h-10 object-contain' />
                </div>
                <p className='text-gray-300'>May 2024 - June 2024</p>
                <p className='mt-3'>
                  Worked as a WordPress Developer intern, gaining practical experience in website development and content management systems.
                </p>
              </div>
            </div>
            <div className='hidden md:block md:w-1/2'></div>
            {/* Timeline dot */}
            <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full mt-6'></div>
          </div>
        </div>

        <div className='mt-16 text-center'>
          <p className='text-lg'>
            Continuing to grow and learn as I pursue my passion for full-stack development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journey;