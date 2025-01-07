import React from "react";

function Contact() {
  return (
    <div className="md:flex gap-10 px-5 xl:px-32 w-full">
      <div className="w-full md:w-1/2">
        <img
          src="/contact/before.webp"
          alt="before"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 mt-7 md:mt-0">
        <h1 className="text-[#f7941d] text-2xl font-bold text-center">
          GET IN TOUCH
        </h1>
        <p className="text-[15px] text-gray-600 pt-7 pb-5">
          Whether you’re seeking a large-scale renovation to expand your living
          space or a custom build to make your own, we’d love to hear from you.
          As your residential home builder, we’ll adhere to your budget, move at
          your pace, and select the right people to make it a reality.
        </p>
        <button className="bg-blue-500 text-white font-semibold px-6 py-3 text-base rounded-md">Book a FREE Consultation</button>
      </div>
    </div>
  );
}

export default Contact;
