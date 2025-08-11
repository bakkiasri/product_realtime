import React from "react";
import logoImg from '../assets/images.jpg';
import Navbar from "../layout/navbar";

function Contact() {
  return (<>
  
  <div className="flex-row justify-center items-center  container mx-auto  ">
    <Navbar />
            <div className="grid flex  lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4 lg:p-10 bg-[#F7F8FB]">

    <div className="flex-1 justify-center items-center px-2 md:px-25 p-4">
      <h2 className='text-4xl font-medium text-[#100B39] mb-4'>Contact Us</h2>
       
      </div>
    <div className="flex-1 mx-2 justify-center items-center mt-10  md:mx-25 ">
           <form className="space-y-5 ps-0 me-5 ">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              className="w-full border-2 border-[#B0B0B0] p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              className="w-full border-2 border-[#B0B0B0]  p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            className="w-full border-2 border-[#B0B0B0]  p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your company name"
          />
        </div>
        {/* Mobile Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              className="w-full border-2 border-[#B0B0B0] p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Id</label>
            <input
              type="email"
              className="w-full border-2 border-[#B0B0B0]  p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        {/* What can we help you with? */}
        <div>
          <label className="block text-sm font-medium mb-1">What can we help you with?</label>
          <textarea
            rows="4"
            className="w-full border-2 border-[#B0B0B0]  p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Describe your query"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className=" bg-[#D66026]  text-white text-lg    px-6 py-1 "
        >
          Enquiry
        </button>
      </form>
      </div>
      </div>
    </div>

  </>)
}

export default Contact;