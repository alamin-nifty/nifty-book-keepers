import React from "react";
import Service from "./Service";

export interface ServiceProps {
  title: string;
  description: string;
  img: string;
}

const servicesItem: ServiceProps[] = [
  {
    title: "Bookkeeping",
    description:
      "Our bookkeeping service efficiently manages financial records and transactions using cloud-based technology to increase accuracy and save costs.",
    img: "/assets/images/services/Image-1.png",
  },
  {
    title: "XERO/QuickBooks Software Support",
    description:
      "Our bookkeeping support plan with XERO/Quikbook software offers customized assistance and occasional advice to help businesses.",
    img: "/assets/images/services/Image-2.png",
  },
  {
    title: "Setup & Conversion",
    description:
      "Start your virtual evolution. Let us help you get in the cloud. Convert your existing financial system to a fresh new one and get everything working together.",
    img: "/assets/images/services/Image-3.png",
  },
  {
    title: "Tax & Compliance",
    description:
      "Don't fear the unknown of tax compliance. It’s crucial, and avoiding it is vital. Trust in the process and avoid any trouble with the tax authorities..",
    img: "/assets/images/services/Image-4.png",
  },
];

const Services = () => {
  return (
    <div className="mx-[10%] my-20">
      <p className="my-8 md:text-4xl text-2xl font-bold">
        What You Get With Nifty Bookkeepers
      </p>
      <div className="relative grid lg:grid-cols-2 grid-cols-1 gap-8 my-8">
        {servicesItem.map((item: ServiceProps) => {
          return <Service service={item} />;
        })}
      </div>
    </div>
  );
};

export default Services;
