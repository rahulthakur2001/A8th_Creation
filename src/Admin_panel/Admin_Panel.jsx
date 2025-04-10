import React, { useEffect, useRef, useState } from "react";
import {
  BiBell,
  BiChevronLeft,
  BiChevronRight,
  BiDownload,
  BiEdit,
  BiHome,
  BiImageAdd,
  BiSearch,
  BiTrash,
} from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FaSearch, FaTrashAlt, FaUsers } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import logo from "../assets/logo.png";
import { IoMdImages, IoMdNotifications } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { Admin_setting } from "./Admin_setting";
import { CgClose } from "react-icons/cg";

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

// Dummy Content Components
const DashboardContent = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const metrics = [
    {
      id: 1,
      name: "Saved Products",
      value: "50.8K",
      icon: "❤️",
    },
    {
      id: 2,
      name: "Stock Products",
      value: "23.6K",
      icon: "🛍️",
    },
    {
      id: 3,
      name: "Sale Products",
      value: "756",
      icon: "🛒",
    },
    {
      id: 4,
      name: "Average Revenue",
      value: "2.3K",
      icon: "💰",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <BiBell className="w-6 h-6 text-gray-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
          <div
            className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <span className="text-xs font-medium">MJ</span>
          </div>
        </div>
        {showProfileMenu && (
          <div
            ref={profileRef}
            className="absolute right-9 top-18 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-10"
          >
            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white">JC</span>
                </div>
                <div className="ml-3">
                  <div className="text-white">John Carter</div>
                  <div className="text-gray-400 text-sm">john@example.com</div>
                </div>
              </div>
            </div>
            <div className="py-1">
              {["View Profile", "Account Settings", "Notifications"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 text-white hover:bg-gray-800 cursor-pointer flex items-center"
                  >
                    {item === "View Profile" && (
                      <span className="mr-2">👤</span>
                    )}
                    {item === "Account Settings" && (
                      <span className="mr-2">⚙️</span>
                    )}
                    {item === "Notifications" && (
                      <span className="mr-2">🔔</span>
                    )}
                    {item}
                  </div>
                )
              )}
            </div>
            <div className="border-t border-gray-800 py-1">
              <div className="px-4 py-2 text-white hover:bg-gray-800 cursor-pointer flex items-center">
                <span className="mr-2">🚪</span>
                Logout
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {metrics.map((metric) => (
          <div key={metric.id} className="bg-[#0b1739] rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3`}
                >
                  <div className="text-white">{metric.icon}</div>
                </div>
                <span className="text-gray-300">{metric.name}</span>
              </div>
              <FiMoreHorizontal
                size={20}
                className="text-gray-500 cursor-pointer active:bg-gray-800 rounded-full"
              />
            </div>
            <div className="flex items-end">
              <span className="text-4xl font-bold">{metric.value}</span>
            </div>
          </div>
        ))}
        
      </div>

      {/* Visitors Section */}
      <div className="bg-[#0b1739] rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Website Visitors</h2>
          <button className="flex items-center px-3 py-1 bg-gray-800 rounded-md text-sm">
            Export
            <BiDownload className="w-4 h-4 ml-2" />
          </button>
        </div>

        <div className="flex justify-center items-center h-48">
          {/* Placeholder for visitors chart */}
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 border-8 border-purple-500 rounded-full opacity-60"></div>
            <div className="absolute inset-4 border-8 border-blue-400 rounded-full opacity-80"></div>
            <div className="absolute inset-8 border-8 border-cyan-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageStatusContent = () => {
  const orders = [
    {
      id: 1,
      img: logo,
      imgtitle: "inst logo power",
      client: "John Carter",
      email: "hello@johncarter.com",
      date: "Jan 30, 2024",
    },
    {
      id: 2,
      img: logo,
      imgtitle: "inst logo",
      client: "Sophie Moore",
      email: "contact@sophiemoore.com",
      date: "Jan 27, 2024",
    },
    {
      id: 3,
      img: logo,
      imgtitle: "inst logo",
      client: "Matt Cannon",
      email: "info@mattcannon.com",
      date: "Jan 24, 2024",
    },
    {
      id: 4,
      img: logo,
      imgtitle: "inst logo",
      client: "Graham Hills",
      email: "hi@grahamhills.com",
      date: "Jan 21, 2024",
    },
    {
      id: 5,
      img: logo,
      imgtitle: "inst logo",
      client: "Sandy Houston",
      email: "contact@sandyhouston.com",
      date: "Jan 18, 2024",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="text-3xl font-bold mb-5">Image Status</div>
      <div className="bg-[#0b1739] p-6 rounded-xl text-white w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">All Image Status</h2>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for..."
                className="bg-gray-800 px-3 py-2 pl-8 rounded-md text-white outline-none"
              />
              <BiSearch className="absolute left-2 top-2.5 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 text-center">
                <th className="p-3">S.No</th>
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">User detail</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {currentOrders.map((order) => (
                <tr key={order.id} className="border-t border-gray-700">
                  <td className="p-3">#{order.id}</td>
                  <td className="p-3">
                    <img
                      src={order.img}
                      alt={order.imgtitle}
                      className="w-15 h-10 object-contain border-1 rounded cursor-pointer"
                      onClick={handleImageClick}
                    />
                  </td>
                  {/* Popup modal */}
                  {showPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                      <div className="relative bg-white p-4 rounded shadow-lg max-w-[90%] max-h-[90%]">
                        {/* Close Button */}
                        <button
                          onClick={handleClose}
                          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          <CgClose className="cursor-pointer"/>
                        </button>

                        {/* Full Image */}
                        <img
                          src={order.img}
                          alt={order.imgtitle}
                          className="max-w-full max-h-[80vh] object-contain rounded"
                        />
                      </div>
                    </div>
                  )}
                  <td className="p-3">{order.imgtitle}</td>
                  <td className="p-3">
                    {order.client} <br />
                    <span className="text-gray-400 text-sm">{order.email}</span>
                  </td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">
                    <span className="flex gap-2 items-center justify-center text-xs p-3">
                      <button className="bg-green-600 py-1 px-3 rounded-lg cursor-pointer">
                        Accept
                      </button>
                      <button className="bg-red-600 py-1 px-3 rounded-lg cursor-pointer">
                        Decline
                      </button>
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button className="text-gray-400 hover:text-white">
                      <BiTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="px-3 py-1 bg-gray-700 rounded-md"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <BiChevronLeft />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1 ? "bg-blue-600" : "bg-gray-700"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 bg-gray-700 rounded-md"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <BiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const UsersContent = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro Max",
      stock: 524,
      price: "$1,099.00",
      image: "📱",
    },
    {
      id: 2,
      name: "Apple Watch S8",
      stock: 320,
      price: "$799.00",
      image: "⌚",
    },
  ];

  return (
    <div>
      <div className="text-3xl font-bold mb-5">Users Management</div>
      <div className="bg-[#0b1739] p-6 rounded-xl w-full max-w-4xl mx-auto">
        <h2 className="text-white text-xl font-bold mb-4">Products</h2>
        <div className="w-full">
          <div className="flex justify-between text-gray-400 mb-2 px-4">
            <span>Products</span>
            <span>Price</span>
          </div>
          <div className="divide-y divide-gray-700">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center p-4 hover:bg-gray-800 rounded-lg transition"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-2xl rounded-lg">
                    {product.image}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{product.name}</p>
                    <p className="text-gray-400 text-sm">
                      {product.stock} in stock
                    </p>
                  </div>
                </div>
                <span className="text-white font-semibold">
                  {product.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AllImagesContent = () => {
  const orders = [
    {
      id: 1532,
      client: "John Carter",
      email: "hello@johncarter.com",
      date: "Jan 30, 2024",
      status: "Delivered",
      country: "United States",
      total: "$1,099.24",
      statusColor: "bg-green-600",
    },
    {
      id: 1531,
      client: "Sophie Moore",
      email: "contact@sophiemoore.com",
      date: "Jan 27, 2024",
      status: "Canceled",
      country: "United Kingdom",
      total: "$5,870.32",
      statusColor: "bg-red-600",
    },
    {
      id: 1530,
      client: "Matt Cannon",
      email: "info@mattcannon.com",
      date: "Jan 24, 2024",
      status: "Delivered",
      country: "Australia",
      total: "$13,899.48",
      statusColor: "bg-green-600",
    },
    {
      id: 1529,
      client: "Graham Hills",
      email: "hi@grahamhills.com",
      date: "Jan 21, 2024",
      status: "Pending",
      country: "India",
      total: "$1,569.12",
      statusColor: "bg-yellow-600",
    },
    {
      id: 1528,
      client: "Sandy Houston",
      email: "contact@sandyhouston.com",
      date: "Jan 18, 2024",
      status: "Delivered",
      country: "Canada",
      total: "$899.16",
      statusColor: "bg-green-600",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 3;
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <div>
      <div className="text-3xl font-bold mb-5">Features Section</div>
      <div className="bg-[#0b1739] p-6 rounded-xl text-white w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Orders Status</h2>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for..."
                className="bg-gray-800 px-3 py-2 pl-8 rounded-md text-white outline-none"
              />
              <BiSearch className="absolute left-2 top-2.5 text-gray-500" />
            </div>
            <button className="bg-purple-600 px-4 py-2 rounded-md">
              Create Order
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400">
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th className="p-3">Order</th>
                <th className="p-3">Client</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Country</th>
                <th className="p-3">Total</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr key={order.id} className="border-t border-gray-700">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">#{order.id}</td>
                  <td className="p-3">
                    {order.client} <br />
                    <span className="text-gray-400 text-sm">{order.email}</span>
                  </td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs ${order.statusColor}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3">{order.country}</td>
                  <td className="p-3">{order.total}</td>
                  <td className="p-3 flex space-x-2">
                    <button className="text-gray-400 hover:text-white">
                      <BiEdit />
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <BiTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="px-3 py-1 bg-gray-700 rounded-md"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <BiChevronLeft />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1 ? "bg-blue-600" : "bg-gray-700"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 bg-gray-700 rounded-md"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <BiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const ManageContent = () => {
  return (
    <div>
      <div className="text-3xl font-bold">Update & Manage</div>
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
const NotificationContent = () => {
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

export default Admin_Panel;
