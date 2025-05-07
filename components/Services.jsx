import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">What I Offer.</h4>
      <h2 className="text-center text-5xl">My Services </h2>

      <div className="prose prose-neutral text-center mx-auto mt-5 mb-12">
        <p>
          Currently, I have been involving myself as a freelancer, outsourcing
          source codes for simple web-based projects—from documentation to
          deployment. I also contribute to GitHub open-source repositories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {serviceData.map(({ icon, title, description, link }, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-amber-400 hover:-translate-y-1 duration-500 hover:shadow-lg hover:shadow-black"
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700">{title}</h3>
              <p className="text-sm text-gray-600 leading-5">{description}</p>
              <a href={link} className="flex items-center gap-2 text-sm mt-5">
                Read More
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
