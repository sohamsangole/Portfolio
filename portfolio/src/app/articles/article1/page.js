import React from 'react'
import ArticlePage from './ArticlePage'
import NavbarComponent from '@/app/Navbar'
const Article = (id) => {
    return (
        <>
            <div className='fixed top-0 w-full'>
                <NavbarComponent />
            </div>
            <div className='py-12'>
                <ArticlePage id={1} />
            </div>
        </>
    )
}

export default Article