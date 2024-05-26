"use client";
import React, { useState, useEffect } from 'react';

const TopText = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const progress = Math.min(window.scrollY / (window.innerHeight / 2), 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center h-screen px-60 relative" style={{ backgroundColor: '#ffffff' }}>
            <div className="text-left max-w-prose">
                <p className="text-lg text-black">
                    My portfolio covers a wide range of topics, including supervised machine learning, deep learning, reinforcement learning, application development, and web development. I&apos;m continually extending my skill set and project list. The most exciting things I learned include, training machine learning models and hosting them on the web and in apps with Flask. Below are links to my other projects, including code, blog posts, and deployed versions.
                </p>
                {/* <div className="absolute" style={{ left: `${scrollProgress * 100}%`, top: '50%', transform: 'translate(-50%, -50%)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-96 w-96 opacity-25 blur-3xl">
                        <circle cx="50" cy="50" r="40" fill="#000000" />
                    </svg>
                </div> */}
                <h1 className="text-3xl font-bold text-black py-4">PROJECT PORTFOLIO</h1>
            </div>
        </div>
    );
}

export default TopText;
