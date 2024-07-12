import Image from 'next/image'
import React from 'react'
import Image0 from '../../public/assets/images/slider-image-0.png'
import Image2 from '../../public/assets/images/slider-image-2.png'
import Image1 from '../../public/assets/images/slider-imgae-1.png'

const Features = () => {
  return (
    <div className='mb-20'>
        <div className='mx-auto w-[312px] text-center mt-20 mb-10'>

            <h2 className='mb-5' >Quality Products</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className='flex items-center justify-center gap-10 mb-10'>
            <Image src={Image0} alt='slider image' width={100} height={100}/>
            <Image src={Image2} alt='slider image1' width={100} height={90}/>
            <Image src={Image1} alt='slider image2' width={100} height={90}/>
        </div>
        <div className='text-center pb-24'>
            <h2>Client 1</h2>
            <p>Dubai, United Arab Emirates</p>
        </div>
    </div>
  )
}

export default Features
