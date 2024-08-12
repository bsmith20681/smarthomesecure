"use client";

import React from "react";
import Image from "next/image";
import Order1 from "@/public/images/order-img-1.png";
import Order2 from "@/public/images/order-img-2.png";
import Order3 from "@/public/images/order-img-3.png";

const Order = ({ margintoporder, paddingtoporder, paddingbottomorder, margintoplistorder }) => {
  return (
    <div className={`order-main bg-[#ecf7ff] ${margintoporder} `}>
      <div className="container">
        <div className={`order-section ${paddingtoporder} ${paddingbottomorder}`}>
          <div className="pricing-title text-center mb-[55px]">
            <h2 className="font-manrope font-extrabold text-special-blue text-[34px] lg:text-[40px] xl:text-[50px] leading-[120%]">How to Order</h2>
          </div>
          <div className={`order-list-start ${margintoplistorder}`}>
            <div className="order-list flex flex-wrap lg:flex-nowrap justify-center">
              <div className="order-item basis-[100%] sm:basis-[45%] lg:basis-[418px] sm:mr-[20px] mb-[30px]">
                <div className="order-item-inside">
                  <div className="order-item-above">
                    <div className="order-item-img relative mb-[55px]">
                      <Image src={Order1} alt="img" className="w-full aspect-[1.35/1] object-cover" />
                      <div className="order-item-number text-center absolute left-[50%] translate-x-[-50%] bottom-[-35px] w-[73px] h-[73px] bg-dark-block bg-[length:73px_73px] bg-no-repeat flex justify-center items-center">
                        <span className="font-manrope font-extrabold text-white text-[30px] leading-[114%]">1</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-item-below">
                    <div className="order-item-title text-center mb-[10px]">
                      <h2 className="font-manrope font-extrabold text-special-blue text-[24px] md:text-[30px] leading-[120%]">Shop</h2>
                    </div>
                    <div className="order-item-text text-center max-w-[340px] mx-auto">
                      <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">Find everything you need to make your home smarter and safer. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-item basis-[100%] sm:basis-[45%] lg:basis-[418px] sm:mr-[20px] mb-[30px]">
                <div className="order-item-inside">
                  <div className="order-item-above">
                    <div className="order-item-img relative mb-[55px]">
                      <Image src={Order2} alt="img" className="w-full aspect-[1.35/1] object-cover" />
                      <div className="order-item-number text-center absolute left-[50%] translate-x-[-50%] bottom-[-35px] w-[73px] h-[73px] bg-dark-block bg-[length:73px_73px] bg-no-repeat flex justify-center items-center">
                        <span className="font-manrope font-extrabold text-white text-[30px] leading-[114%]">2</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-item-below">
                    <div className="order-item-title text-center mb-[10px]">
                      <h2 className="font-manrope font-extrabold text-special-blue text-[24px] md:text-[30px] leading-[120%]">Unpack</h2>
                    </div>
                    <div className="order-item-text text-center max-w-[340px] mx-auto">
                      <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">Ready to go out of the box, with a single app to control everything. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-item basis-[100%] sm:basis-[45%] lg:basis-[418px] mb-[30px]">
                <div className="order-item-inside">
                  <div className="order-item-above">
                    <div className="order-item-img relative mb-[55px]">
                      <Image src={Order3} alt="img" className="w-full aspect-[1.35/1] object-cover" />
                      <div className="order-item-number text-center absolute left-[50%] translate-x-[-50%] bottom-[-35px] w-[73px] h-[73px] bg-dark-block bg-[length:73px_73px] bg-no-repeat flex justify-center items-center">
                        <span className="font-manrope font-extrabold text-white text-[30px] leading-[114%]">3</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-item-below">
                    <div className="order-item-title text-center mb-[10px]">
                      <h2 className="font-manrope font-extrabold text-special-blue text-[24px] md:text-[30px] leading-[120%]">Set Up</h2>
                    </div>
                    <div className="order-item-text text-center max-w-[340px] mx-auto">
                      <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">Set it up yourself or get help with live virtual assistance. </p>
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

export default Order;
