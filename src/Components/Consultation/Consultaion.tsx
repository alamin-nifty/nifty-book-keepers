import React from "react";
import { transationForButton } from "../Hero/Hero";

type Props = {};

const Consultaion = (props: Props) => {
  return (
    <div className="w-full md:h-[230px] h-full bg-[#1875BB] mt-28 mb-20 md:py-0 py-10">
      <div className="h-full flex md:flex-row flex-col items-center justify-between mx-[10%]">
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-16  gap-4">
          <div>
            <img src="/assets/Logo/reliable.png" alt="reliable" />
            <p className="text-white p-3">Reliable</p>
          </div>
          <div>
            <img src="/assets/Logo/accurate.png" alt="" />
            <p className="text-white p-3">Accurtae</p>
          </div>
          <div>
            <img src="/assets/Logo/saving.png" alt="" />
            <p className="text-white p-3">Accurtae</p>
          </div>
        </div>
        <div className="text-white md:my-0 my-5 text-center">
          <p className="md:font-normal font-semibold md:text-base text-xl">
            Experience the ease of bookkeeping with us!
          </p>
          <button
            className={`bg-white text-[#1875BB] md:text-xl font-bold p-3 px-5 rounded-full mt-8 hover:bg-gray-300 ${transationForButton.smoothTranstation}`}
          >
            SCHEDULE A FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consultaion;
