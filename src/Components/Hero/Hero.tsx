import Link from "next/link";
import React from "react";

export const transationForButton = {
  smoothTranstation: "transation-all duration-500 ease-in-out transform  ",
};
const Hero = () => {
  return (
    <div className="flex md:h-screen h-full justify-center items-center flex-col ">
      <div
        className="relative w-full h-screen bg-cover bg-center bg-[url('/assets/images/hero.jpg')] overflow-hidden "
        // style={{ backgroundImage: `url('hero.png')` }}
      >
        <div className="absolute w-full  2xl:h-min-h-full xl:h-min-h-full lg:min-h-full min-h-full  flex justify-center items-center xl:rounded-full  xl:right-[35%]  bg-[#1875BBD9] opacity-[85] overflow-hidden">
          <div className="flex items-center justify-center w-[680px] xl:ml-[30%] ">
            <div className="p-10">
              <p className="text-white md:text-6xl text-3xl font-bold w-full pb-3  text-left   capitalize xl:py-0 lg:py-5 md:py-5">
                Keeping your business on track is our expertise
              </p>
              <p className="leading-normal text-white text-lg text-left xl:py-0 lg:py-10 md:py-5">
                Our expert bookkeepers are here to manage your accounting
                hassle-free. Let us handle the numbers while you focus on what
                you do best!
              </p>
              <div className=" flex flex-col md:inline-flex md:flex-row md:justify-center md:items-start items-center justify-start md:gap-5 gap-1 md:mt-0 mt-5">
                <Link href="#priceList">
                  <button
                    className={`bg-[#ffffff] text-[#1875BBD9] text-lg font-bold py-3 px-8 rounded-full mt-5 uppercase hover:text-white hover:bg-slate-500 ${transationForButton.smoothTranstation}`}
                  >
                    {" "}
                    Get Started
                  </button>
                </Link>
                <Link href="https://niftybookkeepers.com/services/">
                  <button
                    className={`bg-[#ffffff] text-[#1875BBD9] text-lg font-bold py-3 px-8 rounded-full mt-5 uppercase hover:text-white hover:bg-slate-500 ${transationForButton.smoothTranstation}`}
                  >
                    {" "}
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
