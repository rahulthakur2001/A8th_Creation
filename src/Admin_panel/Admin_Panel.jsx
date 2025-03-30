import React, { useState } from "react";
import { FaCog, FaFolderOpen, FaFont, FaHome, FaInfo, FaLaptop, FaList, FaMap, FaMapMarker, FaPowerOff, FaTable, FaUser } from "react-icons/fa";

export const Admin_Panel = () => {
    const [show, setShow] = useState(false);

  return (
    <div className="flex h-screen relative">
      <nav
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="flex flex-col h-full justify-between space-y-4 px-3 py-6 bg-gray-800 text-gray-100 lg:absolute text-sm"
      >
        <div className={`flex justify-center items-center font-bold space-x-2 ${show ? 'bg-blue-100 text-blue-500 px-1 py-0.5 rounded' : ''}`}>
          <i className="fa fa-bullseye text-blue-500"></i>
          {show && <span>BRAND</span>}
        </div>

        <div className={`flex flex-1 flex-col space-y-2 ${!show ? 'items-center' : ''}`}>
          {[
            { icon: <FaHome size={18}/>, label: 'Dashboard' },
            { icon: <FaLaptop size={18}/>, label: 'Components' },
            { icon: <FaList size={18}/>, label: 'Forms' },
            { icon: <FaFolderOpen size={18}/>, label: 'Files' },
            { icon: <FaFont size={18}/>, label: 'Quotes' },
            { icon: <FaTable size={18}/>, label: 'Tables' },
            { icon: <FaMap size={18}/>, label: 'Maps' },
            { icon: <FaMapMarker size={18}/>, label: 'Locations' },
            { icon: <FaInfo size={18}/>, label: 'Documentations' },
          ].map((item, index) => (
            <span
              key={index}
              className="space-x-2 flex items-center px-2 py-1 rounded hover:bg-blue-500 hover:text-blue-100 cursor-pointer"
            >
              <i>{item.icon}</i>
              {show && <span>{item.label}</span>}
            </span>
          ))}
        </div>

        <div className={`flex flex-col space-y-2 ${!show ? 'items-center' : ''}`}>
          {[
            { icon: <FaUser size={18}/>, label: 'Profile' },
            { icon: <FaCog size={18}/>, label: 'Settings' },
            { icon: <FaPowerOff size={18} color="red"/>, label: 'Logout' },
          ].map((item, index) => (
            <span
              key={index}
              className="space-x-2 flex items-center px-2 py-1 rounded hover:bg-blue-500 hover:text-blue-100 cursor-pointer"
            >
              <i>{item.icon}</i>
              {show && <span>{item.label}</span>}
            </span>
          ))}
        </div>
      </nav>

      <main className="flex flex-1 flex-shrink-0 px-2 justify-center items-center text-gray-500 bg-gray-50 space-y-2">
        <pre className="p-4 bg-black text-gray-100 rounded">
          &gt; Non-responsive interactive sidebar
          &gt; Hover to toggle sidebar
        </pre>
      </main>
    </div>
  );
};
