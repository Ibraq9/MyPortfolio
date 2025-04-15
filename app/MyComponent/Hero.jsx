
"use client"
import React, { useState, useEffect } from 'react';
import { Coffee, Book, Code, Cpu, MapPin, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import PersonalImage from '../assets/final.jpg'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const fullText = "To Build high-quality, efficient websites using Next.js";

    useEffect(() => {
        setIsVisible(true);

        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setTypedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="relative overflow-hidden">
            {/* Removed background elements */}

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">


                    {/* Right side: Visual */}
                    <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-8'}`}>
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 bg-transparent rounded-xl shadow-lg -z-10 border border-white/20"></div>
                            <div className="absolute -inset-2 bg-transparent rounded-lg -z-10 border border-white/10"></div>

                            {/* Frame decorations */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/50 rounded-tl-lg -mt-2 -ml-2"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/50 rounded-tr-lg -mt-2 -mr-2"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/50 rounded-bl-lg -mb-2 -ml-2"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/50 rounded-br-lg -mb-2 -mr-2"></div>

                            {/* Main image frame */}
                            <div className="relative w-72 h-80 md:w-80 md:h-96 overflow-hidden rounded-lg shadow-md border-4 border-white/10">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={PersonalImage}
                                        alt="Ibrahim Muhammad Abu Al-Qasim"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10"></div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6">
                                <div className="w-12 h-12 bg-transparent border border-white/20 rounded-full shadow-md flex items-center justify-center">
                                    <Coffee size={20} className="text-white" />
                                </div>
                            </div>

                            <div className="absolute -top-6 -left-6">
                                <div className="w-12 h-12 bg-transparent border border-white/20 rounded-full shadow-md flex items-center justify-center">
                                    <Code size={20} className="text-white" />
                                </div>
                            </div>

                            {/* Skills data */}
                            <div className="absolute bottom-1/4 -right-32 bg-transparent shadow-md border border-white/20 px-4 py-3 rounded-lg hidden lg:block backdrop-blur-sm">
                                <h3 className="text-white text-sm font-medium mb-2">Skills</h3>
                                <div className="space-y-3">
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-white">NextJS</span>
                                            <span className="text-xs text-white">80%</span>
                                        </div>
                                        <div className="w-36 h-2 bg-white/20 rounded-full overflow-hidden">
                                            <div className="h-full w-4/5 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-white">React</span>
                                            <span className="text-xs text-white">90%</span>
                                        </div>
                                        <div className="w-36 h-2 bg-white/20 rounded-full overflow-hidden">
                                            <div className="h-full w-11/12 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Left side: Content */}
                    <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-8'}`}>
                        <div className="bg-gradient-to-r h-1 w-24 mb-8 from-white/50 to-transparent"></div>

                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-white/80">
                                <Coffee size={16} className="text-white" />
                                <span className="text-xs font-medium tracking-wider">Software Craftsman</span>
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold mb-4 font-serif text-white">
                            <span className="block">
                                Hello, I'm Ibrahim
                            </span>
                        </h1>

                        <div className="flex flex-wrap gap-3 my-6">
                            <div className="flex items-center gap-2 px-3 py-2 bg-transparent border border-white/20 rounded-lg text-white">
                                <Cpu size={16} className="text-white" />
                                <span className="text-sm">Software Engineer</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-transparent border border-white/20 rounded-lg text-white">

                                <Code size={16} className="text-white" />
                                <span className="text-sm">Web Developer</span>
                            </div>
                        </div>

                        <div className="my-8">
                            <p className="text-white/80 mb-6 leading-relaxed">
                                I'm Ibrahim Mohamed Aboulkasem, a passionate developer with a love for creating warm,
                                inviting digital spaces. Currently studying at the Faculty of Computers and Information.
                            </p>

                            <div className="font-mono text-white h-6 mb-8">
                                <span className="inline-block">$ {typedText}</span>
                                <span className="inline-block w-2 h-4 bg-white animate-blink ml-1"></span>
                                <style jsx>{`
                                    @keyframes blink {
                                        0%, 100% { opacity: 1; }
                                        50% { opacity: 0; }
                                    }
                                    .animate-blink {
                                        animation: blink 1s step-end infinite;
                                    }
                                `}</style>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <a href="#Projects" className="group">
                                <button className="flex items-center gap-3 px-6 py-3 bg-transparent border border-white/30 hover:border-white/50 rounded-lg text-white font-medium transition-all duration-300 w-full sm:w-auto justify-center shadow-md hover:shadow-lg">
                                    <Book size={18} className="text-white" />
                                    <span>Browse Projects</span>
                                    <div className="h-px w-5 bg-white/50 group-hover:w-8 transition-all"></div>
                                </button>
                            </a>

                            <a href="#Contact" className="group">
                                <button className="flex items-center gap-3 px-6 py-3 bg-transparent border border-white/30 hover:border-white/50 rounded-lg text-white font-medium transition-all duration-300 w-full sm:w-auto justify-center shadow-sm hover:shadow">
                                    <Coffee size={18} className="text-white" />
                                    <span>Let's Connect</span>
                                </button>
                            </a>
                        </div>

                        <div className="flex items-center gap-6 mt-10 text-white/80">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-white" />
                                <span className="">Minia, Egypt</span>
                            </div>
                            <div className="w-px h-8 bg-white/30"></div>
                            <div className="flex items-center gap-2">
                                <GraduationCap size={16} className="text-white" />
                                <span className="">Minia University</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Hero;