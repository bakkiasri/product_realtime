import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/login_image.png";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded credentials (demo only)
  const validUsername = "admin";
  const validPassword = "12345";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === validUsername && password === validPassword) {
      localStorage.setItem("token", "my_fake_token"); // Save token in localStorage
      setError("");
      navigate("/home"); // Redirect to home page
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col bg-[#E7E2FF] md:flex-row items-center justify-center w-full min-h-screen py-10 p-6">
      <div className="flex bg-white rounded-2xl">
        {/* Form Section */}
        <div className="flex p-10 rounded-2xl justify-center bg-white items-center flex-col gap-5  max-w-lg">
          <form onSubmit={handleSubmit} className="w-full p-5 space-y-6">
            <div className="flex font-bold text-xl text-[#553DED] justify-center">
              LOGIN
            </div>

            {/* Username */}
            <div>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 shadow rounded-2xl bg-[#E7E2FF] focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-[#E7E2FF] shadow rounded-2xl focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Error Message */}
            {error && <div className="text-red-600 text-sm">{error}</div>}

           
            {/* <div className="text-red-800 text-xs cursor-pointer">
              Click here to register?
            </div> */}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-25 text-center cursor-pointer font-medium text-white px-4 py-2 bg-gradient-to-r from-[#5C45EF] to-[#8676F3] shadow rounded-2xl focus:outline-none focus:border-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 hidden sm:block flex items-center justify-center">
          <img
            src={loginImg}
            className="h-[500px] object-contain rounded-xl"
            alt="Login"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
