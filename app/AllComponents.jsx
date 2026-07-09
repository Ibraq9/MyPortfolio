import React from "react";
import BackgroundGlow from "@/components/BackgroundGlow";
import NavBar from "./MyComponent/NavBar";
import MySkills from "./MyComponent/MySkills";
import MyProjects from "./MyComponent/MyProjects";
import Certificate from "./MyComponent/Certificate";
import Contact from "./MyComponent/Contact";
import Hero from "./MyComponent/Hero";
import UpperSocial from "./MyComponent/UpperSocial";
import Experience from "./MyComponent/Experience";

const AllComponents = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundGlow />
      <UpperSocial />

      <div
        id="mainsection"
        className="relative w-full lg:max-w-6xl lg:mx-auto lg:my-8 lg:rounded-3xl lg:border lg:border-white/10 lg:overflow-hidden"
      >
        <div className="lg:px-4">
          <Hero />
          <NavBar />
          <MySkills />
          <MyProjects />
              <Experience />
          <Certificate />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default AllComponents;
