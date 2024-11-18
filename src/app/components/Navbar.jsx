import React from 'react'

const Navbar = () => {

  return (
    <div className='flex fixed justify-between px-7 items-center top-0 left-0 h-[4rem] w-screen '>
      <div>
        <h1 className='text-4xl md:text-5xl font-extrabold title'><a href='#top'>DASHI</a></h1>
      </div>
      {/* <div className='flex font-semibold text-xl uppercase gap-2 md:gap-10'>
        <a href='https://weiq.app/dashi'>order</a>
        <a href='#contact'>contact</a>
        
      </div> */}
    </div>
  )
}

export default Navbar
