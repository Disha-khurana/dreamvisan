"use client";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaCheckSquare } from "react-icons/fa";
import Nav from "../components/Nav";
import axios from "axios";
import { baseapi, imgapi } from "../liks/links";
import { FaRegSquare } from "react-icons/fa6";
import Carrer from "../components/Carrer";
import Form2 from "../components/Form2";

function Page() {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [registrationinfo, SetRegisterinfo] = useState();
  const [showForm, setShowForm] = useState(false);
  const [userInfo, setuseinfo] = useState();

  const [formData, setFormData] = useState({
    document: "",
    verificationCode: "",
  });

  useEffect(() => {
    const timeIntervel = setTimeout(() => {
      const fetchapi = async () => {
        if (registrationNumber.length > 1) {
          const data = await axios.get(
            `${baseapi}/register/${registrationNumber}`
          );
          SetRegisterinfo(data.data);
        }
      };
      fetchapi();
    }, 500);

    return () => clearTimeout(timeIntervel);
  }, [registrationNumber]);

  const handelRegis = async (number) => {
    setRegistrationNumber("");
    const data = await axios.post(`${baseapi}/register/user`, {
      registration_number: number,
    });
    setuseinfo(data.data);
  };

  const downloadFile = (path) => {
    const fileUrl = `${imgapi}/${path}`;
    const fileName = path;

    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;

    document.body.appendChild(anchor);
    anchor.click();

    document.body.removeChild(anchor);
  };

  return (
    <>
      <Nav />
      {!showForm && (
        <div className="flex flex-col items-center my-14 px-5 xl:px-32">
          <div className="w-full max-w-lg lg:max-w-xl h-auto">
            <label
              htmlFor="registration"
              className="block text-xl md:text-2xl font-sans font-semibold text-gray-700 mb-5"
            >
              Enter Registration Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg relative">
              {registrationNumber && registrationinfo && (
                <div className="absolute top-[100%] h-[10rem] overflow-auto shadow-md bg-[#e7e6e6d4] left-0 w-full p-3 flex flex-col items-center">
                  {registrationinfo?.map((info, index) => (
                    <div
                      key={index}
                      className="border-b border-red-600 p-2 w-full cursor-pointer"
                      onClick={() => handelRegis(info?.registration_number)}
                    >
                      <p>{info?.registration_number}</p>
                    </div>
                  ))}
                </div>
              )}
              <input
                id="registration"
                type="text"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                className="w-full px-4 text-gray-700 placeholder-gray-400 rounded-l-lg focus:outline-none"
                placeholder="Registration Number"
              />
              <button
                type="button"
                className="px-4 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
                onClick={() => handelRegis(registrationNumber)}
              >
                <IoSearch className="text-xl" />
              </button>
            </div>
          </div>

          {userInfo && (
            <div className="flex flex-col justify-center items-center gap-5 mt-14 md:mt-16 ">
              <div className="w-full md:w-[700px] bg-white shadow-xl rounded-lg px-6 md:px-12 py-8 flex flex-col gap-5">
                <p className="text-xl text-green-700 font-bold">
                  View Details :
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-center">
                    <span className="font-bold text-gray-600 w-[203px]">
                      Name
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-600">:</span>
                      <span className="text-gray-800 font-semibold capitalize">
                        {userInfo.name}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <span className="font-bold text-gray-600 w-[203px]">
                      Nationality
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-600">:</span>
                      <span className="text-gray-800 font-semibold capitalize">
                        {userInfo.nationality}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <span className="font-bold text-gray-600 w-[203px]">
                      Position
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-600">:</span>
                      <span className="text-gray-800 font-semibold capitalize">
                        {userInfo.position}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <span className="font-bold text-gray-600 w-[203px]">
                      Travel Document Number
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-600">:</span>
                      <span className="text-gray-800 font-semibold">
                        {userInfo.travel_document_number}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 w-full">
                <div className="space-y-2">
                  <div className="flex flex-col ">
                    <span className="font-semibold text-gray-600">Status:</span>
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        userInfo.verify ? " text-green-700" : " text-red-700"
                      }`}
                    >
                      {userInfo.file_submit &&
                      userInfo.profile_approved &&
                      userInfo.offer_latter_issude ? (
                        <div className="w-full h-[14rem] pb-14">
                          <p className="text-lg md:text-xl font-bold text-green-700">
                            Your document verified successfully
                          </p>
                          <button
                            className="bg-green-600 text-white p-2 px-3 rounded-md font-semibold my-3"
                            onClick={() => downloadFile(userInfo?.document)}
                          >
                            Download file
                          </button>

                          <div className="flex justify-center w-full h-full">
                            <img
                              src="/verify.webp"
                              className="w-[30%] md:w-[20%] h-[100px] md:h-[130px]"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-72 md:h-[12rem]">
                          <p className="text-lg md:text-xl font-bold">
                            Your document is under process
                          </p>
                          <div className="md:flex w-full items-center">
                            <div className="flex w-full flex-col items-start justify-center text-black pt-5 space-y-9">
                              <div className="flex items-center gap-2">
                                <div className="flex flex-col gap-6 relative">
                                  {userInfo.file_submit ? (
                                    <div>
                                      <FaCheckSquare className="text-xl text-green-700" />
                                      <div className="absolute w-1 h-7 left-2 bg-green-700 "></div>
                                    </div>
                                  ) : (
                                    <div>
                                      <FaRegSquare className="text-xl text-gray-400" />
                                      <div className="absolute w-1 h-7 left-2 bg-gray-400"></div>
                                    </div>
                                  )}
                                  {userInfo.profile_approved ? (
                                    <div>
                                      <FaCheckSquare className="text-xl text-green-700" />
                                      <div className="absolute w-1 h-7 left-2 bg-green-700 z-[-1px]"></div>
                                    </div>
                                  ) : (
                                    <div>
                                      <FaRegSquare className="text-xl text-gray-400" />
                                      <div className="absolute w-1 h-7 left-2 bg-gray-400"></div>
                                    </div>
                                  )}
                                  {userInfo.offer_latter_issude ? (
                                    <div>
                                      <FaCheckSquare className="text-xl text-green-700" />
                                      <div className="absolute w-1 h-7 left-2 bg-green-700"></div>
                                    </div>
                                  ) : (
                                    <FaRegSquare className="text-xl text-gray-400" />
                                  )}
                                </div>

                                <div className="space-y-6">
                                  <div className="flex items-center">
                                    <h2 className="text-[17px]">
                                      File Submitted
                                    </h2>
                                  </div>
                                  <div className="flex items-center">
                                    <h2 className="text-nowrap text-[17px]">
                                      Profile Approved
                                    </h2>
                                  </div>
                                  <div className="flex items-center">
                                    <h2 className="text-nowrap text-[17px]">
                                      Offer letter Issued
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-center w-full h-full pt-7 md:pt-0">
                              <img
                                src="/progress.webp"
                                className="w-[40%] h-[100px] md:h-[130px]"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="space-y-10 lg:space-y-16 mt-16">
      <Carrer/>
      <Form2/>
      </div>

    
    </>
  );
}

export default Page;
