"use client";

import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ projectName, projectDescription, projectImage,project_href ,project_tech}) => {
    return (
        <div>
            <div className="card">
                <Image
                    src={projectImage}
                    alt='Project Image'
                    style={{ width: '100%', height: '100%' }}
                />
                <div className="card__content">
                    <p className="card__title">{projectName}</p>
                    <p className="card__description">{projectDescription}</p>
                    <div className='flex gap-2 my-1'>
                        {
                            project_tech.map((item,index)=>(
                                <p key={index} className='w-auto h-8 bg-[#24262A] p-1 shadow-lg rounded-md font-bold'>{item}</p>
                            ))
                        }
                    </div>
                    <div className='flex gap-2'>
                        <a href={project_href} target='_blank'><button className="p-2 rounded-md bg-blue-800 text-white font-bold">Link ➡️</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard