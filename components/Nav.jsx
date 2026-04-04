import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <Image
          src={assets.logo}
          width={180}
          height={100}
          alt="logo"
          loading="eager"
          className="w-45 h-auto"
          style={{ height: "auto" }}
        />
      </Link>
      <button className="flex items-center gap-2 font-medium py-3 text-white bg-black rounded-full text-sm md:text-md lg:text-lg cursor-pointer px-3 sm:px-6 active:bg-gray-700">
        Get Started
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Nav;
