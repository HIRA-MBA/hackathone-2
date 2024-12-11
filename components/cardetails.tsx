import React from 'react'
import { IoIosCheckbox } from 'react-icons/io'
import { GrCheckbox } from 'react-icons/gr'
import { Slider } from './ui/slider'
import { IoCheckbox } from 'react-icons/io5'

const Cardetails = () => {
  return (
    <div>
          <div className='hidden sm:block  h-full font-semibold'>
            <div>
            <p className='text-xs text-[#90A3BF]'>Type</p>
            <div className='flex text-xl text-[#596788]'>
            <IoIosCheckbox color='#6563E9'/><p> Sports (10)</p></div>
            <div className='flex text-xl text-[#596788]'>
            <IoIosCheckbox color='#6563E9'/><p> SUV (12)</p></div>
            <div className='flex text-xl text-[#596788]' >
            <GrCheckbox /><p>MPV (16)</p></div>
            <div className='flex text-xl text-[#596788]'>
            <GrCheckbox /><p>Sedan (20) </p></div>
            <div className='flex text-xl text-[#596788]'>
            <GrCheckbox /><p>Coupe(14)</p></div>
            <div className='flex text-xl text-[#596788]'>
            <GrCheckbox /><p> Hatchback (14)</p></div></div>

            <div className='mt-4'>
            <p className='text-xs text-[#90A3BF]'>Capacity</p>
            <div className='flex text-xl text-[#596788]'>
            <IoIosCheckbox color='#6563E9'/><p> 2 Person (10)</p></div>
            <div className='flex text-xl text-[#596788]'>
            <GrCheckbox /><p> 4 Person (14)</p></div>           
            <div className='flex text-xl text-[#596788]'>
            <GrCheckbox /><p>6 Person (12) </p></div>
            <div className='flex text-xl text-[#596788]'>
            <IoCheckbox color='#6563E9' /><p>8 or More(16)</p></div>

            
            <div className='mt-4'>
            <p className='text-xs text-[#90A3BF]'>Price</p>
            <Slider defaultValue={[33]} max={100} step={1} />
            
            <div className='flex text-xl text-[#596788]'>
            <p>Max. $100.00</p></div>
            </div>
            </div> 
            </div>
      
    </div>
  )
}

export default  Cardetails

