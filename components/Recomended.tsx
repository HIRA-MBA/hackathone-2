import React from 'react'
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { BsFuelPumpFill } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { FaCircleDot } from "react-icons/fa6";

const Recomended = ({carname,cartype,fuel,type,people,price,Avg,img}:
    {carname:string,cartype:string,fuel:string,type:string,people:string,price:string,Avg?:string ,img:string}) => {
  return (
    <div className='bg-white'>
          <div className='w-[327px] h-[240px] '>
        <div className='w-[288px] h-[24px] flex justify-between'>
      <div className='w-[120px] h-[38px]'>
        <p className='font-semibold text-base'>{carname}</p>
        <p className='font-medium text-xs text-[#90A3BF]'>{cartype}</p>
      </div>
      <div className='mt-3'>
      <FaHeart color='ED3F3F'/>
      </div></div>
      <div className=' flex justify-center items-center'>
<div className='pt-[42px] pr-[40px] '>
      <Image src={img} alt='car' width={168 } height={88 } /></div>
      
<div className='w-[74px] h-[77px] flex flex-col mt-4'>
<div className='w-[70px] h-[14px] flex  text-[#90A3BF] gap-2  '>
    <BsFuelPumpFill/>
    <p className='w-[24px] h-[14px] flex font-medium text-xs text-[#90A3BF]' >{fuel}</p>
</div>
<div className="w-[70px] h-[14px] flex font-medium text-xs text-[#90A3BF] mt-2 gap-2 ">
    < FaCircleDot />
    <p>{type}</p>
</div>

<div className='w-[70px] h-[14px] flex font-medium text-xs text-[#90A3BF] mt-2 gap-2 '>

    < MdPeopleOutline/>
    <p>{people}</p>
</div>
</div>
</div>

<div className='w-[288px] h-[44px] flex  justify-between mt-4'>
    <div className='flex flex-col w-[88px] h-[40px] '>
  <div className='flex  w-[88px] h-[20px] '>
    <span>${price}</span>
    <span>/</span>
    <span>day</span></div>
    <p className='font-medium text-xs text-[#92A3BF]'>{Avg}</p></div>
    <button className='text-white bg-[#3563E9] font-semibold text-xs w-[100px] h-[36px] rounded-md'>Rental Now</button>
</div>
    </div>
      
    </div>
  )
}

export default Recomended