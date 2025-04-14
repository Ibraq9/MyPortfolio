import React from 'react';
import NavBar from "./Components/NavBar";
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects'
import Certificate from './components/Certificate';
import Contact  from './components/Contact';
import Hero from './components/Hero';
import UpperSocial from './Components/UpperSocial'
import ProjectSlider from './Components/ProjectSlider'


const AllComponents = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div 
                id='mainsection' 
                className="w-full h-full lg:w-4/5 lg:h-auto rounded-lg" 
                style={{ 
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" 
                }}
            >
                <div className="mt-2 lg:mt-20 lg:mb-40 flex flex-row lg:flex-col">
                    <UpperSocial />
                    <Hero/>
                </div>

                <NavBar/>
                <MySkills/>

                <MyProjects/>

                <ProjectSlider/>

              <Certificate/>

              <Contact/>

            </div>
        </div>
    );
}

export default AllComponents;
