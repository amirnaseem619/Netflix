import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center font-bold items-center h-96  mt-20'>
<div className=' text-white'> 
    <h1 className=' text-[50px] font-bold text-center '>Unlimited movies,<br/> TV shows, and<br/> more</h1>
    <h3 className=' text-center font-bold text-2xl' >Starts at Rs 250. Cancel anytime.</h3>
    <p className='font-bold text-center my-5 '  >Ready to watch? Enter your email to create or restart your membership.</p>

    <div >
  <input type="email" name="email" placeholder="Email Address"
  className='bg-[#1d1e1e] text-white text-lg py-3 px-3 w-96 rounded-md opacity-80 border hover:ring-1'
  />
  <button className=' ml-3 bg-[red]  py-4 px-4 w-52 rounded  mb-5\\  text-xl'>Get Started</button>
</div >

</div>


    </div>
    </>
  )
}

export default HeroSection