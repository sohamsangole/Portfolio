import React from 'react'

const TopText = () => {
    return (
        <div className="flex flex-col justify-center h-screen px-60" style={{ backgroundColor: '#30dcdc' }}>
            <div className="text-left max-w-prose">
                <p className="text-lg text-white">
                    My portfolio covers a wide range of topics, including supervised machine learning, deep learning, reinforcement learning, application development, and web development. I&apos;m continually extending my skill set and project list. The most exciting things I learned include, training machine learning models and hosting them on the web and in apps with Flask. Below are links to my other projects, including code, blog posts, and deployed versions.
                </p>
                <h1 className="text-3xl font-bold text-white py-4">PERSONAL PORTFOLIO</h1>
            </div>
        </div>
    )
}

export default TopText