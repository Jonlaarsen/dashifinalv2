import React from 'react'

const Order = () => {
  return (
    <div id='order' className='flex justify-center items-center  flex-col max-w-screen min-h-screen'>
      <div className='text-center'>
        <h1 className='text-3xl md:text-5xl font-bold uppercase py-6'>Food</h1>
        <img className=' w-screen border-b-4 border-t-4   border-[#E43D12]' src="/dashifood.jpg" alt="order" />
      </div>
      <div className='text-center'>
        <h1 className='text-3xl md:text-5xl font-bold uppercase py-6'>Drinks</h1>
        <img className=' w-screen  border-t-4 border-b-4   border-[#E43D12]' src="/dashidrink.jpg" alt="order" />
      </div>
      <div className='flex flex-col items-center py-10 justify-center w-screen gap-10 bg-[url("https://www.wallpapershop.com.au/assets/full/WP30062.jpg?20230915123918")]'>
            <h1 className='text-3xl text-center font-bold uppercase title'>order <span className='font-extrabold'>now</span> by pressing the ramen</h1>
            <a href='https://weiq.app/dashi'>
                <img src="https://cdn-icons-png.flaticon.com/512/3480/3480765.png" alt="ramen" className='w-[15rem] md:w-[20rem] p-4  bg-[#E43D12] rounded-[50%]' />   
            </a>
      </div>
    </div>
  )
}

export default Order
