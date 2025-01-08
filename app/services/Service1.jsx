import Head from 'next/head'
import React from 'react'

function Service1() {
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

    <div className='bg-[#2270ae] md:flex justify-center items-center gap-6 w-full px-5 md:px-10 xl:px-32 py-10 lg:py-20'>
        <div className="lg:w-[30%] pb-7 lg:pb-0 ">
       

        
          <img
            src="/services/service.webp"
            className="w-[900px] h-[456px] rounded-tl-[64px] rounded-br-[64px]"
            alt="About Image"
          />
         
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-white text-center font-bold text-xl md:text-2xl mb-5">
        LICENSED HOME BUILDER
        </h2>
        <p className="text-base text-white mb-3 leading-relaxed text-justify">
          Founded in 1987, Alfa Construction Inc. was established in an effort to
          bring meticulous craftsmanship to clients across the region, balancing
          detail-oriented building techniques with our hand-vetted team of
          professionals. It’s who we are – centred on quality, committed to
          integrity, and devoted to transparent lines of communication.
        </p>
        <p className="text-base text-white mb-3 leading-relaxed text-justify">
          Founded in 1987, Alfa Construction Inc. was established in an effort to
          bring meticulous craftsmanship to clients across the region, balancing
          detail-oriented building techniques with our hand-vetted team of
          professionals. It’s who we are – centred on quality, committed to
          integrity, and devoted to transparent lines of communication.
        </p>
        <p className="text-base text-white leading-relaxed text-justify">
          Based in Canada, with a reach across the Sea to Sky, we pride
          ourselves on being a community-first company. Minimizing disruption,
          maximizing efficiency, and creating homes that elevate the feel of the
          neighbourhood, we’ll ensure we’re by your side through the moments
          that count.
        </p>
      </div>
    </div>
    </>
  )
}

export default Service1
