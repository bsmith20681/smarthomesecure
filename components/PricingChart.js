"use client";

import Image from "next/image";
import Link from "next/link";
import PricingOne from "@/public/images/home-automation.png";
import PricingTwo from "@/public/images/camera-package.png";
import PricingThree from "@/public/images/basic-package.png";
import BlueTick from "@/public/images/pricing-blue-tick.png";
import GreyTick from "@/public/images/pricing-grey-tick.png";

import { PhoneIcon } from "@heroicons/react/24/solid";

const Price = ({ bgprice }) => {
  return (
    <div className={`price-main ${bgprice}`}>
      <div className="container">
        <div className="price-section pt-[75px] pb-[70px]">
          <div className="pricing-title text-center">
            <h2 className="font-manrope font-extrabold text-adt-blue text-[34px] lg:text-[40px] xl:text-[50px] leading-[120%] max-w-[820px] mx-auto mb-[30px]">Explore ADT Monitored Packages and Pricing</h2>
          </div>
          <div className="pricing-text text-center max-w-[1010px] mx-auto mb-[55px]">
            <p className="m-0 font-manrope font-regular text-special-grey text-[18px] leading-[156%]">
              ADT offers several customized monitored security plans to suit your specific needs not to mention your budget. Find the perfect plan among the options below:
            </p>
          </div>
          <div className="price-table-start-above overflow-x-auto table-scroll pb-[30px]">
            <div className="price-table-row flex">
              <div className="price-table-col price-col-one basis-[370px] md:basis-[465px]">
                <div className="price-col-one-inside">
                  <div className="h-[203px] md:h-[208px]"></div>
                  <div className="border-b-[1px] border-solid border-b-[#c5c5c5] p-[16px] w-[370px] md:w-[465px] h-[60px] inline-flex items-center">
                    <p className="m-0 font-manrope font-bold text-[#454647] text-[16px] md:text-[18px] leading-[120%]">ADT 24/7 Monitoring</p>
                  </div>
                  <div className="border-b-[1px] border-solid border-b-[#c5c5c5] p-[16px] w-[370px] md:w-[465px] h-[60px] inline-flex items-center">
                    <p className="m-0 font-manrope font-bold text-[#454647] text-[16px] md:text-[18px] leading-[120%]">Touch Screen Keypad</p>
                  </div>
                  <div className="border-b-[1px] border-solid border-b-[#c5c5c5] p-[16px] w-[370px] md:w-[465px] h-[60px] inline-flex items-center">
                    <p className="m-0 font-manrope font-bold text-[#454647] text-[16px] md:text-[18px] leading-[120%]">24-Hour Batery Backup</p>
                  </div>
                  <div className="border-b-[1px] border-solid border-b-[#c5c5c5] p-[16px] w-[370px] md:w-[465px] h-[60px] inline-flex items-center">
                    <p className="m-0 font-manrope font-bold text-[#454647] text-[16px] md:text-[18px] leading-[120%]">Cellular Based Monitoring</p>
                  </div>
                  <div className="border-b-[1px] border-solid border-b-[#c5c5c5] p-[16px] w-[370px] md:w-[465px] h-[60px] inline-flex items-center">
                    <p className="m-0 font-manrope font-bold text-[#454647] text-[16px] md:text-[18px] leading-[120%]">Remote Access</p>
                  </div>
                  <div className="border-b-[1px] border-solid border-b-[#c5c5c5] p-[16px] w-[370px] md:w-[465px] h-[60px] inline-flex items-center">
                    <p className="m-0 font-manrope font-bold text-[#454647] text-[16px] md:text-[18px] leading-[120%]">Door & Window Sensors</p>
                  </div>
                  <div className="border-b-[1px] border-solid border-b-[#c5c5c5] p-[16px] w-[370px] md:w-[465px] h-[60px] inline-flex items-center">
                    <p className="m-0 font-manrope font-bold text-[#454647] text-[16px] md:text-[18px] leading-[120%]">Doorbell Camera</p>
                  </div>
                  <div className="border-b-[1px] border-solid border-b-[#c5c5c5] p-[16px] w-[370px] md:w-[465px] h-[60px] inline-flex items-center">
                    <p className="m-0 font-manrope font-bold text-[#454647] text-[16px] md:text-[18px] leading-[120%]">Outside Camera</p>
                  </div>
                  <div className="border-b-[1px] border-solid border-b-[#c5c5c5] p-[16px] w-[370px] md:w-[465px] h-[60px] inline-flex items-center">
                    <p className="m-0 font-manrope font-bold text-[#454647] text-[16px] md:text-[18px] leading-[120%]">Smart Thermostat</p>
                  </div>
                  <div className="p-[16px] w-[370px] md:w-[465px] h-[60px] inline-flex items-center">
                    <p className="m-0 font-manrope font-bold text-[#454647] text-[16px] md:text-[18px] leading-[120%]">Automatic Doorlock</p>
                  </div>
                </div>
              </div>
              <div className="price-table-col price-col-two basis-[200px] md:basis-[283px]">
                <div className="price-col-two-inside shadow-[0_0_19px_-2px_rgba(0,0,0,0.3)] rounded-[10px]">
                  <div className="block p-[7px] w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-0 rounded-tl-[10px] rounded-tr-[10px]">
                    <p className="font-manrope font-extrabold text-white text-[12px] leading-[120%] uppercase tracking-[1.2px] inline-flex justify-center items-center py-[16px] px-[16px] md:px-[65px] bg-adt-blue w-[185px] md:w-[269px] h-[52px] rounded-tl-[10px] rounded-tr-[10px]">
                      Our Best package
                    </p>
                  </div>
                  <div className="text-center pt-[9px] pb-[3px] px-[10px] w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-0 border-t-0">
                    <p className="font-manrope font-extrabold text-adt-blue text-[16px] md:text-[20px] leading-[120%]">Full Home Automation</p>
                  </div>
                  <div className="text-center w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-0 border-t-0 pt-[3px] pb-[21px] px-[10px] h-[105px] inline-flex justify-center items-center">
                    <Image src={PricingOne} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-[#c5c5c5] border-t-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-[#c5c5c5] border-t-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-[#c5c5c5] border-t-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="block text-center w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-[#c5c5c5] border-t-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-[#c5c5c5] border-t-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-[#c5c5c5] border-t-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-[#c5c5c5] border-t-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-[#c5c5c5] border-t-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-[#c5c5c5] border-t-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[283px] border-[1px] border-solid border-adt-blue-light border-b-0 border-t-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[283px] pt-[10px] pb-[45px] px-[16px] border-[1px] border-solid border-adt-blue-light border-t-0 rounded-bl-[10px] rounded-br-[10px]">
                    <div className="hidden lg:flex lg:flex-1 justify-center">
                      <a href="tel:18332247221" className="bg-adt-orange hover:bg-adt-orange-600 delay-75 flex gap-3 font-bold transition text-base md:text-lg text-white px-4 py-3">
                        <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                        Call (833) 224-7221
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-table-col price-col-three basis-[200px] md:basis-[271px]">
                <div className="price-col-three-inside">
                  <div className="h-[40px]"></div>
                  <div className="text-center pt-[35px] pb-[3px] px-[10px] w-[200px] md:w-[271px] border-[1px] border-solid border-[#c5c5c5] border-b-0 border-l-0 rounded-tr-[10px]">
                    <p className="font-manrope font-extrabold text-adt-blue text-[16px] md:text-[20px] leading-[120%]">Security + Survaliance</p>
                  </div>
                  <div className="text-center w-[200px] md:w-[271px] border-[1px] border-solid border-[#c5c5c5] border-b-0 border-t-0 border-l-0 pt-[3px] pb-[21px] px-[10px] h-[105px] inline-flex justify-center items-center">
                    <Image src={PricingTwo} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[271px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[271px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[271px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[271px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[271px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[271px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[271px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[271px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[271px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={GreyTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[271px] border-[1px] border-solid border-[#c5c5c5] border-b-0 border-t-0 border-l-0 p-[16px]">
                    <Image src={GreyTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[271px] pt-[10px] pb-[15px] px-[16px] border-[1px] border-solid border-[#c5c5c5] border-l-0 border-t-0 rounded-br-[10px]">
                    <div className="hidden lg:flex lg:flex-1 justify-center">
                      <a href="tel:18332247221" className="bg-adt-orange hover:bg-adt-orange-600 delay-75 flex gap-3 font-bold transition text-base md:text-lg text-white px-4 py-3">
                        <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                        Call (833) 224-7221
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-table-col price-col-four basis-[200px] md:basis-[280px]">
                <div className="price-col-four-inside">
                  <div className="h-[40px]"></div>
                  <div className="text-center pt-[35px] pb-[3px] px-[10px] w-[200px] md:w-[280px] border-[1px] border-solid border-[#c5c5c5] border-b-0 border-l-0 rounded-tl-[10px] rounded-tr-[10px]">
                    <p className="font-manrope font-extrabold text-adt-blue text-[16px] md:text-[20px] leading-[120%]">Security</p>
                  </div>
                  <div className="text-center w-[200px] md:w-[280px] border-[1px] border-solid border-[#c5c5c5] border-b-0 border-t-0 border-l-0 pt-[3px] pb-[21px] px-[10px] h-[105px] inline-flex justify-center items-center">
                    <Image src={PricingThree} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[280px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[280px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[280px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[280px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[280px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[280px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={BlueTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[280px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={GreyTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[280px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={GreyTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[280px] border-[1px] border-solid border-[#c5c5c5] border-t-0 border-l-0 p-[16px]">
                    <Image src={GreyTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[280px] border-[1px] border-solid border-[#c5c5c5] border-b-0 border-t-0 border-l-0 p-[16px]">
                    <Image src={GreyTick} alt="img" className="mx-auto" />
                  </div>
                  <div className="text-center w-[200px] md:w-[280px] pt-[10px] pb-[15px] px-[16px] border-[1px] border-solid border-[#c5c5c5] border-l-0 border-t-0 rounded-bl-[10px] rounded-br-[10px]">
                    <div className="hidden lg:flex lg:flex-1 justify-center">
                      <a href="tel:18332247221" className="bg-adt-orange hover:bg-adt-orange-600 delay-75 flex gap-3 font-bold transition text-base md:text-lg text-white px-4 py-3">
                        <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                        Call (833) 224-7221
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
