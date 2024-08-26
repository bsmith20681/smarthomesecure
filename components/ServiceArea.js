"use client";

import Image from "next/image";
import serviceLeft from "@/public/images/service-left.png";
import serviceImgCenter from "@/public/images/service-img-center.png";

import Link from "next/link";

const ServiceArea = ({ city, state, nearbyCities }) => {
  return (
    <div className="service-main">
      <div className="container">
        <div className="service-wrp pt-[40px] pb-[30px] md:pt-[50px] md:pb-[40px] xl:pt-[75px] xl:pb-[70px]">
          <div className="service-title text-center">
            <h2 className="font-manrope font-extrabold text-special-blue text-[34px] lg:text-[40px] xl:text-[50px] leading-[120%] max-w-[820px] mx-auto mb-[20px]">ADT {city} Service Area</h2>
          </div>
          <div className="service-content pt-0 lg:pt-5 flex flex-col lg:flex-row">
            <div className="service-left basis-[100%] lg:basis-[50%] ">
              <div className="service-img border-[3px] border-[#0061aa] p-2  max-w-[500px] my-0 mx-auto lg:max-w-[100%] relative">
                <iframe
                  width="100%"
                  height="576px"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBHJgjR2xvxdGV3zGXaRJsHqYrdn7QGFP4
    &q=${city}+${state}`}
                />
              </div>
            </div>
            <div className="service-right basis-[100%] lg:basis-[50%] pl-[0] pt-[30px] lg:pt-[0] lg:pl-[60px]">
              <div className="service-detail">
                <h4 className="m-0 text-[18px] font-manrope leading-[28px] font-regular text-[#2c2c2c] text-center lg:text-start">
                  Our ADT {city} team offers professional home security installation and a variety of security and automation products and solutions.
                </h4>
                <div className="security-services pt-8 flex flex-col md:flex-row justify-between text-center lg:text-start md:max-w-[768px] lg:max-w-full mx-auto">
                  <div className="security-left pb-7 md:pb-0">
                    <h5 className="font-manrope font-extrabold text-special-blue text-[24px] leading-[30px] pb-4 m-0">ADT Security Services</h5>
                    <h6 className="font-regular text-special-blue text-[18px] font-manrope leading-[28px]">
                      {city} {state} {nearbyCities.targetCityZipCode} United States
                    </h6>
                    <h6>
                      <Link href="tel:18332247221" className="font-regular text-special-blue text-[18px] font-manrope leading-[28px] hover:text-black">
                        (833) 224-7221
                      </Link>
                    </h6>
                  </div>
                  <div className="security-right">
                    <h5 className="font-manrope font-extrabold text-special-blue text-[24px] leading-[30px] pb-4 m-0">{city} Office Hours</h5>
                    <h6 className="font-regular text-special-blue text-[18px] font-manrope leading-[28px]">M-F 8am - 4pm</h6>
                    <h6 className="font-regular text-special-blue text-[18px] font-manrope leading-[28px]">Sat/Sun Closed</h6>
                  </div>
                </div>
                <div className="nearby-cities pt-7 md:max-w-[768px] lg:max-w-full mx-auto">
                  <h5 className="font-manrope font-extrabold text-special-blue text-[24px] leading-[30px] pb-4 m-0 text-center lg:text-start">Nearby Cities</h5>
                  <div className="nearby-cities-list">
                    <ul className="basis-[180px]  lg:basis-[260px] grid grid-cols-1 md:grid-cols-2 justify-between w-full">
                      {nearbyCities.nearbyCities.slice(0, 18).map((location) => (
                        <li className="basis-1/2  relative flex flex-row gap-1 after:absolute after:bg-[url('/images/pin.png')] after:bg-no-repeat after:bg-cover after:left-0 after:top-[50%] after:translate-y-[-50%] after:content-[''] after:z-10 after:h-[22px] after:w-[18px] pl-[25px] font-manrope font-regular text-black text-[18px] leading-[156%] mb-[10px]">
                          <Link className="hover:underline" href={`/${location.state_name}/${location.city}`}>
                            {location.city}
                          </Link>
                        </li>
                      ))}
                    </ul>
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

export default ServiceArea;
