import React, { useEffect, useRef, useState } from "react";
import { BiBell } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Getapi from "../APIs/Getapi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../Slices/authSlice";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart, LineChart } from "@mui/x-charts";

export const DashboardContent = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [dashboardStats, setDashboardStats] = useState({
    totalUsers: 0,
    totalImages: 0,
    imageStatusCounts: [],
  });
  const [loading, setLoading] = useState(true);
  const profileRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  console.log("Dashboard Content Rendered", user);
  
  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        setLoading(true);
        const response = await Getapi("image/dashboard/stats")
        const {data} = response;
        if (data) {
          setDashboardStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
        toast.error("Failed to load dashboard statistics");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

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

  const imageStatusData = ["accepted", "pending", "rejected"].map((status, index) => {
    const found = dashboardStats.imageStatusCounts.find((s) => s._id === status);
    return {
      id: index,
      value: found ? found.count : 0,
      label: status.charAt(0).toUpperCase() + status.slice(1),
    };
  });

  const metrics = [
    {
      id: 1,
      name: "Total Users",
      value: dashboardStats?.totalUsers?.toString() || "0",
      icon: "👥",
    },
    {
      id: 2,
      name: "Total Images",
      value: dashboardStats?.totalImages?.toString() || "0",
      icon: "🖼️",
    },
    {
      id: 3,
      name: "Accepted Images",
      value: dashboardStats?.imageStatusCounts?.find((s) => s._id === "accepted")?.count?.toString() || "0",
      icon: "✅",
    },
    {
      id: 4,
      name: "Pending/Rejected",
      value: (
        (dashboardStats?.imageStatusCounts?.find((s) => s._id === "pending")?.count || 0) +
        (dashboardStats?.imageStatusCounts?.find((s) => s._id === "rejected")?.count || 0)
      ).toString(),
      icon: "⏳",
    },
  ];

  const handleLogout = async () => {
    try {
      await Getapi("auth/logout");
      toast.success("Logged out successfully!");
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed!");
      console.error(error);
    }
  };

  const countFormatter = (value) => `${value}`;

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <BiBell className="w-6 h-6 text-gray-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full" />
          </div>
          <div
            className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <span className="text-xs font-medium">{user.name.substring(0, 2).toUpperCase()}</span>
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
                  <span className="text-white">{user.name.substring(0, 2).toUpperCase()}</span>
                </div>
                <div className="ml-3">
                  <div className="text-white">{user.name}</div>
                  <div className="text-gray-400 text-sm">{user.email}</div>
                </div>
              </div>
            </div>
            <div className="py-1">
              {["View Profile", "Account Settings", "Notifications"].map((item, index) => (
                <div key={index} className="px-4 py-2 text-white hover:bg-gray-800 cursor-pointer flex items-center">
                  <span className="mr-2">{item === "View Profile" ? "👤" : item === "Account Settings" ? "⚙️" : "🔔"}</span>
                  {item}
                </div>
              ))}
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

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {metrics.map((metric) => (
          <div key={metric.id} className="bg-[#0b1739] rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                  <div className="text-white">{metric.icon}</div>
                </div>
                <span className="text-gray-300">{metric.name}</span>
              </div>
              <FiMoreHorizontal className="text-gray-500 cursor-pointer active:bg-gray-800 rounded-full" />
            </div>
            <div className="flex items-end">
              <span className="text-4xl font-bold">{metric.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pie Chart */}
      <div className="bg-[#0b1739] rounded-xl p-6 mb-5">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Image Status Distribution</h2>
          {loading ? (
            <div className="flex justify-center items-center p-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" />
            </div>
          ) : (
            <div className="flex justify-center">
              <PieChart
                series={[
                  {
                    data: imageStatusData,
                    highlightScope: { fade: "global", highlight: "item" },
                    faded: { innerRadius: 30, additionalRadius: -30, color: "white" },
                    valueFormatter: countFormatter,
                  },
                ]}
                colors={["#22c55e", "#facc15", "#ef4444"]}
                width={400}
                height={200}
                sx={{
                  "& .MuiChartsLegend-root": { color: "white" },
                  "& .MuiChartsPieArcLabel-root": { fill: "white" },
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Visitors Line Chart */}
      <div className="bg-[#0b1739] rounded-xl p-6 mb-5">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Website Visitors</h2>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10], tickLabelStyle: { fill: "white" } }]}
            yAxis={[{ tickLabelStyle: { fill: "white" } }]}
            series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5] }]}
            height={300}
            sx={{
              "& .MuiChartsAxis-tickLabel": { fill: "white" },
              "& .MuiChartsAxis-line": { stroke: "white" },
            }}
          />
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-[#0b1739] rounded-xl p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Website Visitors</h2>
        </div>
        <BarChart
          series={[
            { data: [4, 2, 5, 4, 1], stack: "A", label: "Series A1" },
            { data: [2, 8, 1, 3, 1], stack: "A", label: "Series A2" },
            { data: [14, 6, 5, 8, 9], label: "Series B1" },
          ]}
          barLabel={(item, context) =>
            item.value > 10 ? "High" : context.bar.height < 60 ? null : item.value.toString()
          }
          height={350}
          sx={{
            "& .MuiChartsAxis-tickLabel": { fill: "white" },
            "& .MuiChartsAxis-line": { stroke: "white" },
            "& .MuiChartsGrid-line": { stroke: "rgba(255,255,255,0.2)" },
            "& .MuiChartsBar-label": { fill: "white" },
            "& .MuiChartsLegend-root": { color: "white" },
          }}
        />
      </div>
    </div>
  );
};
