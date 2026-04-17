"use client";

import React, { useState } from "react";
import { tagData } from "@/Assets/assets";
import Blogitem from "./Blogitem";

const Bloglist = ({ initialBlogs = [] }) => {
  // for switch between different categories. By default it is at 'all'
  const [menu, setMenu] = useState("all");

  // show the blog data
  const [blogs] = useState(initialBlogs);

  const filteredBlogs =
    menu === "all" ? blogs : blogs.filter((blog) => blog.category === menu);

  return (
    <div className="bg-[#f9f5ec] p-4 md:p-6 lg:p-8 rounded-2xl my-4">
      {/* TAGS */}
      <div
        className="flex flex-wrap items-center gap-2 md:gap-3 lg:gap-4 py-3 md:py-4 lg:py-6"
        role="toolbar"
        aria-label="Filter blogs by category"
      >
        {tagData.map((item, index) => (
          <button
            key={index}
            onClick={() => setMenu(item)}
            type="button"
            aria-pressed={menu === item}
            className={`px-3 py-1 rounded-lg capitalize font-medium cursor-pointer text-sm md:text-md lg:text-lg 
            ${menu === item ? "bg-[#04da00] text-white" : "bg-[#f3eee3] text-black"}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        {filteredBlogs.length === 0 && (
          <p className="col-span-full text-center text-gray-600 py-8">
            No blogs found for "{menu}".
          </p>
        )}

        {filteredBlogs.map((blog) => (
          <Blogitem key={blog._id || blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Bloglist;
