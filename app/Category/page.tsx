import React from 'react'
import Purpose from '@/components/purpose'
import Recomended from '@/components/Recomended'
import { IoIosCheckbox } from "react-icons/io";
import { GrCheckbox } from "react-icons/gr";
import { IoCheckbox } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';

const Category = () => {
  return (
    <div className='flex bg-[#C3D4E9]'>
        <ul className="w-[273px] md:w-full flex  justify-center items-center gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="./Category">Category</Link></li>
        <li><Link href="./CarRent">Car Rent</Link></li>
      </ul>

        <div className='hidden sm:block w-1/4  font-semibold bg-white'>
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
            <p className='text-xs text-[#90A3BF]'>Pice</p>
            <Image src={'./images/Line2.svg'} alt="line" width={168} height={5}/>
            <div className='flex text-xl text-[#596788]'>
            <p>Max. $100.00</p></div>
            </div>
            </div>     







         
        </div>
        <div className='w-3/4'>
        <Purpose/>
        {/* Responsive Layout for Recommended Cars */}
  <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
    <Recomended 
      carname="All New Rush" 
      cartype="suv" 
      fuel="70L" 
      type="manual" 
      people="6" 
      price="72.00" 
      Avg="80" 
      img="./images/recomCar/car1.svg" 
    />
    <Recomended 
      carname="CR - V" 
      cartype="suv" 
      fuel="80L" 
      type="manual" 
      people="6" 
      price="80.00" 
      img="./images/recomCar/car2.svg" 
    />
    <Recomended 
      carname="All New Terios" 
      cartype="suv" 
      fuel="90" 
      type="manual" 
      people="6" 
      price="76" 
      img="./images/recomCar/car3.svg" 
    />
    <Recomended 
      carname="CR - V" 
      cartype="suv" 
      fuel="80L" 
      type="manual" 
      people="6" 
      price="80" 
      img="./images/recomCar/car4.svg" 
    />
    <Recomended 
      carname="MG ZX Exclusive" 
      cartype="Hatchback" 
      fuel="70L" 
      type="manual" 
      people="4" 
      price="76" 
      Avg="80.00" 
      img="./images/recomCar/car5.svg" 
    />
    <Recomended 
      carname="New MG ZS" 
      cartype="suv" 
      fuel="80L" 
      type="manual" 
      people="6" 
      price="80.00" 
      Avg="90.00" 
      img="./images/recomCar/car4.svg" 
    />
    <Recomended 
      carname="MG ZX Excite" 
      cartype="Hatchback" 
      fuel="90L" 
      type="manual" 
      people="4" 
      price="74" 
      Avg="80" 
      img="./images/recomCar/car1.svg" 
    />
    <Recomended 
      carname="New MG ZS" 
      cartype="suv" 
      fuel="80L" 
      type="manual" 
      people="6" 
      price="80" 
      img="./images/recomCar/car5.svg" 
    />
    <Recomended 
      carname="CR - V" 
      cartype="suv" 
      fuel="80L" 
      type="manual" 
      people="6" 
      price="80.00" 
      img="./images/recomCar/car2.svg" 
    />
  </div>
  </div>
</div>
        
     
    
  )
}

export default Category
