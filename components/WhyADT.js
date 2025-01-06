"use client";

import Image from "next-export-optimize-images/image";
import leftbg from "@/public/images/adtbg.jpg";
import Link from "next/link";
import CallButton from "./CallButton";
const WhyADT = () => {
  const listItems = ["24/7 professional monitoring", "Smart cameras, sensors, and door locks", "Instant alerts via the ADT app", "Expert installation and support"];
  return (
    <div className="bg-adt-blue">
      <div className="grid md:grid-cols-2">
        <div className="col-span-1 ">
          <Image src={leftbg} alt="left-bg" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 bg-adt-blue p-[16px] md:p-[24px] lg:p-[30px] xl:p-[60px] 2xl:p-[90px]">
          <div className="flex flex-col justify-center h-full w-full max-w-full xl:max-w-[530px]">
            <h2 className=" font-extrabold text-white text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] leading-[120%] mb-[10px]">Why ADT?</h2>
            <p className=" font-regular text-[18px] leading-[28px] text-white mb-[20px] md:mb-[24px] lg:mb-[28px] xl:mb-[30px]">
              Choosing ADT means choosing a leader in home security with over 145 years of experience. ADT’s trusted solutions are designed to protect your home, loved ones, and property with cutting-edge technology and around-the-clock monitoring. With ADT,
              you can have peace of mind knowing that your home is protected by a company that takes your safety seriously.
            </p>
            <ul className="flex flex-col gap-[14px] mb-[20px] md:mb-[24px] lg:mb-[28px] xl:mb-[30px]">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="list-none pl-[38px] relative before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:bg-[url('/images/liCheck.png')] before:z-10 before:content-[''] before:h-[26px] before:w-[26px] before:bg-cover  font-extrabold text-white md:text-[18px] lg:text-[20px] leading-[26px]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-start">
              <CallButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyADT;
