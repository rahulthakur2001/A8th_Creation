import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../index.css";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../../Slices/authSlice";
import axios from "axios";
import Getapi from "../../APIs/Getapi";
import { toast } from "react-toastify";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    try {
      const response = await Getapi('auth/logout');
  
      if (response) {
        toast.success("Logged out successfully!");
      }
  
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed!");
      console.error(error);
    }
  };
  

  const token = useSelector((state) => state.auth.token) || Cookies.get("token");

  const user = useSelector((state) => state.auth.user);

  // const displayName = userName ? userName.substring(0, 2).toUpperCase() : "";

  return (
    <header className="bg-gradient-to-b from-gray-900 to-gray-600 w-full shadow fixed z-10">
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-5 lg:px-10">
        {mobileMenuOpen ? (
          <IoClose
            onClick={openMenu}
            className="lg:hidden text-2xl cursor-pointer"
          />
        ) : (
          <IoMenu
            onClick={openMenu}
            className="lg:hidden text-2xl cursor-pointer"
          />
        )}
        <div className="flex flex-1 gap-20">
          <Link to="/" className="md:ml-0 ml-8">
            <div className="w-auto h-10">
              <img alt="" src={logo} className="object-contain h-full w-full" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center flex-1 gap-8">
            <Link
              to="/"
              className={`hover:text-teal-700 font-bold text-lg ${isActive("/") ? "text-teal-600" : "text-white"
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-teal-700 font-bold text-lg ${isActive("/about") ? "text-teal-600" : "text-white"
                }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`hover:text-teal-700 font-bold text-lg ${isActive("/contact") ? "text-teal-600" : "text-white"
                }`}
            >
              Contact Us
            </Link>
            <Link
              to="/exploreAll"
              className={`hover:text-teal-700 font-bold text-lg ${isActive("/exploreAll") ? "text-teal-600" : "text-white"
                }`}
            >
              Explore All
            </Link>
          </div>
        </div>

        <div className="relative flex items-center gap-4">
          {!user ? (
            <Link
              to="/login"
              className="text-white bg-teal-800 hover:bg-teal-700 rounded-sm px-5 py-2"
            >
              Log in
            </Link>
          ) : (
            <div
              className="relative text-white font-semibold cursor-pointer"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span className="text-lg">{user.name}</span>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg text-black z-10">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile menu - slide from left */}
      {mobileMenuOpen && (
        <div
          className={`fixed top-20 left-0 w-full bg-white h-full p-6 space-y-8 transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex flex-col text-left">
            <Link
              to="/about"
              className={`text-lg font-semibold ${isActive("/about") ? "text-teal-900" : ""
                }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-semibold ${isActive("/contact") ? "text-teal-900" : ""
                }`}
            >
              Contact Us
            </Link>
            <Link
              to="/exploreAll"
              className={`text-lg font-semibold ${
                isActive("/exploreAll") ? "text-teal-900" : ""
              }`}
              to="/blog"
              className={`text-lg font-semibold ${isActive("/blog") ? "text-teal-900" : ""
                }`}
            >
              Explore All
            </Link>
            <Link to="/login" className="text-lg font-semibold">
              Log in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
