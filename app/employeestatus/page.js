'use client'
import React, { useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import Swal from 'sweetalert2';
import { FaRegCircle } from "react-icons/fa";
import Nav from '../components/Nav';
import axios from 'axios';
import { baseapi, imgapi } from '../liks/links';
import { FaRegCircleCheck } from "react-icons/fa6";

function Page() {
  const [registrationNumber, setRegistrationNumber] = useState('');
const [registrationinfo,SetRegisterinfo]=useState()


  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [userInfo,setuseinfo]=useState()

  const [formData, setFormData] = useState({
    document: '',
    verificationCode: '',
  });


useEffect(()=>{



 const timeIntervel= setTimeout(() => {
  const fetchapi=async()=>{
    if(registrationNumber.length>2){
    const data= await axios.get(`${baseapi}/register/${registrationNumber}`) ;
    SetRegisterinfo(data.data)
    }
  }
  fetchapi()
}, 1000);

return  ()=>clearTimeout(timeIntervel)
},[registrationNumber])



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

const handelRegis=async(number)=>{
  setRegistrationNumber('')
const data= await axios.post(`${baseapi}/register/user`,{registration_number:number})
setuseinfo(data.data)


}
const downloadFile = (path) => {
  const fileUrl = `${imgapi}/${path}`; // Path to the file (public folder or CDN URL)
  const fileName = path;

  // Create an anchor element
  const anchor = document.createElement("a");
  anchor.href = fileUrl;
  anchor.download = fileName;

  // Trigger the download
  document.body.appendChild(anchor);
  anchor.click();

  // Cleanup the anchor element
  document.body.removeChild(anchor);
};

console.log(userInfo,"asdjoadis")

  return (
    <>
      <Nav />
     
      {!showForm && (
        <div className="flex flex-col items-center  my-14 px-5 xl:px-32 min-h-screen">
          <div className="w-full max-w-lg">
            <label htmlFor="registration" className="block text-xl md:text-2xl font-sans font-semibold text-gray-700 mb-5">
              Enter Registration Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg relative">
              { registrationNumber && registrationinfo &&
              <div className='absolute top-[100%] h-[10rem] overflow-auto shadow-md bg-[#e7e6e6d4] left-0 w-full p-3 flex flex-col items-center'>
              
              {registrationinfo?.map((info,index)=>(<div key={index} className='border-b border-red-600 p-2 w-full cursor-pointer ' onClick={()=>handelRegis(info?.registration_number)}>
                <p>{info?.registration_number}</p>
                </div>))}
                
                </div> }
              <input
                id="registration"
                type="text"
                value={registrationNumber}
                onChange={(e)=>setRegistrationNumber(e.target.value)}
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

          {userInfo && <div className="flex flex-col justify-center items-center gap-5 mt-16 ">
   <div className='w-[700px] bg-white shadow-xl rounded-lg  px-12 py-8 flex flex-col gap-5'>
   <p className='text-xl text-green-700 font-bold'>View Details :</p> 
            <div className='flex flex-col gap-4 '>
           
          <div className="flex gap-4">
            <span className="font-semibold text-gray-600">Name : </span>
            <span className="text-gray-800">{userInfo.name}</span>
          </div>
          {/* <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Passport #:</span>
            <span className="text-gray-800">{userInfo.passport_number}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Registration #:</span>
            <span className="text-gray-800">{userInfo.registration_number}</span>
          </div> */}

           
           
           <div className="flex gap-4">
             <span className="font-semibold text-gray-600">Nationality :</span>
             <span className="text-gray-800">{userInfo.nationality}</span>
           </div>
           <div className="flex gap-4">
             <span className="font-semibold text-gray-600">Position :</span>
             <span className="text-gray-800">{userInfo.position}</span>
           </div>
           <div className="flex gap-4">
             <span className="font-semibold text-gray-600">Travel Document Number :</span>
             <span className="text-gray-800">{userInfo.travel_document_number}</span>
           </div>
 
             </div>

             </div>
      <div className="bg-white shadow-lg rounded-lg  p-6 w-full">
      
        <div className="space-y-2">
     
          
    
          <div className="flex flex-col ">
            <span className="font-semibold text-gray-600">Status:</span>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                userInfo.verify ? " text-green-700" : " text-red-700"
              }`}
            >
              {userInfo.verify ?  <div className='w-full h-[11rem] pb-14'>
                <p className='text-xl font-bold'>Your document verified successfully</p>
                <button className='bg-green-600 text-white p-2 px-3 rounded-md font-semibold my-3' onClick={()=>downloadFile(userInfo?.document)}>Download file</button>

                <div className='flex justify-center w-full h-full'> <img  src='verify.webp'  className='w-3/6 h-full' /></div>
             </div> :
              
              <div className='w-full h-[11rem]'>
                <p className='text-xl font-bold'>Your document in under process</p>
                <div className='flex flex-col items-start justify-center text-black pt-10 space-y-5'>
                 
                   <div className='flex items-center  gap-2'>
                  {userInfo.file_submit ? <FaRegCircleCheck className='text-xl text-green-700'/> : <FaRegCircle className='text-xl '/>}
                  <h2 className='text-[17px]'>File Submitted</h2>

                  </div>
                  
                  <div className='flex items-center  gap-2'>
                  {userInfo.profile_approved ? <FaRegCircleCheck className='text-xl text-green-700'/> : <FaRegCircle className='text-xl '/>}
                  <h2 className='text-[17px]'>Profile Approved</h2>

                  </div>
                  
                  
                  <div className='flex items-center  gap-2'>
                  {userInfo.offer_latter_issude ? <FaRegCircleCheck className='text-xl text-green-700'/> : <FaRegCircle className='text-xl '/>}
                  <h2 className='text-[17px]'>Offer letter Issued</h2>

                  </div>
                  
                </div>
             </div>}
            </span>
          </div>
        </div>
      </div>
    </div>}



        </div>
      )}

     


    
     
    </>
  );
}

export default Page;
