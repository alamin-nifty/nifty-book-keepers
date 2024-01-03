"use client";
import React, { useState } from "react";
import { transationForButton } from "../Hero/Hero";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

type Props = {};

const ConsultationForm = (props: Props) => {
  const [phone, setPhone] = useState("+880");
  return (
    <div className="md:w-[80%]  w-full mt-10 p-6 bg-white rounded-md shadow-md ">
      <h2 className="text-2xl font-semibold mb-6">Free Consultation</h2>
      <form>
        <div className="mb-4 ">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded-md shadow-md"
          />
        </div>
        <div className="mb-4 ">
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="BD"
            placeholder="Phone Number"
            value={phone}
            onChange={(value) => setPhone(value || " ")}
            className="w-full p-2 border rounded-md shadow-md"
          />
        </div>
        <div className="mb-4 ">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded-md shadow-md"
          />
        </div>
        <div className="mb-4 ">
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company Name"
            className="w-full p-2 border rounded-md shadow-md"
          />
        </div>
        <div className="mb-6">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full p-2 border rounded-md shadow-md "
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className={` bg-[#1875BB] text-white py-2 px-8 rounded-full  hover:bg-gray-500 ${transationForButton.smoothTranstation}`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConsultationForm;
