"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestmonialLeft from "@/public/images/testimonial-left-img.png";
import Qoute from "@/public/images/testimonial-slide-qoute.png";
import Star from "@/public/images/star.png";

const Testimonial = ({ paddingtoptest, paddingtoptestscreen }) => {
  var settingsT = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial-start">
      <div className="container">
        <div className={`testimonial-section ${paddingtoptest} ${paddingtoptestscreen} pb-[90px]`}>
          <div className="testimonial-start lg:grid lg:grid-cols-10">
            <div className="testimonial-left lg:col-span-5 lg:mr-[30px] xl:mr-[60px]">
              <div className="testimonial-left-img 2xl:ml-[-30px] max-w-[650px] mx-auto lg:max-0 mb-[30px] lg:mb-0">
                <Image src={TestmonialLeft} alt="img" className="w-full aspect-[1.01/1] object-cover" />
              </div>
            </div>
            <div className="testimonial-right lg:col-span-5 max-w-[650px] lg:max-w-[unset] mx-auto lg:mx-0">
              <div className="pricing-title mb-[20px]">
                <h2 className="font-manrope font-extrabold text-special-blue text-[34px] lg:text-[40px] xl:text-[50px] leading-[120%]">Testimonials From Actual Homeowners Like you.</h2>
              </div>
              <div className="testimonial-slider-start w-full">
                <Slider {...settingsT} className="testimonial-slider">
                  <div className="testimonial-slide max-w-[616px] bg-testimonial-comment-plain sm:bg-testimonial-comment bg-no-repeat backgound-40 pt-[40px] pr-[30px] pb-[76px] pl-[30px] sm:pl-[40px] relative h-full">
                    <div className="testimonial-quote absolute right-[-22px] top-[-24px]">
                      <Image src={Qoute} alt="img" />
                    </div>
                    <div className="testimonial-inside">
                      <ul className="testimonial-stars flex items-center mb-[20px]">
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" />
                        </li>
                      </ul>
                      <div className="testimonial-text mb-[22px]">
                        <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">
                          Extremely pleased with the ADT Security System. The peace of mind I have while on vacation is indescribable. Felt it rude of me to continue to ask neighbors to &quot;watch&quot; my house - it&quot;s my house why should neighbors be
                          held responsible for my property! I&quot;m embarrassed how long they let me continue in my rude behavior or it tells you what sweet neighbors I have. At any rate ADT let them off the hook and reformed my ways.
                        </p>
                      </div>
                      <div className="testimonial-name">
                        <p className="font-manrope font-extrabold text-special-light-blue text-[25px] leading-[120%]">Natalie L.</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slide max-w-[616px] bg-testimonial-comment-plain sm:bg-testimonial-comment bg-no-repeat backgound-40 pt-[40px] pr-[30px] pb-[76px] pl-[30px] sm:pl-[40px] relative h-full">
                    <div className="testimonial-quote absolute right-[-22px] top-[-24px]">
                      <Image src={Qoute} alt="img" />
                    </div>
                    <div className="testimonial-inside">
                      <ul className="testimonial-stars flex items-center mb-[20px]">
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" />
                        </li>
                      </ul>
                      <div className="testimonial-text mb-[22px]">
                        <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">Extremely pleased with the ADT Security System. The peace of mind I have while on vacation is indescribable.</p>
                      </div>
                      <div className="testimonial-name">
                        <p className="font-manrope font-extrabold text-special-light-blue text-[25px] leading-[120%]">Natalie L.</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slide max-w-[616px] bg-testimonial-comment-plain sm:bg-testimonial-comment bg-no-repeat backgound-40 pt-[40px] pr-[30px] pb-[76px] pl-[30px] sm:pl-[40px] relative h-full">
                    <div className="testimonial-quote absolute right-[-22px] top-[-24px]">
                      <Image src={Qoute} alt="img" />
                    </div>
                    <div className="testimonial-inside">
                      <ul className="testimonial-stars flex items-center mb-[20px]">
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" />
                        </li>
                      </ul>
                      <div className="testimonial-text mb-[22px]">
                        <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">
                          Felt it rude of me to continue to ask neighbors to &quot;watch&quot; my house - it&quot;s my house why should neighbors be held responsible for my property! I&quot;m embarrassed how long they let me continue in my rude behavior or it
                          tells you what sweet neighbors I have. At any rate ADT let them off the hook and reformed my ways.
                        </p>
                      </div>
                      <div className="testimonial-name">
                        <p className="font-manrope font-extrabold text-special-light-blue text-[25px] leading-[120%]">Natalie L.</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slide max-w-[616px] bg-testimonial-comment-plain sm:bg-testimonial-comment bg-no-repeat backgound-40 pt-[40px] pr-[30px] pb-[76px] pl-[30px] sm:pl-[40px] relative h-full">
                    <div className="testimonial-quote absolute right-[-22px] top-[-24px]">
                      <Image src={Qoute} alt="img" />
                    </div>
                    <div className="testimonial-inside">
                      <ul className="testimonial-stars flex items-center mb-[20px]">
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" />
                        </li>
                      </ul>
                      <div className="testimonial-text mb-[22px]">
                        <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">
                          Extremely pleased with the ADT Security System. The peace of mind I have while on vacation is indescribable. Felt it rude of me to continue to ask neighbors to &quot;watch&quot; my house - it&quot;s my house why should neighbors be
                          held responsible for my property! I&quot;m embarrassed how long they let me continue in my rude behavior or it tells you what sweet neighbors I have. At any rate ADT let them off the hook and reformed my ways.
                        </p>
                      </div>
                      <div className="testimonial-name">
                        <p className="font-manrope font-extrabold text-special-light-blue text-[25px] leading-[120%]">Natalie L.</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slide max-w-[616px] bg-testimonial-comment-plain sm:bg-testimonial-comment bg-no-repeat backgound-40 pt-[40px] pr-[30px] pb-[76px] pl-[30px] sm:pl-[40px] relative h-full">
                    <div className="testimonial-quote absolute right-[-22px] top-[-24px]">
                      <Image src={Qoute} alt="img" />
                    </div>
                    <div className="testimonial-inside">
                      <ul className="testimonial-stars flex items-center mb-[20px]">
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" />
                        </li>
                      </ul>
                      <div className="testimonial-text mb-[22px]">
                        <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">Extremely pleased with the ADT Security System. The peace of mind I have while on vacation is indescribable.</p>
                      </div>
                      <div className="testimonial-name">
                        <p className="font-manrope font-extrabold text-special-light-blue text-[25px] leading-[120%]">Natalie L.</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slide max-w-[616px] bg-testimonial-comment-plain sm:bg-testimonial-comment bg-no-repeat backgound-40 pt-[40px] pr-[30px] pb-[76px] pl-[30px] sm:pl-[40px] relative h-full">
                    <div className="testimonial-quote absolute right-[-22px] top-[-24px]">
                      <Image src={Qoute} alt="img" />
                    </div>
                    <div className="testimonial-inside">
                      <ul className="testimonial-stars flex items-center mb-[20px]">
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" />
                        </li>
                      </ul>
                      <div className="testimonial-text mb-[22px]">
                        <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">
                          Felt it rude of me to continue to ask neighbors to &quot;watch&quot; my house - it&quot;s my house why should neighbors be held responsible for my property! I&quot;m embarrassed how long they let me continue in my rude behavior or it
                          tells you what sweet neighbors I have. At any rate ADT let them off the hook and reformed my ways.
                        </p>
                      </div>
                      <div className="testimonial-name">
                        <p className="font-manrope font-extrabold text-special-light-blue text-[25px] leading-[120%]">Natalie L.</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slide max-w-[616px] bg-testimonial-comment-plain sm:bg-testimonial-comment bg-no-repeat backgound-40 pt-[40px] pr-[30px] pb-[76px] pl-[30px] sm:pl-[40px] relative h-full">
                    <div className="testimonial-quote absolute right-[-22px] top-[-24px]">
                      <Image src={Qoute} alt="img" />
                    </div>
                    <div className="testimonial-inside">
                      <ul className="testimonial-stars flex items-center mb-[20px]">
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" className="mr-[6px]" />
                        </li>
                        <li>
                          <Image src={Star} alt="img" />
                        </li>
                      </ul>
                      <div className="testimonial-text mb-[22px]">
                        <p className="font-manrope font-regular text-special-grey text-[18px] leading-[155%]">
                          Extremely pleased with the ADT Security System. The peace of mind I have while on vacation is indescribable. Felt it rude of me to continue to ask neighbors to &quot;watch&quot; my house - it&quot;s my house why should neighbors be
                          held responsible for my property! I&quot;m embarrassed how long they let me continue in my rude behavior or it tells you what sweet neighbors I have. At any rate ADT let them off the hook and reformed my ways.
                        </p>
                      </div>
                      <div className="testimonial-name">
                        <p className="font-manrope font-extrabold text-special-light-blue text-[25px] leading-[120%]">Natalie L.</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
