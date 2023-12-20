import React from "react";

type Props = {};

const Extra2 = (props: Props) => {
  return (
    <div className="w-full h-[230px] bg-[#1875BB] mt-28 mb-20">
      <div className="h-full flex items-center justify-center mx-[20%]">
        <div className="text-white text-center">
          <p className="font-semibold text-xl">
            Are you ready to take everyday bookkeeping tasks off your list?
          </p>
          <p className="pt-5 text-sm">
            Meet with Nifty Bookkeepers to discover our reliable, accurate, &
            cost-effective bookkeeping solutions!
          </p>
          <button className="bg-white text-[#1875BB] text-xl font-bold p-3 px-5 rounded-full mt-10">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extra2;
