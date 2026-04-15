import React from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import { year } from "@/Assets/assets";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-between py-8 bg-black px-5  md:px-12 lg:px-28 min-h-full w-full">
      <Link href="/">
        <Image
          src={assets.logo_light}
          alt="logo"
          width={200}
          height={100}
          className="w-auto h-auto sm:w-45 md:w-50 lg:w-60"
        />
      </Link>

      <p className="text-white text-lg font-medium capitalize mt-4 md:mt-0">
        copyright &copy;{year} Hritik Sharma
      </p>
      <div className="flex items-center gap-3 mt-5 md:mt-0">
        <Link
          href="https://www.linkedin.com/in/hritik-sharma-oct04/"
          target="_blank"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-[#e0fedf] text-[#04da00] rounded-full">
            <FaLinkedinIn className="text-2xl" />
          </div>
        </Link>

        <Link href="https://github.com/hritik2004-cse" target="_blank">
          <div className="w-12 h-12 flex items-center justify-center bg-[#e0fedf] text-[#04da00] rounded-full">
            <LuGithub className="text-2xl" />
          </div>
        </Link>

        <Link href="https://www.youtube.com/@Hritik_is_coding" target="_blank">
          <div className="w-12 h-12 flex items-center justify-center bg-[#e0fedf] text-[#04da00] rounded-full">
            <FaYoutube className="text-2xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
