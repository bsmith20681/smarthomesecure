"use client";

import Link from "next/link";
import React from "react";
import Image from "next-export-optimize-images/image";
import { PhoneIcon } from "@heroicons/react/24/solid";
import phone from "@/public/images/phone.png";
const CtaBanner = () => {
  return (
    <div className="bg-adt-blue relative py-[28px] sm:py-[32px] md:py-[50px] lg:py-[60px] xl:py-[76px] after:absolute after:contetent-['] after:top-0 after:left-0 after:bg-[url('/images/lineCircle.png')] after:z-10 after:w-full after:h-full after:bg-no-repeat ">
      <div className="container">
        <div className="relative z-20 flex flex-col lg:flex-row justify-between">
          <div className="flex items-center w-full max-w-[full] lg:w-3/4 2xl:w-[980px] lg:border-r-[1px] lg:border-[#5495c6] py-[10px]">
            <h2 className="lg:pr-[24px] xl:pr-[30px] font-manrope font-extrabold text-white text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] leading-[120%] max-lg:text-center">Protect Your Loved Ones With An ADT Home Security System</h2>
          </div>
          <div className="w-full max-w-[full] lg:w-1/4 2xl:w-[320px] flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-[10px] max-lg:mt-[24px]">
            <div className="lg:ml-auto">
              <a
                href="tel:18332247221"
                className="flex text-center justify-center items-center font-manrope font-extrabold text-[18px] leading-[150%] text-white bg-transparent border-[3px] border-solid border-white px-[20px] md:px-[24px] lg:px-[28px] xl:px-[38px] py-[12px] md:py-[14px] lg:mb-[12px] hover:duration-300 hover:bg-white hover:text-[#00233d]"
              >
                <PhoneIcon className="h-4 w-4 mr-[10px]" />
                833-224-7221
              </a>
            </div>
            <div className="lg:ml-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
