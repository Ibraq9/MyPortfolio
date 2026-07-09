"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
} from "react-icons/di";
import { SiTailwindcss, SiNextdotjs, SiDotnet, SiCplusplus, SiPostgresql, SiStripe } from "react-icons/si";
import ProjectCard from "./ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data/projects";
import apiPng from "../assets/api.png";
import neonPng from "../assets/NeonProvider.png";
import prismaPng from "../assets/prisma.png";

const pngIcon = (src, alt, w = 22, h = 22) => (
  <Image key={alt} src={src} alt={alt} width={w} height={h} className="object-contain" />
);

const tagIcons = {
  React: <DiReact key="react" size={22} color="#61DAFB" />,
  "Next.js": <SiNextdotjs key="next" size={22} color="#ffffff" />,
  Tailwind: <SiTailwindcss key="tailwind" size={22} color="#06B6D4" />,
  HTML: <DiHtml5 key="html" size={22} color="#E44D26" />,
  CSS: <DiCss3 key="css" size={22} color="#1572B6" />,
  JavaScript: <DiJavascript key="js" size={22} color="#F7DF1E" />,
  ".NET": <SiDotnet key="dotnet" size={22} color="#512BD4" />,
  "C#": <SiDotnet key="csharp" size={22} color="#512BD4" />,
  "C++": <SiCplusplus key="cpp" size={22} color="#00599C" />,
  Stripe: <SiStripe key="stripe" size={22} color="#635BFF" />,
  PostgreSQL: <SiPostgresql key="postgres" size={22} color="#336791" />,
  Prisma: pngIcon(prismaPng, "Prisma"),
  PrismaORM: pngIcon(prismaPng, "PrismaORM"),
  API: pngIcon(apiPng, "API"),
  "Neon Provider": pngIcon(neonPng, "Neon Provider"),
};

const getTechIcons = (tags) =>
  tags.map((tag) => tagIcons[tag]).filter(Boolean);

const MyProjects = () => {
  return (
    <section id="Projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of recent work — from web apps to systems programming"
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-zinc-700 to-transparent md:-translate-x-1/2 hidden sm:block" />

          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row items-center mb-20 md:mb-36 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-zinc-950 z-10 shadow-lg shadow-violet-500/30" />

                <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                  <ProjectCard
                    projectName={project.name}
                    projectDescription={project.description}
                    projectImage={project.image}
                    project_href={project.href}
                    project_tech={getTechIcons(project.tags)}
                    tags={project.tags}
                    githubHref={project.href}
                    liveHref={project.liveHref || project.demoHref}
                  />
                </div>

                <div className={`hidden md:flex w-1/2 ${isLeft ? "justify-start pl-12" : "justify-end pr-12"}`}>
                  <div className="glass-card p-6 max-w-xs">
                    <p className="text-xs uppercase tracking-widest text-violet-400 mb-2">
                      Project {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
