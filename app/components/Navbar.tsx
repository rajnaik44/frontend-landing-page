import Image from 'next/image'
import React from 'react'
import Arrow from '../../public/assets/icons/arrow.svg';
import DropDown from '../../public/assets/icons/drop-down-icon.svg';


const navLinks = [
    {name: "About"},
    {name: "News"},
    {name: "Services"},
    {name: "Our Team"},
    {name: "Make Enquiry"},
];

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-10 z-10  bg-white fixed inset-x-0 top-0 mx-auto  py-5 lg:top-6 lg:mx-10 lg:px-14 lg:py-7'>
      <div className="hidden lg:flex gap-x-[40px]">
            {navLinks.map((item,index)=>(
                <p className='text-[#36485c] font-medium cursor-pointer ' key={index}>{item.name}</p>
            ))}

        </div>
      <div className='flex items-center gap-x-4 border-r-2 border-2 border-black bg-[#FFFCFA] px-4 py-2'>
        <p>Contact us</p>
        <Image src={Arrow} alt='Arrow_Icon' />
      </div>

      <div className='lg:hidden'>
        <Image src={DropDown} alt='dropdown'/>
      </div>
    </nav>
  )
}

export default Navbar
