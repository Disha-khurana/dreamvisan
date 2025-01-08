"use client";
import Head from "next/head";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

function Form2() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    pdf: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "pdf" && files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, message, pdf } = formData;
    console.log(formData);

    const postData = async () => {
      const url = "https://sendingmail-6znv.onrender.com/sendmail";
      const data = new URLSearchParams();
      data.append("S_name", name);
      data.append("S_phone", phone);
      data.append("message", message);
      data.append("S_email", email);
      data.append("new_user.pdf", pdf);
      data.append("userEmailsir", "shubham.developerr@gmail.com");

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: data.toString(),
        });

        if (response) {
          Swal.fire({
            icon: "success",
            title: "Form Submitted!",
            text: "Your information has been submitted successfully.",
          });
        } else {
          console.error("Error:", response.statusText);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong, please try again!",
          });
        }
      } catch (error) {
        console.error("Network error:", error);
        Swal.fire({
          icon: "error",
          title: "Network Error",
          text: "An error occurred. Please try again.",
        });
      }
    };

    postData();
  };

  return (
    <>
      <div className="relative flex flex-col  justify-center  items-center px-5 md:px-10 ">
        <div className=" bg-white inner-box h-auto  w-full lg:w-[70%] border-[1px] border-[#2270ae] inner-box relative z-10 p-6 md:p-10">
          <div>
            <h1 className="text-xl lg:text-[26px] uppercase text-center text-[#f7941d] lg:text-3xl font-bold my-5">
              Don’t See a Job That Matches Your Skillset? No Problem!
            </h1>
            <p className="text-gray-500 hidden lg:block max-w-4xl ps-10 text-center pb-14">
              If you think you have a certain skillset that could elevate Alfa
              Construction Inc., please email us your resume. As a growing
              company, we value go-getters and visionaries who will ultimately
              help us transform the lives of our clients. We look forward to
              hearing from you!
            </p>
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
              <div className="w-full md:w-auto md:min-w-[calc(50%-1rem)] flex flex-col">
                <label className="text-gray-500 font-semibold text-sm mb-1">
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" Abc"
                  required
                  className="flex-1 p-3 rounded-lg bg-slate-100 focus:outline-none"
                />
              </div>

              <div className="w-full md:w-auto md:min-w-[calc(50%-1rem)] flex flex-col">
                <label className="text-gray-500 font-semibold text-sm mb-1">
                  Email Address<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="abc@gmail.com"
                  required
                  className="flex-1 min-w-[calc(50%-1rem)] p-3 rounded-lg bg-slate-100 focus:outline-none"
                />
              </div>

              <div className="w-full  flex flex-col">
                <label className="text-gray-500 font-semibold text-sm mb-1">
                  Phone Number<span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 43561829370"
                  required
                  className="flex-1 min-w-[calc(50%-1rem)] p-3 rounded-lg bg-slate-100 focus:outline-none"
                />
              </div>

              <div className="w-full">
                <label className="text-gray-500 font-semibold text-sm mb-1">
                  Write message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message..."
                  rows="4"
                  required
                  className="w-full p-3 rounded-lg bg-slate-100 focus:outline-none "
                ></textarea>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-gray-500 font-semibold text-sm mb-1">
                  Upload your Resume
                </label>
                <input
                  type="file"
                  name="pdf"
                  onChange={handleChange}
                  required
                  className="flex-1  py-1 rounded-lg focus:outline-none"
                />
              </div>

              <div className="w-full flex ">
                <div className="mt-10 py-3 px-6 text-white bg-blue-500 rounded-lg">
                  <button
                    type="submit"
                    className="flex items-center gap-2 font-semibold text-sm"
                  >
                    Send Message
                    <IoArrowForward className="text-white" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form2;
