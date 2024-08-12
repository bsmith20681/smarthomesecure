import Image from "next/image";
import Link from "next/link";

const FeatureHighlight = ({ imgSrc, title, description, liLeft1, liLeft2, liRight1, liRight2, btnText, bgColor, imageDiv, dataDiv }) => {
  return (
    <div className={`relative py-[30px] md:py-[40px] xl:py-[70px] 2xl:py-[90px] ${bgColor === "#fff" ? "bg-[#ffffff]" : "bg-[#ecf7ff]"}`}>
      <div className="container">
        <div className="column-div flex max-lg:flex-col lg:flex-row gap-8 md:gap-[28px] lg:gap-[40px] xl:gap-[60px] 2xl:gap-[80px]">
          <div className={`block w-full lg:w-1/2 max-lg:max-w-[500px] mx-auto`}>
            <Image src={imgSrc} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className={`flex flex-col justify-center  w-full lg:w-1/2`}>
            <h2 className="font-manrope font-extrabold text-special-blue text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] leading-[120%] mb-[12px] max-lg:text-center">{title}</h2>
            <p className="font-manrope font-normal text-special-grey text-[18px] leading-[156%] mb-[16px] md:mb-[20px] xl:mb-[24px] max-lg:text-center ">{description}</p>
            <div className="grid max-lg:place-content-center lg:grid-cols-2 gap-2 mb-[18px] md:mb-[28px] lg:mb-[32px] xl:mb-[40px]">
              <ul className="flex flex-col max-lg:justify-center gap-2">
                <li className="basis-1/2 relative flex flex-row gap-1 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[50%] after:translate-y-[-50%] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
                  {liLeft1}
                </li>
                <li className="basis-1/2 relative flex flex-row gap-1 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[50%] after:translate-y-[-50%] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
                  {liLeft2}
                </li>
              </ul>
              <ul className="flex flex-col max-lg:justify-center gap-2">
                <li className="basis-1/2 relative flex flex-row gap-1 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[50%] after:translate-y-[-50%] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
                  {liRight1}
                </li>
                <li className="basis-1/2 relative flex flex-row gap-1 after:absolute after:bg-[url('/images/liShape.png')] after:bg-no-repeat after:left-0 after:top-[50%] after:translate-y-[-50%] after:content-[''] after:z-10 after:h-[15px] after:w-[15px] pl-[15px] font-manrope font-normal text-special-grey text-[18px] leading-[156%]">
                  {liRight2}
                </li>
              </ul>
            </div>
            <div className="max-lg:text-center">
              <Link
                href="/"
                className="uppercase inline-block decoration-none bg-adt-orange hover:bg-adt-orange-600 outline-none text-white font-manrope font-extrabold text-[18px] leading-[27px] py-[10px] md:py-[12px] xl:py-[14px] px-[24px] md:px-[38px] lg:px-[52px] xl:px-[64px] hover:duration-300"
              >
                {btnText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;
