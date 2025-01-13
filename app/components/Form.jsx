"use client";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstname, lastname, phone, email, message } = formData;
    console.log(formData);

    const postData = async () => {
      const url = "https://sendingmail-6znv.onrender.com/sendmail";
      const data = new URLSearchParams();
      data.append("S_name", firstname);
      data.append("S_last", lastname);
      data.append("S_phone", phone);
      data.append("message", message);
      data.append("S_email", email);
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
     
      <div className="relative flex flex-col lg:flex-row justify-center  items-center px-5 ">
        <div className="bg-[url('/contact/form1.webp')] hidden lg:block bg-cover bg-center h-[520px] w-full lg:w-[20%]"></div>

        <div className=" bg-white inner-box h-auto lg:h-[520px] w-full lg:w-[60%] border-r-4 border-r-[#2270ae] relative z-10 p-6 md:p-10">
          <div>
            <span className=" border-2 text-xs py-[0.3rem] lg:py-2 px-4 lg:px-5 font-bold border-[#eee9e3]">
              CONTACT WITH US
            </span>
            <h1 className="text-[26px] text-[#f7941d] lg:text-[38px] font-bold my-5">
              Let's Connect
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="flex-1 min-w-[calc(50%-1rem)] p-3 rounded-lg bg-[#fafaf9] focus:outline-none"
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="flex-1 min-w-[calc(50%-1rem)] p-3 rounded-lg bg-[#fafaf9] focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="flex-1 min-w-[calc(50%-1rem)] p-3 rounded-lg bg-[#fafaf9] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="flex-1 min-w-[calc(50%-1rem)] p-3 rounded-lg bg-[#fafaf9] focus:outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write a message"
                rows="4"
                required
                className="w-full p-3 rounded-lg bg-[#fafaf9] focus:outline-none "
              ></textarea>

              <div className="w-full flex ">
                <div className="button_slide1 slide_right1 py-3 px-6 text-white bg-black rounded-lg">
                  <button
                    type="submit"
                    className="flex items-center gap-2 font-semibold text-sm"
                  >
                    SUBMIT
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

export default Form;
