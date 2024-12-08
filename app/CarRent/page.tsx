import React from 'react'
import Image from 'next/image'
import { IoIosCheckbox } from "react-icons/io";
import { GrCheckbox } from "react-icons/gr";
import { IoCheckbox } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";
import Popularcar from '@/components/popularcar';
import Recomended from '@/components/Recomended';
import Link from 'next/link'


const CarRent = () => {
  return (
    <div className='md:flex' >
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
            <p className='text-xs text-[#90A3BF]'>Price</p>
            <Image src={'./images/Line2.svg'} alt="line" width={168} height={5}/>
            <div className='flex text-xl text-[#596788]'>
            <p>Max. $100.00</p></div>
            </div>
            </div> 
            </div>
             <div className='w-3/4 '>
             <div className="flex flex-col md:flex-row md:space-x-4 w-full p-4 bg-gray-100">
  {/* First Section */}
  <div className="w-full md:w-1/2 lg:w-1/3 p-2">
    <div className="w-full h-auto bg-[#3635E9] text-white p-4 rounded-md">
      <h2 className="font-semibold text-base">
        Sports car with the best design and acceleration
      </h2>
      <p className="font-medium text-xs mt-2">
        Safety and comfort while driving a futuristic and elegant sports car
      </p>
      <div className="flex justify-center mt-4">
        <Image
          src="./images/carrent/car8.svg"
          alt="car"
          width={190}
          height={60}
        />
      </div>
    </div>
    <div className="w-full h-auto flex justify-between items-center mt-4 space-x-2">
      <Image
        src="./images/carrent/car8.svg"
        alt="car"
        width={80}
        height={64}
        
      />
      <Image
        src="./images/carrent/steering.svg"
        alt="steering"
        width={96}
        height={64}
        className="rounded-md"
      />
      <Image
        src="./images/carrent/interior.svg"
        alt="interior"
        width={96}
        height={64}
        className="rounded-md"
      />
    </div>
  </div>

  {/* Second Section */}
  <div className="w-full md:w-1/2 lg:w-2/3 p-2">
    <div className="w-full h-auto p-4 bg-white shadow-md rounded-md">
      <p className="font-bold text-xl">Nissan GT - R</p>
      <div className="flex items-center mt-2 space-x-1">
        <FaStar color="#FBAD39" />
        <FaStar color="#FBAD39" />
        <FaStar color="#FBAD39" />
        <FaStar color="#FBAD39" />
        <FaStar />
        <p className="font-medium text-xs text-[#90A3B5]">440+ Reviewer</p>
      </div>
      <p className="text-xs text-[#90A3B5] mt-4">
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track".
      </p>
      <div className="flex flex-wrap justify-between mt-4">
        <div className="flex justify-between w-[48%]">
          <p className="text-medium text-xs text-[#90A3BF]">TypeCar</p>
          <p className="font-semibold text-xs">Sports</p>
        </div>
        <div className="flex justify-between w-[48%]">
          <p className="text-medium text-xs text-[#90A3BF]">Capacity</p>
          <p className="font-semibold text-xs">2 Person</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-4">
        <div className="flex justify-between w-[48%]">
          <p className="text-medium text-xs text-[#90A3BF]">Steering</p>
          <p className="font-semibold text-xs">Manual</p>
        </div>
        <div className="flex justify-between w-[48%]">
          <p className="text-medium text-xs text-[#90A3BF]">Gasoline</p>
          <p className="font-semibold text-xs">70L</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <div className="flex items-center space-x-1">
            <span className="font-bold text-xs">$80.00/</span>
            <span className="font-bold text-xs text-[#90A3B5]">days</span>
          </div>
          <p className="font-bold text-xs text-[#90A3B5]">$100.00</p>
        </div>
        <button className="w-[146px] h-[56px] bg-[#3563E9] text-white font-bold text-xs rounded-md">
          Rent Now
        </button>
      </div>
    </div>
  </div>
</div>

            <div className='w-[327px] h-[384px]'>
            <div className='w-[136px] h-[28px]' >
                <span className='font-semibold text-xl'>Reviews</span> 
                <span className='font-bold text-sm text-white bg-[#3563E9]'>13</span>
                
            </div>
            <div  className='w-[327px] h-[44px] flex justify-evenly items-center m-2'>
                <Image src={'./images/icon.svg'} alt='p1' width={44} height={44}/>
                <div className='w-[120px] h-[44px]'>
                    <p className='font-semibold text-base'>Alex Stanton</p>
                    <p className='font-medium text-xs text-[#90A3B5]'>CEO at Bukalapak</p>
                </div>
                <div className='w-[80px] h-[44px]'>
                    <p className='font-medium text-xs text-[#90A3B5]'>21 July 2022</p>
                    <div className=' w-[174px] h-[16px] flex'>
                <FaStar color='#FBAD39' />
                <FaStar color='#FBAD39'/>
                <FaStar color='#FBAD39'/>
                <FaStar color='#FBAD39'/>                
                <FaStar/>
               
            </div> 

                    
                </div>
                
            </div>
            <p className='w-[243px] h-[48px] text-xs m-2 text-[#90A3B5]'>We are very happy with the service from the MORENT App. Morent has a low price . . . </p>

            <div  className='w-[327px] h-[44px] flex justify-evenly items-center m-2'>
                <Image src={'./images/carrent/girl.svg'} alt='p1' width={44} height={44}/>
                <div className='w-[120px] h-[44px]'>
                    <p className='font-semibold text-base'>Skylar Dias</p>
                    <p className='font-medium text-xs text-[#90A3B5]'>CEO at Amazon</p>
                </div>
                <div className='w-[80px] h-[44px]'>
                    <p className='font-medium text-xs text-[#90A3B5]'>20 July 2022</p>
                    <div className=' w-[174px] h-[16px] flex'>
                <FaStar color='#FBAD39' />
                <FaStar color='#FBAD39'/>
                <FaStar color='#FBAD39'/>
                <FaStar color='#FBAD39'/>                
                <FaStar/>
               
            </div> 

                    
                </div>
                
            </div>
            <p className='w-[243px] h-[48px] text-xs m-2 text-[#90A3B5]'>We are greatly helped by the services of the MORENT Application. Morent has a low . . .</p>
           <div className='w-[327px] h-[40px] flex justify-center items-center'>
            <div className='w-[130px] h-[40px] flex'>  
                <p className='font-medium text-sm text-[#90A3BF]'>Show All                    </p>
                <RiArrowDropDownLine/>
                </div></div>

            </div>
            <div className=' w-[327px] h-[20px] flex justify-between items-center'>
            <h2 className='font-semibold text-sm  text-[#90A3B5]'>Recent Cars</h2>
            < p className='font-semibold text-xs  text-[#3563E9]'>View All</p>
            </div>
            {/* Responsive Popular Cars */}
<div className="mt-4 w-full">
  {/* Show only 1 Popularcar on small screens */}
  <div className="sm:hidden">
    <Popularcar 
      carname="Koenigsegg" 
      cartype="sports" 
      img="/images/HeroCar.svg" 
      fuel="90L" 
      type="manual" 
      people="2" 
      price="99.00" 
    />
  </div>

  {/* Flex layout for larger screens, covering full width */}
  <div className="hidden sm:flex flex-wrap gap-4 w-full">
    <Popularcar 
      carname="Koenigsegg" 
      cartype="sports" 
      img="/images/HeroCar.svg" 
      fuel="90L" 
      type="manual" 
      people="2" 
      price="99.00" 
    />
    <Popularcar 
      carname="Nissan GT - R" 
      cartype="sports" 
      img="/images/car2.svg" 
      fuel="80L" 
      type="Manual" 
      people="2" 
      price="80.00" 
      Avg="$100.00" 
    />
    <Popularcar 
      carname="Rolls - Royce" 
      cartype="sedan" 
      img="/images/Car3.svg" 
      fuel="70L" 
      type="manual" 
      people="4" 
      price="96.00" 
    />
    <Popularcar 
      carname="Rolls - Royce" 
      cartype="sports" 
      img="/images/Car4.svg" 
      fuel="80L" 
      type="manual" 
      people="2" 
      price="80.00" 
    />
  </div>
  <div className=' w-[327px] h-[20px] flex justify-between items-center'>
            <h2 className='font-semibold text-sm  text-[#90A3B5]'>Recomdation Car</h2>
            < p className='font-semibold text-xs  text-[#3563E9]'>View All</p>
            </div>
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
</div>
            
    
  )
}

export default CarRent
