import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image"; // Add this import

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo_Rabin} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6 mx-auto " />
          mishrarabin92@gmail.com
        </div>
      </div>
      <div>
        <p className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Rabin Mishra. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Rabin-Mishra">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rabin-mishra-3782ba214/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/_rabin.mishra/">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
