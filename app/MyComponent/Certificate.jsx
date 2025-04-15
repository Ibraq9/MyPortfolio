"use client"
import React from 'react';
import TimeLine from './TimeLine';
import { MapPin, Landmark } from 'lucide-react';
import CertificateImage from './CertificateImage';
import TypeScript from '../assets/Typescript.png';
import JavaScript from '../assets/JavaScript.png';
import Html_css from '../assets/Html_css.png';
import ES6 from '../assets/ES6.png';
import ML from '../assets/ML.png';


const Certificate = () => {

    const [Type, setType] = React.useState(null);

    const CloseImageClicked = () => {
        setType(null);
    }

    const certificates = [
        {
            content: (
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-lg text-gray-800 font-bold">HTML & CSS</h3>
                    <p className="text-sm text-gray-500 mt-1">11/8/2023 || at Mahara tech - Information Technology Institute (ITI)</p>
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <MapPin color='blue' size={15} />
                            <p className="mt-2 text-gray-600"> Minia , Egypt </p>
                        </div>

                        <button
                            onClick={() => setType('html')}
                            className='bg-blue-900 text-white font-mono p-1 rounded-lg'
                        >
                            Show
                        </button>
                    </div>

                </div>
            ),
        },
        {
            content: (
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-lg text-gray-800 font-bold">JavaScript</h3>
                    <p className="text-sm text-gray-500 mt-1">31/7/2023 || at Mahara tech - Information Technology Institute (ITI)</p>

                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <MapPin color='blue' size={15} />
                            <p className="mt-2 text-gray-600"> Minia , Egypt </p>
                        </div>
                        <button onClick={() => setType('JavaScript')} className='bg-blue-900 text-white font-mono p-1 rounded-lg'>Show</button>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-lg text-gray-800 font-bold">Modern JavaScript (ES6) </h3>
                    <p className="text-sm text-gray-500 mt-1">7/8/223 || at Mahara tech - Information Technology Institute (ITI)</p>
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <MapPin color='blue' size={15} />
                            <p className="mt-2 text-gray-600"> Minia , Egypt </p>
                        </div>

                        <button onClick={() => setType('ES6')} className='bg-blue-900 text-white font-mono p-1 rounded-lg'>Show</button>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-lg  text-gray-800 font-bold">TypeScript</h3>
                    <p className="text-sm text-gray-500 mt-1">11/8/2023 || at Mahara tech - Information Technology Institute (ITI)</p>
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <MapPin color='blue' size={15} />
                            <p className="mt-2 text-gray-600"> Minia , Egypt </p>
                        </div>

                        <button onClick={() => setType('TypeScript')} className='bg-blue-900 text-white font-mono p-1 rounded-lg'>Show</button>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-lg  text-gray-800 font-bold">Machine Learning for Data Analysis</h3>
                    <p className="text-sm text-gray-500 mt-1">12/9/2024 || at National Telecommunication Institute (NTI)</p>
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <MapPin color='blue' size={15} />
                            <p className="mt-2 text-gray-600"> Minia , Egypt </p>
                        </div>

                        <button onClick={() => setType('ML')} className='bg-blue-900 text-white font-mono p-1 rounded-lg'>Show</button>
                    </div>
                </div>
            ),
        },

    ];

    return (
        <div className="min-h-screen py-12 px-4 mt-9" id='Certifications'>
            <div className="flex gap-1 items-center justify-center mb-4">
                <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-3xl">
                    Certifications
                </span>
                <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>
            <TimeLine items={certificates} />

            {Type === 'html' ? <CertificateImage onClose={CloseImageClicked} ImageSrc={Html_css} /> : Type === 'JavaScript' ? <CertificateImage onClose={CloseImageClicked} ImageSrc={JavaScript} /> : Type === 'TypeScript' ? <CertificateImage onClose={CloseImageClicked} ImageSrc={TypeScript} /> : Type === 'ES6' ? <CertificateImage onClose={CloseImageClicked} ImageSrc={ES6} /> :Type==='ML'?<CertificateImage onClose={CloseImageClicked} ImageSrc={ML} />: null}
        </div>
    );
};

export default Certificate;