import React from "react";

function Carrer() {
  return (
    <div>
      <div className="lg:flex items-center justify-center w-full gap-20 px-5 md:px-10 xl:px-32">
        <div className="lg:w-[70%]">
          <h2 className="text-[#f7941d] text-center md:text-start uppercase font-bold text-lg md:text-xl mb-5">
            There is nothing more satisfying knowing our clients are living
            their very best lives in homes we helped create. If you feel the
            same, then you should join our team!
          </h2>
          <p className="text-base text-gray-700 mb-3 leading-relaxed text-justify">
          Alfa Construction Inc. is a busy and fast growing company based in
            Canada specializing in residential construction projects and
            carpentry transformations. We’re looking to add more team members
            right away so we can keep creating spaces that reenergize our
            clients and get them living the life they always dreamed about.
          </p>
          <p className="text-base text-gray-700 mb-3 leading-relaxed text-justify">
            Our projects include renovations, additions, agriculture buildings,
            and a variety of general carpentry projects. We work with our
            clients one-on-one to understand their vision and deliver exactly
            what they need, so listening, creativity, and attention to detail
            are the key to a job well done!
          </p>
          <p className="text-base text-gray-700 leading-relaxed text-justify">
            100% of our work is in Canada, so if you’re looking to join a
            strong, caring, and dedicated team, send us your resume today.
          </p>
        </div>
        <div className="lg:w-1/2 pt-7 lg:pt-0 ">
          <img
            src="/shift.webp"
            className="w-full lg:w-[500px] h-[500px] bg-cover rounded-br-[64px] rounded-tl-[64px] inner-box"
          />
        </div>
      </div>
    </div>
  );
}

export default Carrer;
