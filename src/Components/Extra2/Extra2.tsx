import React from "react";
import { transationForButton } from "../Hero/Hero";

type Props = {};

const Extra2 = (props: Props) => {
  return (
    <div className="w-full md:h-[230px] h-full bg-[#1875BB] mt-28 mb-20">
      <div className="h-full flex items-center justify-center md:mx-[20%] mx-[5%] md:py-0 py-5 ">
        <div className="text-white text-center">
          <p className="font-semibold text-xl">
            Are you ready to take everyday bookkeeping tasks off your list?
          </p>
          <p className="pt-5 text-sm">
            Meet with Nifty Bookkeepers to discover our reliable, accurate, &
            cost-effective bookkeeping solutions!
          </p>
          <button
            className={`bg-white text-[#1875BB] hover:bg-gray-300 text-xl font-bold p-3 rounded-full mt-10 ${transationForButton.smoothTranstation}}`}
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extra2;
