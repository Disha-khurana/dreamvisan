import React from "react";

function Contact() {
  return (
    <div className="md:flex gap-10 px-5 xl:px-0 xl:pe-32 w-full">
      <div className="w-full md:w-1/2">
        <img
          src="/contact/after.webp"
          alt="before"
          className="w-full h-auto rounded-tr-[54px]"
        />
      </div>

      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 mt-7 md:mt-0">
        <h1 className="text-[#f7941d] text-2xl font-bold text-center">
          LET’S JOIN FORCES
        </h1>
        <p className="text-[15px] text-gray-600 pt-7 pb-5">
          As a licensed home builder, we’ll immerse ourselves in your project.
          From sourcing sought-after materials to fusing tried-and-tested
          techniques and innovative methods together, we pride ourselves on our
          ability to reimagine spaces.
        </p>
        <button className="bg-blue-500 text-white font-semibold px-6 py-3 text-base rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Contact;
