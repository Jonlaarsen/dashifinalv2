import React from 'react'

const Footer = () => {
  return (
    <div id='contact' className='flex flex-row justify-evenly items-center border-t-4 border-dashed border-[#E43D12] h-[15rem] '>
      <div className='w-[5rem] text-[10px] md:text-[15px] md:w-[10rem] flex flex-col gap-2'>
        <p><a href='tel:00464078185'>+464078185</a></p>
        <p><a href='https://www.google.com/maps/dir//Holmgatan+4,+211+45+Malm%C3%B6,+Sverige/@55.5979094,12.9164062,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x4653a1fac6fb0d1b:0x64fb9264f145676b!2m2!1d12.9988062!2d55.597937?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D'>Holmgatan 4, Malmö</a></p>
        <p className='font-semibold'><a href='https://www.facebook.com/dashimalmo/?locale=sv_SE'>facebook</a></p>
        <p className='font-semibold'><a href='https://www.instagram.com/dashi_malmo/'>instagram</a></p>
      </div>
      <div className='w-[5rem] md:w-[6rem]'>
        <img src="/dashilogo.jpg"
         alt="dashi-logo" className='w-[10rem] rounded-[50%]' />
      </div>
      <div className='w-[5rem] text-[10px] md:text-[15px] gap-2 flex flex-col  md:w-[10rem]'>
        
        <p><span className='font-semibold'>mån-fre</span> 11:30-14:30 <br/>
         <span className='font-semibold'>sön</span> 11:30-17:00</p>
    
        <p><span className='font-semibold'>ons-tors</span> 14:30-20:00 <br/>
         <span className='font-semibold'>fre-lör</span> 14:30-21:00</p>
      </div>
    </div>
  )
}

export default Footer
