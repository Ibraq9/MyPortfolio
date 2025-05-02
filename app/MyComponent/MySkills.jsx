'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { DiHtml5, DiCss3, DiBootstrap, DiJavascript, DiReact } from 'react-icons/di';
import { SiTailwindcss, SiNextdotjs, SiCplusplus,SiTypescript ,SiPrisma} from 'react-icons/si';

// Python Icon
const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-[70px] h-[70px]">
    <path fill="#FFD43B" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" />
    <path fill="#3776AB" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" />
  </svg>
);

// Placeholder Java and C# icons with fallback content
const JavaIcon = () => (
  <div className="w-[70px] h-[70px] flex items-center justify-center text-red-600 text-2xl font-bold">
    Java
  </div>
);

const CSharpIcon = () => (
  <div className="w-[70px] h-[70px] flex items-center justify-center text-purple-700 text-2xl font-bold">
    C#
  </div>
);

// Final Skills Array
const skills = [
  { name: 'HTML', icon: <DiHtml5 size={70} className="text-[#E44D26]" />, color: '#E44D26' },
  { name: 'CSS', icon: <DiCss3 size={70} className="text-[#1572B6]" />, color: '#1572B6' },
  { name: 'Bootstrap', icon: <DiBootstrap size={70} className="text-[#7952B3]" />, color: '#7952B3' },
  { name: 'Tailwind', icon: <SiTailwindcss size={70} className="text-[#06B6D4]" />, color: '#06B6D4' },
  { name: 'JavaScript', icon: <DiJavascript size={70} className="text-[#F7DF1E]" />, color: '#F7DF1E' },
  { name: 'React', icon: <DiReact size={70} className="text-[#61DAFB]" />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs size={70} color='white' />, color: '#000000' },
  { name: 'C++', icon: <SiCplusplus size={70} className="text-[#00319c]" />, color: '#00319c' },
  { name: 'Python', icon: <PythonIcon />, color: '#3776AB' },
  { name: 'C#', icon: <CSharpIcon />, color: '#68217A' },
  { name: 'Java', icon: <JavaIcon />, color: '#EA2D2E' },
  { name: 'Typescript', icon: <SiTypescript color='#3A7BCA'/>, color: '#3A7BCA' },
  { name: 'Prisma', icon: <SiPrisma color='#6FB6AF'/>, color: '#6FB6AF' }
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
                  style={{ borderColor: skill.color }}
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

              <h1 className="text-white text-bold">{skill.name}</h1>

              <div
                className="absolute inset-0 rounded-full blur-[20px] opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
