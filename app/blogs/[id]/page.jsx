import React from "react";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";
import Nav from "@/components/Nav";
import { notFound } from "next/navigation";
import { ConnectDB } from "@/lib/config/db";
import { BlogModel } from "@/lib/models/blog.model";

const sanitizeHtml = (html = "") => {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!doctype[^>]*>/gi, "")
    .replace(/<\/?(html|head|body)[^>]*>/gi, "")
    .replace(/\sstyle=("[^"]*"|'[^']*')/gi, "");
};

const Page = async ({ params }) => {
  const { id } = await params;

  try {
    await ConnectDB();
    const blog = await BlogModel.findById(id).lean();

    if (!blog) {
      notFound();
    }

    const data = JSON.parse(JSON.stringify(blog));
    const mainImage = data?.image || null;
    const authorImage = data?.authorImg || data?.author_img || null;
    const renderedDescription = sanitizeHtml(data?.description || "");

    return (
      <div className="px-5 py-5 md:px-12 lg:px-28 min-h-full bg-[#f3eee3] flex flex-col">
        <Nav />
        <div>
          <div className="bg-[#f9f5ec] p-4 md:p-6 lg:p-8 rounded-2xl my-4 shadow-lg">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl mt-5 font-bold">
              {data.title}
            </h1>
            {mainImage && (
              <Image
                src={mainImage}
                alt={data.title || "Blog image"}
                width={1280}
                height={720}
                className="my-8 lg:max-h-140 lg:min-h-140 h-full w-full aspect-video object-cover mx-auto border-4 border-black rounded-3xl lg:max-w-260 lg:min-w-260"
                loading="eager"
              />
            )}
          </div>
        </div>
        <div className="bg-[#f9f5ec] p-4 md:p-6 lg:p-8 rounded-2xl my-4 shadow-lg">
          <div
            className="mx-auto w-full lg:w-[92%] text-[16px] md:text-[18px] leading-8 tracking-[0.01em] text-black [&_h1]:mt-8 [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:mt-7 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_p]:my-4 [&_p]:text-black [&_a]:font-semibold [&_a]:text-[#04da00] [&_a]:underline [&_strong]:font-bold [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1 [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[#04da00] [&_blockquote]:bg-[#f3eee3] [&_blockquote]:pl-4 [&_blockquote]:py-2 [&_code]:rounded [&_code]:bg-[#f3eee3] [&_code]:px-1 [&_pre]:my-5 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-black [&_pre]:bg-[#f3eee3] [&_pre]:p-4 [&_img]:my-5 [&_img]:rounded-2xl [&_img]:border-2 [&_img]:border-black [&_table]:my-5 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-black [&_th]:bg-[#e0fedf] [&_th]:p-2 [&_td]:border [&_td]:border-black [&_td]:p-2"
            dangerouslySetInnerHTML={{ __html: renderedDescription }}
          />
          {/* author card */}
          <div className="bg-white mx-auto w-full md:w-[70%] h-auto p-3 mt-6 shadow-lg rounded-full flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              {authorImage && (
                <Image
                  alt={data.author || "Author image"}
                  src={authorImage}
                  width={200}
                  height={100}
                  loading="eager"
                  className="h-14 w-14 lg:h-16 lg:w-16 object-cover rounded-full border-2 md:border-4 border-black"
                />
              )}
              <div className="flex flex-col items-start justify-start">
                <h2 className="text-md font-bold md:text-lg lg:text-2xl">
                  {data.author}
                </h2>
                <p className="text-xs md:text-sm lg:text-md text-gray-500 font-medium">
                  Full stack web developer
                </p>
              </div>
            </div>
            <Link href="/" className="w-[30%]">
              <button className="capitalize bg-black text-white w-full h-14 lg:h-16 rounded-full text-sm md:text-md lg:text-lg font-medium cursor-pointer">
                learn more
              </button>
            </Link>
          </div>
        </div>
        <Newsletter />
      </div>
    );
  } catch (error) {
    console.error("Failed to load blog page:", error);
    notFound();
  }
};

export default Page;
