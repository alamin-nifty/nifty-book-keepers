import React from "react";

type Props = {};

const ConsultationForm = (props: Props) => {
  return (
    <div className="w-[80%]  mt-10 p-6 bg-white rounded-md shadow-md ">
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
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
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
            className=" bg-blue-500 text-white py-2 px-8 rounded-full hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConsultationForm;
