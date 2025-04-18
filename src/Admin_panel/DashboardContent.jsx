import React, { useEffect, useRef, useState } from "react";
import { BiBell, BiDownload } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Getapi from "../APIs/Getapi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../Slices/authSlice";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart, LineChart } from "@mui/x-charts";

export const DashboardContent = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const desktopOS = [
    { id: 0, value: 60, label: "Windows" },
    { id: 1, value: 20, label: "MacOS" },
    { id: 2, value: 10, label: "Linux" },
    { id: 3, value: 10, label: "Other" },
  ];

  const valueFormatter = (value) => `${value}%`;

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
              <div
                className="px-4 py-2 text-white hover:bg-gray-800 cursor-pointer flex items-center"
                onClick={handleLogout}
              >
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
      <div className="bg-[#0b1739] rounded-xl p-6 mb-5">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Website Visitors</h2>

          <PieChart
            series={[
              {
                data: desktopOS,
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "white",
                },
                valueFormatter,
              },
            ]}
            width={200}
            height={200}
            sx={{
              "& .MuiChartsLegend-root": {
                color: "white", // legend label color
              },
            }}
          />
        </div>
      </div>
      <div className="bg-[#0b1739] rounded-xl p-6 mb-5">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Website Visitors</h2>

          <LineChart
            xAxis={[
              {
                data: [1, 2, 3, 5, 8, 10],
                tickLabelStyle: { fill: "white" },
              },
            ]}
            yAxis={[
              {
                tickLabelStyle: { fill: "white" },
              },
            ]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            height={300}
            sx={{
              "& .MuiChartsAxis-tickLabel": {
                fill: "white",
              },
              "& .MuiChartsAxis-line": {
                stroke: "white",
              },
            }}
          />
        </div>
      </div>
      <div className="bg-[#0b1739] rounded-xl p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Website Visitors</h2>
        </div>
        <BarChart
      series={[
        { data: [4, 2, 5, 4, 1], stack: 'A', label: 'Series A1' },
        { data: [2, 8, 1, 3, 1], stack: 'A', label: 'Series A2' },
        { data: [14, 6, 5, 8, 9], label: 'Series B1' },
      ]}
      barLabel={(item, context) => {
        if ((item.value ?? 0) > 10) {
          return 'High';
        }
        return context.bar.height < 60 ? null : item.value?.toString();
      }}
      height={350}
      sx={{
        // Axis tick labels
        '& .MuiChartsAxis-tickLabel': {
          fill: 'white',
        },
        // Axis lines
        '& .MuiChartsAxis-line': {
          stroke: 'white',
        },
        // Grid lines
        '& .MuiChartsGrid-line': {
          stroke: 'rgba(255,255,255,0.2)',
        },
        // Bar labels
        '& .MuiChartsBar-label': {
          fill: 'white',
        },
        // Legend labels
        '& .MuiChartsLegend-root': {
          color: 'white',
        },
      }}
    />
      </div>
    </div>
  );
};
