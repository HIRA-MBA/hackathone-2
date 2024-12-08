import React from 'react'
import { FaCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Purpose = () => {
    return (
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        {/* Pick-Up Section */}
        <div className="w-[327px] lg:w-auto lg:flex-1 h-auto">
          <div className="w-[327px] lg:w-auto h-[120px]">
            <div className="w-[295px] h-[88px] mx-auto">
              <div className="flex items-center gap-2 w-[120px] h-[24px]">
                <FaCircle color="#3563E9" />
                <p className="font-semibold text-base">Pick-Up</p>
              </div>
  
              <div className="flex justify-between w-full mt-2">
                <div className="w-[76px] lg:w-[100px]">
                  <p className="font-bold text-base">Locations</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Semarang"
                      className="text-xs w-[60px] lg:w-[80px] border-b border-gray-300 outline-none"
                    />
                    <RiArrowDropDownLine />
                  </div>
                </div>
                <div className="w-[87px] lg:w-[120px]">
                  <p className="font-bold text-base">Date</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="21 July 2022"
                      className="text-xs w-[60px] lg:w-[100px] border-b border-gray-300 outline-none"
                    />
                    <RiArrowDropDownLine />
                  </div>
                </div>
                <div className="w-[52px] lg:w-[80px]">
                  <p className="font-bold text-base">Time</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="01.00"
                      className="text-xs w-[36px] lg:w-[60px] border-b border-gray-300 outline-none"
                    />
                    <RiArrowDropDownLine />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Drop-Off Section */}
        <div className="w-[327px] lg:w-auto lg:flex-1 h-auto">
          <div className="w-[327px] lg:w-auto h-[120px]">
            <div className="w-[295px] h-[88px] mx-auto">
              <div className="flex items-center gap-2 w-[114px] h-[24px]">
                <FaCircle color="#3563E9" />
                <p className="font-semibold text-base">Drop-Off</p>
              </div>
  
              <div className="flex justify-between w-full mt-2">
                <div className="w-[76px] lg:w-[100px]">
                  <p className="font-bold text-base">Locations</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Semarang"
                      className="text-xs w-[60px] lg:w-[80px] border-b border-gray-300 outline-none"
                    />
                    <RiArrowDropDownLine />
                  </div>
                </div>
                <div className="w-[87px] lg:w-[120px]">
                  <p className="font-bold text-base">Date</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="21 July 2022"
                      className="text-xs w-[60px] lg:w-[100px] border-b border-gray-300 outline-none"
                    />
                    <RiArrowDropDownLine />
                  </div>
                </div>
                <div className="w-[52px] lg:w-[80px]">
                  <p className="font-bold text-base">Time</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="01.00"
                      className="text-xs w-[36px] lg:w-[60px] border-b border-gray-300 outline-none"
                    />
                    <RiArrowDropDownLine />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Purpose;
  
