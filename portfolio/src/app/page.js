import React from 'react'
import NavbarComponent from './Navbar';
import TopText from './TopText';
import ProjectList from './ProjectList';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      <div className='fixed top-0 w-full'>
        <NavbarComponent />
      </div>
      <TopText />
      <div className='px-48 py-4'>
        <ProjectList />
      </div>
    </main>
  );
}
