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
                        <Link href="/contact-us" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          Contact Us
                        </Link>
                      </li>
                      <li className="mb-[25px]">
                        <Link href="/pricing" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          Plans and Pricing
                        </Link>
                      </li>
                      <li className="mb-[25px]">
                        <Link href="/locations" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          Service Areas
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li className="mb-[25px]">
                        <Link href="/cameras" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          Cameras
                        </Link>
                      </li>
                      <li className="mb-[25px]">
                        <Link href="/home-security" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          Security Equipment
                        </Link>
                      </li>
                      <li className="mb-[25px]">
                        <Link href="/home-automation" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                          Smart Home Automation
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
                    <a
                      href="tel:18332247221"
                      className="flex justify-center gap-3 items-center  font-extrabold text-[18px] leading-[150%] text-white bg-transparent border-[3px] border-solid border-white px-[20px] py-[13px] mb-[12px] hover:duration-300 hover:bg-white hover:text-[#00233d]"
                    >
                      <PhoneIcon className="h-4 w-4" />
                      833-224-7221
                    </a>
                    <Link
                      href="/contact-us"
                      className="flex justify-center items-center  font-extrabold text-[18px] leading-[150%] text-white bg-[#0061aa] border-[3px] border-solid border-[#0061aa] px-[20px] py-[13px] hover:duration-300 hover:bg-transparent hover:text-[#0061aa]"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-white text-xs mb-6 mt-4">
                  Up to 15 sensors free for pre-wired homes or 6 sensors for non-wired homes. No substitutions allowed. Labor charges may apply. $99.00 customer installation charge. Basic plan requires phone line. 36-Month Monitoring Agreement required $45.99
                  per month ($1,655.64), 24-Month Monitoring Agreement required at $45.99 ($1,103.76) for California, including Quality Service Plan (QSP). Form of payment must be by credit card or electronic charge to your checking or savings account. Offer
                  applies to homeowners only. Local permit fees may be required. Satisfactory credit history required. Certain restrictions apply. Offer valid for new Secure24 ADT Authorized Dealer customers only and not on purchases from ADT LLC. Other rate
                  plans available. Cannot be combined with any other offer.
                </p>
                <p className="text-white text-xs">
                  Dealer Numbers and License Numbers by State: AL 13496810 2020/2021-1903, AZ 13156991 20821, AR 12669172 CMPY.002619, CA 12949301 ACO 7709, CO 12577733, CT 13870843 ELC.0192078-E2, DC 12267283 400316800252, DE 13442940 17-9, FL 12098518
                  EF20001753, GA 11609228 LVA204755, IN 11929372, KY 11461613, LA 14232797 E23457, MA 14641412 8078 A1, MD 12309505 107-2141, MI 12149549 3601207114, MN 12753434 TS727236, MS 14014067 15035360, MO & IL 5546971, NE 14380908, NJ 12466035
                  34BX00020300, NM 14327424 400456, NV 0089435, NY 12631078 12000324609, NC 12621436 2665-CSA, OH 10839146, OK 13824632 AC440699, OR 14309209 CLE584, PA 9845481 PA086728, RI 14710174 9252A, SC 12463703 BAC.13746, TN 12203384 1880, TX 10021780
                  B18182, VA 12525928 11-15270, WA 12376125 SECUR2*844PM, WI 13870845.
                </p>
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
                    <Link href="/privacy-policy" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml" className="  text-white  leading-[120%] hover:opacity-70 hover:duration-300">
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
