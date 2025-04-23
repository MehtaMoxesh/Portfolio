import React from 'react'
import AboutImage from '../assets/Home.jpg'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={AboutImage} alt="" 
            className='w-72 h-82 rounded object-cover mb-8 md:mb-0'/>
            <div className="flex-1">
            <p className='text-lg mb-8 mt-9'>
                I am a passionate Full-Stack Developer with expertise in building
                modern web applications.
                I love coding and enjoy solving complex problems. 
                Additionally, I strive to stay updated with the latest technologies
                and best practices in the industry.My goal is to create user-friendly and 
                efficient software solutions that make a difference.
            </p>
            <div className='space-y-4'>
                <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        trasform transition-transform duration-300 hover:scale-105 w-10/12' ></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>React.Js</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        trasform transition-transform duration-300 hover:scale-105 w-10/12' ></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>Node.Js</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        trasform transition-transform duration-300 hover:scale-105 w-9/12' ></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>MongoDB</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        trasform transition-transform duration-300 hover:scale-105 w-8/12' ></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>Express.Js</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                        trasform transition-transform duration-300 hover:scale-105 w-8/12' ></div>
                        </div>
                    </div>

                </div>
                <div className='mt-12 flex justify-between text-center'>
                    <div>
                        <h3>
                            
                        </h3>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
   
  )
}

export default About
