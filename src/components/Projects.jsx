import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "CareerMarg",
      description: "A web application designed for DEPSTAR.Charusat faculty to easily track student data for post-graduation, higher studies and placements with graphical analysis and branch comparisons.",
      image: "src/assets/CareerMarg.jpg",
      technologies: ["React", "Node.js", "MySQL", "Express.js"]
    },
    {
      id: 2,
      title: "Restaurant Reservation System",
      description: "MERN stack web app for viewing restaurant details and booking tables online. Features responsive design, form validation, and secure backend API handling.",
      image: "src/assets/RRS.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "CORS", "Rest API"]
    },
    {
      id: 3,
      title: "JWT Authentication Dashboard",
      description: "Secure React-Based Website with JWT Authentication and Admin Dashboard. Includes core pages and a fully functional admin area with protected routes.",
      image: "src/assets/JWT.png",
      technologies: ["React", "Firebase", "Tailwind CSS"]
    }
  ];

  // Function to prevent default action when links are clicked
  const handleLinkClick = (e) => {
    e.preventDefault();
    // You could display a tooltip or message here if desired
  };

  return (
    <div className='bg-black text-white py-16 md:py-20' id='projects'>
      <div className='container mx-auto px-6 md:px-16 lg:px-24'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12'>My Projects</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className='group relative overflow-hidden rounded-lg transition-all duration-500 hover:translate-y-2'
            >
              {/* Project Image with Overlay */}
              <div className='relative h-48 md:h-64 overflow-hidden'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70'></div>
                
                {/* GitHub Link Button - Positioned at top */}
                <div className='absolute top-4 right-4 flex space-x-3'>
                  <button 
                    onClick={handleLinkClick}
                    className='bg-gray-800 p-2 rounded-full text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 transition-all duration-300 cursor-pointer'
                    aria-label="View Code on GitHub"
                  >
                    <FaGithub className='w-4 h-4 md:w-5 md:h-5' />
                  </button>
                  <button 
                    onClick={handleLinkClick}
                    className='bg-gray-800 p-2 rounded-full text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 transition-all duration-300 cursor-pointer'
                    aria-label="View Live Demo"
                  >
                    <FaExternalLinkAlt className='w-4 h-4 md:w-5 md:h-5' />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className='bg-gray-800 p-4 md:p-6'>
                <h3 className='text-lg md:text-xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-300 mb-4 text-sm md:text-base'>{project.description}</p>
                
                {/* Technologies */}
                <div className='flex flex-wrap gap-2 mt-3'>
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className='text-xs px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className='absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-green-400 to-blue-500 transform -translate-y-1/2 rounded-full'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;