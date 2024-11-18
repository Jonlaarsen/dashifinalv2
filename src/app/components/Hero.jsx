import React from 'react'



export const Hero = () => {
  return (
    <div>
    <About/>
    </div>
  )
}





export const About = () => {
    return (
      <div className='justify-around grid  md:grid-cols-2 md:grid-rows-2 border-b-4  border-[#E43D12] h-[210vh] bg-[url("https://www.wallpapershop.com.au/assets/full/WP30062.jpg?20230915123918")] md:bg-none '>

        <div id='top' className='text-3xl min-h-[30rem] border-b-4 border-[#E43D12] md:border-none bg-[url("https://lh3.googleusercontent.com/p/AF1QipMWvODlEWMZlBgTTo3nR7daL9vKqqWhAk90hAQ=s1360-w1360-h1020")] bg-bottom bg-cover'>
        </div>
        <div className='flex items-center flex-col gap-8 text-center justify-center'>
          <button
           className="button text-2xl font-semibold md:text-5xl hover:bg-opacity-60 px-9">
              <a href='https://weiq.app/dashi'>Order</a>
          </button>
          <h1 className='text-4xl font-bold'>Enjoy a perfectly balanced meal!</h1>
          <p className='text-xs px-6 md:text-xl font-semibold text-center '> 
                At DASHI, we take pride in crafting dishes from the finest local and quality ingredients.
                <br/>
                Experience the perfect harmony of Japanese and Vietnamese cuisines,
                <br/>
                designed for you and your friends to savor together.
                <br/>
                We can't wait to welcome you—see you soon!
           </p>
        </div>
        
        <div className='flex items-center flex-col gap-8 text-center justify-center'>
          <button
           className="button md:button-89 font-semibold text-2xl md:text-5xl hover:bg-opacity-60   ">
              <a href='#contact'>Contact</a>
          </button>
          <h1 className='text-4xl font-bold'>Talk to our amazing staff!</h1>
          <p className='text-xs px-6 md:text-xl font-semibold text-center '> 
            At DASHI, we take pride in delivering warm, attentive, and personalized customer service.
            <br/>
            Our goal is to make every visit a delightful experience, where your satisfaction comes first.
            <br/>
            We're here to ensure you feel right at home—see you soon!
           </p>
        </div>
        <div className="flex justify-center invisible md:visible items-center text-3xl  bg-center bg-[url('https://lh3.googleusercontent.com/p/AF1QipO_JZ7xk_OgdA1O3vF7VzjGDUyDlB5rA15EzVmB=s1360-w1360-h1020')] bg-cover  ">
         
        </div>
  
      </div>
    )
  }