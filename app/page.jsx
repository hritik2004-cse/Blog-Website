"use client"
import Header from "@/components/Header";
import Bloglist from "@/components/Bloglist";
import Newsletter from "@/components/Newsletter";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="px-5 py-5 md:px-12 lg:px-28 min-h-full bg-[#f3eee3] flex flex-col">
      <Nav />
      <Header />
      <Bloglist />
      <Newsletter />
    </div>
  );
}
