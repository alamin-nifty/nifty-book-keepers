import React from "react";
import { transationForButton } from "../Hero/Hero";
import Link from "next/link";

type Props = {};

const Extra2 = (props: Props) => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let formattedDate = `${year}-${month < 10 ? `0${month}` : month}`;
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
          <Link
            href={`https://calendly.com/sales-nifty/30min?month=${formattedDate}`}
          >
            {" "}
            <button
              className={`bg-white text-[#1875BB] hover:bg-gray-500 text-xl font-bold p-3 rounded-full mt-10 hover:text-white ${transationForButton.smoothTranstation}}`}
            >
              SCHEDULE A FREE CONSULTATION
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Extra2;
