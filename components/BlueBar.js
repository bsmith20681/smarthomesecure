"use client";

import React from "react";
import Image from "next/image";
import Calendar from "@/public/images/calendar.png";
import Building from "@/public/images/building.png";
import Mobile from "@/public/images/mobile.png";

const BlueBar = () => {
  return (
    <div className="blue-bar-main bg-[#00233D]">
      <div className="container">
        <div className="blue-bar-section max-w-[1110px] mx-auto py-[10px] lg:py-[20px] xl:pt-[35px] xl:pb-[30px]">
          <div className="blue-bar-list flex flex-col sm:flex-row sm:flex-wrap md:items-center justify-center">
            <div className="blue-bar-item flex items-center sm:basis-[30%] xl:basis-[unset] my-[15px] sm:my-[20px] sm:pr-[30px] lg:pr-[40px] xl:pr-[75px] sm:mr-[30px] lg:mr-[40px] xl:mr-[100px] relative sm:before:'' sm:before:absolute sm:before:h-full sm:before:w-[1px] sm:before:bg-white-30 sm:before:top-0 sm:before:bottom-0 sm:before:right-0">
              <div className="blue-bar-item-left mr-[15px] lg:mr-[20px] full-70">
                <div className="blue-bar-item-img w-full">
                  <Image src={Calendar} alt="img" className="w-full text-white" />
                </div>
              </div>
              <div className="blue-bar-item-right full-minus-70">
                <div className="blue-bar-item-title mb-[3px]">
                  <p className="m-0 font-manrope font-extrabold text-[22px] md:text-[26px] lg:text-[32px] xl:text-[40px] leading-[120%] text-white">149 years</p>
                </div>
                <div className="blue-bar-item-text">
                  <p className="m-0 font-manrope font-medium text-[16px] lg:text-[18px] leading-[120%] text-white">in business</p>
                </div>
              </div>
            </div>
            <div className="blue-bar-item flex items-center sm:basis-[30%] xl:basis-[unset] my-[15px] sm:my-[20px] sm:pr-[30px] lg:pr-[40px] xl:pr-[75px] sm:mr-[30px] lg:mr-[40px] xl:mr-[100px] relative sm:before:'' sm:before:absolute sm:before:h-full sm:before:w-[1px] sm:before:bg-white-30 sm:before:top-0 sm:before:bottom-0 sm:before:right-0">
              <div className="blue-bar-item-left mr-[15px] lg:mr-[20px] full-70">
                <div className="blue-bar-item-img w-full">
                  <Image src={Building} alt="img" className="w-full text-white" />
                </div>
              </div>
              <div className="blue-bar-item-right full-minus-70">
                <div className="blue-bar-item-title mb-[3px]">
                  <p className="m-0 font-manrope font-extrabold text-[22px] md:text-[26px] lg:text-[32px] xl:text-[40px] leading-[120%] text-white">6</p>
                </div>
                <div className="blue-bar-item-text">
                  <p className="m-0 font-manrope font-medium text-[16px] lg:text-[18px] leading-[120%] text-white">monitoring centers</p>
                </div>
              </div>
            </div>
            <div className="blue-bar-item flex items-center sm:basis-[unset] xl:basis-[unset] my-[15px] sm:my-[20px] relative">
              <div className="blue-bar-item-left mr-[15px] lg:mr-[20px] full-50">
                <div className="blue-bar-item-img w-full">
                  <Image src={Mobile} alt="img" className="w-full text-white" />
                </div>
              </div>
              <div className="blue-bar-item-right full-minus-50">
                <div className="blue-bar-item-title mb-[3px]">
                  <p className="m-0 font-manrope font-extrabold text-[18px] md:text-[20px] lg:text-[24px] leading-[125%] text-white">
                    Remote <br /> Access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueBar;
