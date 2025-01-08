'use client'
import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import Swal from 'sweetalert2';
import { FaCheckCircle } from 'react-icons/fa';
import Nav from '../components/Nav';
import Head from 'next/head';

function Page() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    document: '',
    verificationCode: '',
  });

 
  const handleInputChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

 
  const handleSearch = () => {
    if (registrationNumber.trim()) {
      
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: `The registration number ${registrationNumber} has been successfully submitted.`,
        confirmButtonText: 'Proceed to Form',
      }).then((result) => {
        if (result.isConfirmed) {
          setShowForm(true); 
        }
      });
    } else {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid registration number.',
      });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

 
  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);
    Swal.fire({
      icon: 'success',
      title: 'Application Submitted',
      text: 'Your application has been successfully submitted. You can now download it.',
    });
  };

  
  const progressWidth = ((currentStep - 1) / 3) * 100; 

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
      <Nav />
      
      {!showForm && (
        <div className="flex justify-center items-center my-14 px-5 md:px-10 xl:px-32">
          <div className="w-full max-w-lg">
            <label htmlFor="registration" className="block text-xl md:text-2xl font-sans font-semibold text-gray-700 mb-5">
              Enter Registration Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <input
                id="registration"
                type="text"
                value={registrationNumber}
                onChange={handleInputChange}
                className="w-full px-4 text-gray-700 placeholder-gray-400 rounded-l-lg focus:outline-none"
                placeholder="Registration Number"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="px-4 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
              >
                <IoSearch className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      )}

      
      {showForm && (
        <div className="my-14 px-5 md:px-10 xl:px-32 flex justify-center">
          
          <div className="w-full max-w-3xl">
            <div className="flex  mb-4 lg:mb-7 items-center relative">
           
              <div className="absolute w-full h-1 bg-gray-300 rounded-md"></div> 
              
              <div
                className="absolute h-1 bg-blue-500 transition-all duration-300 rounded-md"
                style={{ width: `${progressWidth}%` }} 
              ></div>

             
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-6 h-6 mx-10 md:mx-[79px] relative rounded-full flex items-center justify-center ${step <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                >
                  {step < currentStep ? (
                    <FaCheckCircle className="text-white" />
                  ) : step === currentStep ? (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  ) : null}
                </div>
              ))}
            </div>

          
            <div className="border p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-blue-500">Step {currentStep} of 4</h2>

             
              {currentStep === 1 && (
                <div>
                  <label className="block font-semibold text-lg mb-2">Upload Document</label>
                  <input
                    type="file"
                    name="document"
                    onChange={handleFormChange}
                    className="w-full mb-4 p-2 border rounded-md"
                  />
                </div>
              )}

              
              {currentStep === 2 && (
                <div>
                  <label className="block  font-semibold text-lg mb-2">Verification Code</label>
                  <input
                    type="text"
                    name="verificationCode"
                    value={formData.verificationCode}
                    onChange={handleFormChange}
                    className="w-full mb-4 p-2 border rounded-md focus:outline-none"
                    placeholder="Enter your verification code"
                  />
                </div>
              )}

              
              {currentStep === 3 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Application Status : <span className='text-green-600'>Approved</span></h3>
                  <p>Your application has been approved. Please proceed to download your application.</p>
                </div>
              )}

              
              {currentStep === 4 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Download Application</h3>
                  <p>Your application is ready for download.</p>
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg mt-3 hover:bg-green-600"
                  >
                    Download Application
                  </button>
                </div>
              )}

            
              <div className="mt-4 flex justify-between">
                {currentStep > 1 && (
                  <button
                    onClick={handlePreviousStep}
                    className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                  >
                    Previous
                  </button>
                )}
                {currentStep < 4 && (
                  <button
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
