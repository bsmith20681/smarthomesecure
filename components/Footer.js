"use client";

import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import { PhoneIcon } from "@heroicons/react/24/solid";
import FooterLogo from "@/public/images/footer-logo.png";

const Footer = () => {
  return (
    <>
      <CtaBanner />
      <Faq />

      <footer className="footer bg-adt-blue-dark">
        <div className="footer-above">
          <div className="container">
            <div className="footer-above-inside py-[50px] xl:py-[70px]">
              <div className="footer-above-divides flex flex-wrap justify-between">
                <div className="footer-above-left basis-[100%] sm:basis-[360px] mr-[20px] py-[20px]">
                  <div className="footer-logo mb-[26px]">
                    <Link href="/">
                      <Image src={FooterLogo} alt="logo" />
                    </Link>
                  </div>
                  <div className="footer-above-left-text">
                    <p className="m-0   text-white  leading-[162%]">Secure24 is your local ADT® Authorized Dealer. Our mission is to give information and access to professionally installed security systems with ADT-monitoring.</p>
                  </div>
                </div>
                <div className="footer-above-middle basis-[270px] sm:basis-[370px] mr-[20px] py-[20px]">
                  <div className="foote-above-middle-lists flex flex-wrap justify-between">
                    <ul>
                      <li className="mb-[25px]">
                        <Link href="/" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          About Us
                        </Link>
                      </li>
                      <li className="mb-[25px]">
                        <Link href="/" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          Products
                        </Link>
                      </li>
                      <li className="mb-[25px]">
                        <Link href="/" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          Packages
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          Testimonials
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li className="mb-[25px]">
                        <Link href="/" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          FAQs
                        </Link>
                      </li>
                      <li className="mb-[25px]">
                        <Link href="/" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          Blog
                        </Link>
                      </li>
                      <li className="mb-[25px]">
                        <Link href="/" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          Support
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          Why ADT
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-above-right basis-[246px] py-[20px]">
                  <div className="footer-above-right-text mb-[20px]">
                    <p className="  text-white  leading-[120%]">Do you have question?</p>
                  </div>
                  <div className="footer-above-right-btn">
                    <Link
                      href="tel:18332247221"
                      className="flex justify-center gap-3 items-center  font-extrabold text-[18px] leading-[150%] text-white bg-transparent border-[3px] border-solid border-white px-[20px] py-[13px] mb-[12px] hover:duration-300 hover:bg-white hover:text-[#00233d]"
                    >
                      <PhoneIcon className="h-4 w-4" />
                      833-224-7221
                    </Link>
                    <Link
                      href="/"
                      className="flex justify-center items-center  font-extrabold text-[18px] leading-[150%] text-white bg-[#0061aa] border-[3px] border-solid border-[#0061aa] px-[20px] py-[13px] hover:duration-300 hover:bg-transparent hover:text-[#0061aa]"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-below border-t-[1px] border-solid border-white-20">
          <div className="container">
            <div className="footer-below-start py-[15px] xl:pt-[45px] xl:pb-[65px] flex flex-wrap justify-between items-center">
              <div className="footer-below-left mr-[20px] py-[15px]">
                <p className="m-0   text-white  leading-[120%]">© {new Date().getFullYear()} Secure24 Alarm Systems</p>
              </div>
              <div className="footer-below-right py-[15px]">
                <ul className="flex flex-wrap items-center">
                  <li className="pr-[10px] mr-[10px] relative before:'' before:absolute before:h-[60%] before:w-[2px] before:right-0 before:top-[50%] before:translate-y-[-50%] before:bg-white">
                    <Link href="/" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="pr-[10px] mr-[10px] relative before:'' before:absolute before:h-[60%] before:w-[2px] before:right-0 before:top-[50%] before:translate-y-[-50%] before:bg-white">
                    <Link href="/" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="pr-[10px] mr-[10px] relative before:'' before:absolute before:h-[60%] before:w-[2px] before:right-0 before:top-[50%] before:translate-y-[-50%] before:bg-white">
                    <Link href="/" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                      Licenses
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
