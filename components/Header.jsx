import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.myImage}
          alt=""
          className="rounded-full w-100 mt-60 z-auto"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl ">
        Hi! I'm Rabin Mishra.
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
        Web Developer Based in Nepal.
      </h1>
      <p className="max-w-2xl mx-auto text-center text-lg sm:text-xl lg:text-2xl mt-4">
        I am a passionate web developer with a knack for creating dynamic and
        responsive web applications along with an enthusiasm on Machine Learning
        and evolution of AI. I love to explore new technologies and continuously
        improve my skills. I am currently focused on building user-friendly
        interfaces and enhancing user experiences, exploring different paradigms
        of LLMs, SLMs, Data Science and Cloud Computing.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className=" w-4" />
        </a>

        <a
          href="/rabin-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume <Image src={assets.download_icon} alt="" className=" w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
