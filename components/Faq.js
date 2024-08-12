"use client";
import Link from "next/link";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

const Faq = () => {
  const faqData = [
    {
      question: "Is ADT a good company?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
    {
      question: "Why do I need a security system?",
      answer:
        "ADT provides a range of services that include home security systems, professional monitoring, and emergency response. These services help to ensure the safety and security of your home.ADT provides a range of services that include home security systems, professional monitoring, and emergency response.",
    },
    {
      question: "Does ADT have fire protection?",
      answer: "ADT offers home security systems, video surveillance, smart home automation, and professional monitoring services.",
    },
    {
      question: "What is a video doorbell?",
      answer: "ADT has been a trusted name in home security for over 140 years, providing reliable and professional services to millions of customers.",
    },
    {
      question: "What are the benefits of a wireless security system?",
      answer: "ADT has been a trusted name in home security for over 140 years, providing reliable and professional services to millions of customers.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(1);
  const [heights, setHeights] = useState([]);

  const refs = useRef([]);

  useEffect(() => {
    setHeights(refs.current.map((ref) => ref.scrollHeight));
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative py-[32px] md:py-[40px] lg:py-[60px] xl:py-[90px] 2xl:py-[110px]">
      <div className="container">
        <div className="grid grid-cols-12 place-content-between">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex flex-col gap-[18px] max-lg:mb-9 lg:pr-[20px] xl:pr-[20px] 2xl:pr-[0px]">
              <h2 className=" font-extrabold text-special-blue text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] leading-[120%] max-lg:text-center">
                Frequently <br /> Asked Questions{" "}
              </h2>
              <p className=" font-normal text-special-grey text-[18px] leading-[28px] mb-[8px] max-lg:text-center">Find out how ADT service improves your physical safety and sense of security.</p>
              <div className="max-lg:mx-auto">
                <Link
                  href="/"
                  className="uppercase inline-block decoration-none bg-adt-orange outline-none text-white  font-extrabold text-[18px] leading-[27px] py-[12px] md:py-[14px] lg:py-[16px] xl:py-[14px] px-[24px] md:px-[32px] lg:px-[40px] xl:px-[58px] hover:bg-adt-orange-600 hover:text-white border-[1px] border-solid  hover:duration-300"
                >
                  see all faqs
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="max-lg:mx-auto lg:ml-auto relative w-full max-w-[760px]">
              {faqData.map((faq, index) => (
                <div className="w-full block relative pb-[20px] border-b-[1px] border-[#2d2d2d20] last:border-b-0" key={index}>
                  <div className="relative pt-[20px] cursor-pointer flex justify-between items-center" onClick={() => toggleAccordion(index)}>
                    <h4 className=" font-extrabold text-[20px] leading-[24px] text-special-blue w-[90%]">{faq.question}</h4>
                    <span className={`transition-transform duration-500`}>
                      {openIndex === index ? <MinusIcon alt="toggle icon" className="w-[24px] md:w-[32px] h-[24px] md:h-[32px] ml-2 text-adt-blue" /> : <PlusIcon alt="toggle icon" className="w-[24px] md:w-[32px] h-[24px] md:h-[32px] ml-2 text-adt-blue" />}
                    </span>
                  </div>
                  <div
                    ref={(el) => (refs.current[index] = el)}
                    className={`overflow-hidden transition-all duration-300 ease-out ${openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                    style={{
                      maxHeight: openIndex === index ? `${heights[index]}px` : "0px",
                    }}
                  >
                    <div className="mt-[10px]">
                      <p className=" font-normal text-[18px] leading-[24px] text-special-grey">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
