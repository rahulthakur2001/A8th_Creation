import React, { useState } from "react";
import {
  BiHome,
  BiImageAdd,
} from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import logo from "../assets/logo.png";
import { IoMdImages, IoMdNotifications } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { Admin_setting } from "./Admin_setting";
import { DashboardContent } from "./DashboardContent";
import { ImageStatusContent } from "./ImageStatusContent";
import UsersContent  from "./UsersContent";
import { AllImagesContent } from "./AllImagesContent";
import { ManageContent } from "./ManageContent";
import { NotificationContent } from "./NotificationContent";
import Admin_Upload from "./Admin_Upload";
import { InqueryDetails } from "./InqueryDetails";

const Admin_Panel = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  // Define content based on the selected menu item
  const renderContent = () => {
    switch (selectedMenu) {
      case "Dashboard":
        return <DashboardContent />;
      case "ImageStatus":
        return <ImageStatusContent />;
      case "Users":
        return <UsersContent />;
      case "AllImages":
        return <AllImagesContent />;
      case "InqueryDetails":
        return <InqueryDetails />;
      case "UploadImages":
        return <Admin_Upload />;
      case "Manage":
        return <ManageContent />;
      case "Settings":
        return <SettingsContent />;
      case "Notification":
        return <NotificationContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-[#081028] text-white">
      {/* Sidebar */}
      <div
        id="scrollbar-width"
        className="w-70 p-5 border-r border-gray-800 h-screen overflow-y-scroll"
      >
        {/* Logo */}
        <div className="flex items-center mb-8 bg-[#132860] p-2 rounded-2xl gap-2">
          <div className="w-10 h-10 mr-2 bg-cyan-900 rounded-2xl p-1 flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
          <span className="text-xl font-bold">A8th creation</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {[
            { name: "Dashboard", icon: <BiHome size={18} />, tab: "Dashboard" },
            {
              name: "Image Status",
              icon: <BiImageAdd size={18} />,
              tab: "ImageStatus",
            },
            { name: "Users", icon: <FaUsers size={18} />, tab: "Users" },
            {
              name: "All Images",
              icon: <IoMdImages size={18} />,
              tab: "AllImages",
            },
            {
              name: "Upload Images",
              icon: <IoMdImages size={18} />,
              tab: "UploadImages",
            },
            {
              name: "Inquery Details",
              icon: <IoMdImages size={18} />,
              tab: "InqueryDetails",
            },
            {
              name: "Updates & Manage",
              icon: <MdManageHistory size={18} />,
              tab: "Manage",
            },
          ].map(({ name, icon, tab }) => (
            <div
              key={name}
              className={`flex items-center p-3 rounded-md cursor-pointer ${
                selectedMenu === tab
                  ? "text-purple-500 bg-gray-700"
                  : "text-gray-400 hover:bg-gray-800"
              }`}
              onClick={() => setSelectedMenu(tab)}
            >
              <span className="mr-3">{icon}</span>
              <span>{name}</span>
            </div>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-800 space-y-1">
          {[
            {
              name: "Settings",
              icon: <CiSettings size={20} />,
              tab: "Settings",
            },
            {
              name: "Notification",
              icon: <IoMdNotifications size={20} />,
              tab: "Notification",
            },
          ].map(({ name, icon, tab }) => (
            <div
              key={name}
              className={`flex items-center p-3 rounded-md cursor-pointer ${
                selectedMenu === tab
                  ? "text-purple-500 bg-gray-700"
                  : "text-gray-400 hover:bg-gray-800"
              }`}
              onClick={() => setSelectedMenu(tab)}
            >
              <span className="mr-3">{icon}</span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-scroll h-screen">
        {renderContent()}
      </div>
    </div>
  );
};

const SettingsContent = () => {
  return (
    <div>
      <div className="text-3xl font-bold mb-5">Settings</div>
      <Admin_setting />
    </div>
  );
};



export default Admin_Panel;
