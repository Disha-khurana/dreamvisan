'use client'
import React, { useState } from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

function Navbar() {
    const [showBreadcrumb, setShowBreadcrumb] = useState(false);
    const navbar = [
        { name: "home", link: "/" },
        { name: "about us", link: "/about" },
        { name: "services", link: "/services" },
        { name: "employee status", link: "/employeestatus" },
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
            icon: <IoLocationOutline className="text-[#25348b] text-3xl" />,
            title: "Address",
            content: (
                <a href='https://maps.app.goo.gl/huP7Ytk8rWcgMhgg7' target="_blank">270, 2nd Floor, Sector 118, TDI-1, Canada</a>
            ),
        },
    ];

    const toggleBreadcrumb = () => {
        setShowBreadcrumb((prev) => !prev); 
    };

    return (
        <>
         
       
        <div className="bg-[url('/banner.webp')] h-[500px] md:h-[514px] lg:h-[600px] xl:h-[900px] relative w-full bg-cover bg-no-repeat bg-[center_top]">
            <div className="bg-[rgba(0,0,0,.8)] lg:bg-[rgba(0,0,0,.5)] absolute inset-0 z-10 h-24 lg:h-28"></div>

            <div className="relative flex justify-between items-center px-5 md:px-10 xl:px-32 py-2 z-20">
                <Link href='/'>
                <img src='/logomain.webp' className='h-auto w-20 lg:w-24 ' alt='logo' />
                </Link>
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

            <div className="flex justify-center items-center text-white pt-28 lg:pt-32 xl:pt-64 px-10">
                <div className="w-full max-w-screen-md text-center bg-[#2270ae] py-8 md:py-10 lg:py-12 rounded-br-[64px] rounded-tl-[64px]">
                    <div className="mb-4">
                        <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold leading-tight">DEDICATED TO THOUGHTFUL DESIGN AND CRAFTSMANSHIP</h2>
                    </div>

                    <div>
                        <p className="text-base lg:text-lg text-center">Licensed home builder and general contractor, with a team of skilled craftsmen.</p>
                    </div>
                </div>
            </div>

            <button
                onClick={toggleBreadcrumb}
                className="block lg:hidden absolute z-20 top-8 right-4 text-[#25348b] p-2 rounded"
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
                    <img src="/logo.webp" className="h-16 bg-white" />
                    </Link>
                    <button onClick={toggleBreadcrumb} className="cursor-pointer">
                        X
                    </button>
                </div>
                <ul className="flex flex-col gap-4">
                    {navbar.map((item, index) => (
                        <Link key={index} href={item.link}>
                        <li  className="px-5 flex items-center gap-3 border-b text-sm border-b-stone-500 pb-3">
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
                                <span className="block font-semibold text-xs text-gray-800">{item.title.toUpperCase()}</span>
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

export default Navbar;
