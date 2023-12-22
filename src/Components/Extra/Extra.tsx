import React from "react";
import { transationForButton } from "../Hero/Hero";
import Link from "next/link";

type Props = {};

const Extra = (props: Props) => {
  return (
    <div className="w-full md:h-[230px] h-full bg-[#1875BB] mt-28 mb-20">
      <div className="h-full flex items-center justify-between md:mx-[20%] mx-[5%] md:py-0 py-5">
        <div className="text-white text-center">
          <p>
            Do you have any questions, need personalized financial advice, or
            wish to discuss your unique bookkeeping requirements? Our team at
            Nifty Bookkeepers is only a click away.
          </p>
          <Link href="https://niftybookkeepers.com/services/">
            {" "}
            <button
              className={`bg-white text-[#1875BB] hover:bg-gray-500 text-xl font-bold p-3 rounded-full mt-10 hover:text-white ${transationForButton.smoothTranstation}}`}
            >
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Extra;
