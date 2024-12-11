import React from 'react'
import { FaStar } from 'react-icons/fa'
import { RiArrowDropDownLine } from "react-icons/ri"
import Image from 'next/image'
import Popularcar from '@/components/popularcar'
import Cardetails from '@/components/cardetails'


const Page = () => {
  return (
    <div >
       
         <div className='flex gap-4'>
          <div className='sm:w-[25%]'>
          <Cardetails/></div>
           <div className='sm:w-[75%] '>
           <div >
           <div className=' sm:flex justify-center items-center  m-2  '>
            <div  >
            <div className='  sm:w-auto'>
            <div className="w-[327px] h-[232px] sm:w-[280px]  bg-pri text-white p-4 rounded-md ">
      <h2 className="font-semibold text-base">
        Sports car with the best design and acceleration
      </h2>
      <p className="font-medium text-xs mt-2">
        Safety and comfort while driving a futuristic and elegant sports car
      </p>
      <div className="flex justify-center mt-4">
        <Image          src="./images/carrent/car8.svg"          alt="car"          width={190}          height={60}
        />
      </div>
    </div>
    <div className="w-[328px] h-[64px] sm:w-[280px] flex justify-between items-center mt-4 space-x-2">
        <div className='w-[80px] h-[64px] bg-[#3563E9] flex justify-center items-center'>
      <Image        src="./images/carrent/car8.svg"        alt="car"        width={80}        height={64}        
      /></div>
      <Image
        src="./images/carrent/steering.svg"        alt="steering"        width={80}        height={64}
        className="rounded-md"      />
      <Image
        src="./images/carrent/interior.svg"        alt="interior"        width={80}        height={64}
        className="rounded-md"
      />
    </div>
    </div>
    </div>
    <div >
    <div className="w-[327px] h-[318px] p-4 bg-white shadow-md rounded-md sm:w-auto">
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
        NISMO has become the embodiment of Nissan &apos s outstanding performance,
        inspired by the most unforgiving proving ground, the &quot race track &quot
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
        <button className="w-[146px] h-[56px] bg-[#3563E9] text-white font-bold text-xs rounded-md sm:w-[100px] sm:h-[28px]">
          Rent Now
        </button>
      </div>
    </div>
    </div>

    </div>    



           
            
            <div className='w-[327px] h-[384px] mt-2  sm:w-3/4 justify-center items-center '>
            <div className='w-[136px] h-[28px] '>
                <span className='font-semibold text-xl'>Reviews</span> 
                <span className='font-bold text-sm text-white bg-[#3563E9]'>13</span>
                
            </div>
            <div  className='w-[327px] h-[44px] sm:w-full flex justify-evenly items-center mt-4 mb-4 '>
                <Image src={'./images/icon.svg'} alt='p1' width={44} height={44}/>
                <div className='w-[120px] h-[44px]'>
                    <p className='font-semibold text-base'>Alex Stanton</p>
                    <p className='font-medium text-xs text-[#90A3B5]'>CEO at Bukalapak</p>
                </div>
                <div className='w-[80px] h-[44px]'>
                    <p className='font-medium text-xs text-[#90A3B5]'>21 July 2022</p>
                    <div className=' w-[174px] h-[16px] flex'>
                <FaStar color='#FBAD39' />                <FaStar color='#FBAD39'/>                <FaStar color='#FBAD39'/>               <FaStar color='#FBAD39'/>                                <FaStar/>
               
            </div> 

                    
                </div>
                
            </div>
            <p className='w-[243px] h-[48px] text-xs m-2 text-[#90A3B5] sm:w-3/4 sm:text-xl mb-4'>We are very happy with the service from the MORENT App. Morent has a low price . . . </p>

            <div  className='w-[327px] h-[44px] sm:w-full flex justify-evenly items-center m-6'>
                <Image src={'./images/carrent/girl.svg'} alt='p1' width={44} height={44}/>
                <div className='w-[120px] h-[44px]'>
                    <p className='font-semibold text-base'>Skylar Dias</p>
                    <p className='font-medium text-xs text-[#90A3B5]'>CEO at Amazon</p>
                </div>
                <div className='w-[80px] h-[44px]'>
                    <p className='font-medium text-xs text-[#90A3B5]'>20 July 2022</p>
                    <div className=' w-[174px] h-[16px] flex'>
                <FaStar color='#FBAD39' />                <FaStar color='#FBAD39'/>                <FaStar color='#FBAD39'/>                <FaStar color='#FBAD39'/>                               <FaStar/>
               
            </div> 

                    
                </div>
                
            </div>
            <p className='w-[243px] h-[48px] text-xs m-2 text-[#90A3B5] sm:w-3/4 sm:text-xl'>We are greatly helped by the services of the MORENT Application. Morent has a low . . .</p>
           <div className='w-[327px] h-[40px]  m-4 flex justify-center items-center '>
            
                <p className='font-medium text-sm text-[#90A3BF] sm:text-base'>Show All                    </p>
                <RiArrowDropDownLine size={25}/>
                </div>
                </div>

            </div>
            <div className=' w-[327px] h-[20px] sm:w-auto flex justify-between items-center'>
            <h2 className='font-semibold text-sm  text-sec'>Recent Cars</h2>
            < p className='font-semibold text-xs  text-pri'>View All</p>
            </div>
            {/* Responsive Popular Cars */}
<div className="mt-4 w-full gap-1">
  {/* Show only 1 Popularcar on small screens */}


  {/* Flex layout for larger screens, covering full width */}
  <div className="w-auto sm:flex flex-wrap sm:w-full">
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

       <div className=' w-[327px] h-[20px] sm:w-auto flex justify-between items-center'>
            <h2 className='font-semibold text-sm  text-sec'>Recommended Cars</h2>
            < p className='font-semibold text-xs  text-pri'>View All</p>
            </div>

    <Popularcar carname="All New Rush" 
      cartype="suv" 
      fuel="70L" 
      type="manual" 
      people="6" 
      price="72.00" 
      Avg="80" 
      img="./images/recomCar/car1.svg" />
     <Popularcar    carname="CR - V" 
      cartype="suv" 
      fuel="80L" 
      type="manual" 
      people="6" 
      price="80.00" 
      img="./images/recomCar/car2.svg"  />
      <Popularcar   carname="New MG ZS" 
      cartype="suv" 
      fuel="80L" 
      type="manual" 
      people="6" 
      price="80" 
      img="./images/recomCar/car5.svg" />
  
  
  </div>
  </div>
  </div>
  </div>
             
      </div>
    


      

  )
}

export default Page

