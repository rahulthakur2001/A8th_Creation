import { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [isForgotPasswordActive, setIsForgotPasswordActive] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative w-[768px] max-w-full min-h-[480px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-700">
        {/* Forms Container */}
        <div
          className={`absolute top-0 left-0 w-full h-full flex transition-transform duration-700 ${
            isForgotPasswordActive ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          {/* Login & Sign Up Forms */}
          <div
            className={`absolute top-0 left-0 w-full h-full flex transition-transform duration-700 ${
              isRightPanelActive ? "translate-x-0" : "translate-x-0"
            }`}
          >
            {/* Sign In Form */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center p-10">
              <h1 className="text-2xl font-bold">Sign In</h1>
              <div className="flex gap-3 my-4">
                <a href="#" className="p-2 border rounded-full">
                <FaFacebookF />
                </a>
                <a href="#" className="p-2 border rounded-full">
                <FaGooglePlusG />
                </a>
                <a href="#" className="p-2 border rounded-full">
                <FaLinkedinIn />
                </a>
              </div>
              <span className="text-sm">or use your account</span>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 my-2 bg-gray-200 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 my-2 bg-gray-200 rounded"
              />
              <a
                href="#"
                className="text-blue-500 text-sm"
                onClick={() => setIsForgotPasswordActive(true)}
              >
                Forgot your password?
              </a>
              <button className="bg-red-500 text-white px-8 py-3 mt-4 cursor-pointer rounded-full transform: active:scale-[0.95]">
                Sign In
              </button>
            </div>

            {/* Sign Up Form */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center p-10">
              <h1 className="text-2xl font-bold">Sign Up</h1>
              <div className="flex gap-3 my-4">
                <a href="#" className="p-2 border rounded-full">
                <FaFacebookF />
                </a>
                <a href="#" className="p-2 border rounded-full">
                <FaGooglePlusG />
                </a>
                <a href="#" className="p-2 border rounded-full">
                <FaLinkedinIn />
                </a>
              </div>
              <span className="text-sm">or use your email for registration</span>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 my-2 bg-gray-200 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 my-2 bg-gray-200 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 my-2 bg-gray-200 rounded"
              />
              <button className="bg-red-500 text-white px-8 py-3 mt-4 cursor-pointer rounded-full transform: active:scale-[0.95]">
                Sign Up
              </button>
            </div>
          </div>

          {/* Forgot Password Form */}
          <div className="absolute top-full left-0 w-full h-full flex flex-col items-center justify-center p-10 bg-white transition-transform duration-700">
            <h1 className="text-2xl font-bold">Reset Password</h1>
            <span className="text-sm">Enter your email to reset password</span>
            <input
              type="email"
              placeholder="Email"
              className="w-[80%] p-3 my-2 bg-gray-200 rounded"
            />
            <button className="bg-red-500 text-white px-8 py-3 mt-4 rounded-full">
              Reset Password
            </button>
            <a
              href="#"
              className="text-blue-500 text-sm mt-4"
              onClick={() => setIsForgotPasswordActive(false)}
            >
              Back to Sign In
            </a>
          </div>
        </div>

        {/* Overlay (Slides Up with Forgot Password) */}
        <div
          className={`absolute left-1/2 w-1/2 h-full bg-gradient-to-r from-red-500 to-pink-500 text-white flex flex-col items-center justify-center p-10 transition-all duration-700 ${
            isForgotPasswordActive ? "-top-full" : "top-0"
          } ${
            isRightPanelActive ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {isRightPanelActive ? (
            <div className="text-center">
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="text-sm mt-2">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="border border-white text-white px-8 cursor-pointer py-3 mt-4 rounded-full"
                onClick={() => setIsRightPanelActive(false)}
              >
                Sign In
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="text-sm mt-2">
                Enter your personal details and start your journey with us
              </p>
              <button
                className="border border-white text-white px-8 cursor-pointer py-3 mt-4 rounded-full"
                onClick={() => setIsRightPanelActive(true)}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
