import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../index.css";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Slices/authSlice";
import Getapi from "../../APIs/Getapi";
import { toast } from "react-toastify";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user?.role?.includes("Admin");

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking anywhere else
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container') && !event.target.closest('.menu-toggle')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    // Fetch user by ID if needed
    // const fetchUserData = async () => {
    //   const res = await Getapi(`user/${user.id}`);
    // };
    // 
    // if (user?.id) {
    //   fetchUserData();
    // }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await Getapi("auth/logout");

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

  // Function to get the user's initials if no avatar is available
  const getInitials = (name) => {
    const initials = name?.split(" ").map((word) => word.charAt(0)).join("").toUpperCase();
    return initials || "";
  };

  // Function to display profile image or initials
  const renderProfileImage = () => {
    if (user?.avatar?.url) {
      return (
        <img
          src={user.avatar.url}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-teal-500"
        />
      );
    } else {
      return (
        <div className="w-10 h-10 flex items-center justify-center bg-teal-700 text-white rounded-full border-2 border-teal-400">
          {getInitials(user?.name)}
        </div>
      );
    }
  };

  return (
    <header className="bg-gradient-to-b from-gray-900 to-gray-600 w-full shadow fixed z-10">
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-5 lg:px-10">
        <div className="menu-toggle z-20">
          {mobileMenuOpen ? (
            <IoClose
              onClick={toggleMenu}
              className="lg:hidden text-3xl cursor-pointer text-white"
            />
          ) : (
            <IoMenu
              onClick={toggleMenu}
              className="lg:hidden text-3xl cursor-pointer text-white"
            />
          )}
        </div>
        
        <div className="flex flex-1 gap-5 md:gap-20 items-center">
          <Link to="/" className="md:ml-0">
            <div className="w-auto h-10">
              <img alt="Logo" src={logo} className="object-contain h-full w-full" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center flex-1 gap-8">
            <Link
              to="/"
              className={`hover:text-teal-400 transition-colors duration-300 font-bold text-lg ${isActive("/") ? "text-teal-400" : "text-white"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-teal-400 transition-colors duration-300 font-bold text-lg ${isActive("/about") ? "text-teal-400" : "text-white"}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`hover:text-teal-400 transition-colors duration-300 font-bold text-lg ${isActive("/contact") ? "text-teal-400" : "text-white"}`}
            >
              Contact Us
            </Link>
            <Link
              to="/exploreAll"
              className={`hover:text-teal-400 transition-colors duration-300 font-bold text-lg ${isActive("/exploreAll") ? "text-teal-400" : "text-white"}`}
            >
              Explore All
            </Link>
          </div>
        </div>

        {/* User Profile or Login Button */}
        <div className="relative flex items-center gap-4 z-20">
          {!user ? (
            <Link
              to="/login"
              className="text-white bg-teal-700 hover:bg-teal-600 rounded-md px-5 py-2 text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Log in
            </Link>
          ) : (
            <div
              className="relative text-white font-semibold cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex items-center space-x-2">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  {renderProfileImage()}
                </div>
                <span className="hidden md:block">{user?.name}</span>
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-md shadow-xl text-black z-50 border border-gray-200 overflow-hidden">
                  <div className="p-2 bg-gray-100 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-700">Signed in as</p>
                    <p className="text-sm font-bold text-gray-900 truncate">{user?.email}</p>
                  </div>
                  <Link to="/user/profile" className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors duration-200">
                    Profile
                  </Link>

                  {isAdmin && (
                    <Link to="/admin" className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors duration-200">
                      Admin Dashboard
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-gray-100 transition-colors duration-200 border-t border-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

   {/* Mobile menu - full screen with blur background */}
{mobileMenuOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 transition-opacity duration-300 ease-in-out">
    <div className="mobile-menu-container h-full w-full md:w-64 bg-gray-800 p-6 flex flex-col justify-center items-center space-y-8 transform transition-transform duration-300 ease-in-out">
      
      {/* Navigation Links */}
      <Link
        to="/"
        className={`text-xl font-semibold ${isActive("/") ? "text-teal-400" : "text-white"} hover:text-teal-500 transform hover:scale-105 transition-all duration-300 ease-in-out`}
        onClick={toggleMenu}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`text-xl font-semibold ${isActive("/about") ? "text-teal-400" : "text-white"} hover:text-teal-500 transform hover:scale-105 transition-all duration-300 ease-in-out`}
        onClick={toggleMenu}
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className={`text-xl font-semibold ${isActive("/contact") ? "text-teal-400" : "text-white"} hover:text-teal-500 transform hover:scale-105 transition-all duration-300 ease-in-out`}
        onClick={toggleMenu}
      >
        Contact Us
      </Link>
      <Link
        to="/exploreAll"
        className={`text-xl font-semibold ${isActive("/exploreAll") ? "text-teal-400" : "text-white"} hover:text-teal-500 transform hover:scale-105 transition-all duration-300 ease-in-out`}
        onClick={toggleMenu}
      >
        Explore All
      </Link>
      
      {/* Login/Logout Button or Profile Section */}
      {!user ? (
        <Link
          to="/login"
          className="mt-6 text-white bg-teal-700 hover:bg-teal-600 rounded-lg px-8 py-3 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 ease-in-out"
          onClick={toggleMenu}
        >
          Log in
        </Link>
      ) : (
        <div className="mt-6 flex flex-col items-center space-y-4">
          <div className="mb-4 transform hover:scale-110 transition-all duration-300">
            {renderProfileImage()}
          </div>
          <p className="text-white mb-2 text-lg font-semibold">{user?.name}</p>
          <div className="flex flex-col space-y-3 w-full items-center">
            <Link
              to="/user/profile"
              className="text-white hover:text-teal-400 transition-colors duration-300 transform hover:scale-105"
              onClick={toggleMenu}
            >
              Profile
            </Link>

            {/* Admin Link (only for admins) */}
            {isAdmin && (
              <Link
                to="/admin"
                className="text-white hover:text-teal-400 transition-colors duration-300 transform hover:scale-105"
                onClick={toggleMenu}
              >
                Admin
              </Link>
            )}
            
            {/* Logout Button */}
            <button
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
              className="text-red-400 hover:text-red-300 transition-colors duration-300 transform hover:scale-105"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
)}

    </header>
  );
}