
import React from 'react';
import ProjectCard from './ProjectCard';
import Prayer from '../assets/prayer.png';
import e_commerce from '../assets/e-commerce.png';
import Queue from '../assets/queue.png';
import Social from '../assets/social.png';
import cplusPlus from '../assets/CPlusPlus.webp';

const MyProjects = () => {
  return (
    <div id='MyProjects' className="flex flex-col gap-2 relative">
      {/* Header */}
      <div className="flex gap-1 items-center justify-center mb-4">
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-3xl">
           Porjects
        </span>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>

      {/* Vertical Backbone */}
      <div className="absolute left-1/2 top-12 bottom-0 w-1 bg-gray-700 -translate-x-1/2"></div>

      {/* First Row */}
      <div className="flex justify-around items-center relative">
        {/* Horizontal line to right project */}
        <div className="absolute left-1/2 right-[42%] top-1/2 h-1 bg-gray-700"></div>

        <div className="w-1/5"></div>
        <div className="flex justify-end">
          <ProjectCard
            projectName="Social Media app"
            projectDescription="A social networking application such as Facebook,etc. that contains operations such as registration, adding a post,etc."
            projectImage={Social}
            project_href='https://github.com/Ibraq9/Social-Media-app'
            project_tech={['HTML', 'CSS', 'JS', 'bootstrap']}
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-around items-center relative">
        {/* Horizontal line to left project */}
        <div className="absolute right-1/2 left-[42%] top-1/2 h-1 bg-gray-700"></div>

        <div className=" flex justify-start">
          <ProjectCard
            projectName="Queue Simulation"
            projectDescription="Queue simulation system simulates any queue such as supermarket, banks, etc"
            projectImage={Queue}
            project_href='https://github.com/Ibraq9/Queing-System-Simulation'
            project_tech={['HTML', 'CSS', 'JS']}
          />
        </div>
        <div className="w-1/5"></div>
      </div>

      {/* third Row */}
      <div className="flex justify-around items-center relative">
        {/* Horizontal line to right project */}
        <div className="absolute left-1/2 right-[42%] top-1/2 h-1 bg-gray-700"></div>

        <div className="w-1/5"></div>
        <div className="flex justify-end">
          <ProjectCard
            projectName="Prayer Times"
            projectDescription="Prayer times application"
            projectImage={Prayer}
            project_href='https://github.com/Ibraq9/Prayer-Times'
            project_tech={['HTML', 'CSS', 'JS']}
          />
        </div>
      </div>


      {/* fourth Row */}
      <div className="flex justify-around items-center relative">
        {/* Horizontal line to left project */}
        <div className="absolute right-1/2 left-[42%] top-1/2 h-1 bg-gray-700"></div>

        <div className=" flex justify-start">
          <ProjectCard
            projectName="E-commerce app"
            projectDescription="An e-commerce app that sells clothes, such as Namshi, etc., closely mimics real websites"
            projectImage={e_commerce}
            project_href='https://github.com/Ibraq9/E-commerce-app'
            project_tech={['React', 'Tailwind']}
          />
        </div>
        <div className="w-1/5"></div>
      </div>

      {/* fifth Row */}
      <div className="flex justify-around items-center relative">
        {/* Horizontal line to right project */}
        <div className="absolute left-1/2 right-[42%] top-1/2 h-1 bg-gray-700"></div>

        <div className="w-1/5"></div>
        <div className="flex justify-end">
          <ProjectCard
            projectName="File Organization"
            projectDescription="C++ code to organize folders according to type or size"
            projectImage={cplusPlus}
            project_href='https://github.com/Ibraq9/File-Organization'
            project_tech={['C++']}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;