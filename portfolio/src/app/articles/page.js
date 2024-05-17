"use client";
import React from 'react'
import NavbarComponent from '../Navbar'
import ArticlesList from './ArticlesList';
const Articles = () => {
    return (
        <>
            <div className='fixed top-0 w-full'>
                <NavbarComponent />
            </div>
            <div className='py-12'>
                <ArticlesList />
            </div>
        </>
    )
}

export default Articles