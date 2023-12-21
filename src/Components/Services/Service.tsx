import React from "react";
import { ServiceProps } from "./Services";

const Service = ({ service }: { service: ServiceProps }) => {
  return (
    <div className="bg-slate-100 shadow-lg  md:p-10 p-5 rounded-md">
      <div className="p-4 md:flex items-start justify-start gap-6">
        <div className="md:my-0 my-5 md:block flex justify-center items-center">
          <img
            src={service.img}
            alt={service.title}
            className="md:w-[230px] w-[100px] h-[70px]"
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
