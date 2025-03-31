import React, { useState } from "react";
import {
  FaCog,
  FaFolderOpen,
  FaFont,
  FaHome,
  FaInfo,
  FaLaptop,
  FaList,
  FaMap,
  FaMapMarker,
  FaPowerOff,
  FaTable,
  FaUser,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Admin_Panel = () => {
  const [activeForm, setActiveForm] = useState("Dashboard");

  const handleContentChange = (label) => {
    setActiveForm(label);
  };

  const navItems = [
    { icon: <FaHome size={19} />, label: "Dashboard" },
    { icon: <FaLaptop size={19} />, label: "Components" },
    { icon: <FaList size={19} />, label: "Forms" },
    { icon: <FaFolderOpen size={19} />, label: "Files" },
    { icon: <FaFont size={19} />, label: "Quotes" },
    { icon: <FaTable size={19} />, label: "Tables" },
    { icon: <FaMap size={19} />, label: "Maps" },
  ];

  return (
    <div className="flex h-screen relative">
      <nav className="flex flex-col h-full justify-between space-y-4 px-4 py-6 bg-gray-800 text-gray-100 lg:absolute text-sm">
        <Link to="/admin">
          <div className="flex justify-center items-center font-bold space-x-2">
            <i className="w-20">
              <img src={logo} alt="" className="object-cover w-full h-10" />
            </i>
          </div>
        </Link>

        <div className="flex flex-1 flex-col space-y-1">
          {navItems.map((item, index) => (
            <span
              key={index}
              onClick={() => handleContentChange(item.label)}
              className={`space-x-3 flex items-center px-4 py-2 rounded cursor-pointer font-semibold
                ${activeForm === item.label ? 'text-blue-500 bg-white' : 'hover:bg-white hover:text-blue-500'}`}
            >
              <i>{item.icon}</i>
              <span className="text-[16px]">{item.label}</span>
            </span>
          ))}
        </div>

        <div className="flex flex-col space-y-1">
          {[
            { icon: <FaUser size={19} />, label: "Profile" },
            { icon: <FaCog size={19} />, label: "Settings" },
            { icon: <FaPowerOff size={19} color="red" />, label: "Logout" },
          ].map((item, index) => (
            <span
              key={index}
              onClick={() => handleContentChange(item.label)}
              className={`space-x-3 flex items-center px-4 py-2 rounded cursor-pointer font-semibold
                ${activeForm === item.label ? 'text-blue-500 bg-white' : 'hover:bg-white hover:text-blue-500'}`}
            >
              <i>{item.icon}</i>
              <span className="text-[16px]">{item.label}</span>
            </span>
          ))}
        </div>
      </nav>

      <main className="flex pl-24 py-3 space-y-2">
        <div className="pl-26 rounded w-full max-w-md">
          {activeForm === "Dashboard" && (
            <form>
              <label>
                Dashboard Search: <input type="text" />
              </label>
            </form>
          )}
          {activeForm === "Components" && (
            <form>
              <label>
                Component Name: <input type="text" />
              </label>
            </form>
          )}
          {activeForm === "Forms" && (
            <form>
              <label>
                Form Title: <input type="text" />
              </label>
            </form>
          )}
          {activeForm === "Files" && (
            <form>
              <label>
                Upload File: <input type="file" />
              </label>
            </form>
          )}
          {activeForm === "Quotes" && (
            <form>
              <label>
                Quote: <input type="text" />
              </label>
            </form>
          )}
          {activeForm === "Tables" && (
            <form>
              <label>
                Table Name: <input type="text" />
              </label>
            </form>
          )}
          {activeForm === "Maps" && (
            <form>
              <label>
                Location: <input type="text" />
              </label>
            </form>
          )}
          {activeForm === "Locations" && (
            <form>
              <label>
                City Name: <input type="text" />
              </label>
            </form>
          )}
          {activeForm === "Documentations" && (
            <form>
              <label>
                Search Docs: <input type="text" />
              </label>
            </form>
          )}
          {activeForm === "Profile" && (
            <div>
              <h1 className="text-4xl">Profile</h1>
            <form>
              <label>
                Username: <input type="text" />
              </label>
            </form>
            </div>
          )}
          {activeForm === "Settings" && (
            <form>
              <label>
                Theme: <input type="text" />
              </label>
            </form>
          )}
          {activeForm === "Logout" && <div>You have been logged out.</div>}
        </div>
      </main>
    </div>
  );
};
