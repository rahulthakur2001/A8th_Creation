import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import "../../index.css"
import logo from  '../../assets/logo.png'
import { useSelector } from 'react-redux';

export default function Header() {
  const { token, user } = useSelector((state) => state.auth);  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const openMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-b from-gray-900 to-gray-600 w-full shadow fixed z-10">
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-5 lg:px-10">
        {
          mobileMenuOpen ? (
            <IoClose onClick={openMenu} className="lg:hidden text-2xl cursor-pointer" />
          ) : (
            <IoMenu onClick={openMenu} className="lg:hidden text-2xl cursor-pointer" />
          )
        }
        <div className="flex flex-1 gap-20">
          <Link to="/" className='md:ml-0 ml-8'>
          <div className='w-auto h-10'>
            <img
              alt=""
              src={logo}
              className="object-contain h-full w-full"
            />
          </div>
          </Link>

          <div className="hidden lg:flex items-center flex-1 gap-8">
            <Link
              to="/"
              className={`hover:text-teal-700 font-bold text-lg ${isActive('/') ? 'text-teal-600' : 'text-white'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-teal-700 font-bold text-lg ${isActive('/about') ? 'text-teal-600' : 'text-white'}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`hover:text-teal-700 font-bold text-lg ${isActive('/contact') ? 'text-teal-600' : 'text-white'}`}
            >
              Contact Us
            </Link>
            <Link
              to="/exploreAll"
              className={`hover:text-teal-700 font-bold text-lg ${isActive('/exploreAll') ? 'text-teal-600' : 'text-white'}`}
            >
              Explore All
            </Link>
          </div>
        </div>
{/* 
        <div className="">
          <Link
            to="/login"
            className="text-xm font-semibold text-white  bg-teal-800 hover:bg-teal-700 cursor-pointer rounded-sm px-5 py-2"
            >
            Log in
          </Link>
        </div> */}

        <div className="flex items-center gap-4">
          {token ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <Link to="/profile" className="text-white">Profile</Link>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-xm font-semibold text-white bg-teal-800 hover:bg-teal-700 cursor-pointer rounded-sm px-5 py-2">Log in</Link>
              <Link to="/signup" className="text-xm font-semibold text-white bg-teal-800 hover:bg-teal-700 cursor-pointer rounded-sm px-5 py-2">Sign up</Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile menu - slide from left */}
      {mobileMenuOpen && (
        <div
          className={`fixed top-20 left-0 w-full bg-white h-full p-6 space-y-8 transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="flex flex-col text-left">
            <Link
              to="/about"
              className={`text-lg font-semibold ${isActive('/about') ? 'text-teal-900' : ''}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-semibold ${isActive('/contact') ? 'text-teal-900' : ''}`}
            >
              Contact Us
            </Link>
            <Link
              to="/blog"
              className={`text-lg font-semibold ${isActive('/blog') ? 'text-teal-900' : ''}`}
            >
              Blog
            </Link>
            <Link
              to="/login"
              className="text-lg font-semibold"
            >
              Log in
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
