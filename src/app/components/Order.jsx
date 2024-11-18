import React from 'react'

const Order = () => {
  return (
    <div id='order' className='flex justify-center items-center  flex-col max-w-screen min-h-screen'>
      <div className='text-center'>
        <h1 className='text-3xl md:text-5xl font-bold uppercase py-6'>Food</h1>
        <img className=' w-screen border-b-4 border-t-4   border-[#E43D12]' src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/325777534_3442558109356214_1228459895579005356_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fM-PonNh1K0Q7kNvgE5C-n5&_nc_zt=23&_nc_ht=scontent-ssn1-1.xx&_nc_gid=AlN_MzpWY-frmLCjznh0m6S&oh=00_AYBN3-MzD1N3bn0-dN80x_NsYWsWHx_0iN_6R1YzYNFefg&oe=6740CB70" alt="order" />
      </div>
      <div className='text-center'>
        <h1 className='text-3xl md:text-5xl font-bold uppercase py-6'>Drinks</h1>
        <img className=' w-screen  border-t-4 border-b-4   border-[#E43D12]' src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/325313122_490044659940146_7697449917841712903_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4181mxHgUJ8Q7kNvgFsax4g&_nc_zt=23&_nc_ht=scontent-ssn1-1.xx&_nc_gid=A6pOzOsJSfNhUnj6vTXqynW&oh=00_AYAgXCRsCmtaeFb4jRgi71GgLY8rzLXySN13Xb-pCSULpQ&oe=6740BA07" alt="order" />
      </div>
      <div className='flex flex-col items-center py-10 justify-center w-screen gap-10 bg-[url("https://www.wallpapershop.com.au/assets/full/WP30062.jpg?20230915123918")]'>
            <h1 className='text-xl text-center font-semibold uppercase'>order <span className='font-extrabold'>now</span> by pressing the ramen</h1>
            <a href='https://weiq.app/dashi'>
                <img src="https://cdn-icons-png.flaticon.com/512/3480/3480765.png" alt="ramen" className='w-[15rem] md:w-[20rem] p-4 bg-[#E43D12] rounded-[50%]' />   
            </a>
      </div>
    </div>
  )
}

export default Order
