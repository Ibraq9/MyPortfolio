


import React from 'react';
import ProjectCard from './ProjectCard';
import Prayer from '../assets/prayer.png';
import e_commerce from '../assets/e-commerce.png';
import Queue from '../assets/queue.png';
import Social from '../assets/social.png';
import cplusPlus from '../assets/CPlusPlus.webp';

import { DiHtml5, DiCss3, DiBootstrap, DiJavascript, DiReact, DiCsharp } from 'react-icons/di';
import { SiTailwindcss, SiNextdotjs, SiCplusplus } from 'react-icons/si';

const MyProjects = () => {
  return (
    <div id='Projects' className="mt-44 flex flex-col gap-2 relative">
      {/* Header */}
      <div className="flex gap-1 items-center justify-center mb-10">
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-3xl">
        A small selection recent projects
        </span>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>

      {/* Backbone */}
      <div className="absolute left-1/2 top-12 bottom-0 w-1 bg-gray-700 -translate-x-1/2"></div>

      {/* First Row */}
      <div className="h-80 flex justify-around items-center relative">
        <div className="absolute left-1/2 right-[42%] top-1/2 h-1 bg-gray-700"></div>
        <div className="w-1/5"></div>
        <div className="flex justify-end">
          <ProjectCard
            projectName="Social Media App"
            projectDescription="A social networking application such as Facebook, etc."
            projectImage={Social}
            project_href='https://github.com/Ibraq9/Social_Media_app'
            project_tech={[<DiHtml5 key="html" size={30} color='#CC5533'/>, <DiCss3 key="css" color='3673B6' size={30}/>, <DiJavascript key="js" size={30} color='#F3E155'/>, <DiBootstrap key="bs" color='#7023EE' size={30}/>]}
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="h-80 flex justify-around items-center relative">
        <div className="absolute right-1/2 left-[42%] top-1/2 h-1 bg-gray-700"></div>
        <div className="flex justify-start">
          <ProjectCard
            projectName="Queue Simulation"
            projectDescription="Queue simulation system simulates any queue such as supermarket, banks, etc."
            projectImage={Queue}
            project_href='https://github.com/Ibraq9/Queing-System-Simulation'
            project_tech={[<DiHtml5 key="html" size={30} color='#CC5533'/>, <DiCss3 key="css" color='3673B6' size={30}/>, <DiJavascript key="js" size={30} color='#F3E155'/>]}
          />
        </div>
        <div className="w-1/5"></div>
      </div>

      {/* Third Row */}
      <div className="h-80 flex justify-around items-center relative">
        <div className="absolute left-1/2 right-[42%] top-1/2 h-1 bg-gray-700"></div>
        <div className="w-1/5"></div>
        <div className="flex justify-end">
          <ProjectCard
            projectName="Prayer Times"
            projectDescription="Prayer times application"
            projectImage={Prayer}
            project_href='https://github.com/Ibraq9/Prayer-Times'
            project_tech={[<DiHtml5 key="html" size={30} color='#CC5533'/>, <DiCss3 key="css" color='3673B6' size={30}/>, <DiJavascript key="js" size={30} color='#F3E155'/>]}
          />
        </div>
      </div>

      {/* Fourth Row */}
      <div className="h-80 flex justify-around items-center relative">
        <div className="absolute right-1/2 left-[42%] top-1/2 h-1 bg-gray-700"></div>
        <div className="flex justify-start">
          <ProjectCard
            projectName="E-commerce App"
            projectDescription="An e-commerce app that sells clothes, closely mimics real websites."
            projectImage={e_commerce}
            project_href='https://github.com/Ibraq9/E-commerce-app'
            project_tech={[<DiReact key="react" size={30} color='#78D3FA'/>, <SiTailwindcss size={30} color='#67BCF2' key="tailwind"/>]}
          />
        </div>
        <div className="w-1/5"></div>
      </div>

      {/* Fifth Row */}
      <div className="h-80 flex justify-around items-center relative">
        <div className="absolute left-1/2 right-[42%] top-1/2 h-1 bg-gray-700"></div>
        <div className="w-1/5"></div>
        <div className="flex justify-end">
          <ProjectCard
            projectName="File Organization"
            projectDescription="C++ code to organize folders according to type or size."
            projectImage={cplusPlus}
            project_href='https://github.com/Ibraq9/File-Organization'
            project_tech={[<SiCplusplus key="cpp" size={30} color='#6E90BD'/>]}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;



