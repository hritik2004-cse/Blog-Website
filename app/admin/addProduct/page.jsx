"use client";
import React, { useState, useEffect } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { blog_data } from "@/Assets/assets";
import { MdLibraryAdd } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";

const sanitizeHtml = (html = "") => {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!doctype[^>]*>/gi, "")
    .replace(/<\/?(html|head|body)[^>]*>/gi, "")
    .replace(/\sstyle=("[^"]*"|'[^']*')/gi, "");
};

const page = () => {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [data, setData] = useState({
    title: "",
    description: "",
    category: blog_data[0]?.category || "",
    author: "Hritik Sharma",
    authorImg: "/author_img.jpg",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", sanitizeHtml(data.description));
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", imageFile);
    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setPreview(false);
      setData({
        title: "",
        description: "",
        category: blog_data[0]?.category || "",
        author: "Hritik Sharma",
        authorImg: "/author_img.jpg",
      });
    } else {
      toast.error("error occured");
    }
  };

  // ✅ Correct debugging (logs updated state)
  useEffect(() => {
    console.log("Updated Data:", data);
  }, [data]);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // image handler
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
      setImageFile(file);
    }
  };

  const inputStyle =
    "bg-white border-2 border-gray-300 px-3 py-2 w-full text-sm md:text-base lg:text-lg font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300 hover:border-gray-400 transition-all duration-200";

  return (
    <div className="w-full min-h-screen flex justify-center bg-[#f9f5ec]">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-6 space-y-6"
      >
        {/* Thumbnail */}
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base lg:text-lg font-medium">
            Thumbnail :
            <span className="ml-2 text-gray-500 text-xs md:text-sm">
              {fileName || "No file chosen"}
            </span>
          </p>

          <label
            htmlFor="image"
            className="w-full h-40 sm:h-48 md:h-52 cursor-pointer"
          >
            <div className="w-full h-full bg-white rounded-xl border-2 border-gray-300 flex items-center justify-center overflow-hidden hover:border-gray-400 transition-all duration-200">
              {!preview ? (
                <div className="flex flex-col items-center text-gray-500">
                  <IoMdCloudUpload className="text-5xl sm:text-6xl" />
                  <p className="text-sm font-medium capitalize md:text-base lg:text-lg">
                    upload thumbnail
                  </p>
                </div>
              ) : (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </label>
        </div>

        <input
          onChange={handleChange}
          type="file"
          accept="image/*"
          id="image"
          required
          hidden
        />

        {/* Blog Title */}
        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base lg:text-lg font-medium capitalize">
            Blog title :
          </label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={onChangeHandler}
            className={inputStyle}
            placeholder="Enter blog title..."
            required
          />
        </div>

        {/* Blog Description */}
        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base lg:text-lg font-medium capitalize">
            Blog description :
          </label>
          <textarea
            name="description"
            value={data.description}
            onChange={onChangeHandler}
            className={`${inputStyle} font-mono`}
            placeholder="Write HTML here, e.g. <h2>Heading</h2><p>Your content...</p>"
            rows={10}
            required
          />

          <div className="bg-[#f3eee3] rounded-xl border-2 border-black p-4">
            <p className="text-xs md:text-sm text-gray-500 mb-2">
              Live HTML preview
            </p>
            <div
              className="max-w-none text-black [&_h1]:text-black [&_h1]:font-bold [&_h2]:text-black [&_h2]:font-semibold [&_h3]:text-black [&_h3]:font-semibold [&_p]:text-black [&_a]:text-[#04da00] [&_strong]:text-black [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[#04da00] [&_blockquote]:pl-3"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.description),
              }}
            />
          </div>
        </div>

        {/* Blog Category */}
        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base lg:text-lg font-medium capitalize">
            Blog category :
          </label>

          <div className="relative w-full">
            <select
              name="category"
              value={data.category}
              onChange={onChangeHandler}
              required
              className={`${inputStyle} appearance-none pr-10`}
            >
              {blog_data.map((item, index) => (
                <option
                  key={index}
                  value={item.category}
                  className="bg-white text-gray-700 font-medium capitalize"
                >
                  {item.category}
                </option>
              ))}
            </select>

            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-auto flex justify-center items-center gap-2 bg-black text-white text-sm md:text-base lg:text-lg font-medium px-6 py-3 rounded-full hover:bg-slate-800 active:bg-slate-700 transition-all duration-200 capitalize"
        >
          add blog <MdLibraryAdd />
        </button>
      </form>
    </div>
  );
};

export default page;
