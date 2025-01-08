import Link from 'next/link';
import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import Head from 'next/head';

function Footer() {

    const contactItems = [
        {
          iconClass:<IoCall />,
          title: "Call Us Anytime",
          content: (
            <a href="tel:+91-43525 45555" className="">
              +91-43525 45555
            </a>
          ),
        },
        {
          iconClass: <IoMail />,
          title: "Send Mail",
          content: (
            <a href="mailto:info@alfaconstruction.com" className="">
              info@alfaconstruction.com
            </a>
          ),
        },
        {
          iconClass: <FaLocationDot />,
          title: "Our Address",
          content: <span>SCO: 270, 2nd Floor, Sector 118, TDI-1, Canada

          </span>,
        },
      ];

  return (
    <>
     
    
  
    <div className='px-5 md:px-10 xl:px-32  bg-[#2270ae] mt-20 lg:mt-16  h-auto w-full  '>
        
        <div className=" text-gray-300 pt-12 lg:pb-12 border-b border-dotted border-b-white">
      <div className="container mx-auto ">
        <div className="flex flex-wrap -mx-6">
        
          <div className="w-full md:w-[40%] lg:w-[20%] px-6 mb-12 lg:mb-0">
            <Link href='/'>
            <img src='/logomain.webp' className='h-auto w-32 ' alt='logo' />
              
            </Link>
            
          </div>

         
          <div className="w-full md:w-1/2 lg:w-[20%] px-6 mb-12 lg:mb-0">
            <h5 className="text-base font-bold text-white mb-6 border-b border-b-white pb-4">CONTACT US</h5>
           
            <ul className="space-y-4">
            {contactItems.map((item, index) => (
        <li
          key={index}
          className="flex items-center space-x-4 text-white "
        >
        <span className='text-2xl  text-[#f7941d] text-center'>{item.iconClass}</span>
          <div>
            {/* <p className="font-semibold text-base lg:text-lg text-white">{item.title}</p> */}
            <p className="text-white text-[15px]">{item.content}</p>
          </div>
        </li>
      ))}
            </ul>
          </div>

          
          <div className="w-full md:w-1/2 lg:w-[25%] px-6 mb-12 lg:mb-0">
            <h5 className="text-base font-bold text-white border-b border-b-white pb-4 mb-6">WE'RE SOCIAL</h5>
            <ul className="space-x-2 flex items-center">
                <span className='gap-3 flex items-center text-white'>Follow Us :<FaInstagram className='text-2xl text-[#f7941d]'/><FaSquareFacebook className='text-[#f7941d] text-2xl'/></span>
              
            </ul>
          </div>

        
          <div className="w-full md:w-1/2 lg:w-[25%] px-6 mb-12 lg:mb-0">
            <h5 className="text-base font-bold text-white mb-6 border-b border-b-white pb-4">GET IN TOUCH</h5>
            <ul className="space-y-4">
             <h4 className='font-semibold text-white'>Have a project in mind?</h4>
             <Link href='/contact'>
             <button className='bg-[#f7941d] text-white px-5 py-2 rounded-md mt-4' >Contact Us</button>
             </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="py-5 ">
      <div className="container mx-auto  flex flex-col md:flex-row justify-between items-center">
       
        <div className="text-white text-sm">
          © Copyrights reserved by <Link href='https://www.futuretouch.in/' className="text-white">Future IT Touch❤️</Link>
        </div>

        <div className=' font-semibold flex items-center gap-3 text-sm'>
          <Link href='/'><div className='text-white hover:text-[#f7941d]'>Privacy Policy  </div></Link>
          <span className='text-white '>|</span>
          <Link href='/'><div className='text-white hover:text-[#f7941d]'>Terms and Conditions</div></Link>
        </div>

        {/* Social Icons
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul> */}
      </div>
    </div>



    </div>
    </>
  )
}

export default Footer