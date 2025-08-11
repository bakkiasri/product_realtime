import React from "react";
import logoImg from '../assets/p_logo.png';
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // redirect to login
  };

  return (
    <nav className="bg-indigo-800 text-white px-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center gap-8 justify-between">

        {/* Logo */}
        <div>
          <img src={logoImg} alt="logo" className="h-20 p-3 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 text-white">
          <Link to="/home" className="hover:text-blue-200 p-1 px-6 text-lg">Home</Link>
          <Link to="/product" className="hover:text-blue-200 p-1 px-6 text-lg">Product</Link>
          <Link to="/about" className="hover:text-blue-200 p-1 px-6 text-lg">About</Link>
          <Link to="/contact" className="hover:text-blue-200 p-1 px-6 text-lg">Contact</Link>

          {/* Logout */}
          <button 
            onClick={handleLogout} 
            className="hover:text-blue-200 p-1 px-6 text-lg bg-transparent border-none cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
