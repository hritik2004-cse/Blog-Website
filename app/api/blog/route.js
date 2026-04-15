import { ConnectDB } from "@/lib/config/db";
import { BlogModel } from "@/lib/models/blog.model";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";
const fs = require("fs");

// API endpoint to get all blogs
export async function GET(req) {
  try {
    await ConnectDB();
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("id");

    if (blogId) {
      const blog = await BlogModel.findById(blogId).lean();
      if (!blog) {
        return NextResponse.json(
          { message: "Blog not found" },
          { status: 404 },
        );
      }
      return NextResponse.json({ blog });
    }

    const blogs = await BlogModel.find({}).lean();
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("GET /api/blog failed:", error);
    return NextResponse.json(
      { message: error?.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}

// API endpoint for uploading blogs
export async function POST(req) {
  await ConnectDB();
  const formData = await req.formData();
  const timestamp = Date.now();

  // used to get image from form data
  const image = formData.get("image");
  // to store image in byte data
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  // defining the path where our image will be stored and we use timestamp here dute to create unique image every time
  const path = `./public/${timestamp}_${image.name}`;
  // this will add the image in the public folder
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  // taking more data for blog
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };

  await BlogModel.create(blogData);
  console.log("blog saved");

  return NextResponse.json({ success: true, msg: "blog added" });
}

// API endpoint to delete a perticular blog

export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, ()=>{});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({msg:'Blog Deleted'})
}
