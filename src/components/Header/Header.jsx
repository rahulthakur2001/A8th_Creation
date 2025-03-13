import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // To track the current location

  const openMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white w-full shadow fixed z-10">
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-10">
        {
          mobileMenuOpen ? (
            <IoClose onClick={openMenu} className="lg:hidden text-2xl cursor-pointer" />
          ) : (
            <IoMenu onClick={openMenu} className="lg:hidden text-2xl cursor-pointer" />
          )
        }
        <div className="flex flex-1 gap-20">
          <Link to="/" className='md:ml-0 ml-10'>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden lg:flex flex-1 gap-8">
            <Link
              to="/about"
              className={`hover:text-sky-700 font-semibold text-lg ${isActive('/about') ? 'text-blue-600' : ''}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`hover:text-sky-700 font-semibold text-lg ${isActive('/contact') ? 'text-blue-600' : ''}`}
            >
              Contact Us
            </Link>
            <Link
              to="/blog"
              className={`hover:text-sky-700 font-semibold text-lg ${isActive('/blog') ? 'text-blue-600' : ''}`}
            >
              Blog
            </Link>
          </div>
        </div>

        <div className="">
          <Link
            to="/login" // Adjust this to the actual login path
            className="text-sm font-semibold text-gray-90 border-gray-700-600 hover:bg-sky-300 cursor-pointer border-2 rounded-sm p-2"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
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
              className={`text-lg font-semibold ${isActive('/about') ? 'text-blue-600' : ''}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-semibold ${isActive('/contact') ? 'text-blue-600' : ''}`}
            >
              Contact Us
            </Link>
            <Link
              to="/blog"
              className={`text-lg font-semibold ${isActive('/blog') ? 'text-blue-600' : ''}`}
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
