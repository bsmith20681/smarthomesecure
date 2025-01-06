"use client";

import React from "react";
import Image from "next-export-optimize-images/image";
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
                          We had a great experience with the ordering and installation of our new system. Keatin was very helpful with helping us determine our equipment needs and our installer was wonderful. He was patient and communicative about the
                          decisions where the equipment was going for the house. We had a small problem with the equipment after installation and they were very quick to address it. All has been resolved and the system is working well.
                        </p>
                      </div>
                      <div className="testimonial-name">
                        <p className="font-manrope font-extrabold text-special-light-blue text-[25px] leading-[120%]">Tobin O.</p>
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
                          Zach, an ADT security systems installer kept me informed about making it to our scheduled appointment. He verified my identity and products I previously selected. He included me in the process and made sure to get my consent. His work
                          was top notch and finished quickly. He provided a tutorial on the system features and asked if I had questions. Great job Zach!
                        </p>
                      </div>
                      <div className="testimonial-name">
                        <p className="font-manrope font-extrabold text-special-light-blue text-[25px] leading-[120%]">Scott E.</p>
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
                          Gus was great! Helped me think through what I really needed to secure my new home without pushing me to purchase anything extra. He was kind, efficient, and thoroughly explained how to use all of the equipment. Super knowledgeable.
                          I’ve been an ADT customer for well over a decade and will continue to be because of wonderful experiences like this on top of the security that my ADT system provides.
                        </p>
                      </div>
                      <div className="testimonial-name">
                        <p className="font-manrope font-extrabold text-special-light-blue text-[25px] leading-[120%]">Brittany G.</p>
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
                          I had a fantastic experience with ADT’s installation. Our technician Ahmed and the sales person Brittany were very professional, explained everything clearly with lots of patience, and did a neat job. The whole process was smooth and
                          I highly recommend.
                        </p>
                      </div>
                      <div className="testimonial-name">
                        <p className="font-manrope font-extrabold text-special-light-blue text-[25px] leading-[120%]">Aikya R.</p>
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
                          Professional yet personable! Installed system without problems, ensured they were meeting my expectations every step, and provided through instructions on how the system works and how I interface with it. Would recommend to everyone
                          who wants an affordable system to reliably meet their security needs
                        </p>
                      </div>
                      <div className="testimonial-name">
                        <p className="font-manrope font-extrabold text-special-light-blue text-[25px] leading-[120%]">Judy M.</p>
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
