import React, { useState } from 'react'
import { BiChevronLeft, BiChevronRight, BiEdit, BiSearch, BiTrash } from 'react-icons/bi';

export const AllImagesContent = () => {
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
