import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-auto bg-[#f3eee3] border-r-2 border-r-black">
      <div className="flex items-center justify-center py-3 border-b-2 border-b-black">
        <Image
          src={assets.logo}
          width={200}
          height={100}
          alt="logo"
          className="h-12 md:h-15 w-auto"
        />
      </div>
      <div className="w-28 sm:w-80 py-12">
        <Link
          href="/admin/addProduct"
          className="flex items-center active:bg-white hover:bg-white gap-3 font-medium px-3 py-2 hover:shadow-lg rounded-lg cursor-pointer"
        >
          <IoAddCircleOutline className="h-5 w-5" />
          <p className="capitalize text-lg">add blogs</p>
        </Link>
        <Link
          href="/admin/blogList"
          className="flex items-center active:bg-white hover:bg-white gap-3 font-medium px-3 py-2 mt-3 hover:shadow-lg rounded-lg cursor-pointer"
        >
          <TbEdit className="h-5 w-5" />
          <p className="capitalize text-lg">blog list</p>
        </Link>
        <Link
          href="/admin/subscriptions"
          className="flex items-center active:bg-white hover:bg-white gap-3 font-medium px-3 py-2 mt-3 hover:shadow-lg rounded-lg cursor-pointer"
        >
          <MdOutlineEmail className="h-5 w-5" />
          <p className="capitalize text-lg">subscriptions</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
