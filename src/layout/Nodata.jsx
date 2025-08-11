import React from "react";
import NodataFound from "../assets/NoDataFound.png";

function NotDataFound() {
  return (
    <div className="flex mt-60 flex-col items-center justify-center  ">
       <img src={NodataFound}/>
      <a
        href="/home"
        className="mt-6 px-6 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-600"
      >
        Go to Home
      </a>
    </div>
  );
}

export default NotDataFound;
