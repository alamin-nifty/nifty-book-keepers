import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { transationForButton } from "../Hero/Hero";

const priceLists = [
  {
    title: "Basic",
    normalPrice: "Normally $70",
    price: "$49",
    discount: "30% Off / save $21",
    features: [
      "Up to 100 monthly transactions",
      "Monthly financial reports",
      "Bank feed integration",
      "Monthly financial statements",
      "Basic bookkeeping support",
      "Email support",
    ],
  },
  {
    title: "Standard",
    normalPrice: "Normally $142",
    price: "$99",
    discount: "30% Off / save $43",
    features: [
      "Up to 500 monthly transactions",
      "Bank feed integration",
      "Monthly financial statements",
      "Regular bookkeeping support",
      "Quarterly tax preparation",
      "Email and phone support",
    ],
  },
  {
    title: "Premium",
    normalPrice: "Normally $285",
    price: "$199",
    discount: "30% Off / save $86",
    features: [
      "Up to 1000 monthly transactions",
      "Bank feed integration",
      "Monthly financial statements",
      "Advanced bookkeeping support",
      "Monthly tax preparation and filing",
      "Dedicated account manager",
      "Email, phone, and live chat support",
    ],
  },
];

const PriceLists = () => {
  return (
    <div className=" mx-[10%] my-10">
      <p className="text-4xl font-semibold my-10">
        Choose From Our Various Pricing Plans...
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {priceLists.map((list) => {
          return (
            <div className=" bg-gray-100 shadow-md  rounded-md">
              <div className="flex flex-col justify-center items-center py-10  px-10 ">
                <p className="text-3xl font-bold pb-3">{list.title}</p>
                <p
                  style={{
                    textDecoration: "line-through",
                    textDecorationColor: "red",
                    fontSize: "20px",
                  }}
                >
                  {list.normalPrice}
                </p>
                <p className="text-[#1875BB] text-6xl p-2 font-semibold">
                  {list.price}
                </p>
                <p className="text">Per Month</p>
                <p className="border border-green-500 border-dotted p-2 bg-green-200 text-green-500 font-semibold rounded-md">
                  {list.discount}
                </p>
                <button
                  className={`bg-[#1875BB] hover:bg-gray-500 py-2 px-6 rounded-full text-white my-5 font-semibold ${transationForButton.smoothTranstation}}`}
                >
                  SUBSCRIBE
                </button>
                <span className="w-2/3 p-[1px] bg-gray-600  my-10"></span>
                <div>
                  {list.features.map((feature) => {
                    return (
                      <div
                        className="flex items-center gap-2 p-2"
                        key={feature}
                      >
                        <IoMdCheckmark className="text-[#1875BB] w-7 h-7" />
                        <p>{feature}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceLists;
