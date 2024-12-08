import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='m-4'>
        <div className='md:flex justify-between items-center'>
        <div className='w-[216px] h-[92px]'>
            <h1 className='font-bold text-2xl text-[#3563E9]' >MORENT</h1>
            <p className='font-medium text-xs text-[#90A3B5]'> Our vision is to provide convenience and help increase your sales business.</p>
        </div>
        <div className='flex justify-between items-center'>
        <div className='w-[142px] h-[192px]'>
            <ul>
                <h2 className='font-semibold text-xl'>About</h2>
                <li className='font-medium text-base text-[#90A3B5]' >How it works</li>
                <li className='font-medium text-base text-[#90A3B5]'>Featured</li>
                <li className='font-medium text-base text-[#90A3B5]'>Partnership</li>
                <li className='font-medium text-base text-[#90A3B5]'>Business Relation</li>
                
                <li></li>
            </ul>


        </div >

        <div className='w-[142px] h-[192px]'>
            <ul>
                <h2 className='font-semibold text-xl'>Socials</h2>
                <li className='font-medium text-base text-[#90A3B5]' >Discord</li>
                <li className='font-medium text-base text-[#90A3B5]'>Instagram</li>
                <li className='font-medium text-base text-[#90A3B5]'>Twitter</li>
                <li className='font-medium text-base text-[#90A3B5]'>Facebook</li>
                
                <li></li>
            </ul>


        </div ></div>
        <div className='w-[142px] h-[192px]'>
            <ul>
                <h2 className='font-semibold text-xl'>Community</h2>
                <li className='font-medium text-base text-[#90A3B5]' >Events</li>
                <li className='font-medium text-base text-[#90A3B5]'>Blog</li>
                <li className='font-medium text-base text-[#90A3B5]'>Podcast</li>
                <li className='font-medium text-base text-[#90A3B5]'>Invite a friend</li>
                
                <li></li>
            </ul>


        </div >
        </div>

<div className='md:flex justify-between items-center'>
        <div className='w-[327px] h-[20px] flex justify-between items-center font-semibold text-xs'>
            <span >Privacy & Policy</span>
            <span>Terms & Condition</span>
        </div>
        <div className='w-[327px] h-[20px] flex font-semibold text-xs'>
        <FaRegCopyright/>
        <p>2022MORENT.All Rights Reserved</p>
        </div>
</div>
      
    </div>
  )
}

export default Footer
