"use client";
import BlogTable from "@/components/AdminComponents/BlogTable";
import axios from "axios";
import React, { useEffect, useState } from "react";


const page = () => {

  const [blogs, setBlogs] = useState([]);

  // function to get all the blogs from data
  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 p-5 sm:p-8">
      <h1 className="text-3xl text-center font-bold mb-4">Blog List</h1>
      <div className="relative rounded-2xl shadow-lg h-[85vh] max-w-full overflow-x-auto mt-4 border-gray-900 border-2 scrollbar-hide bg-white">
        <table className="w-full">
          <thead className="text-md text-left text-white bg-black">
            <tr>
              <th className="hidden sm:block px-6 py-3 capitalize" scope="col">
                author name
              </th>
              <th className="px-6 py-3 capitalize" scope="col">
                blog title
              </th>
              <th className="px-6 py-3 capitalize" scope="col">
                date
              </th>
              <th className="px-6 py-3 capitalize" scope="col">
                action
              </th>
            </tr>
          </thead>
          <tbody className="m-2">
            {blogs.map((item,index) => {
              return <BlogTable key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date}/>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
