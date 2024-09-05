"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowLeftIcon, ArrowRightIcon, PlayIcon } from "@heroicons/react/24/solid";

import Equip1 from "@/public/images/equip-img-1.png";
import Equip2 from "@/public/images/touch-screen-panel.png";
import Equip3 from "@/public/images/remote-access.png";
import Equip4 from "@/public/images/doorlock.png";
import Equip5 from "@/public/images/thermostat.png";

const Equipments = () => {
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <ArrowRightIcon />
      </div>
    ),
    prevArrow: (
      <div>
        <ArrowLeftIcon />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1049,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="equip-main">
      <div className="container">
        <div className="equip-section pt-[80px] pb-[30px]">
          <div className="pricing-title mb-[30px]">
            <h2 className="font-manrope font-extrabold text-adt-blue-dark text-[34px] lg:text-[40px] xl:text-[50px] leading-[120%] max-w-[85%]">Secure Your Home with ADT Technology</h2>
          </div>
          <div className="equip-slider-start">
            <Slider {...settings} className="equip-slider">
              <div className="equip-slide w-full h-full pt-[30px] pb-[46px] px-[45px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                <div className="equip-slide-inside h-full flex flex-col justify-between items-center">
                  <div className="equip-slide-above h-full">
                    <div className="equip-slide-img flex justify-center items-center mb-[10px] height-minus-30">
                      <Image src={Equip1} alt="img" className="w-[300px] md:w-[auto] max-w-full" />
                    </div>
                  </div>
                  <div className="equip-slide-below max-w-[220px] mx-auto">
                    <div className="equip-slide-title text-center mb-[6px]">
                      <h2 className="font-manrope font-extrabold text-[20px] text-adt-blue-dark leading-[150%]">Security Cameras</h2>
                    </div>
                    <div className="equip-slide-text text-center mb-[25px]">
                      <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">Keep watch with ADT’s high-definition security cameras</p>
                    </div>
                    <div className="group equip-slide-link inline-flex justify-center items-center font-manrope font-bold text-special-light-blue text-[14px] leading-[120%] hover:duration-300 hover:opacity-70 cursor-pointer relative left-[50%] translate-x-[-50%]">
                      <Link className="flex items-center" href="/cameras">
                        <span>Read More</span>
                        <PlayIcon className="h-7 pl-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="equip-slide w-full h-full pt-[30px] pb-[46px] px-[40px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                <div className="equip-slide-inside h-full flex flex-col justify-between items-center">
                  <div className="equip-slide-above h-full">
                    <div className="equip-slide-img flex justify-center items-center mb-[10px] height-minus-30">
                      <Image src={Equip2} alt="img" className="w-[300px] md:w-[auto] max-w-full" />
                    </div>
                  </div>
                  <div className="equip-slide-below max-w-[240px] mx-auto">
                    <div className="equip-slide-title text-center mb-[6px]">
                      <h2 className="font-manrope font-extrabold text-[20px] text-adt-blue-dark leading-[150%]">Touch Screen Keypad</h2>
                    </div>
                    <div className="equip-slide-text text-center mb-[25px]">
                      <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">Control your system with ADT’s touch screen keypad</p>
                    </div>
                    <div className="group equip-slide-link inline-flex justify-center items-center font-manrope font-bold text-special-light-blue text-[14px] leading-[120%] hover:duration-300 hover:opacity-70 cursor-pointer relative left-[50%] translate-x-[-50%]">
                      <Link className="flex items-center" href="/home-security">
                        <span>Read More</span>
                        <PlayIcon className="h-7 pl-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="equip-slide w-full h-full pt-[30px] pb-[46px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                <div className="equip-slide-inside h-full flex flex-col justify-between items-center">
                  <div className="equip-slide-above h-full">
                    <div className="equip-slide-img flex justify-center items-center relative mb-[10px] height-minus-30">
                      <Image src={Equip3} alt="img" className="w-[150px]  max-w-full" />
                    </div>
                  </div>
                  <div className="equip-slide-below max-w-[220px] mx-auto">
                    <div className="equip-slide-title text-center mb-[6px]">
                      <h2 className="font-manrope font-extrabold text-[20px] text-adt-blue-dark leading-[150%]">Remote Access</h2>
                    </div>
                    <div className="equip-slide-text text-center mb-[25px]">
                      <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">Manage security remotely via the ADT mobile app</p>
                    </div>
                    <div className="group equip-slide-link inline-flex justify-center items-center font-manrope font-bold text-special-light-blue text-[14px] leading-[120%] hover:duration-300 hover:opacity-70 cursor-pointer relative left-[50%] translate-x-[-50%]">
                      <Link className="flex items-center" href="/home-security">
                        <span>Read More</span>
                        <PlayIcon className="h-7 pl-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="equip-slide w-full h-full pt-[30px] pb-[46px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                <div className="equip-slide-inside h-full flex flex-col justify-between items-center">
                  <div className="equip-slide-above ml-[20px] h-full">
                    <div className="equip-slide-img flex justify-center items-center mb-[10px] height-minus-30">
                      <Image src={Equip4} alt="img" className="w-[180px] max-w-full" />
                    </div>
                  </div>
                  <div className="equip-slide-below max-w-[260px] mx-auto">
                    <div className="equip-slide-title text-center mb-[6px]">
                      <h2 className="font-manrope font-extrabold text-[20px] text-adt-blue-dark leading-[150%]">Automatic Doorlock</h2>
                    </div>
                    <div className="equip-slide-text text-center mb-[25px]">
                      <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">Lock and unlock doors with ADT’s smart door locks</p>
                    </div>
                    <div className="group equip-slide-link inline-flex justify-center items-center font-manrope font-bold text-special-light-blue text-[14px] leading-[120%] hover:duration-300 hover:opacity-70 cursor-pointer relative left-[50%] translate-x-[-50%]">
                      <Link className="flex items-center" href="/home-automation">
                        <span>Read More</span>
                        <PlayIcon className="h-7 pl-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="equip-slide w-full h-full pt-[30px] pb-[46px] px-[45px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                <div className="equip-slide-inside h-full flex flex-col justify-between items-center">
                  <div className="equip-slide-above h-full">
                    <div className="equip-slide-img flex justify-center items-center mb-[10px] height-minus-30">
                      <Image src={Equip5} alt="img" className="w-[250px] max-w-full" />
                    </div>
                  </div>
                  <div className="equip-slide-below">
                    <div className="equip-slide-title text-center mb-[6px]">
                      <h2 className="font-manrope font-extrabold text-[20px] text-adt-blue-dark leading-[150%]">Smart Thermostat</h2>
                    </div>
                    <div className="equip-slide-text text-center mb-[25px]">
                      <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">Control temperature and save energy with ADT’s thermostat</p>
                    </div>
                    <div className="group equip-slide-link inline-flex justify-center items-center font-manrope font-bold text-special-light-blue text-[14px] leading-[120%] hover:duration-300 hover:opacity-70 cursor-pointer relative left-[50%] translate-x-[-50%]">
                      <Link className="flex items-center" href="/home-automation">
                        <span>Read More</span>
                        <PlayIcon className="h-7 pl-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
