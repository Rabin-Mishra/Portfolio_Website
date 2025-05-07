import React, { useState, useEffect } from "react"; // ✅ Import useEffect
import { assets } from "@/assets/assets";
import Image from "next/image";

const Contact = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    if (result === "Thank you! Your message has been sent.") {
      const form = document.querySelector("form");
      if (form) {
        form.reset();
      }
    }
  }, [result]); // ✅ Correctly placed inside component

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "b5d328f8-e5ad-4390-a053-c47c237bc072");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();

    if (response.status === 200) {
      setResult("Thank you! Your message has been sent.");
    } else {
      setResult(`Error: ${json.message || "Something went wrong."}`);
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
    >
      <h4 className="text-center mb-2 text-lg">Connect With Me</h4>
      <h2 className="text-center text-5xl">Get In Touch</h2>

      <div className="prose prose-neutral text-center mx-auto mt-5 mb-12">
        <p>
          I Would love to hear from you! If you have any questions, comments, or
          feedback, please use the form below.
        </p>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-auto gap-6 mb-8 mt-10">
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
              name="name"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
              name="email"
            />
          </div>
          <textarea
            rows="6"
            placeholder="Enter your message"
            required
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-8"
            name="message"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          >
            Submit Now
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </button>
          <p className="mt-4">{result}</p>
        </form>
      </div>
      <hr />
    </div>
  );
};

export default Contact;
