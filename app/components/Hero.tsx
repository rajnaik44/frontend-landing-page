'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import Heroimage from '../../public/assets/images/Hero-Image.png'
import Heroimage1 from '../../public/assets/images/Hero-Image1.png'
import Heroimage2 from '../../public/assets/images/Hero-Image2.png'
import Heroimage3 from '../../public/assets/images/Hero-Image3.png'
import Navbar from './Navbar'
import NextImage from '../../public/assets/images/next-slide-image.png'
import Slider from "react-slick";

const Hero = () => {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  
  

  const images:any[] = [Heroimage, Heroimage1, Heroimage2,Heroimage3]; 
  const totalSlides = images.length;

 const sliderRef = useRef<Slider | null>(null);
  
  const next = () => {
    setLoading(true);
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    // slidesToScroll: 1,
    // vertical: true,
    // verticalSwiping: true,
    beforeChange: (current:number, next:number) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current: number) => setActiveSlide2(current),
    // setLoading(false);
  };


  return (
    <div>
      <Navbar />

    <div className='absolute  hero-title-container z-10 flex mt-[16rem] ml-[4rem] sm:mt-[19rem] md:mt-[19rem] lg:mt-[22rem] lg:ml-[9rem]'>
      
      <div className='w-9/12 lg:w-3/5' >
        <h3 className='h3-title mb-6'>Welcome To TenTwenty Farms</h3>
        <h1 className='h1-m-title lg:h1-title'>From our Farms to your hands</h1>
          
      </div>
    </div>

    <div onClick={next} className='hero-button-container absolute z-10 opacity-6 gap-5 flex mt-[35rem] ml-[4rem] lg:mt-[40rem] lg:ml-[9rem]'>
      <div className='absolute top-12 left-10'>
        <p className='captions'>Next</p>
      </div>
      
      <div className='p-5 border border-[#EEF4F9]'>
      <Image src={NextImage} alt='image_icon' />
      </div>

      <div className='flex number-muted items-center gap-4'>
        <p>0{activeSlide}</p>
        {/* <p>01</p> */}
        <hr className='w-20' />
        {/* <p>04</p> */}
        <p>0{totalSlides}</p>

      </div>
    </div>

    <div>

    </div>
    <Slider ref={sliderRef} {...settings}>
      {images.map((image, index) => (
        <div key={index} className='h-screen w-screen p-0 m-0'>
          <Image className='h-screen w-screen p-0 m-0' src={image} alt={`hero image ${index}`} layout='contain' />
        </div>
      ))}
    </Slider>

    <style jsx>{`
    @media only screen and (max-width: 1368px) and (max-height: 655px) {
  .hero-title-container {
    margin-top: 15rem;
  }
    .hero-button-container{
     margin-top: 30rem;
    }
}
      
    `}</style>
        
      
    </div>
  )
}

export default Hero
