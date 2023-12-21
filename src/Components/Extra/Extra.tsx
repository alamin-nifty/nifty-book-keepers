import React from "react";
import { transationForButton } from "../Hero/Hero";

type Props = {};

const Extra = (props: Props) => {
  return (
    <div className="w-full h-[230px] bg-[#1875BB] mt-28 mb-20">
      <div className="h-full flex items-center justify-between mx-[20%]">
        <div className="text-white text-center">
          <p>
            Do you have any questions, need personalized financial advice, or
            wish to discuss your unique bookkeeping requirements? Our team at
            Nifty Bookkeepers is only a click away.
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

export default Extra;
