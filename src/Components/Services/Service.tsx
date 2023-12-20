import React from "react";
import { ServiceProps } from "./Services";

const Service = ({ service }: { service: ServiceProps }) => {
  return (
    <div className="bg-slate-100 shadow-lg 5 p-10 rounded-md">
      <div className="p-4 flex items-start justify-start gap-6">
        <div className="">
          <img
            src={service.img}
            alt={service.title}
            className="w-[230px] h-[70px]"
          />
        </div>
        <div>
          <p className="text-2xl font-semibold pb-4">{service.title}</p>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
