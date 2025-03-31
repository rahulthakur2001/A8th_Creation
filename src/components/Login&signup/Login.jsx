import { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import Postapi from "../../APIs/Postapi";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setAuthData } from "../../actions/authActions";

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [isForgotPasswordActive, setIsForgotPasswordActive] = useState(false);
  const [isOtpActive, setIsOtpActive] = useState(false);
  const [form, setForm] = useState();
  const [otp, setOtp] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleform = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  // Register API 
  const signup = async (data) => {
    try {
      const response = await Postapi("auth/register", data);
      toast.success(response.message);
      setIsOtpActive(true);
    } catch (e) {
      if (e.response) {
        toast.error(e.response.data.message || "An error occurred during registration.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      console.log(e);
    }
  };


  // OTP verify API
  const OtpVerify = async (data) => {
    try {
      const response = await Postapi("auth/verify-otp", { otp: data })
        .then((response) => {
          toast.success(response.message);
          setIsOtpActive(false)
          setIsRightPanelActive(false)
        })
    } catch (e) {
      if (e.response) {
        toast.error(e.response.data.message || "An error occurred during OTP verify.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      console.log(e);
    }
  }

  // Login API
  const loginApi = async (data) => {
    try {
      const response = await Postapi("auth/login", data);
      console.log(response);
  
      if (response && response.token) {
        Cookies.set("token", response.token, { expires: 7, secure: true, sameSite: "Strict" });
  
        dispatch(setAuthData(response.token, response.user));
  
        toast.success(response.message);
        navigate("/");  
      } else {
        toast.error("No token received. Please try again.");
      }
    } catch (e) {
      if (e.response) {
        toast.error(e.response.data.message || "An error occurred during login.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      console.log(e);
    }
  };
  


  const handleOtpSubmit = () => {
    OtpVerify(otp);
  }

  const handlesignin = (e) => {
    e.preventDefault();
    signup(form);
  }
  const handleLogin = (e) => {
    e.preventDefault();
    loginApi(form);
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <ToastContainer />
      <div className="relative w-[768px] max-w-full min-h-[480px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-700">
        {/* Forms Container */}
        <div
          className={`absolute top-0 left-0 w-full h-full flex transition-transform duration-700 
            ${isForgotPasswordActive ? "-translate-y-full" : "translate-y-0"}
            ${isOtpActive ? "translate-y-full" : ""}
          `}
        >
          {/* Login & Sign Up Forms */}
          <div
            className="absolute top-0 left-0 w-full h-full flex transition-transform duration-700"
          >
            {/* Sign In Form */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center p-10">
              <h1 className="text-2xl font-bold">Sign In</h1>

              <span className="text-sm">or use your account</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 my-2 bg-gray-200 rounded"
                onChange={handleform}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 my-2 bg-gray-200 rounded"
                name="password"
                onChange={handleform}
              />
              <a
                href="#"
                className="text-blue-500 text-sm"
                onClick={() => setIsForgotPasswordActive(true)}
              >
                Forgot your password?
              </a>
              <button className="bg-red-500 text-white px-8 py-3 mt-4 cursor-pointer rounded-full transform: active:scale-[0.95]"
                onClick={handleLogin}>
                Sign In
              </button>
            </div>

            {/* Sign Up Form */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center p-10">
              <h1 className="text-2xl font-bold">Sign Up</h1>
              <span className="text-sm">or use your email for registration</span>
              <input
                name="name"
                type="text"
                placeholder="Username"
                className="w-full p-3 my-2 bg-gray-200 rounded"
                onChange={handleform}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 my-2 bg-gray-200 rounded"
                onChange={handleform}
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full p-3 my-2 bg-gray-200 rounded"
                onChange={handleform}
                required
              />
              <button
                className="bg-red-500 text-white px-8 py-3 mt-4 cursor-pointer rounded-full transform: active:scale-[0.95]"
                onClick={handlesignin}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Forgot Password Form */}
        <div
          className={`absolute top-full left-0 w-full h-full flex flex-col items-center justify-center p-10 bg-white transition-transform duration-700 ${isForgotPasswordActive ? "-translate-y-full" : "translate-y-0"
            }`}
        >
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

        {/* OTP Form */}
        <div
          className={`absolute bottom-0 left-0 w-full h-full flex flex-col items-center justify-center p-10 bg-white transition-transform duration-700 ${isOtpActive ? "translate-y-0" : "-translate-y-100"
            }`}
        >
          <h1 className="text-2xl font-bold">Otp</h1>
          <span className="text-sm">Enter Your Otp</span>
          <input
            onChange={(e) => setOtp(e.target.value)}
            type="text"
            placeholder="Enter Otp"
            className="w-[80%] p-3 my-2 bg-gray-200 rounded"
          />
          <button className="bg-red-500 text-white px-8 py-3 mt-4 rounded-full"
            onClick={handleOtpSubmit}
          >
            Submit
          </button>
          <a
            href="#"
            className="text-blue-500 text-sm mt-4"
            onClick={() => setIsOtpActive(false)}
          >
            Back to Sign Up
          </a>
        </div>

        {/* Overlay */}
        {!isForgotPasswordActive && !isOtpActive && (
          <div
            className={`absolute left-1/2 w-1/2 h-full bg-gradient-to-r from-red-500 to-pink-500 text-white flex flex-col items-center justify-center p-10 transition-all duration-700 
            ${isRightPanelActive ? "-translate-x-full" : "translate-x-0"}
            `}
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
        )}
      </div>
    </div>
  );
};

export default Login;
