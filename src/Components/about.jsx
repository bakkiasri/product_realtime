import React from "react";
import logoImg from '../assets/images.jpg';
import Navbar from "../layout/navbar";

function About() {
  return (<>
   <div className="container mx-auto bg-gray-100  ">
    <Navbar />
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
  </>)
}

export default About;