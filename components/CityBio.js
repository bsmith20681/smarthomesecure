import { useState, useEffect } from "react";
import Image from "next/image";
import Homesecurity from "@/public/images/home-security.png";
import parse from "html-react-parser";

const CityBio = ({ city, state }) => {
  const [spunHeadline, setSpunHeadline] = useState("");
  const [spunParagraph, setSpunParagraph] = useState("");
  const [capitalizedCity, setCapitalizedCity] = useState("");
  const [capitalizedState, setCapitalizedState] = useState("");
  console.log(typeof city);

  //city = capitalize(city);
  //state = capitalize(state);

  const spinText = (text) => {
    const regex = /{([^{}]*)}/g;
    return text.replace(regex, (match, group) => {
      const options = group.split("|");
      return options[Math.floor(Math.random() * options.length)];
    });
  };

  useEffect(() => {
    setSpunHeadline(spinText(headline));
    setSpunParagraph(spinText(paragraph));
  }, [city]);

  const headline = `{ADT is ${city}'s top pick for home security|
Protect your ${city} home with ADT|
ADT is ${city}'s go-to for home protection|
Safeguard your ${city} home with ADT|
ADT is ${city}'s trusted name in home security|
Homes in ${city} stay safe with ADT|
ADT is ${city}'s first choice for security solutions|
Keep your home in ${city} secure with ADT|
ADT is ${city}'s best defense against intruders|
Choose ADT for ${city}'s home security needs|
${city} residents trust ADT for home security|
ADT is ${city}'s reliable home security partner|
ADT makes ${city} homes safer|
${city} residents turns to ADT for home security|
ADT is ${city}'s favorite home security provider|
${city} chooses ADT for safety and peace of mind|
ADT is the security leader in ${city}|
Protect your family in ${city} with ADT|
ADT is ${city}'s preferred home security system|
ADT: The security choice for ${city} homes|
ADT is ${city}'s home security expert|
Your ${city} home deserves ADT|
ADT is ${city}'s choice for smart home security|
${city} homes rely on ADT for safety|
ADT is ${city}'s best bet for home security|
ADT is the preferred choice in ${city} for home safety|
ADT is ${city}'s solution for a secure home|
Secure your ${city} home with ADT|
${city} stays safe with ADT home security|
ADT is ${city}'s trusted home protection choice}`;

  const paragraph = `{Whether you’re at home or away, ADT ensures your home stays protected.|
Your family’s safety is our top priority, with advanced monitoring from ADT.|
Keep your loved ones secure with ADT’s trusted home security solutions.|
${city} residents rely on ADT to keep their homes safe and sound.|
Rest easy knowing your ${city} home is under the watchful eye of ADT.|
Our advanced technology keeps intruders out and your family safe.|
ADT provides the peace of mind that comes with knowing your home is secure.|
Stay connected to your home with ADT’s smart security solutions.|
Your ${city} residence is protected by ADT’s cutting-edge security systems.|
With ADT, your home is more than just a place; it’s a safe haven.|
Protect what matters most with ADT’s reliable home security.|
ADT is there for you, whether you’re home or on the go.|
Feel secure in your ${city} home with ADT’s professional monitoring.|
Your home is in good hands with ADT, the leader in home security.|
ADT’s technology works seamlessly to protect your ${city} property.|
Trust ADT to safeguard your ${city} home, day and night.|
Secure your ${city} home with ADT’s comprehensive security services.|
Whether you’re in ${city} or out of town, ADT has you covered.|
ADT’s security solutions are designed to meet the unique needs of ${city} homes.|
Your home’s safety is our mission, and ADT delivers on that promise.|
Protect your ${city} home with the industry’s best, ADT.|
Keep your ${city} home safe with ADT’s trusted security services.|
ADT ensures your home is protected, so you can focus on what matters.|
Your home deserves the best security, and ADT provides it.|
Feel confident that your ${city} home is secure with ADT.|
ADT’s technology keeps your home safe, so you can live worry-free.|
Protecting your ${city} home is easier with ADT on your side.|
Your home’s safety is in good hands with ADT.|
ADT’s security systems keep your ${city} home safe, no matter the situation.|
Our priority is your safety, and ADT delivers on that commitment.|
Whether you’re home or away, ADT has your ${city} home covered.|
Your family’s protection is a call away with ADT.|
ADT’s smart security keeps your home safe from threats.|
Trust ADT to protect your ${city} home and everything in it.|
Your ${city} home is secure with ADT’s advanced technology.|
ADT keeps your home safe, so you can focus on what matters.|
Your home is more than just a building; it’s a safe space with ADT.|
Rest easy knowing your ${city} home is protected by ADT.|
ADT is the name ${city} residents trust for home security.|
Secure your ${city} home with the leading name in home protection, ADT.|
ADT makes home security simple and effective.|
Your ${city} home is safe and secure with ADT on the job.|
ADT’s technology is always working to keep your home protected.|
Your home’s security is our priority, and ADT delivers.|
ADT’s monitoring keeps your ${city} home safe from potential threats.|
Whether you’re home or away, ADT is there to protect your ${city} residence.|
Your family’s safety is in good hands with ADT.|
Protecting your home is what ADT does best.|
Your home’s safety is ensured with ADT’s reliable systems.|
ADT is the trusted choice for home security in ${city}.|
Stay safe and secure with ADT’s professional home security.|
With ADT, your home is always protected, no matter where you are.|
Your home deserves the best, and ADT delivers on that promise.|
ADT is the trusted name in ${city} for home security.|
Your home is safer with ADT’s advanced protection.|
ADT ensures your home stays secure, so you don’t have to worry.|
Keep your home safe with ADT’s trusted technology.|
Your home is your sanctuary, and ADT keeps it that way.|
ADT is the top choice for home security in ${city}.|
Protect your ${city} home with the best in the business, ADT.|
ADT is the name you can trust to protect your home.|
Your home’s safety is our top concern at ADT.|
ADT provides peace of mind by keeping your home secure.|
Your home is always safe with ADT’s reliable security.|
Stay secure in your ${city} home with ADT’s professional services.|
ADT’s monitoring ensures your home stays protected.|
Your home’s security is in good hands with ADT.|
Trust ADT to protect your ${city} home and loved ones.|
ADT keeps your home safe, no matter what.|
Your family’s safety is our priority at ADT.|
Stay connected and protected with ADT’s home security solutions.|
ADT is the trusted choice for home security in ${city}.|
Your ${city} home is secure with ADT’s advanced technology.|
Keep your home safe with ADT, the leader in home security.|
ADT makes home protection simple and effective.|
Your home’s safety is our mission at ADT.|
Protect your home with ADT’s trusted security systems.|
Your family’s safety is in good hands with ADT.|
ADT is the top choice for securing your ${city} home.|
Your home is safer with ADT on the job.|
Stay safe with ADT’s reliable home security services.|
Trust ADT to keep your home secure, no matter the situation.|
Your home’s protection is our top priority at ADT.|
Keep your home safe with ADT, the leader in home security.|
Your home’s security is in good hands with ADT.|
ADT is the trusted name for home security in ${city}.|
Your home is safer with ADT on your side.|
Protect your home with ADT’s advanced security systems.|
Your home is secure with ADT’s reliable protection.|
ADT keeps your ${city} home safe from potential threats.|
Your family’s safety is our priority at ADT.|
Protect your home with ADT’s trusted security systems.|
ADT is the top choice for home security in ${city}.|
Your home’s safety is in good hands with ADT.|
Stay safe with ADT’s reliable home security systems.|
Trust ADT to keep your home secure, no matter what.|
Your home’s protection is ensured with ADT’s advanced technology.|
Stay safe and secure with ADT’s home security solutions.|
ADT is the name you can trust for home security in ${city}.|
Your home is safer with ADT on your side.|
Protect your home with ADT’s advanced security systems.|
Your home’s safety is our mission at ADT.|
Keep your home safe with ADT’s reliable protection.|
Your family’s safety is our priority at ADT.|
ADT is the trusted choice for home security in ${city}.|
Your home is safer with ADT on the job.|
Stay safe with ADT’s reliable home security services.|
Trust ADT to keep your home secure, no matter what.|
Your home’s protection is our top priority at ADT.|
Keep your home safe with ADT, the leader in home security.|
Your home’s security is in good hands with ADT.|
ADT is the trusted name for home security in ${city}.} {ADT’s advanced systems ensure your home is always protected.|
Protect what matters most with ADT’s reliable service.|
Experience peace of mind with ADT’s reliable protection.|
Secure your home with ADT’s professional-grade technology.|
Your safety is our top concern at ADT.|
With ADT, your home is always in safe hands.|
ADT’s smart systems make it easy to protect your home.|
Keep intruders out with ADT’s advanced security systems.|
Your security is in expert hands with ADT.|
ADT provides security you can trust, no matter what.|
Count on ADT to keep your loved ones safe and secure.|
Your peace of mind is ADT’s mission.|
Let ADT safeguard your home with cutting-edge technology.|
ADT’s technology works around the clock to protect your home.|
Your home deserves the best, and ADT delivers.|
Keep your home secure with ADT’s expert services.|
ADT’s monitoring ensures your home stays protected.|
Rest easy knowing your home is safe with ADT.|
ADT’s smart technology keeps your home connected and secure.|
Secure your home with ADT’s trusted security solutions.|
Your home’s protection is our priority with ADT.|
ADT is there to protect your home, day and night.|
Enjoy the confidence that comes with ADT’s security.|
ADT’s professional monitoring keeps your home secure.|
With ADT, your security is always our priority.|
Count on ADT for reliable home protection.|
ADT ensures your home is always secure.|
Your home is in safe hands with ADT’s advanced systems.|
Let ADT take care of your home’s security needs.|
Your safety is our top concern with ADT’s technology.|
ADT’s solutions provide peace of mind for your home.|
Stay protected with ADT’s trusted security services.|
ADT’s technology ensures your home’s safety.|
Your security is guaranteed with ADT’s reliable systems.|
Protect your home effectively with ADT’s advanced solutions.|
ADT keeps your home safe, no matter where you are.|
Trust ADT for continuous protection of your home.|
Experience unmatched security with ADT’s advanced technology.|
Your home’s protection is assured with ADT’s reliable services.|
ADT delivers the security your home needs.|
Keep your loved ones safe with ADT’s expert monitoring.|
ADT’s systems offer peace of mind for your home.|
Your home is always protected with ADT’s cutting-edge technology.|
Stay safe with ADT’s comprehensive security solutions.|
ADT’s reliable protection keeps your home secure.|
Trust ADT for effective home security solutions.|
Secure your home with the best in the business, ADT.|
ADT ensures that your home’s safety is a top priority.|
Your home’s security is in good hands with ADT’s services.|
Count on ADT’s technology to keep your home safe.|
Your safety is our mission with ADT’s advanced systems.|
ADT’s solutions provide the protection your home needs.|
Keep your home secure with ADT’s trusted technology.|
Your peace of mind is our priority with ADT.|
Protect your home effectively with ADT’s reliable systems.|
Stay secure with ADT’s professional-grade technology.|
ADT ensures that your home remains protected at all times.|
Trust ADT for reliable and effective home security.|
Your home’s safety is ensured with ADT’s advanced monitoring.|
With ADT, your home is always in safe hands.|
ADT’s technology provides the protection your home deserves.|
Your home is safe and secure with ADT’s expert solutions.|
Count on ADT for continuous home security.|
Experience peace of mind with ADT’s advanced technology.|
Your home’s security is our priority with ADT’s solutions.|
Protect your home with ADT’s comprehensive security services.|
ADT’s monitoring keeps your home safe from threats.|
Your safety is our concern with ADT’s reliable systems.|
Stay protected with ADT’s trusted home security.|
ADT’s advanced systems keep your home secure.|
Your home deserves the best security, and ADT delivers.|
ADT provides the peace of mind you need for your home.|
With ADT, your home is always secure.|
Trust ADT for top-notch home protection.|
Secure your home effectively with ADT’s advanced technology.|
Your safety is guaranteed with ADT’s reliable solutions.|
Protect your home with ADT’s trusted systems.|
Stay safe with ADT’s expert security solutions.|
ADT’s technology ensures that your home remains protected.|
Your home is secure with ADT’s comprehensive monitoring.|
Count on ADT for effective and reliable home security.|
ADT delivers the peace of mind you need for your home’s safety.|
Protect your home with ADT’s state-of-the-art systems.|
Your safety is our priority with ADT’s advanced technology.|
Stay secure with ADT’s reliable home protection.|
ADT ensures your home is safe and secure, no matter what.|
Trust ADT for comprehensive protection of your home.|
Your home’s safety is ensured with ADT’s professional services.|
Secure your home with ADT’s cutting-edge technology.|
Experience peace of mind with ADT’s effective security solutions.|
Your home is always protected with ADT’s advanced technology.|
Stay protected with ADT’s reliable security services.|
ADT’s systems provide the protection your home needs.|
Count on ADT for effective home security solutions.|
ADT ensures your home is always in good hands.|
Your safety is our priority with ADT’s trusted systems.|
Protect your home with ADT’s reliable technology.|
Stay secure and safe with ADT’s expert monitoring.|
ADT delivers the protection your home deserves.|
Your home’s security is our concern with ADT.|
Keep your home protected with ADT’s advanced technology.|
Trust ADT to keep your home secure, no matter the situation.} {ADT’s security solutions include:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    24/7 monitoring
  </li>
</ul>|ADT’s home security packages include:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
</ul>|ADT offers a range of features to secure your home:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    24/7 monitoring
  </li>
</ul>|ADT ensures your home has:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    24/7 monitoring
  </li>
</ul>|ADT’s security package includes:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    24/7 monitoring
  </li>
</ul>|ADT provides the following features:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    24/7 monitoring
  </li>
</ul>|ADT delivers these top features:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
</ul>|ADT features include:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
</ul>|ADT provides these essential features:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
</ul>|ADT’s home security system features:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
</ul>|ADT’s top security features:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
</ul>|ADT offers:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
</ul>|ADT features include:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
</ul>|ADT offers these features:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
</ul>|ADT provides:
<ul className="flex flex-wrap max-lg:justify-between pt-5">
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Digital panel
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Motion detector
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Entryway contacts
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Yard signs and window decals
  </li>
  <li className="relative flex basis-[100%] md:basis-[48%] mb-2 md:mb-3 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[8px] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
    Wireless keychain remote
  </li>
</ul>}`;

  return (
    <div className="home-security">
      <div className="container">
        <div className="home-security-main flex flex-col-reverse lg:flex-row py-10 lg:py-20 justify-between items-center">
          <div className="basis-[570px]">
            <div class="service-title text-start pt-8 lg:pt-0 md:max-w-[768px] lg:max-w-full mx-auto">
              <h2 class="font-manrope font-extrabold text-balance text-special-blue text-[34px] lg:text-[40px] xl:text-[50px] leading-[120%] max-w-[820px] mx-auto mb-[20px] text-center lg:text-start">{spunHeadline}</h2>

              <div className="m-0 text-[18px] font-manrope leading-[28px] font-regular text-[#2c2c2c] text-center lg:text-start">{parse(spunParagraph)}</div>
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
