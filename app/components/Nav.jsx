"use client";
import React, { useState } from "react";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Head from "next/head";

function Nav() {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);
  const navbar = [
    { name: "home", link: "/" },
    { name: "about us", link: "/about" },
    { name: "services", link: "/services" },
    { name: "employee status", link: "/employeestatus" },
    { name: "carrers", link: "/carrers" },
    { name: "contact us", link: "/contact" },
  ];

  const contactItems = [
    {
      icon: <IoCallOutline className="text-[#25348b] text-2xl" />,
      title: "Call Now",
      content: (
        <a href="tel:+918699522926" className="hover:text-[#25348b]">
          +91-43525 45555
        </a>
      ),
    },
    {
      icon: <IoMailOutline className="text-[#25348b] text-2xl" />,
      title: "Send Email",
      content: (
        <a href="mailto:info@alfaconstruction.com" className="hover:text-[#25348b]">
          info@alfaconstruction.com
        </a>
      ),
    },
    {
      icon: <IoLocationOutline className="text-[#25348b] text-6xl" />,
      title: "Address",
      content: (
        <a
          href="SCO: 270, 2nd Floor, Sector 118, TDI-1, Sahibzada Ajit Singh Nagar, Punjab 160055"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#25348b]"
        >
          SCO: 270, 2nd Floor, Sector 118, TDI-1,Canada

        </a>
      ),
    },
  ];

  const toggleBreadcrumb = () => {
    setShowBreadcrumb((prev) => !prev);
  };

  return (
    <>
     
   
    <div>
      <div className=" justify-center items-center hidden lg:flex bg-white py-8">
      <Link href='/'>
          <img src="/logo.webp" className="h-auto w-32" />
          </Link>
      </div>
      <div className="relative flex justify-start lg:justify-center items-center py-2 lg:py-4 px-5 md:px-10 xl:px-32 z-20 bg-[#2270ae]">
      <img src='/logomain.webp' className='h-auto w-20  block lg:hidden ' alt='logo' />
        <div className="hidden lg:flex">
          <ul className="font-semibold flex items-center justify-between gap-7">
            {navbar.map((item, index) => (
              <Link key={index} href={item.link}>
                <li className="cursor-pointer text-white hover:text-[#f7941d] hover:underline">
                  {item.name.toUpperCase()}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={toggleBreadcrumb}
        className="block lg:hidden absolute z-20 top-7 right-4 text-[#25348b] p-2 rounded"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      <div
        className={`fixed top-0 right-0  h-full w-80 z-[9999] bg-white shadow-lg text-black py-6 transform transition-transform duration-700 ease-in-out ${
          showBreadcrumb ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8 px-6">
          <Link href='/'>
          <img src="/logo.webp" className="h-16 " />
          </Link>
          <button onClick={toggleBreadcrumb} className="cursor-pointer text-black">
            X
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          {navbar.map((item, index) => (
            <Link key={index} href={item.link}>
            <li
              
              className="px-5 flex items-center gap-3 border-b text-sm border-b-stone-500 pb-3"
            >
              <MdKeyboardDoubleArrowRight className="text-[#25348b] text-xl" />
              {item.name.toUpperCase()}
            </li>
            </Link>
          ))}
        </ul>
        <ul className="space-y-4 py-5 px-5">
          {contactItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-4">
              {item.icon}
              <div>
                <span className="block font-semibold text-xs text-gray-800">
                  {item.title.toUpperCase()}
                </span>
                <span className="text-black text-sm">{item.content}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Nav;
