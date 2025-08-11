import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/navbar";
import logoImg from "../assets/flower_page.jpg"; 
import About from "./about";
import { useNavigate } from "react-router-dom";
import Stock from "../assets/stock_images.jpg"
function Home() {
  
  return (
    <div className=" ">
      {/* Navbar */}
        <Navbar />
      

      {/* Hero Section */}
      <div className="flex  flex-col md:flex-row items-center bg-size-[auto_1000px] px-10 py-16 "
      style={{ backgroundImage: `url(${logoImg})` }}
      >
        <div className="max-w-2xl ps-25  bg-opacity-40">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4 text-white">
            Advanced ESD Monitoring for a Safer, Smarter, Static-Free Environment
          </h1>
          <p className="text-lg mb-6 text-gray-200">
            Real-time monitoring for wrist straps, workstations, and grounding systems
            to prevent ESD events and ensure compliance with global standards.
          </p>
          <Link
            to="/about"
            className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition"
          >
            Know More
          </Link>
        </div>

        {/* Optional Hero Image */}
        <div className="mt-10 ">
          
        </div>
      </div>

      {/* Categories Section */}
      <div className='pt-15 pb-7 px-3 md:px-15 bg-[#F7F8FB]'>
         <div className="grid  items-center  p-7 px-2 md:px-15 grid-cols-1 md:grid-cols-2  ">
      <div className='text-4xl   font-medium text-[#100B39] ps-10 pt-4 '>
        Our Stock
      </div>
      <div className=' p-5 pe-7 text-lg/6 text-justify  space-y-4'>
        <img src={Stock}   className=" object-contain p-3 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
/>
         
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default Home;
