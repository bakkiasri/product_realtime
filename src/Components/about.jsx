import React from "react";
import logoImg from '../assets/About_Us.jpg';
import Navbar from "../layout/navbar";
import Mission from "../assets/ourmission.jpg";
import Vision from "../assets/ourvision.jpg";

function About() {
  return (
    <>
      <div className=" ">
        <Navbar />

        {/* Header Image */}
        <div className="">
          <img src={logoImg} alt="About Us" className="w-full h-100 object-cover" />
        </div>

        {/* Vision Section */}
        <section className="bg-[#F7F8FB] py-10 px-5 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-[#100B39] mb-4">Our Vision</h2>
              <p className="text-lg text-justify p-15 leading-relaxed">
                To deliver innovative solutions that empower our customers to achieve their goals efficiently and confidently.
              </p>
            </div>
            <div>
              <img
                src={Vision}
                alt="Our Vision"
                className="w-full h-75 rounded-lg object-contain transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-[#F7F8FB] py-10 px-5 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <img
                src={Mission}
                alt="Our Mission"
                className="w-full h-75 p-15 rounded-lg object-contain transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-semibold text-[#100B39] mb-4">Our Mission</h2>
              <p className="text-lg text-justify leading-relaxed">
                To deliver innovative solutions that empower our customers to achieve their goals efficiently and confidently.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
