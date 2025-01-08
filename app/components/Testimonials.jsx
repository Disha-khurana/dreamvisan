import Head from "next/head";
import Link from "next/link";
import React from "react";

function Testimonials() {
  return (
    <>
    
  
    <div className="flex flex-col justify-center items-center px-5 md:px-14 xl:px-32">
      <div>
        <h3 className="text-2xl font-semibold text-center">
          OUR CLIENTS LOVE US
        </h3>
        <h1 className="text-[#f7941d] text-2xl font-bold text-center">
          TESTIMONIALS
        </h1>
        <p className="text-[15px] text-gray-600 max-w-3xl pt-10 pb-16 text-center">
          To our team of highly skilled tradespeople, it’s not enough to have an
          excellent finished product. We believe in the lost art of customer
          service, having built our company upon a foundation of strong
          communication, complete transparency, and the ability to truly listen.
        </p>
      </div>
      <div className="lg:flex w-full justify-center items-center relative">
     
        {/* Text Section */}
        <div className="top-32 left-36 bg-[rgba(247,148,29,0.9)] p-7 w-full lg:w-[40%] h-auto rounded-tl-lg rounded-bl-lg">
          <img src="/white-quotation.webp" className="w-28 h-20 mb-4" />
          <div className="relative z-50 text-white font-semibold text-lg italic">
            “Sarah and I wish to thank you profusely for your hard work over the
            last few months turning our previously very rough cabin in the woods
            into what I can confidently say will be a very comfortable and cozy
            weekend home for our family."
          </div>
          <div className="relative z-50 text-white text-center font-semibold italic text-lg mt-4">
            Your attention to detail, frequent and detailed progress reports,
            and overall ownership of the renovation project made us feel very
            much like we were in a safe set of hands throughout.”
          </div>
          <div className="text-white font-semibold text-xl text-center italic mt-4">
            Daniel C.
          </div>

         
          <Link href='/about' className="flex justify-center mt-8">
            <button className="bg-blue-500 px-6 py-3 text-sm rounded-md text-white">
              LEARN MORE
            </button>
          </Link>
        </div>

     
        <div className="bg-[url('/bath.webp')] h-auto md:h-[570px]  rounded-tr-lg rounded-br-lg md:hidden lg:block xl:hidden w-[70%] right-0 bg-contain bg-no-repeat"></div>
        <div className="bg-[url('/bathroom.webp')] h-auto md:h-[570px]  rounded-tr-lg rounded-br-lg hidden xl:block w-[70%] right-0 bg-contain bg-no-repeat"></div>
      </div>
    </div>
    </>
  );
}

export default Testimonials;
