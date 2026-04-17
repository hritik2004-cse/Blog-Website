"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    const response = await fetch("/api/email", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok && data.success) {
      toast.success(data.msg);
      setEmail("");
    } else {
      toast.error(data?.msg || "Something went wrong");
    }
  };

  return (
    <section
      id="newsletter"
      className="bg-[#f9f5ec] py-6 px-2 md:px-6 my-4 lg:px-8 rounded-2xl text-center shadow-lg"
      aria-labelledby="newsletter-title"
    >
      <h2
        id="newsletter-title"
        className="text-2xl sm:text-3xl font-bold md:text-4xl"
      >
        Stay in to know
      </h2>
      <p className="text-sm mt-4 font-medium text-gray-500 md:text-md lg:text-lg">
        Subscribe to our blog and get updates on hritik-blog in your inbox.
      </p>
      <form
        className="flex items-center justify-between shadow-lg bg-white mt-4 mx-auto w-full md:max-w-[70%] py-2 px-2 md:px-4 rounded-full "
        onSubmit={onSubmitHandler}
        aria-label="Subscribe to newsletter"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className="w-[80%] outline-none pl-1 md:pl-2 font-medium text-sm md:text-lg text-black "
          placeholder="Enter your email here..."
          autoComplete="email"
          aria-describedby="newsletter-help"
          required
        />
        <button
          className="bg-black w-[30%] active:bg-gray-700 text-white rounded-full py-3 text-sm md:text-lg font-medium cursor-pointer"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      <p id="newsletter-help" className="sr-only">
        Enter your email and press subscribe.
      </p>
    </section>
  );
};

export default Newsletter;
