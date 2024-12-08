import React from 'react'
import Image from 'next/image' 

import { Plus_Jakarta_Sans } from 'next/font/google';
import { CiSearch } from "react-icons/ci";
import { PiSlidersHorizontalThin } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],

});


const Header = () => {
  return (
    <header className="w-full px-4 sm:px-8 lg:px-16 ">
      {/* Top Container */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full pt-8">
        {/* Logo and Icons */}
        <div className="flex justify-between items-center w-full">
          {/* Brand Logo */}
          <p className={`${plusJakartaSans.className} text-[#3563E9] font-bold text-2xl`}>
            MORENT
          </p>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <IoNotifications className="text-xl" />
            <FaHeart className="text-xl" />
            <IoSettingsSharp className="text-xl" />
            <Image src="./images/icon.svg" alt="icon" width={24} height={24} />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 mt-4 sm:mt-0 w-full sm:w-auto">
          <div className="flex items-center w-full sm:w-[263px] h-[48px] border border-gray-300 rounded-lg gap-2 px-2">
            <div className="opacity-50">
              <CiSearch />
            </div>
            <input
              type="text"
              placeholder="Search something here"
              className="flex-grow font-semibold text-sm outline-none"
            />
          </div>

          <div className="flex items-center justify-center w-[48px] h-[48px] bg-gray-100 rounded-lg opacity-50">
            <PiSlidersHorizontalThin size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;







