import Header from "@/components/Header";
import Bloglist from "@/components/Bloglist";
import Newsletter from "@/components/Newsletter";
import Nav from "@/components/Nav";
import { ConnectDB } from "@/lib/config/db";
import { BlogModel } from "@/lib/models/blog.model";

export const revalidate = 60;

export default async function Home() {
  let blogs = [];

  try {
    await ConnectDB();
    const rawBlogs = await BlogModel.find({}).sort({ createdAt: -1 }).lean();
    blogs = JSON.parse(JSON.stringify(rawBlogs));
  } catch (error) {
    console.error("Failed to load blogs for homepage:", error);
  }

  return (
    <main className="px-5 py-5 md:px-12 lg:px-28 min-h-full bg-[#f3eee3] flex flex-col">
      <Nav />
      <Header />
      <Bloglist initialBlogs={blogs} />
      <Newsletter />
    </main>
  );
}
