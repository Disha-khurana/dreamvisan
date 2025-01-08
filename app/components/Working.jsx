import Head from "next/head";
import React from "react";

function Working() {
  const steps = [
    {
      id: 1,
      title: "Let's discuss",
      imgSrc: "/contact/discuss.webp",
      stepLabel: "STEP 01",
      altText: "discuss",
      additionalStyles: "top-[90%] left-20",
      bottom: "-bottom-16",
    },
    {
      id: 2,
      title: "Finalise Plans",
      imgSrc: "/contact/final.webp",
      stepLabel: "STEP 02",
      altText: "Plans",
      additionalStyles: "top-[60%] left-[35%]",
      bottom: "-bottom-16",
    },
    {
      id: 3,
      title: "Seek Approval",
      imgSrc: "/contact/stamp.webp",
      stepLabel: "STEP 03",
      altText: "Approval",
      additionalStyles: "top-[75%] left-[60%]",
      bottom: "-bottom-16",
    },
    {
      id: 4,
      title: "Sign Contract",
      imgSrc: "/contact/agreement.webp",
      stepLabel: "STEP 04",
      altText: "Contract",
      additionalStyles: "top-[70%] left-[85%]",
      bottom: "-bottom-16",
    },
  ];

  return (
    <>
     
      <div className="px-5 xl:px-40 pb-28">
        <div className="flex flex-col items-center justify-center relative">
          <h2 className="text-[26px] lg:text-[38px] text-center font-bold my-5 text-[#f7941d]">
            HOW IT WORKS
          </h2>
          <p className="text-gray-500 max-w-2xl text-center">While our process may vary, depending on your needs, one thing will remain: our client focus. It’s an integral part of our DNA, driven by our love of exceeding expectations.</p>

          <div className="relative hidden md:block">
            <img src="/contact/icon-line.webp" className="mt-20" alt="line" />

            {steps.map((step) => (
              <div
                key={step.id}
                className={`absolute ${step.additionalStyles} transform -translate-x-1/2 -translate-y-1/2 inline-block py-5 px-5`}
              >
                <span className="absolute text-nowrap -top-8 left-1/2 transform -translate-x-1/2 text-base font-bold text-black">
                  {`Step ${step.id}`}
                </span>
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#25348b] bg-transparent z-10"></div>
                <img
                  src={step.imgSrc}
                  alt={step.altText}
                  className="w-16 h-16 z-20 relative hover:animate-bounce"
                />
                <span
                  className={`absolute hover:scale-110 transition-transform duration-300 ${step.bottom} left-1/2 text-center transform -translate-x-1/2 text-[17px] lg:text-lg font-bold text-black z-20  text-md md`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          <div className=" md:hidden mt-10 grid grid-cols-2 gap-16 gap-y-8 md">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="p-4 border-2 border-dotted border-[#f7941d] rounded-full">
                  <img
                    src={step.imgSrc}
                    alt={step.altText}
                    className="w-16 h-16"
                  />
                </div>
                <span className="mt-5 text-base font-bold border-[#f7941d]">
                  {step.stepLabel}
                </span>
                <span className="mt-1 lg:text-lg font-bold text-black text-center  text-md md">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
    
  );
}

export default Working;
