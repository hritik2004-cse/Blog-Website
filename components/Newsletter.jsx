"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const res = await axios.post("/api/email", formData);
    if (res.data.success) {
      toast.success(res.data.msg);
      setEmail("");
    } else {
      toast.error("error");
    }
  };

  return (
    <div className="bg-[#f9f5ec] py-6 px-2 md:px-6 my-4 lg:px-8 rounded-2xl text-center shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold md:text-4xl">
        Stay in to know
      </h1>
      <p className="text-sm mt-4 font-medium text-gray-500 md:text-md lg:text-lg">
        Subscribe to our blog and get updates on hritik-blog in your inbox.
      </p>
      <form
        className="flex items-center justify-between shadow-lg bg-white mt-4 mx-auto w-full md:max-w-[70%] py-2 px-2 md:px-4 rounded-full "
        onSubmit={onSubmitHandler}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className="w-[80%] outline-none pl-1 md:pl-2 font-medium text-sm md:text-lg text-black "
          placeholder="Enter your email here..."
          required
        />
        <button
          className="bg-black w-[30%] active:bg-gray-700 text-white rounded-full py-3 text-sm md:text-lg font-medium cursor-pointer"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
