"use client";

import Image from "next/image";
import Link from "next/link";
import CallButton from "./CallButton";

import BannerGoogle from "@/public/images/banner-google.png";
import BannerRating from "@/public/images/banner-rating.png";
import ADTsmall from "@/public/images/adt-secure.png";

const Hero = ({
  rightimage,
  paddingbottom,
  paddingbottomscreen,
  paddingtop,
  paddingtopscreen,
  bldisplay,
  beadcrumbdisplay,
  bannertitle,
  bannertitlespan,
  bannertitleright,
  bannermaxwidth,
  breadcrumb1,
  breadcrumb2,
  breadcrumb2Link,
  breadcrumb3,
  bannersideimagedisplay,
}) => {
  return (
    <div className="banner-main bg-[#ECF7FF]">
      <div className={`banner-section flex flex-col-reverse lg:flex-row lg:items-center lg:justify-end relative ${paddingtop} ${paddingtopscreen} ${paddingbottom} ${paddingbottomscreen} `}>
        <div className="banner-left lg:absolute lg:fifty-per-30-minus lg:translate-y-[-50%] lg:left-0 w-full mt-[70px] lg:mt-0">
          <div className="container">
            <div className="banner-left-start lg:w-[45%] relative before:'' before:absolute before:w-[198px] before:h-[4px] before:left-0 before:top-[-30px] before:bg-[#00233D] max-w-[470px] lg:max-w-[unset] mx-auto lg:mx-0">
              <div className="banner-left-above mb-[40px]">
                <div className={`banner-title mb-[20px] ${bannermaxwidth} `}>
                  <h2 className="text-[#00233d]  font-extrabold text-[40px] xl:text-[50px] 2xl:text-[60px] leading-[117%]">
                    {bannertitle} <span className="text-[#0061aa]">{bannertitlespan}</span> {bannertitleright}
                  </h2>
                </div>
                <div className="banner-text mb-[30px]">
                  <p className="mb-0  font-regular text-[18px] leading-[156%] text-[#2c2c2c]">Experience peace of mind with advanced security solutions designed to keep your home safe, 24/7.</p>
                </div>
                <div className="banner-btn">
                  <div className="inline-flex justify-center item-center  ">
                    <CallButton />
                  </div>
                </div>
              </div>
              <div className={`banner-left-below ${bldisplay} `}>
                {/*
                <div className="banner-left-below-google mb-[15px]">
                  <Link href="/" className="inline-flex items-center flex-wrap">
                    <Image src={BannerGoogle} alt="img" className="mr-[10px]" />
                    <Image src={BannerRating} alt="img" />
                  </Link>
                </div>
                
                <div className="banner-left-below-ratings">
                  <p className="inline-flex items-center flex-wrap  font-regular text-black text-[18px] leading-[120%]">
                    <strong className="text-[40px] font-bold mr-[10px]">4.9 </strong>Out of 5 based on{" "}
                    <span className="inline-block ml-[3px] relative before:'' before:absolute before:w-full before:h-[3px] before:left-0 before:right-0 before:bottom-[-5px] before:bg-[#E64B15]"> 691 reviews</span>
                  </p>
                </div>
                */}
              </div>
              <ul className={`banner-left-breadcrumb flex items-center flex-wrap mt-[50px]  pb-[50px] ${beadcrumbdisplay} `}>
                <li className="mr-[5px]">
                  <Link href="/" className=" font-regular text-special-light-blue text-[14px] leading-[120%] uppercase hover:duration-300 hover:opacity-70">
                    {breadcrumb1} /
                  </Link>
                </li>

                <li className="mr-[5px]">
                  <Link href={breadcrumb2Link} className=" font-regular text-special-light-blue text-[14px] leading-[120%] uppercase hover:duration-300 hover:opacity-70">
                    {breadcrumb2}
                  </Link>
                </li>
                <li className="mr-[5px]">
                  <Link href={"#"} className=" font-regular text-special-light-blue text-[14px] leading-[120%] uppercase hover:duration-300 hover:opacity-70">
                    / {breadcrumb3}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="banner-right lg:basis-[50%]">
          <div className="banner-right-img relative">
            <Image src={rightimage} style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 80%)" }} width="845" height="638" alt="img" className="ml-auto" />
            {/* <div className={`banner-right-img-card pt-[18px] pb-[28px] px-[28px] bg-[#ffffffe6] w-[414px] max-w-[80%] absolute right-0 bottom-[45px] ${bannersideimagedisplay}`}>
              <div className="banner-right-img-above flex flex-wrap items-center justify-between mb-[15px]">
                <div className="banner-right-img-logo">
                  <Image src={ADTsmall} alt="logo" />
                </div>
                <div className="banner-right-card-now">
                  <span className=" font-regular text-special-grey text-[14px] leading-[120%]">now</span>
                </div>
              </div>
               
              <div className="banner-right-img-below">
                <div className="banner-right-card-title mb-[8px]">
                  <h2 className=" font-extrabold text-special-blue text-[18px] leading-[120%]">FREE Doorbell Camera + $50 Gift Card* </h2>
                </div>
                <div className="banner-right-card-call">
                  <p className=" font-regular text-black text-[16px] leading-[120%]">Call with code: 2024ADTDALLAS</p>
                </div>
              </div>
             
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
