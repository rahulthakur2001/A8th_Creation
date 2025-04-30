import { React, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { FaBell, FaRegHeart, FaRegUser } from "react-icons/fa";
import { RiFoldersLine, RiUserHeartLine } from "react-icons/ri";
import { FiDownload } from 'react-icons/fi';
import { MdCardMembership, MdDevicesOther } from 'react-icons/md';

const tabs = [
  { name: "Account", icon: <FaRegUser />, path: "/user/profile" },
  { name: "Projects", icon: <RiFoldersLine />, path: "/user/projects" },
  { name: "Downloads", icon: <FiDownload />, path: "/user/downloads" },
  { name: "Following", icon: <RiUserHeartLine />, path: "/user/following" },
  { name: "My Collections", icon: <FaRegHeart />, path: "/user/collections" },
  { name: "Devices", icon: <MdDevicesOther />, path: "/user/devices" },
  { name: "Subscription", icon: <MdCardMembership />, path: "/user/subscription" },
];

const ViewLayout = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  return (
    <div>
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200">
        <div className="flex items-center justify-between px-4 py-2 md:px-8">
          {/* Logo */}
          <Link to="/" className="">
            <div className="w-auto h-10">
              <img alt="" src={logo} className="object-contain h-full w-full" />
            </div>
          </Link>
          {/* Right Icons */}
          <div className="flex items-center space-x-4 relative">
            <div className="relative">
              <FaBell className="text-xl text-gray-600" />
            </div>

            {/* Profile + Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMenu(true)}
              onMouseLeave={() => setMenu(false)}
            >
              <img
                src={logo}
                alt="Profile"
                className="w-8 h-8 rounded-full border cursor-pointer"
              />

              {menu && (
                <div className="absolute right-0 mt-0 w-40 bg-white rounded shadow-lg text-black z-50">
                  <Link to="/user/profile" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex justify-around md:justify-center md:space-x-12 text-gray-700 text-md font-medium px-4 pb-2">
          {tabs.map((tab) => {
            const isActive = location.pathname.startsWith(tab.path);
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`flex flex-col items-center border-b-2 ${isActive
                  ? "text-blue-600 border-blue-600"
                  : "border-transparent hover:text-blue-500"
                  }`}
              >
                {tab.icon}
                <span className="hidden md:inline">{tab.name}</span>
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Page Content */}
      <div className="pt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default ViewLayout;
