import Link from "next/link";
import React from "react";
import ConsultationForm from "../ConsultationForm/ConsultationForm";

export const transationForButton = {
  smoothTranstation: "transation-all duration-500 ease-in-out transform  ",
};
const Hero = () => {
  return (
    <div className=" min-h-full  relative flex items-center justify-center">
      <div
        className="relative w-full min-h-screen  bg-cover bg-[url('/assets/images/hero.jpg')] "
        // style={{ backgroundImage: `url('hero.png')` }}
      >
        <div className=" w-full   min-h-screen   grid lg:grid-cols-2 grid-cols-1 gap-x-16 justify-center items-center  bg-[#1875BBD9] opacity-[85] ">
          <div className="flex items-center justify-center w-full  mx-auto  ">
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
          <div className=" w-full  px-[5%] my-4">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
