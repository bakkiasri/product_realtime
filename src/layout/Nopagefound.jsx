import React from "react";
import notfoundImage from "../assets/404.jpg";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
       <img src={notfoundImage}/>
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-600"
      >
        Go to Home
      </a>
    </div>
  );
}

export default NotFound;
