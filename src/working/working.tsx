import React, { useEffect, useState } from "react";
import "./working.css";
import Arrow from "../assets/arrow-161.svg";
import Arrow1 from "../assets/Arrow 16.svg";
import Arrow2 from "../assets/Arrow 162.svg";
import RightArrow from "../assets/arrow-back-outline-2-3.svg";
import img1 from "../assets/image-94@2x.png";
import img2 from "../assets/image-90.png";
import img3 from "../assets/image-95@2x.png";
import img4 from "../assets/image-92@2x.png";
import img5 from "../assets/image-93@2x.png";

const HowItWorksSection = () => {
  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getDeviceType() {
    const width = window.innerWidth;
    if (width <= 768) {
      return "mobile";
    } else if (width <= 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  }

  const getImageSrc = (deviceType: string) => {
    switch (deviceType) {
      case "mobile":
        return Arrow1;
      case "tablet":
        return Arrow2;
      case "desktop":
        return Arrow;
      default:
        return "";
    }
  };

  return (
    <div className="flex  items-start justify-center px-[16px] py-[32px] sm:py-[50px] lg:p-[100px] relative bg-[#c8c8c826]">
      <img
        className="absolute w-[128px] h-[1078px] sm:w-[559px] sm:h-[1691px]  sm:left-[125px] left-[151px] top-0 lg:w-[1093px] lg:h-[1815px] lg:top-[5px] lg:left-[193px] object-cover"
        src={getImageSrc(deviceType)}
        alt={`${deviceType} Image`}
      />

      <div className="items-center w-[100vw] gap-[32px] sm:gap-[40px] lg:gap-[64px] flex-1 grow flex flex-col relative">
        <p className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-collection-1-text text-[24px] lg:leading-[64px]  lg:text-[48px]  sm:text-[48px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          <span className="text-[#0f1011]">How </span>
          <span className="text-[#101111a6]">It</span>
          <span className="text-[#0f1011]"> Works?</span>
        </p>
        <div className="items-start gap-[32px] sm:gap-[34px] self-stretch w-full flex-[0_0_auto] flex flex-col relative">
          <div className="flex sm:h-[272px] items-center gap-[8px] sm:gap-[40px] relative self-stretch w-full flex-[0_0_auto] bg-collection-1-shadow-light-mode  sm:flex-none">
            <img
              className="  ml-3 md:ml-9 lg:ml-0  flex-1 grow sm:flex-grow-0 h-[173px] sm:w-[271.49px] sm:h-[271.49px] sm:flex-none"
              alt="Image"
              src={img1}
            />
            <div className="items-start gap-[8px] sm:gap-[32px] lg:inline-flex flex-1 grow flex flex-col relative">
              <div className="mt-[-1.00px] sm:text-[32px] lg:whitespace-nowrap lg:w-fit [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[18px] tracking-[0] leading-[normal] relative self-stretch">
                Record Livestock Data
              </div>
              <div className="items-start gap-[8px] self-stretch w-full flex-[0_0_auto] flex flex-col relative">
                <p className="relative sm:w-[375px] self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal sm:font-medium text-collection-1-70-main-text-dark-light-mode text-[14px] sm:text-[18px] tracking-[0] leading-[normal]">
                  Easily add details about your livestock. Input information
                  such as species, breed, and birthdate. Keep all your livestock
                  data organized in one place.
                </p>
                <div className="flex sm:inline-flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative  w-fit [font-family:'Roboto-Medium',Helvetica] font-medium sm:font-bold text-collection-1-text text-[12px] sm:text-[18px] tracking-[0] leading-[normal] underline whitespace-nowrap">
                    Download App
                  </div>
                  <img
                    className="relative w-[24px] h-[24px]"
                    alt="Arrow back outline"
                    src={RightArrow}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:h-[272px] items-center gap-[8px] sm:gap-[40px] sm:justify-end w-full flex-[0_0_auto] sm:flex-none relative self-stretch">
            <div className=" ml-3 md:ml-9 lg:ml-0  items-start sm:inline-flex gap-[8px] sm:gap-[32px] flex-1 grow sm:float-none sm:flex-[0_0_auto] flex flex-col relative">
              <div className="relative sm:w-fit self-stretch mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[18px]  sm:text-[32px] tracking-[0] leading-[normal] sm:whitespace-nowrap">
                Analyze and Optimize
              </div>
              <div className="items-start gap-[8px] sm:inline-flex self-stretch w-full flex-[0_0_auto] flex flex-col relative">
                <p className="relative sm:w-[375px] self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal sm:font-medium text-collection-1-70-main-text-dark-light-mode text-[14px] sm:text-[18px] tracking-[0] leading-[normal]">
                  Easily add details about your livestock. Input information
                  such as species, breed, and birthdate. Keep all your livestock
                  data organized in one place.
                </p>
                <div className="flex sm:inline-flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative  w-fit [font-family:'Roboto-Medium',Helvetica] font-medium sm:font-bold text-collection-1-text text-[12px] sm:text-[18px] tracking-[0] leading-[normal] underline whitespace-nowrap">
                    Download App
                  </div>
                  <img
                    className="relative w-[24px] h-[24px]"
                    alt="Arrow back outline"
                    src={RightArrow}
                  />
                </div>
              </div>
            </div>
            <img
              className="mr-3 lg:mr-0  relative flex-1 grow h-[173px]  sm:flex-grow-0 sm:w-[271.49px] sm:h-[271.49px] sm:flex-none"
              alt="Image"
              src={img2}
            />
          </div>
          <div className="flex sm:h-[272px] items-center gap-[8px] sm:gap-[40px] relative self-stretch w-full flex-[0_0_auto] bg-collection-1-shadow-light-mode  sm:flex-none">
            <img
              className=" ml-3 md:ml-9 lg:ml-0 relative flex-1 grow h-[173px] sm:w-[271.49px] sm:h-[271.49px] sm:flex-none"
              alt="Image"
              src={img3}
            />
            <div className="items-start gap-[8px] sm:gap-[32px] lg:inline-flex flex-1 grow flex flex-col relative">
              <div className="mt-[-1.00px] sm:text-[32px] lg:whitespace-nowrap lg:w-fit [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[18px] tracking-[0] leading-[normal] relative self-stretch">
                Monitor Financials
              </div>
              <div className="items-start gap-[8px] self-stretch w-full flex-[0_0_auto] flex flex-col relative">
                <p className="relative sm:w-[375px] self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal sm:font-medium text-collection-1-70-main-text-dark-light-mode text-[14px] sm:text-[18px] tracking-[0] leading-[normal]">
                  Track your farm&#39;s financial health with ease. Record
                  sales, expenses, and revenue to gain a clear picture of your
                  farm&#39;s profitability.
                </p>
                <div className="flex sm:inline-flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative  w-fit [font-family:'Roboto-Medium',Helvetica] font-medium sm:font-bold text-collection-1-text text-[12px] sm:text-[18px] tracking-[0] leading-[normal] underline whitespace-nowrap">
                    Download App
                  </div>
                  <img
                    className="relative w-[24px] h-[24px]"
                    alt="Arrow back outline"
                    src={RightArrow}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex sm:h-[272px] items-center gap-[8px] sm:gap-[40px] sm:justify-end w-full flex-[0_0_auto] sm:flex-none relative self-stretch">
            <div className=" ml-3 md:ml-12 lg:ml-0   items-start sm:inline-flex gap-[8px] sm:gap-[32px] flex-1 grow sm:flex-[0_0_auto] flex flex-col relative">
              <div className="relative  sm:w-fit self-stretch mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[18px]  sm:text-[32px] tracking-[0] leading-[normal] sm:whitespace-nowrap">
                Customize Feed Formulas
              </div>
              <div className="items-start gap-[8px] sm:inline-flex self-stretch w-full flex-[0_0_auto] flex flex-col relative">
                <p className="relative sm:w-[375px] self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal sm:font-medium text-collection-1-70-main-text-dark-light-mode text-[14px] sm:text-[18px] tracking-[0] leading-[normal]">
                  Create your own feed formulas or choose from our library of
                  ready-made formulas. Tailor your livestock&#39;s diet for
                  optimal growth and health.
                </p>
                <div className="flex sm:inline-flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative  w-fit [font-family:'Roboto-Medium',Helvetica] font-medium sm:font-bold text-collection-1-text text-[12px] sm:text-[18px] tracking-[0] leading-[normal] underline whitespace-nowrap">
                    Download App
                  </div>
                  <img
                    className="relative w-[24px] h-[24px]"
                    alt="Arrow back outline"
                    src={RightArrow}
                  />
                </div>
              </div>
            </div>
            <img
              className=" mr-3 lg:mr-0 relative flex-1 grow h-[173px] sm:w-[271.49px] sm:h-[271.49px] sm:flex-none"
              alt="Image"
              src={img4}
            />
          </div>
          <div className="flex sm:h-[272px] items-center gap-[8px] sm:gap-[40px] relative self-stretch w-full flex-[0_0_auto] bg-collection-1-shadow-light-mode  sm:flex-none">
            <img
              className="ml-3 md:ml-9 lg:ml-0 relative flex-1 grow h-[173px] sm:w-[271.49px] sm:h-[271.49px] sm:flex-none"
              alt="Image"
              src={img5}
            />
            <div className="items-start gap-[8px] sm:gap-[32px] lg:inline-flex flex-1 grow flex flex-col relative">
              <div className="mt-[-1.00px] sm:text-[32px] lg:whitespace-nowrap lg:w-fit [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[18px] tracking-[0] leading-[normal] relative self-stretch">
                Collaborate With Others
              </div>
              <div className="items-start sm:inline-flex gap-[8px] self-stretch w-full flex-[0_0_auto] flex flex-col relative">
                <p className="relative sm:w-[375px] self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal sm:font-medium text-collection-1-70-main-text-dark-light-mode text-[14px] sm:text-[18px] tracking-[0] leading-[normal]">
                  Effortlessly invite and collaborate with team members,
                  partners, and fellow farmers to streamline farm management,
                  enhance communication, and boost efficiency.
                </p>
                <div className="flex sm:inline-flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative  w-fit [font-family:'Roboto-Medium',Helvetica] font-medium sm:font-bold text-collection-1-text text-[12px] sm:text-[18px] tracking-[0] leading-[normal] underline whitespace-nowrap">
                    Download App
                  </div>
                  <img
                    className="relative w-[24px] h-[24px]"
                    alt="Arrow back outline"
                    src={RightArrow}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorksSection;
