import React from "react";
import { assets, toolsData } from "@/assets/assets";
import Image from "next/image";
import { infoList } from "@/assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-5xl">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80  rounded-3xl max-w-none">
          <Image src={assets.myImage} alt="" className="w-full rounded-3xl" />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl ">
            I am an IT student with a passion for web development and a keen
            interest in the latest technologies. I have a strong foundation in
            HTML, CSS, and JavaScript, and I am continuously expanding my skill
            set to include frameworks like React , Node.js, and NEXT.js along
            with Django with the advanced knowledge of python fundamentals and
            its related libraries. My goal is to create dynamic and
            user-friendly web applications that provide seamless experiences for
            users. I am also interested in exploring the fields of machine
            learning and artificial intelligence, along with Data Science and
            also learning Cloud Computing as I believe they hold great potential
            for the future of technology.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-amber-300 hover:-translate-y-1 duration-500 hover:shadow-2xl hover:shadow-black/70
 "
                key={index}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 ">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>{" "}
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 ">Tools I Use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor pointer  hover:bg-black hover:-translate-y-1 duration-500  "
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
