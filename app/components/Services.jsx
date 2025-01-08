'use client'

import React, { useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react'; // Import the useKeenSlider hook
import 'keen-slider/keen-slider.min.css'; // Import KeenSlider styles
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Head from 'next/head';
import Link from 'next/link';

function Services() {
    const service = [
        {image: '/services/h1.webp', title: 'RESIDENTIAL HOME BUILDER', para: 'From the initial design to the final touches, we won’t compromise on practicality, creating a space where you can relax, host, and enjoy, whatever the weather.'},
        {image: '/services/h2.webp', title: 'GENERAL CONTRACTOR', para: 'From the initial design to the final touches, we won’t compromise on practicality, creating a space where you can relax, host, and enjoy, whatever the weather.'},
        {image: '/services/builder.webp', title: 'LICENSED HOME BUILDER', para: 'From the initial design to the final touches, we won’t compromise on practicality, creating a space where you can relax, host, and enjoy, whatever the weather.'},
        {image: '/services/comm.webp', title: 'COMMERCIAL', para: 'From the initial design to the final touches, we won’t compromise on practicality, creating a space where you can relax, host, and enjoy, whatever the weather.'},
        {image: '/services/custom.webp', title: 'CANADA-BASED CUSTOM HOME BUILDER', para: 'From the initial design to the final touches, we won’t compromise on practicality, creating a space where you can relax, host, and enjoy, whatever the weather.'}
    ];

    
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        autoplay: true,
        interval: 3000,
        slides: {
            perView: 3,
            spacing: 40,
          },
          breakpoints: {
            "(max-width: 1024px)": {
              slides: {
                perView: 2,
                spacing: 20,
              },
            },
            "(max-width: 768px)": {
              slides: {
                perView: 2,
                spacing: 20,
              },
            },
            "(max-width: 640px)": { 
              slides: {
                perView: 1,
                spacing: 10,
              },
            },
          },
        navigation: true, 
        dots: true, 
    });

    return (
      <>
     
    
        <div className='bg-[#2270ae] w-full h-auto px-5 xl:px-0 xl:ps-32'>
             <div className="flex flex-col lg:flex-row items-center text-center lg:text-start py-10 md:py-20 gap-8">
               <div className="sec-title lg:w-[30%] text-white">
          

          <h1 className="words-slide-up text-split text-[26px] lg:text-[38px]  leading-tight font-bold my-5">
            What services we offer
          </h1>
          <p className="font-normal text-[15px] mb-10 ">
            There are many variations of passages of but the majority have in
            some form, by injected humour or words which don't look even
            slightly believable of but the majority have suffered majority have
            in some variations of passages
          </p>
          <Link href='/services'>
          <span className="  text-xs  bg-[#f7941d] tracking-wide py-4 px-5 lg:px-7 rounded-md  font-bold ">
           EXPLORE SERVICES
        
          </span>
          </Link>
          <div className="flex justify-center lg:justify-start gap-4 mt-10 md:mt-14">
            <button
              onClick={() => slider.current?.prev()}
              className="bg-white text-[#25348b] p-4 rounded-full shadow"
            >
              <GoArrowLeft />
            </button>
            <button
              onClick={() => slider.current?.next()}
              className="bg-white text-[#25348b] p-4 rounded-full shadow"
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
            <div className="keen-slider lg:w-[70%]" ref={sliderRef}>
                {service.map((item, index) => (
                    <div key={index} className="keen-slider__slide flex flex-col justify-center space-y-4 items-center">
                        <img src={item.image} className="w-full h-[250px] rounded-br-[64px] rounded-tl-[64px]" />
                        <h3 className="text-white font-bold text-xl ">{item.title}</h3>
                        <p className="text-white text-sm">{item.para}</p>
                    </div>
                ))}
            </div>
            </div>

          
          
        </div>
        </>
    );
}

export default Services;
