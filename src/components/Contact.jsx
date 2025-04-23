import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Get In Touch</h2>
        
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Contact Form */}
          <div className='lg:w-1/2'>
            <form onSubmit={handleSubmit} className='bg-gray-800 p-8 rounded-lg shadow-lg h-full'>
              <div className='mb-6'>
                <label htmlFor="name" className='block text-gray-300 mb-2'>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full bg-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400'
                  placeholder='Your Name'
                />
              </div>
              
              <div className='mb-6'>
                <label htmlFor="email" className='block text-gray-300 mb-2'>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full bg-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400'
                  placeholder='Your Email'
                />
              </div>
              
              <div className='mb-6'>
                <label htmlFor="subject" className='block text-gray-300 mb-2'>Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full bg-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400'
                  placeholder='Subject'
                />
              </div>
              
              <div className='mb-8'>
                <label htmlFor="message" className='block text-gray-300 mb-2'>Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className='w-full bg-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400'
                  placeholder='Your Message'
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-full hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full md:w-auto'
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className='lg:w-1/2 flex flex-col gap-8'>
            <div className='bg-gray-800 p-8 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
              
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='bg-gradient-to-r from-cyan-400 to-teal-500 p-3 rounded-full mr-4'>
                    <FaEnvelope className='w-5 h-5' />
                  </div>
                  <div>
                    <h4 className='text-lg font-medium mb-1'>Email</h4>
                    <a href="mailto:mjmehta2004@gmail.com" className='text-gray-300 hover:text-white transition-colors duration-300'>mjmehta2004@gmail.com</a>
                  </div>
                </div>
                
                <div className='flex items-start'>
                  <div className='bg-gradient-to-r from-cyan-400 to-teal-500 p-3 rounded-full mr-4'>
                    <FaPhone className='w-5 h-5' />
                  </div>
                  <div>
                    <h4 className='text-lg font-medium mb-1'>Phone</h4>
                    <a href="tel:+917203820127" className='text-gray-300 hover:text-white transition-colors duration-300'>+91 7203820127</a>
                  </div>
                </div>
                
                <div className='flex items-start'>
                  <div className='bg-gradient-to-r from-cyan-400 to-teal-500 p-3 rounded-full mr-4'>
                    <FaMapMarkerAlt className='w-5 h-5' />
                  </div>
                  <div>
                    <h4 className='text-lg font-medium mb-1'>Location</h4>
                    <p className='text-gray-300'>Surat, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='bg-gray-800 p-8 rounded-lg shadow-lg relative overflow-hidden flex-1'>
              <div className='relative z-10'>
                <h3 className='text-2xl font-bold mb-4'>Let's Connect</h3>
                <p className='text-gray-300'>Feel free to reach out for collaborations or just a friendly chat. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
              </div>
              {/* Background decorative elements */}
              <div className='absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-r from-cyan-400/30 to-teal-500/30 rounded-full blur-xl'></div>
              <div className='absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;