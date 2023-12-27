"use client";

import Image from "next/image";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { transationForButton } from "../Hero/Hero";
import Link from "next/link";
type Props = {};

const Header = (props: Props) => {
  const headerStyle = {
    button: ` flex justify-between items-center text-black px-2 py-2 rounded-sm hover:bg-gray-100 border border-black mx-2 text-base font-[500] ${transationForButton.smoothTranstation}}`,
  };
  const phoneNumber = "+1 (323)-388-4703";
  const emailAddress = "info@niftybookkeepers.com";
  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-md md:px-10 z-20">
      <Link href="https://niftybookkeepers.com/">
        <div>
          <Image
            src="/assets/Logo/Logo.png"
            alt="Company Logo"
            width={150}
            height={60}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </Link>

      <div className={`flex items-center justify-center`}>
        <Link href={`tel:${phoneNumber}`} target="_blank">
          <button className={headerStyle.button}>
            <FiPhone className="w-7 h-7 mx-1 " />
            <p className="hidden lg:block">{phoneNumber}</p>
          </button>
        </Link>

        <Link href={`mailto:${emailAddress}`} target="_blank">
          <button className={headerStyle.button}>
            <MdMailOutline className="w-7 h-7 mx-1" />
            <p className="hidden lg:block">info@niftybookkeepers.com</p>
          </button>
        </Link>
        <Link
          href="https://www.linkedin.com/company/nifty-bookkeepers-llc/"
          target="_blank"
        >
          <button className={headerStyle.button}>
            <CiLinkedin className="w-7 h-7 mx-1" />
            <p className="hidden lg:block">LinkedIn</p>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
