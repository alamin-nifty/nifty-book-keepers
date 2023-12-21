import React from "react";

type Props = {};

const Diagram = (props: Props) => {
  return (
    <div className="mx-[10%]">
      <div>
        <p className="uppercase text-gray-500 font-semibold py-5">
          How it works
        </p>
        <p className="pb-14 font-bold text-2xl">
          Let's master your finances in SIX easy steps!
        </p>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/assets/images/diagram/diagram.svg"
          alt="Diagram"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Diagram;
