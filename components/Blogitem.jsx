import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/Assets/assets";

const formatDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
};

const toPlainText = (value) => {
  if (!value) return "";
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const Blogitem = ({ blog }) => {
  const blogId = blog._id || blog.id;
  const coverImage = blog.image || assets.logo;
  const authorImage = blog.authorImg || blog.author_img || assets.profile_icon;
  const shortDescription = toPlainText(blog.description).slice(0, 140);

  return (
    <article className="bg-white p-3 md:p-4 lg:p-6 rounded-xl hover:shadow-lg cursor-pointer">
      <Link href={`/blogs/${blogId}`}>
        <Image
          src={coverImage}
          className="w-full rounded-lg"
          width={200}
          height={100}
          sizes="(max-width: 768px) calc(100vw - 3rem), (max-width: 1200px) calc(50vw - 4rem), 360px"
          alt={blog.title || "Blog cover image"}
          style={{ height: "auto" }}
          loading={coverImage === assets.logo ? "eager" : "lazy"}
        />

        <div className="flex items-center justify-between my-2">
          <span className="bg-[#e0fedf] text-[#04da00] px-3 rounded-lg py-1 capitalize text-md font-medium">
            {blog.category}
          </span>
          <p className="text-md text-gray-500">{formatDate(blog.date)}</p>
        </div>

        <h2 className="font-bold text-xl my-1">{blog.title}</h2>

        <p className="text-gray-500 text-md mt-1 font-medium">
          {shortDescription}
          {shortDescription.length === 140 ? "..." : ""}
        </p>

        <div className="flex items-center mt-2 gap-2">
          <Image
            src={authorImage}
            width={100}
            height={100}
            sizes="48px"
            alt={`${blog.author || "Author"} profile photo`}
            className="w-12 h-12 object-cover rounded-full"
          />
          <p className="text-md font-medium text-gray-500">{blog.author}</p>
        </div>
      </Link>
    </article>
  );
};

export default Blogitem;
