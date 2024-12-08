import React from 'react'
import Image from 'next/image'

const Heroimage = () => {
    return (
      <div className="flex flex-col md:flex-row gap-6">
        {/* First Card */}
        <div className="bg-[#54A6FF] w-full sm:w-[327px] lg:w-1/2 h-[232px] text-white mt-6 rounded-md flex flex-col justify-center items-start p-6">
          <div className="w-full">
            <h1 className="font-semibold text-base lg:text-lg">
              The Best Platform for Car Rental
            </h1>
            <p className="font-medium text-sm lg:text-base pt-2">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
          </div>
          <button className="w-[128px] h-[44px] bg-[#3563E9] mt-4 text-sm lg:text-base">
            Rental Car
          </button>
          <Image src={'./images/HeroCar.svg'} alt="car" width={196} height={56} />
        </div>
  
        {/* Second Card - Hidden on Small Screens */}
        <div className="hidden sm:flex bg-[#3536E9] w-full sm:w-[327px] lg:w-1/2 h-[232px] text-white mt-6 rounded-md flex-col justify-center items-start p-6">
          <div className="w-full">
            <h1 className="font-semibold text-base lg:text-lg">
              Easy way to rent a car at a low price
            </h1>
            <p className="font-medium text-sm lg:text-base mt-2">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
          </div>
          <button className="w-[128px] h-[44px] bg-[#54A6FF] mt-4 text-sm lg:text-base">
            Rental Car
          </button>
          <Image src={'./images/car2.svg'} alt="car" width={196} height={56} />
        </div>
      </div>
    );
  };
  
  export default Heroimage;
  
  


