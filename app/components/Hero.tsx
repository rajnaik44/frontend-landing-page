import Image from 'next/image'
import React from 'react'
import Heroimage from '../../public/assets/images/Hero-Image.png'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='hero-conatiner'>
      <Navbar />

    <div className='absolute hero-content flex mt-[15rem] ml-[4rem] lg:mt-[25rem] lg:ml-[9rem]'>
      
      <div className='w-3/4 text-white' >
        <h3 className='text-base'>Welcome To TenTwenty Farms</h3>
        <h1 className='text-6xl'>From our Farms to your hands</h1>
          
      </div>
    </div>
        
        
      
    </div>
  )
}

export default Hero
