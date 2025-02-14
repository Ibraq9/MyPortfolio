import React from 'react';
import Me from '../assets/Me.png';
import Image from 'next/image';
import { MapPin, Landmark } from 'lucide-react';
import Link from 'next/link';


const Hero = () => {

    return (

        <div className='mx-3 flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center lg:gap-10'>

            <div className='relative my-5 w-32 h-32 lg:w-64 lg:h-64 md:w-60 md:h-60 overflow-hidden rounded-full border-4 border-gray-400 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 group'>
                <Image
                    src={Me}
                    alt="Photo of Ibraheem Qassem"
                    layout='fill'
                    objectFit='cover'
                    className='group-hover:scale-105 transition-transform duration-300'
                />
            </div>


            <div className="flex flex-col lg:gap-6 text-3xl lg:text-5xl">
                <div className="text-home flex flex-col gap-3">
                    <h1 className=' font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent animate-gradient'>
                        Hi, I'm Ibraheem
                    </h1>
                    <div className='text-home flex flex-wrap gap-2 md:gap-4 md:mt-5'>
                        <span className='text-xl md:text-2xl font-semibold px-4 py-2 bg-cyan-600/20 rounded-full backdrop-blur-sm border border-cyan-400/30 text-white'>
                            Software Engineer
                        </span>
                        <span className='text-xl md:text-2xl font-semibold px-4 py-2 bg-blue-600/20 rounded-full backdrop-blur-sm border border-blue-400/30 text-white'>
                            Web Developer
                        </span>
                    </div>
                </div>

                <div className='text-home flex flex-col gap-4 text-lg text-gray-200'>
                    <div className='flex flex-col'>
                        <p className='leading-relaxed'>I'm Ibraheem Muhammad Abu Al-Qasim,</p>
                        <p>a passionate developer currently studying at the Faculty of Computers and Information.</p>
                    </div>

                    <div className='flex flex-col md:flex-row gap-6 mt-4'>
                        <div className='flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-cyan-500/20 transition-colors duration-300'>
                            <MapPin size={25} className='text-cyan-400' />
                            <p>Minia, Egypt</p>
                        </div>
                        <div className='flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-blue-500/20 transition-colors duration-300'>
                            <Landmark size={25} className='text-blue-400' />
                            <p>Minia University</p>
                        </div>
                    </div>

                    <a href={'#MyProjects'} className=' w-3/6 flex justify-center'>
                        <button className='rounded-full border border-blue-400/50 w-full lg:w-2/3 h-auto lg:h-10 text-lg font-bold' style={{ backgroundColor: '#27314E' }}>View My Works</button>
                    </a>


                </div>

            </div>

        </div>
    )
}

export default Hero

