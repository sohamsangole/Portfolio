import React from 'react'
import NavbarComponent from './Navbar';
import TopText from './TopText';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className='fixed top-0 w-full'>
        <NavbarComponent />
      </div>
      <TopText />
      <div className='h-96'></div>
      <div className='h-96'></div>
      <div className='h-96'></div>
      <div className='h-96'></div>
      <div className='h-96'></div>
      <div className='h-96'></div>
      <div className='h-96'></div>
      <div className='h-96'></div>
    </main>
  );
}
