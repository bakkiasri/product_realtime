import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/navbar";
import logoImg from "../assets/images.jpg"; // Optional logo
import About from "./about";
import { useNavigate } from "react-router-dom";
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
      <div className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          About
        </h2>
        <div className="grid gap-8 px-10 md:grid-cols-3">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
