'use client'
import Image from 'next/image'
import React from 'react'
import Heroimage from '../../public/assets/images/Hero-Image.png'
import Navbar from './Navbar'
import NextImage from '../../public/assets/images/next-slide-image.png'

const Hero = () => {
  return (
    <div className='hero-conatiner'>
      <Navbar />

    <div className='absolute hero-content flex mt-[16rem] ml-[4rem] sm:mt-[19rem] md:mt-[19rem] lg:mt-[22rem] lg:ml-[9rem]'>
      
      <div className='w-9/12 lg:w-3/5' >
        <h3 className='h3-title mb-6'>Welcome To TenTwenty Farms</h3>
        <h1 className='h1-m-title lg:h1-title'>From our Farms to your hands</h1>
          
      </div>
    </div>

    <div className='absolute opacity-6 gap-5 flex mt-[35rem] ml-[4rem] lg:mt-[40rem] lg:ml-[9rem]'>
      <div className='absolute top-12 left-10'>
        <p className='captions'>Next</p>
      </div>
      <div className='p-5 border border-[#EEF4F9]'>
      <Image src={NextImage} alt='image_icon' />
      </div>

      <div className='flex number-muted items-center gap-4'>
        <p>01</p>
        <hr className='w-20' />
        <p>04</p>

      </div>
    </div>
        


        
      
    </div>
  )
}

export default Hero
