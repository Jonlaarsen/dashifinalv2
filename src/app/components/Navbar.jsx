"use client"
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
  window.addEventListener("scroll", changeNavbarColor);
  }, [colorChange])

  return (
    <div className='flex fixed justify-between px-7 items-center top-0 left-0 h-[4rem] w-screen '>
      <div>
        <h1  className= {colorChange ?'text-4xl md:text-5xl font-extrabold title opacity-40 hover:opacity-100' : 'text-4xl md:text-5xl font-extrabold title'}><a href='#top'>DASHI</a></h1>
      </div>
      {/* <div className='flex font-semibold text-xl uppercase gap-2 md:gap-10'>
        <a href='https://weiq.app/dashi'>order</a>
        <a href='#contact'>contact</a>
        
      </div> */}
    </div>
  )
}

export default Navbar
