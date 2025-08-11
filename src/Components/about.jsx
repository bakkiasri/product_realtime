import React from "react";
import logoImg from '../assets/About_Us.jpg';
import Navbar from "../layout/navbar";
import Stock from "../assets/ourmission.jpg";
import Vision from "../assets/ourvision.jpg" 
function About() {
  return (<>
   <div className="container   ">
    <Navbar />
    <div className=" flex "
    // style={{backgroundImage:`url(${logoImg})`}}
     >
      <img src={logoImg}  className=""/>
    </div>
      <div className='pt-15 pb-7 px-3 md:px-15 bg-[#F7F8FB]'>
             <div className="grid  items-center  p-7 px-2 md:px-15 grid-cols-1 md:grid-cols-2  ">
          <div className='text-4xl   font-medium text-[#100B39] ps-10 pt-4 '>
            Our Vission
          </div>
          <div className=' p-5 pe-7 text-lg/6 text-justify  space-y-4'>
            <img src={Stock}   className=" object-contain p-3 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" />
          </div>
          </div>
           
          </div>
           <div className='pt-15 pb-7 px-3 md:px-15 bg-[#F7F8FB]'>
             <div className="grid  items-center  p-7 px-2 md:px-15 grid-cols-1 md:grid-cols-2  ">
          <div className=' ps-10 pt-4 text-lg/6 text-justify  space-y-4'>
            <img src={Stock}   className=" object-contain p-3 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" />
          </div>
         <div className='text-4xl  flex justify-center font-medium text-[#100B39] ps-10 pt-4 '>
            Our Mission
          </div>
            </div>
           
          </div>
        
        {/* <div className="grid gap-8 px-10 md:grid-cols-3">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Row 1</h3>
            <p className="text-gray-600">Category description goes here.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Row 2</h3>
            <p className="text-gray-600">Category description goes here.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Row 3</h3>
            <p className="text-gray-600">Category description goes here.</p>
          </div>
        </div> */}
      </div>
      
  </>)
}

export default About;