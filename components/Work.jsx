import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Projects In My Portfolio</h4>
      <h2 className="text-center text-5xl">My Latest Work</h2>

      <div className="prose prose-neutral text-center mx-auto mt-5 mb-12">
        <p>
          Welcome to my web development portfolio. Explore a collection of my
          projects and see what I've been working on!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {workData.map((project, index) => (
            <div
              key={index}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom=5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold ">{project.title}</h2>
                  <p className="text-sm tex-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center hover:shadow-lg hover:shadow-black">
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href=""
          className="w-max flex items-center justify-center gap-2 text-gray-7-- border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lime-300 duration-500 "
        >
          Show More
          <Image
            src={assets.right_arrow_bold}
            alt="right arrow"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Work;
