import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogTable = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
  const NewDate = new Date(date);

  return (
    <tr className="text-[#04da00] bg-[#e0fedf] border-b">
      <th
        className="items-center gap-3 hidden sm:flex px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
        scope="row"
      >
        <Image
          src={authorImg ? authorImg : assets.profile_icon}
          className="w-16 h-16 rounded-full object-cover border-2 border-[#04da00]"
          alt="author image"
          width={100}
          height={100}
        />
        <p className="text-[#04da00] font-medium text-md capitalize">
          {author ? author : "no author"}
        </p>
      </th>
      <td className="px-6 py-4 capitalize font-medium">
        {title ? title : "no title"}
      </td>
      <td className="px-6 py-4 font-medium">{NewDate.toDateString()}</td>
      <td className="px-6 py-4">
        <button className="cursor-pointer bg-red-200 text-red-900 px-6 py-2 font-medium text-lg capitalize rounded-lg hover:shadow-lg transition" onClick={() => deleteBlog(mongoId)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BlogTable;
