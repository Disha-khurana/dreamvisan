import React from "react";

function About() {
  return (
    <>
     
    <div className="lg:flex items-center justify-center w-full gap-12 px-5 md:px-10 xl:px-32">
      <div className="lg:w-1/2">
        <h2 className="text-[#f7941d] text-center md:text-start font-bold text-lg md:text-xl mb-5">
          ALFA CONSTRUCTION INC. BASED IN CANADA
        </h2>
        <p className="text-base text-gray-700 mb-3 leading-relaxed text-justify">
          Founded in 1987, Alfa Construction Inc. was established in an effort to
          bring meticulous craftsmanship to clients across the region, balancing
          detail-oriented building techniques with our hand-vetted team of
          professionals. It’s who we are – centred on quality, committed to
          integrity, and devoted to transparent lines of communication.
        </p>
        <p className="text-base text-gray-700 mb-3 leading-relaxed text-justify">
          Founded in 1987, Alfa Construction Inc. was established in an effort to
          bring meticulous craftsmanship to clients across the region, balancing
          detail-oriented building techniques with our hand-vetted team of
          professionals. It’s who we are – centred on quality, committed to
          integrity, and devoted to transparent lines of communication.
        </p>
        <p className="text-base text-gray-700 leading-relaxed text-justify">
          Based in Canada, with a reach across the Sea to Sky, we pride
          ourselves on being a community-first company. Minimizing disruption,
          maximizing efficiency, and creating homes that elevate the feel of the
          neighbourhood, we’ll ensure we’re by your side through the moments
          that count.
        </p>
      </div>
      <div className="lg:w-1/2 pt-7 lg:pt-0">
        <img src="/h.webp" className="w-full h-auto rounded-br-[64px] rounded-tl-[64px]"/>
      </div>
    </div>
    </>
  );
}

export default About;
