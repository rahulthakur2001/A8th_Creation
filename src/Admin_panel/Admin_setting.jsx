import React, { useState } from "react";

export const Admin_setting = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="rounded-lg">
      {/* Tab Buttons */}
      <div className="pb-2 mb-4 flex space-x-4 text-gray-600">
        <button
          className={`py-1 px-4 rounded-full ${
            activeTab === "General"
              ? "bg-cyan-600 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setActiveTab("General")}
        >
          General Setting
        </button>
        <button
          className={`py-1 px-4 rounded-full ${
            activeTab === "Account"
              ? "bg-cyan-600 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setActiveTab("Account")}
        >
          Account Setting
        </button>
        <button
          className={`py-1 px-4 rounded-full ${
            activeTab === "Notification"
              ? "bg-cyan-600 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setActiveTab("Notification")}
        >
          Noticfication Setting
        </button>
      </div>

      {/* Content Display */}
      <div>
  {activeTab === "General" && (
    <div className="p-4 border rounded-md">
      <p>General Content is displayed here...</p>
    </div>
  )}

  {activeTab === "Account" && (
    <div className="p-4 border rounded-md">
      <p>Account Notifications are displayed here...</p>
    </div>
  )}

  {activeTab === "Notification" && (
    <div className="p-4 border rounded-md">
      <p>Notification Content is displayed here...</p>
    </div>
  )}
</div>

    </div>
  );
};
