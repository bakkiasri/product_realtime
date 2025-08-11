import React from "react";
import logoImg from '../assets/p_logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const navigate = useNavigate();
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

 const toggleSideMenu = () => {
    setSideMenuOpen(prev => !prev);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // redirect to login
  };

  return (
    <nav className="bg-indigo-800 text-white px-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center gap-8 justify-between">

        {/* Logo */}
        <div>
          <img src={logoImg} alt="logo" className="h-20 p-3 w-auto" onClick={toggleSideMenu}/>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-4 text-white">
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
      {sideMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-indigo-900 text-white shadow-lg p-6 z-50 sm:hidden">
          <button
            className="mb-6 text-white text-xl font-bold"
            onClick={toggleSideMenu}
          >
             ×
          </button>

          <nav className="flex flex-col gap-4 text-lg">
            <Link onClick={toggleSideMenu} to="/home" className="hover:text-blue-300">Home</Link>
            <Link onClick={toggleSideMenu} to="/product" className="hover:text-blue-300">Product</Link>
            <Link onClick={toggleSideMenu} to="/about" className="hover:text-blue-300">About</Link>
            <Link onClick={toggleSideMenu} to="/contact" className="hover:text-blue-300">Contact</Link>
            <div className="flex hover:text-blue-300 h-50 w-30 items-end">
              <button 
              onClick={() => {
                handleLogout();
                toggleSideMenu();
              }} 
              className="bg-[#D527E3] text-white border-none rounded-full p-2 cursor-pointer text-left p-0 mt-4"
            >
              Logout
            </button>
              </div>
            
          </nav>
        </div>
      )}
    
    </nav>
  );
}

export default Navbar;
