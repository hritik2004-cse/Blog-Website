import React from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import { year } from "@/Assets/assets";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center md:flex-row justify-between py-8 bg-black px-5  md:px-12 lg:px-28 min-h-full w-full"
      aria-label="Footer"
    >
      <Link href="/">
        <Image
          src={assets.logo_light}
          alt="Hritik Blog logo"
          width={200}
          height={100}
          className="w-auto h-auto sm:w-45 md:w-50 lg:w-60"
        />
      </Link>

      <p className="text-white text-lg font-medium capitalize mt-4 md:mt-0">
        copyright &copy;{year} Hritik Sharma
      </p>
      <div
        className="flex items-center gap-3 mt-5 md:mt-0"
        aria-label="Social links"
      >
        <Link
          href="https://www.linkedin.com/in/hritik-sharma-oct04/"
          target="_blank"
          title="Linkedin"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          className="w-12 h-12 flex items-center justify-center bg-[#e0fedf] text-[#04da00] rounded-full"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zM3 8.98h3.96V21H3V8.98zM9.02 8.98h3.8v1.64h.05c.53-1 1.84-2.05 3.78-2.05C20.7 8.57 22 11.1 22 14.2V21h-3.96v-5.98c0-1.43-.03-3.27-1.99-3.27-1.99 0-2.3 1.56-2.3 3.17V21H9.8V8.98h-.78z" />
          </svg>
        </Link>

        <Link
          href="https://github.com/hritik2004-cse"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          title="Github"
          className="w-12 h-12 flex items-center justify-center bg-[#e0fedf] text-[#04da00] rounded-full"
        >
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.3 9.4 7.87 10.93.58.11.79-.25.79-.56v-2.06c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.02 1.76 2.68 1.25 3.34.95.1-.75.4-1.25.73-1.53-2.55-.3-5.23-1.28-5.23-5.67 0-1.25.44-2.28 1.17-3.09-.12-.29-.5-1.46.11-3.05 0 0 .95-.31 3.12 1.18a10.8 10.8 0 0 1 5.68 0c2.16-1.49 3.11-1.18 3.11-1.18.62 1.59.24 2.76.12 3.05.73.81 1.17 1.84 1.17 3.09 0 4.4-2.69 5.36-5.25 5.66.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5z" />
          </svg>
        </Link>

        <Link
          href="https://www.youtube.com/@Hritik_is_coding"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit YouTube channel"
          title="Youtube"
          className="w-12 h-12 flex items-center justify-center bg-[#e0fedf] text-[#04da00] rounded-full"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.58A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c2.1.58 9.4.58 9.4.58s7.3 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.5v-7L16 12l-6.4 3.5z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
