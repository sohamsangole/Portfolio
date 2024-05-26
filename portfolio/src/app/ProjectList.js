"use client";
import React, { useState, useEffect } from 'react';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/assets/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4 p-4 -z-10">
            {/* Render the project data */}
            {projects.map((project, index) => (
                <div key={index} className="flex flex-col rounded-lg border border-black overflow-hidden m-2 ">
                    <div className="relative" style={{ paddingBottom: '60%', minHeight: '300px' }}> {/* Set width and minimum height */}
                        <img
                            src={project.image}
                            alt={project.name}
                            className="absolute inset-0 w-full h-full object-cover -z-10"
                        />
                    </div>
                    <div
                        style={{ borderTop: '1px solid #000000' }}
                    ></div>
                    <div className="border-t-1 border-black p-4">
                        <h1 className="text-xl font-semibold mb-2">{project.name}</h1>
                        <p className="text-black mb-4">{project.description}</p>
                        <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                            <button
                                className="text-white font-bold py-2 px-4 rounded"
                                style={{ backgroundColor: '#000000' }}
                            >
                                GitHub
                            </button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
