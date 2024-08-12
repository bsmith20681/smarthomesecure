"use client";

import Image from "next/image";
import leftbg from "@/public/images/adtbg.jpg";
import Link from "next/link";
const WhyADT = () => {
  const listItems = ["Flexibility and choice, backed by ADT experience", "Rest easy with 24/7 ADT SMART Monitoring", "The right system to fit your home and life", "Security that goes beyond the home"];
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
              Grounded in over 149 years of experience, ADT is one of the most trusted names in home security. ADT has helped protect more than 6 million customers in the US with 24/7 monitoring and fast emergency response times. On top of that, you can get
              features that complement your on-the-go-lifestyle, so you’re always in the loop.
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
            <div>
              <Link
                href="/"
                className="uppercase inline-block decoration-none bg-adt-orange outline-none text-white  font-extrabold text-[18px] leading-[27px] py-[12px] md:py-[14px] lg:py-[16px] xl:py-[14px] px-[24px] md:px-[38px] lg:px-[52px] xl:px-[66px] hover:bg-adt-orange-600 hover:duration-300"
              >
                read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyADT;
