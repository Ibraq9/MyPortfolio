'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { DiHtml5, DiCss3, DiBootstrap, DiJavascript, DiReact, DiCsharp } from 'react-icons/di';
import { SiTailwindcss, SiNextdotjs, SiCplusplus } from 'react-icons/si';

// Python Icon
const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-[70px] h-[70px]">
    <path fill="#FFD43B" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007..." />
    <path fill="#3776AB" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426..." />
  </svg>
);

// Java Icon
const JavaIcon = () => (
  <svg viewBox="0 0 128 128" className="w-[70px] h-[70px]">
    <path fill="#EA2D2E" d="M47.617 98.12s-4.767 2.774 3.397 3.71..." />
  </svg>
);

// C# Icon
const CSharpIcon = () => (
  <svg viewBox="0 0 128 128" className="w-[70px] h-[70px]">
    <path fill="#68217A" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1..." />
  </svg>
);

// Skills Array
const skills = [
  { name: 'HTML', icon: <DiHtml5 size={70} className="text-[#E44D26]" />, color: 'orange' },
  { name: 'CSS', icon: <DiCss3 size={70} className="text-[#1572B6]" />, color: 'blue' },
  { name: 'Bootstrap', icon: <DiBootstrap size={70} className="text-[#7952B3]" />, color: 'indigo' },
  { name: 'Tailwind', icon: <SiTailwindcss size={70} className="text-[#06B6D4]" />, color: 'cyan' },
  { name: 'JavaScript', icon: <DiJavascript size={70} className="text-[#F7DF1E]" />, color: 'yellow' },
  { name: 'React', icon: <DiReact size={70} className="text-[#61DAFB]" />, color: 'blue' },
  { name: 'Next.js', icon: <SiNextdotjs size={70} className="text-black dark:text-white" />, color: 'gray' },
  { name: 'C++', icon: <SiCplusplus size={70} className="text-[#00319c]" />, color: 'blue' },
  { name: 'Python', icon: <PythonIcon />, color: 'blue' },
  { name: 'C#', icon: <CSharpIcon />, color: 'purple' },
  { name: 'Java', icon: <JavaIcon />, color: 'red' }
];

// Component
const MySkills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-4xl font-bold text-center mb-16">
          <div className='flex justify-center'>
            <div className='flex gap-1 items-center'>
              <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                My current Technical skills
              </span>
              <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-white/10 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity rounded-full" />

              <motion.div
                className="relative w-32 h-32 mb-4 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <div className="absolute inset-0 bg-white/10 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity rounded-full" />

                <motion.span className="text-6xl mb-1 transition-colors">
                  {skill.icon}
                </motion.span>

                <motion.div
                  className="absolute inset-0 border-2 rounded-full"
                  style={{ borderColor: `var(--${skill.color}-500)` }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: 1.2,
                    opacity: 0.3,
                    transition: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }
                  }}
                />
              </motion.div>

              <h1 style={{ color: 'white' }}>{skill.name}</h1>

              <div
                className="absolute inset-0 rounded-full blur-[20px] opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: `var(--${skill.color}-500)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
