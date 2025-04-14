
'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { DiHtml5, DiCss3, DiBootstrap, DiJavascript, DiReact, DiCsharp } from 'react-icons/di';
import { SiTailwindcss, SiNextdotjs, SiCplusplus } from 'react-icons/si';


const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-[70px] h-[70px]">
    <path fill="#FFD43B" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" />
    <path fill="#3776AB" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" />
  </svg>
);



const JavaIcon = () => (
  <svg viewBox="0 0 128 128" className="w-[70px] h-[70px]">
    <path fill="#EA2D2E" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" />
    <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z" />
    <path fill="#EA2D2E" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z" />
    <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z" />
    <path fill="#EA2D2E" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z" />
  </svg>
);

const CSharpIcon = () => (
  <svg viewBox="0 0 128 128" className="w-[70px] h-[70px]">
    <path fill="#68217A" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z" />
    <path fill="#68217A" d="M78.6 64c0 1.5.3 2.9.8 4.2l-10.3 6c-.6-1.1-.9-2.3-.9-3.6 0-4.2 3.4-7.6 7.6-7.6 1.1 0 2.2.2 3.2.7l10.4-6c-2.1-3.2-5.7-5.3-9.8-5.3-6.4 0-11.6 5.2-11.6 11.6s5.2 11.6 11.6 11.6c4.1 0 7.7-2.1 9.8-5.3l-10.4-6c-1 .5-2.1.7-3.2.7-4.2 0-7.6-3.4-7.6-7.6 0-1.3.3-2.5.9-3.6l10.3 6c-.5 1.3-.8 2.7-.8 4.2z" />
  </svg>
);



const skills = [
  {
    name: 'HTML',
    icon: <DiHtml5 size={70} className="text-[#E44D26]" />,
    color: 'orange'
  },
  {
    name: 'CSS',
    icon: <DiCss3 size={70} className="text-[#1572B6]" />,
    color: 'blue'
  },
  {
    name: 'Bootstrap',
    icon: <DiBootstrap size={70} className="text-[#7952B3]" />,
    color: 'indigo'
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss size={70} className="text-[#06B6D4]" />,
    color: 'cyan'
  },
  {
    name: 'JavaScript',
    icon: <DiJavascript size={70} className="text-[#F7DF1E]" />,
    color: 'yellow'
  },
  {
    name: 'React',
    icon: <DiReact size={70} className="text-[#61DAFB]" />,
    color: 'blue'
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs size={70} className="text-black dark:text-white" />, // Add color class
    color: 'gray'
  },
  {
    name: 'C++',
    icon: <SiCplusplus size={70} className="text-[#00319c]" />, // C++ brand color
    color: 'blue'
  },
  {
    name: 'Python',
    icon: <PythonIcon />,
    color: 'blue'
  },
  {
    name: 'C#',
    icon: <CSharpIcon />,
    color: 'purple'
  },
  {
    name: 'Java',
    icon: <JavaIcon />,
    color: 'red'
  }
];

const MySkills = () => {
  return (
    <section  className="py-20 px-4 sm:px-6 lg:px-8" id="skills">
   
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
                <motion.div
                  className="relative w-32 h-32 mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <div className="absolute inset-0 bg-white/10 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity rounded-full" />

                  <motion.span
                    className="text-6xl mb-1 transition-colors"
                    style={{ color: `var(--${skill.color}-500)` }}
                  >
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
                />
              </motion.div>
            ))}
          </div>
        </div>
    </section >
  );
};

export default MySkills;