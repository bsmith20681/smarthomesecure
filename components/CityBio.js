import { useState, useEffect } from "react";
import Image from "next/image";
import Homesecurity from "@/public/images/home-security.png";

const CityBio = ({ city, state }) => {
  const [spunText, setSpunText] = useState("");
  const [spunHeadline, setSpunHeadline] = useState("");

  const spinText = (text) => {
    const regex = /{([^{}]*)}/g;
    return text.replace(regex, (match, group) => {
      const options = group.split("|");
      return options[Math.floor(Math.random() * options.length)];
    });
  };

  useEffect(() => {
    setSpunHeadline(spinText(headline));
    //setSpunText(spinText(text));
  }, [city]);
  console.log(city);
  const headline = `{ADT is ${city}'s top pick for home security|
Protect your ${city} home with ADT|
ADT is ${city}'s go-to for home protection|
Safeguard your ${city} home with ADT|
ADT is ${city}'s trusted name in home security|
${city} homes stay safe with ADT|
ADT is ${city}'s first choice for security solutions|
Keep ${city} secure with ADT|
ADT is ${city}'s best defense against intruders|
Choose ADT for ${city}'s home security needs|
${city} residents trust ADT for home security|
ADT is ${city}'s reliable home security partner|
ADT makes ${city} homes safer|
${city} turns to ADT for home security|
ADT is ${city}'s favorite home security provider|
${city} chooses ADT for safety and peace of mind|
ADT is the security leader in ${city}|
Protect your ${city} family with ADT|
ADT is ${city}'s preferred home security system|
${city} trusts ADT for complete home protection|
ADT is ${city}'s home security expert|
Your ${city} home deserves ADT|
ADT is ${city}'s choice for smart home security|
${city} homes rely on ADT for safety|
ADT is ${city}'s best bet for home security|
${city} counts on ADT for home security|
ADT is ${city}'s solution for a secure home|
Secure your ${city} home with ADT|
${city} stays safe with ADT home security|
ADT is ${city}'s trusted home protection choice}`;
  return (
    <div className="home-security">
      <div className="container">
        <div className="home-security-main flex flex-col-reverse lg:flex-row py-10 lg:py-20 justify-between items-center">
          <div className="basis-[570px]">
            <div class="service-title text-start pt-8 lg:pt-0 md:max-w-[768px] lg:max-w-full mx-auto">
              <h2 class="font-manrope font-extrabold text-balance text-special-blue text-[34px] lg:text-[40px] xl:text-[50px] leading-[120%] max-w-[820px] mx-auto mb-[20px] text-center lg:text-start">{spunHeadline}</h2>
              <h4 className="m-0 text-[18px] font-manrope leading-[28px] font-regular text-[#2c2c2c] text-center lg:text-start">
                Whether you’re at home or away at work, we ensure your {city} residence is monitored 24/7 for your family’s safety and protection. {city} and surrounding area homeowners count on ADT to professionally install and monitor their homes every day.
                ADT home security systems can include:
              </h4>
              <ul className="flex flex-wrap max-lg:justify-between pt-5">
                <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
                  {" "}
                  Digital panel{" "}
                </li>
                <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
                  {" "}
                  Motion detector
                </li>
                <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
                  {" "}
                  Entryway contacts{" "}
                </li>
                <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
                  {" "}
                  Yard signs and window decals{" "}
                </li>
                <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
                  {" "}
                  Wireless keychain remote{" "}
                </li>
                <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
                  {" "}
                  24/7 monitoring
                </li>
              </ul>
            </div>
          </div>
          <div className=" lg:mr-[0] lg:max-w-[460px] xl:max-w-full xl:mr-[0] xxl:mr-[-48px] lg:ml-[40px]">
            <Image src={Homesecurity} alt="img" className="w-full h-full object-cover"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityBio;
