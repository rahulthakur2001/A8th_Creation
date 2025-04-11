import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FaSearch, FaTrashAlt } from "react-icons/fa";
import { IoStar, IoStarOutline } from "react-icons/io5";

export const NotificationContent = () => {
  //notification
  const notifications = [
    {
      id: 1,
      text: "We're pleased to inform you that a new customer has registered!",
      time: "Just Now",
      favorite: false,
    },
    {
      id: 2,
      text: "Hello Sales Marketing Team, We have a special offer for our customers!",
      time: "30 min ago",
      favorite: false,
    },
    {
      id: 3,
      text: "This is a reminder to achieve this month's sales target.",
      time: "2 days ago",
      favorite: true,
    },
    {
      id: 4,
      text: "We've received a product information request from a potential customer.",
      time: "5 days ago",
      favorite: false,
    },
    {
      id: 5,
      text: "A meeting or presentation has been scheduled with a customer/prospect.",
      time: "01 Feb, 2024",
      favorite: true,
    },
  ];
  const [notifs, setNotifs] = useState(notifications);
  const [activeTab, setActiveTab] = useState("all");

  const toggleFavorite = (id) => {
    setNotifs(
      notifs.map((n) => (n.id === id ? { ...n, favorite: !n.favorite } : n))
    );
  };

  const deleteNotif = (id) => {
    setNotifs(notifs.filter((n) => n.id !== id));
  };

  return (
    <div>
      <div className="text-3xl font-bold">Notification</div>
      <div className="rounded-lg shadow-lg pt-5 w-full max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4 bg-cyan-950 px-4 py-2 rounded-4xl">
          <h2 className="text-lg font-semibold">List Notification</h2>
          <CiSettings
            size={24}
            className="text-gray-100 hover:text-cyan-500 cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-100">Notifications ({notifs.length})</span>
          <div className="relative">
            <input
              type="text"
              placeholder="Search notifications..."
              className="border px-4 py-2 rounded-lg text-gray-100 focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-100" />
          </div>
        </div>
        <div className="rounded-lg">
          {/* Tab Buttons */}
          <div className="pb-2 mb-4 flex space-x-4 text-gray-600">
            <button
              className={`py-1 px-4 rounded-full ${
                activeTab === "all"
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`py-1 px-4 rounded-full ${
                activeTab === "favorite"
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab("favorite")}
            >
              Favorite
            </button>
          </div>

          {/* Content Display */}
          <div>
            {activeTab === "all" ? (
              <div>
                {notifs.map((notif) => (
                  <div
                    key={notif.id}
                    className="flex justify-between items-center bg-[#0b1739] p-3 rounded-lg mb-2 hover:bg-cyan-900 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <button onClick={() => toggleFavorite(notif.id)}>
                        {notif.favorite ? (
                          <IoStar className="text-yellow-400" />
                        ) : (
                          <IoStarOutline className="text-gray-400" />
                        )}
                      </button>
                      <p className="text-gray-200">{notif.text}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-200">
                        {notif.time}
                      </span>
                      <button
                        onClick={() => deleteNotif(notif.id)}
                        className="text-red-500"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 border rounded-md bg-cyan-800">
                <p>Favorite Notifications are displayed here...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
