import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../Slices/authSlice";
import { useNavigate } from "react-router-dom";
import PostApi from "../../APIs/Postapi";

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [isForgotPasswordActive, setIsForgotPasswordActive] = useState(false);
  const [isOtpActive, setIsOtpActive] = useState(false);
  const [form, setForm] = useState();
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const otpRefs = useRef([]); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth)

  const handleform = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  
    if (value && index < 4) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleOtpBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  // Register API 
  const signup = async (data) => {
    try {
      const response = await PostApi("auth/register", data);
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
      const fullOtp = data.join("");

      const response = await PostApi("auth/verify-otp", { otp: fullOtp })
        .then((response) => {
          toast.success(response.message);
          dispatch(loginSuccess({ user: response.user }));
          navigate("/");
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
  const loginUser = (email, password) => async (dispatch) => {
    dispatch(loginStart());

    try {
      const response = await PostApi('auth/login', { email, password });
      console.log(response);

      if (response && response.success) {
        dispatch(loginSuccess({ user: response.user }));
        toast.success("Login successfully!");
        navigate("/");
      } else {
        dispatch(loginFailure(response.message || "Login failed"));
        toast.error(response.message || "Login failed");
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || error.message || "Unknown error";
      dispatch(loginFailure(errorMessage));
      toast.error(errorMessage);
    }
  };




  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(form.email, form.password)); // Call loginUser action with form data
  }


  const handleOtpSubmit = () => {
    OtpVerify(otp);
  }

  const handlesignin = (e) => {
    e.preventDefault();
    signup(form);
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url(../src/assets/login.jpg)] bg-contain">
      <ToastContainer />
      <div className="relative w-[768px] max-w-full min-h-[480px] backdrop-blur-xs rounded-lg shadow-white shadow-inner overflow-hidden transition-transform duration-700">
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
              <h1 className="text-2xl text-gray-50 font-bold">Sign In</h1>

              <span className="text-sm text-gray-50">or use your account</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 my-2 bg-cyan-100 rounded"
                onChange={handleform}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 my-2 bg-cyan-100 rounded"
                name="password"
                onChange={handleform}
              />
              <a
                href="#"
                className="text-gray-100 text-sm"
                onClick={() => setIsForgotPasswordActive(true)}
              >
                Forgot your password?
              </a>
              <button className="bg-cyan-500 hover:bg-cyan-600 shadow-[0_0.7em_0.8em_-0.5em_rgb(0,0,0)] text-white px-8 py-3 mt-4 cursor-pointer rounded-full transform: active:scale-[0.95]"
                onClick={handleLogin}>
                Sign In
              </button>
            </div>

            {/* Sign Up Form */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center p-10">
              <h1 className="text-2xl font-bold text-gray-100">Sign Up</h1>
              <span className="text-sm text-gray-50">or use your email for registration</span>
              <input
                name="name"
                type="text"
                placeholder="Username"
                className="w-full p-3 my-2 bg-cyan-100 rounded"
                onChange={handleform}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 my-2 bg-cyan-100 rounded"
                onChange={handleform}
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full p-3 my-2 bg-cyan-100 rounded"
                onChange={handleform}
                required
              />
              <button
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 mt-4 cursor-pointer rounded-full shadow-[0_0.7em_0.8em_-0.5em_rgb(0,0,0)] transform: active:scale-[0.95]"
                onClick={handlesignin}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Forgot Password Form */}
        <div
          className={`absolute top-full left-0 w-full h-full flex flex-col items-center justify-center p-10 bg-transparent transition-transform duration-700 ${isForgotPasswordActive ? "-translate-y-full" : "translate-y-0"
            }`}
        >
          <h1 className="text-2xl font-bold text-gray-700">Reset Password</h1>
          <span className="text-sm text-gray-700">Enter your email to reset password</span>
          <input
            type="email"
            placeholder="Email"
            className="w-[80%] p-3 my-2 bg-gray-200 rounded"
          />
          <button className="bg-cyan-600 shadow-[0_0.7em_0.8em_-0.5em_rgb(0,0,0)] text-white px-8 py-3 mt-4 rounded-full cursor-pointer hover:bg-cyan-700">
            Reset Password
          </button>
          <a
            href="#"
            className="text-cyan-300 text-sm mt-4"
            onClick={() => setIsForgotPasswordActive(false)}
          >
            Back to Sign In
          </a>
        </div>

        {/* OTP Form */}
        <div
          className={`absolute bottom-0 left-0 w-full h-full flex flex-col items-center justify-center p-10 bg-transparent transition-transform duration-700 ${isOtpActive ? "translate-y-0" : "-translate-y-100"
            }`}
        >
          <h1 className="text-2xl font-bold">OTP</h1>
          <span className="text-sm mb-4">Enter your OTP</span>

          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((_, index) => (
              <input
                key={index}
                ref={(el) => (otpRefs.current[index] = el)}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600"
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleOtpBackspace(e, index)}
                value={otp[index] || ""}
              />
            ))}
          </div>

          <button
            className="bg-cyan-600 hover:bg-cyan-700 text-white shadow-[0_0.7em_0.8em_-0.5em_rgb(0,0,0)] px-8 py-3 mt-6 rounded-full"
            onClick={handleOtpSubmit}
          >
            Submit
          </button>

          <a
            href="#"
            className="text-cyan-300 text-sm mt-4"
            onClick={() => setIsOtpActive(false)}
          >
            Back to Sign Up
          </a>
        </div>


        {/* Overlay */}
        {!isForgotPasswordActive && !isOtpActive && (
          <div
            className={`absolute left-1/2 w-1/2 h-full bg-[url(../src/assets/bglogin.png)] bg-cover bg-no-repeat text-black flex flex-col items-center justify-center p-10 transition-all duration-700 
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
                  className="border border-gray-400 text-gray-800 bg-[#95f3e2] shadow-[0_0.7em_0.8em_-0.5em_rgb(0,0,0)] px-8 cursor-pointer py-3 mt-4 rounded-full"
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
                  className="border border-gray-400 text-gray-800 bg-[#95f3e2] shadow-[0_0.7em_0.8em_-0.5em_rgb(0,0,0)] px-8 cursor-pointer py-3 mt-4 rounded-full"
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
