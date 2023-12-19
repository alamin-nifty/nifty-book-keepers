import React from "react";

const Hero = () => {
  const transationForButton = {
    smoothTranstation: "transation-all duration-500 ease-in-out transform  ",
  };
  return (
    <div className="flex h-screen justify-center items-center flex-col ">
      <div
        className="relative w-full h-screen bg-cover bg-center bg-[url('/assets/images/hero.jpg')] overflow-hidden "
        // style={{ backgroundImage: `url('hero.png')` }}
      >
        <div className="absolute w-full h-[1000px] flex rounded-full  -top-[20%] right-[35%]  justify-center items-center bg-[#1875BBD9] opacity-[85] overflow-hidden">
          <div className="flex items-center justify-center w-[680px] ml-[30%]">
            <div className="p-10">
              <p className="text-white text-6xl font-bold w-full pb-3  text-left leading-normal capitalize">
                Keeping your business on track is our expertise
              </p>
              <p className="leading-normal text-white text-lg text-left">
                Our expert bookkeepers are here to manage your accounting
                hassle-free. Let us handle the numbers while you focus on what
                you do best!
              </p>
              <div className="">
                <button
                  className={`bg-[#ffffff] text-[#1875BBD9] text-lg font-bold py-3 px-8 rounded-full mt-5 uppercase hover:bg-slate-100 ${transationForButton.smoothTranstation}`}
                >
                  Get Started
                </button>
                <button
                  className={`border border-white text-white text-lg font-bold py-3 px-8 rounded-full mt-5 ml-5 hover:bg-black hover:text-white uppercase  ${transationForButton.smoothTranstation}`}
                >
                  {" "}
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
