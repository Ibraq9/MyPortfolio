"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript,
  DiReact,
  DiJava,
  DiMysql,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiTypescript,
  SiPrisma,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiNumpy,
  SiMongodb,
  SiFastapi,
  SiHuggingface,
  SiLangchain,
} from "react-icons/si";
import SectionHeading from "@/components/SectionHeading";

const iconSize = 40;

const skills = [
  { name: "HTML", icon: <DiHtml5 size={iconSize} className="text-[#E44D26]" />, color: "#E44D26" },
  { name: "CSS", icon: <DiCss3 size={iconSize} className="text-[#1572B6]" />, color: "#1572B6" },
  { name: "Bootstrap", icon: <DiBootstrap size={iconSize} className="text-[#7952B3]" />, color: "#7952B3" },
  { name: "Tailwind", icon: <SiTailwindcss size={iconSize} className="text-[#06B6D4]" />, color: "#06B6D4" },
  { name: "JavaScript", icon: <DiJavascript size={iconSize} className="text-[#F7DF1E]" />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript size={iconSize} className="text-[#3178C6]" />, color: "#3178C6" },
  { name: "React", icon: <DiReact size={iconSize} className="text-[#61DAFB]" />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs size={iconSize} className="text-white" />, color: "#ffffff" },
  { name: "Python (Backend)", label: "Python", icon: <SiPython size={iconSize} className="text-[#3776AB]" />, color: "#3776AB" },
  { name: "FastAPI", icon: <SiFastapi size={iconSize} className="text-[#009485]" />, color: "#009485" },
  { name: "Java", icon: <DiJava size={iconSize} className="text-[#007396]" />, color: "#007396" },
  { name: "C++", icon: <SiCplusplus size={iconSize} className="text-[#00599C]" />, color: "#00599C" },
  { name: "C#", icon: <div className="text-[20px] sm:text-[22px] font-bold text-[#512BD4]">C#</div>, color: "#512BD4" },
  { name: "Python (Languages)", label: "Python", icon: <SiPython size={iconSize} className="text-[#3776AB]" />, color: "#3776AB" },
  { name: "TensorFlow", icon: <SiTensorflow size={iconSize} className="text-[#FF6F00]" />, color: "#FF6F00" },
  { name: "PyTorch", icon: <SiPytorch size={iconSize} className="text-[#EE4C2C]" />, color: "#EE4C2C" },
  { name: "scikit-learn", icon: <SiScikitlearn size={iconSize} className="text-[#F7931E]" />, color: "#F7931E" },
  { name: "OpenCV", icon: <SiOpencv size={iconSize} className="text-[#5C3EE8]" />, color: "#5C3EE8" },
  { name: "Pandas", icon: <SiPandas size={iconSize} className="text-[#150458]" />, color: "#150458" },
  { name: "NumPy", icon: <SiNumpy size={iconSize} className="text-[#013243]" />, color: "#013243" },
  { name: "LangChain", icon: <SiLangchain size={iconSize} className="text-[#1C3C3C]" />, color: "#1C3C3C" },
  { name: "Hugging Face", icon: <SiHuggingface size={iconSize} className="text-[#FFD21E]" />, color: "#FFD21E" },
  { name: "PostgreSQL", icon: <SiPostgresql size={iconSize} className="text-[#336791]" />, color: "#336791" },
  { name: "MySQL", icon: <DiMysql size={iconSize} className="text-[#4479A1]" />, color: "#4479A1" },
  { name: "MongoDB", icon: <SiMongodb size={iconSize} className="text-[#47A248]" />, color: "#47A248" },
  { name: "Prisma", icon: <SiPrisma size={iconSize} className="text-[#2D3748]" />, color: "#2D3748" },
];

const categories = [
  { label: "Frontend & Backend", color: "from-blue-500/20 to-cyan-500/20" },
  { label: "AI & ML", color: "from-violet-500/20 to-purple-500/20" },
  { label: "Languages", color: "from-amber-500/20 to-orange-500/20" },
  { label: "Databases", color: "from-emerald-500/20 to-teal-500/20" },
];

const getCategory = (name) => {
  const frontend_Backend = ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript", "TypeScript", "React", "Next.js", "Python (Backend)", "FastAPI"];
  const ai = ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV", "Pandas", "NumPy", "LangChain", "Hugging Face", "OpenAI"];
  const langs = ["Java", "C++", "C#", "Python (Languages)"];
  const dbs = ["PostgreSQL", "MySQL", "MongoDB", "Prisma"];
  if (frontend_Backend.includes(name)) return 0;
  if (ai.includes(name)) return 1;
  if (langs.includes(name)) return 2;
  if (dbs.includes(name)) return 3;
  return 0;
};

const MySkills = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills"
         
        />

        {categories.map((cat, catIdx) => (
          <div key={cat.label} className="mb-12 last:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <div className={`h-8 w-1 rounded-full bg-gradient-to-b ${cat.color}`} />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                {cat.label}
              </h3>
              <span className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {skills.filter((_, i) => getCategory(skills[i].name) === catIdx).map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="group glass-card px-3 sm:px-5 py-3 sm:py-5 flex flex-col items-center gap-1.5 sm:gap-2 cursor-default w-[82px] sm:w-[100px]"
                >
                  <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl transition-all duration-300 group-hover:shadow-lg">
                    {skill.icon}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-zinc-300 group-hover:text-white transition-colors text-center leading-tight">
                    {skill.label || skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
