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
        <div className="flex flex-wrap justify-center w-full h-96 relative -z-10">
            {/* Render the project data */}
            {projects.map((project, index) => (
                <div key={index} className="w-1/2 p-4">
                    <div className="rounded-lg border border-black overflow-hidden">
                        <div className="h-96 relative"> {/* Set width and height */}
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h1 className="text-xl font-semibold mb-2">{project.name}</h1>
                            <p className="text-black mb-4">{project.description}</p>
                            <button
                                className="text- font-bold py-2 px-4 rounded"
                                style={{ backgroundColor: '#30dcdc' }}
                            >
                                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
