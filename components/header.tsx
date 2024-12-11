"use client"
import React from 'react'
import Image from 'next/image' 
import { CiSearch } from "react-icons/ci";
import { PiSlidersHorizontalThin } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";






const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <header className="w-full px-4 sm:px-8 lg:px-16 ">
      {/* Top Container */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full pt-8">
        {/* Logo and Icons */}
        <div className="w-auto flex justify-between items-center sm:w-full">
          {/* Brand Logo */}
          <p className=" text-[#3563E9] font-bold text-2xl">
            MORENT
          </p>

          {/* Icons */}
          <div className="w- auto flex items-center gap-4">
            <IoNotifications className=" hidden sm:block text-xl" />
            <FaHeart className=" hidden sm:block text-xl" />
            <IoSettingsSharp className=" hidden sm:block text-xl" />
            <Image src="./images/icon.svg" alt="icon" width={24} height={24} />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 mt-4 sm:mt-0 w-full sm:w-auto">
          <div className="flex items-center w-[263px] h-[48px] sm:w-full  border border-gray-300 rounded-lg gap-2 px-2">
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


             {/* Icon with onClick event */}
      <PiSlidersHorizontalThin size={24}
              onClick={toggleMenu}
              className="cursor-pointer"/>
    
          </div>
        </div>
      </div>
        {/* Dropdown Menu */}
        {menuVisible && (
        <ul className="w-[273px] sm:w-full flex justify-center items-center gap-4 mt-4 bg-gray-100 p-4 rounded-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="./Category">Category</Link></li>
          <li><Link href="./CarRent">Car Rent</Link></li>
          <li><Link href="./Payments">Payments</Link></li>
        </ul>
      )}
    </header>
  );
};

export default Header;







