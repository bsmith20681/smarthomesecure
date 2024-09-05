"use client";
import Link from "next/link";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import CallButton from "./CallButton";
import React, { useEffect, useRef, useState } from "react";

const Faq = () => {
  const faqData = [
    {
      question: "What types of security systems does ADT offer?",
      answer:
        "ADT offers a variety of security solutions tailored to your specific needs, including smart home automation, 24/7 monitoring, video surveillance, and burglar alarms. With ADT, you can also integrate additional features like fire, flood, and carbon monoxide monitoring, ensuring your home is protected from multiple threats.",
    },
    {
      question: "How does ADT’s professional monitoring work?",
      answer:
        "ADT provides 24/7 professional monitoring through its network of monitoring centers across the country. If an alarm is triggered, ADT immediately contacts you and, if needed, dispatches emergency services. ADT's rapid response team ensures that help is always just a call away, whether it's for a burglary, fire, or medical emergency.",
    },
    {
      question: "What is the installation process for ADT?",
      answer:
        "ADT offers both professional and DIY installation options. For most comprehensive systems, professional installation ensures everything is set up correctly and functioning properly. A certified ADT technician will come to your home, install the equipment, and provide a walkthrough of the system’s features. For smaller setups, ADT's Blue DIY system allows you to easily install equipment yourself.",
    },
    {
      question: "Can I control my ADT system remotely?",
      answer:
        "Yes! ADT offers the ADT Control app, which allows you to monitor and manage your home security system from anywhere. Through the app, you can arm and disarm your system, view live footage from security cameras, receive real-time alerts, and even control smart home devices such as lights, locks, and thermostats.",
    },
    {
      question: "What happens if my power or internet goes out?",
      answer:
        "ADT security systems are equipped with battery backup, so they continue to function during a power outage. If your system relies on Wi-Fi, ADT provides cellular backup to ensure continuous monitoring even if your internet connection goes down. This means your home stays protected, no matter what.",
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
              <p className=" font-normal text-special-grey text-[18px] leading-[28px] mb-[8px] max-lg:text-center">Answers to Your Most Common Questions About ADT Home Security</p>
              <div className="max-lg:mx-auto">
                <CallButton />
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
