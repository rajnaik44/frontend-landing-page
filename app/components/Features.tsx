'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Image0 from '../../public/assets/images/slider-image-0.png'
import Image2 from '../../public/assets/images/slider-image-2.png'
import Image1 from '../../public/assets/images/slider-imgae-1.png'
import Slider  from 'react-slick';

const Features = () => {

  const [activeSlide, setActiveSlide] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  const handleAfterChange = (index:any) => {
    setActiveSlide(index);
    setAnimateText(true);
    setTimeout(() => {
      setAnimateText(false);
    }, 500); 
  };

  const images:any[] = [Image0, Image1, Image2]; 

  const settings = {
    afterChange: handleAfterChange,
    
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false, 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false, 
        }
      }
    ]

  };
  return (
    <div className='mb-20'>
        <div className='mx-auto w-[20rem] pb-5 text-center mt-40 mb- md:w-[28rem]  lg:w-[35rem]'>

            <h2 className='h2-title mb-16' >Quality Products</h2>
            <p className='captions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        {/* <div className='flex items-center justify-center gap-10 mb-10'>
            
            
            
        </div> */}
        <div className="items-center pb-20">
        <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index} className='slider-image-container px-5 cursor-move pb-10 '>
              <Image className='slider-image' src={image} alt='slider image'  />
            </div>
          );
        })}
      </Slider>

      <div className={`text-center pb-24 ${animateText ? 'animate-text' : ''}`}>
        <h2 className='h2-heading mb-8'>Client 1</h2>
        <p className='captions'>Dubai, United Arab Emirates</p>
      </div>

      <style jsx>{`
      
        // .slider-image{
        //   width: 100%;
        //   object-fit:conver
        // }
        // .rotate-left {
        //   transform: rotate(-30deg);
        // }
        // .rotate-right {
        //   transform: rotate(30deg);
        // }
        .animate-text {
          animation: moveUp 0.9s ease-out forwards;
        }
        @keyframes moveUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
</div>
    
  )
}

export default Features
