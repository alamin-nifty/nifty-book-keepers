import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" bg-gray-50">
      <div className="mx-[10%] grid md:grid-cols-2 grid-cols-1 items-start justify-between py-10 md:h-[400px] h-full">
        <div className="flex flex-col justify-between  h-full ">
          <div>
            <img
              src="/assets/Logo/footer-logo.svg"
              alt="logo"
              className="w-[250px] h-[100px]"
            />
          </div>
          <div>
            <p className="text-semibold py-4">Find us!</p>
            <div className="flex items-center justify-start gap-2">
              <FaFacebookSquare className="w-6 h-6" />
              <FaInstagram className="w-6 h-6" />
              <FaLinkedin className="w-6 h-6" />
              <FaXTwitter className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-end gap-x-28 md:my-0 mt-14">
          <div>
            <ul className="flex flex-col  text-right gap-5">
              <li className=" hover:text-gray-700 cursor-pointer">
                <a href="#">Home</a>
              </li>
              <li className=" hover:text-gray-700 cursor-pointer">
                <a href="#">Services</a>
              </li>
              <li className=" hover:text-gray-700 cursor-pointer">
                <a href="#">Pricing</a>
              </li>
              <li className=" hover:text-gray-700 cursor-pointer">
                <a href="#">About Us</a>
              </li>
              <li className=" hover:text-gray-700 cursor-pointer">
                <a href="#">Blog</a>
              </li>
              <li className=" hover:text-gray-700 cursor-pointer">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-12 text-right">
              <p className="font-bold text-xl py-4">USA Office</p>
              <p>1309 Coffeen Ave Sheridan,</p>
              <p>WY82801, United States</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-xl py-4">Bangladesh Office</p>
              <p>House No. 6, Road No.8,</p>
              <p>Shakhertek Main Rd,</p>
              <p>Dhaka 1207, Dhaka Division,</p>
              <p>Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1875BB]">
        <p className="mx-[10%] text-white py-3 text-sm">
          © 2023 Nifty Bookkeepers LLC | All Rights Reserved | Powered by Nifty
          IT Solution LTD
        </p>
      </div>
    </div>
  );
};

export default Footer;
