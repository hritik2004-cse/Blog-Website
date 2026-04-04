import { assets } from "@/Assets/assets";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'

export default function layout({ children }) {
  return (
    <>
      <div className="flex w-full">
        <ToastContainer theme="light"/>
        <Sidebar />
        <div className="flex bg-[#f9f5ec] flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 px-6 sm:px-8 md:px-12 border-b-2 border-b-black">
            <h3 className="capitalize text-md md:text-xl lg:text-2xl font-bold">admin dashboard</h3>
            <Image
              src={assets.profile_icon}
              height={100}
              width={100}
              alt="admin photo"
              className="h-12 w-12 md:h-15 md:w-15 object-cover rounded-full"
            />
          </div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
