
"use client"
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  // Animation state
  const [animate, setAnimate] = useState(false);
  
  // Trigger animation every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Contact" className="py-10 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            I'm currently available for freelance work or full-time positions. Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5">
          {/* Contact Information */}
          <div className=" bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-400">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-indigo-600 bg-opacity-30 rounded-full mr-4">
                  <Mail className="text-indigo-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg">ibrahimabualqassim@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-indigo-600 bg-opacity-30 rounded-full mr-4">
                  <Phone className="text-indigo-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg">+20 01069068234</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-indigo-600 bg-opacity-30 rounded-full mr-4">
                  <MapPin className="text-indigo-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg">Minya ,Egypt</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-medium mb-4 text-indigo-400">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Ibraq9" className="p-3 bg-gray-700 rounded-full hover:bg-indigo-600 transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ibrahim-abu-alqassem-949639265/" className="p-3 bg-gray-700 rounded-full hover:bg-indigo-600 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Animated Illustration Section */}
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl backdrop-blur-sm border border-gray-700 flex flex-col items-center justify-center">
            <div className="mb-6 relative w-64 h-64">
              {/* SVG Animation */}
              <svg 
                viewBox="0 0 400 400" 
                className={`w-full h-full ${animate ? 'animate-bounce' : ''}`}
              >
                {/* Computer/Laptop Base */}
                <rect x="100" y="220" width="200" height="20" rx="5" fill="#3949AB" />
                
                {/* Computer Screen */}
                <rect 
                  x="120" 
                  y="120" 
                  width="160" 
                  height="100" 
                  rx="5" 
                  fill="#1A1E2E" 
                  className={`${animate ? 'animate-pulse' : ''}`}
                />
                <rect x="130" y="130" width="140" height="80" rx="2" fill="#6366F1" />
                
                {/* Code Elements */}
                <rect x="140" y="140" width="60" height="5" rx="2" fill="#E0E7FF" />
                <rect x="140" y="155" width="40" height="5" rx="2" fill="#C7D2FE" />
                <rect x="190" y="155" width="30" height="5" rx="2" fill="#818CF8" />
                <rect x="140" y="170" width="80" height="5" rx="2" fill="#E0E7FF" />
                <rect x="140" y="185" width="50" height="5" rx="2" fill="#C7D2FE" />
                <rect x="200" y="185" width="25" height="5" rx="2" fill="#818CF8" />
                
                {/* Coffee Cup */}
                <g className={`${animate ? 'animate-pulse' : ''}`}>
                  <rect x="290" y="180" width="25" height="30" rx="5" fill="#4F46E5" />
                  <rect x="297" y="175" width="10" height="5" rx="2" fill="#818CF8" />
                  <path d="M290 190 C310 180, 320 195, 290 205" stroke="#A5B4FC" strokeWidth="2" fill="none" />
                </g>
                
                {/* Send Button/Envelope */}
                <g 
                  transform={`translate(${animate ? '220, 60' : '200, 80'})`} 
                  className="transition-all duration-1000 ease-in-out"
                >
                  <rect x="0" y="0" width="30" height="20" rx="4" fill="#4F46E5" />
                  <polygon points="5,5 25,5 15,15" fill="white" />
                </g>
                
                {/* Person */}
                <circle cx="200" cy="70" r="20" fill="#6366F1" />
                <path d="M180 280 C180 240, 220 240, 220 280" stroke="#6366F1" strokeWidth="5" fill="none" />
                
                {/* Arrows and connection lines - animated */}
                <path 
                  d={`M220 70 Q ${animate ? '270' : '250'}, ${animate ? '50' : '70'} 290 80`} 
                  stroke="#A5B4FC" 
                  strokeWidth="2" 
                  strokeDasharray="5,5" 
                  fill="none"
                  className="transition-all duration-1000 ease-in-out" 
                />
                
                <circle cx="290" cy="80" r="5" fill={animate ? "#4F46E5" : "#818CF8"} />
              </svg>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-indigo-400">Let's Build Something Amazing</h3>
              <p className="text-gray-300">I bring creative solutions to challenging problems. Whether you need a custom website, application, or digital experience, I'd love to collaborate.</p>
              <a href="mailto:ibrahimabualqassim@gmail.com" className="inline-block py-3 px-8 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium shadow-lg transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}