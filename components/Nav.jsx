import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center" aria-label="Primary">
      <Link href="/">
        <Image
          src={assets.logo}
          width={180}
          height={100}
          alt="Hritik Blog logo"
          loading="eager"
          className="w-45 h-auto"
          style={{ height: "auto" }}
        />
      </Link>
      <Link
        href="#newsletter"
        aria-label="Get started and jump to newsletter signup"
        className="flex items-center gap-2 font-medium py-3 text-white bg-black rounded-full text-sm md:text-md lg:text-lg cursor-pointer px-3 sm:px-6 active:bg-gray-700"
      >
        Get Started
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </nav>
  );
};

export default Nav;
