"use client";

import React, { useEffect, useState } from "react";
import { tagData } from "@/Assets/assets";
import Blogitem from "./Blogitem";
import axios from "axios";

const Bloglist = () => {
  // for switch between different categories. By default it is at 'all'
  const [menu, setMenu] = useState("all");

  // show the blog data
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // it fetch all the blogs from database
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get("/api/blog");
      setBlogs(response.data.blogs || []);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
      setError("Failed to load blogs. Please refresh the page.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const filteredBlogs =
    menu === "all" ? blogs : blogs.filter((blog) => blog.category === menu);

  return (
    <div className="bg-[#f9f5ec] p-4 md:p-6 lg:p-8 rounded-2xl my-4">
      {/* TAGS */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:gap-4 py-3 md:py-4 lg:py-6">
        {tagData.map((item, index) => (
          <span
            key={index}
            onClick={() => setMenu(item)}
            className={`px-3 py-1 rounded-lg capitalize font-medium cursor-pointer text-sm md:text-md lg:text-lg 
            ${menu === item ? "bg-[#04da00] text-white" : "bg-[#f3eee3] text-black"}`}
          >
            {item}
          </span>
        ))}
      </div>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        {loading && (
          <p className="col-span-full text-center text-gray-600 py-8">
            Loading blogs...
          </p>
        )}

        {!loading && error && (
          <p className="col-span-full text-center text-red-600 py-8">{error}</p>
        )}

        {!loading && !error && filteredBlogs.length === 0 && (
          <p className="col-span-full text-center text-gray-600 py-8">
            No blogs found for "{menu}".
          </p>
        )}

        {!loading &&
          !error &&
          filteredBlogs.map((blog) => (
            <Blogitem key={blog._id || blog.id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default Bloglist;
