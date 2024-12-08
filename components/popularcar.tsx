import React from 'react'
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { BsFuelPumpFill } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { FaCircleDot } from "react-icons/fa6";


const Popularcar = ({carname,cartype,img,fuel,type,people,price,Avg}:{carname:string,
  cartype:string,img:string,fuel:string,type:string,people:string,price:string,Avg?:string}) => {
  return (
    <div className='bg-white  '>
        <div className='w-[288px] h-[24px] lg:w-[325px] flex justify-between '>
      <div className='w-[56px] lg:w-[120px] h-[24px]'>
        <p className='font-semibold text-base'>{carname}</p>
        <p className='font-medium text-xs text-[#90A3BF]'>{cartype}</p>
      </div>
      <div className='mt-3'>
      <FaHeart color='ED3F3F'/>
      </div>
      </div>
<div className='pt-[42px] pr-[40px] '>
      <Image src={img} alt='car' width={180 } height={56 } /></div>
      
<div className='w-[204px] h-[14px] lg:w-full flex justify-evenly mt-2'>
<div className='w-[48px] h-[14px] flex  text-[#90A3BF]   '>
    <BsFuelPumpFill/>
    <p className='w-[24px] h-[14px] flex font-medium text-xs text-[#90A3BF]' >{fuel}</p>
</div>
<div className="w-[60px] h-[14px] flex font-medium text-sm text-[#90A3BF] ">
    < FaCircleDot />
    <p>{type}</p>
</div>

<div className='w-[72px] h-[14px] flex font-medium text-sm text-[#90A3BF] '>

    < MdPeopleOutline/>
    <p>{people}</p>
</div>
</div>


<div className='w-[288px] h-[44px] flex  justify-between mt-4'>
    <div className='flex flex-col w-[88px] h-[40px] '>
  <div className='flex  w-[88px] h-[20px] '>
    <span>${price}</span>
    <span>/</span>
    <span>day</span></div>
    <p className='font-medium text-xs text-[#92A3BF]'>{Avg}</p></div>
    <button className='text-white bg-[#3563E9] font-semibold text-xs w-[100px] h-[36px] rounded-md'>Rent Now</button>
</div>
    </div>
  )
}

export default Popularcar

