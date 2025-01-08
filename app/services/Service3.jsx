import Head from 'next/head'
import React from 'react'

function Service3() {
  return (
    <>
    <Head>
        <title></title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='bg-[#f3f8fc] md:flex justify-center items-center gap-6 w-full px-5 md:px-10 xl:px-32 py-5'>
    <div className="w-full md:w-[40%] lg:w-[30%] md:hidden pb-7 lg:pb-0 flex justify-center">
   

    
   <img
     src="/services/commercial.webp"
     className="w-[400px] h-[456px] rounded-tl-[64px] rounded-br-[64px]"
     alt="About Image"
   />
  
</div>
  <div className="md:w-1/2">
    <h2 className="text-[#f7941d]  font-bold text-xl md:text-2xl mb-5">
    COMMERCIAL
    </h2>
    <p className="text-base  mb-3 leading-relaxed text-justify">
      Founded in 1987, Alfa Construction Inc. was established in an effort to
      bring meticulous craftsmanship to clients across the region, balancing
      detail-oriented building techniques with our hand-vetted team of
      professionals. It’s who we are – centred on quality, committed to
      integrity, and devoted to transparent lines of communication.
    </p>
    <p className="text-base  mb-3 leading-relaxed text-justify">
      Founded in 1987, Alfa Construction Inc. was established in an effort to
      bring meticulous craftsmanship to clients across the region, balancing
      detail-oriented building techniques with our hand-vetted team of
      professionals. It’s who we are – centred on quality, committed to
      integrity, and devoted to transparent lines of communication.
    </p>
   
  </div>
  <div className="w-full md:w-[40%] lg:w-[30%] hidden md:flex pt-7 lg:pt-0  justify-center">
   

    
      <img
        src="/services/commercial.webp"
        className="w-[400px] h-[456px] rounded-tl-[64px] rounded-br-[64px]"
        alt="About Image"
      />
     
  </div>
</div>
</>
  )
}

export default Service3
