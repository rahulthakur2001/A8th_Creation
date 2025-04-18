import React, { useState } from "react";
import { BiSearch, BiTrash } from "react-icons/bi";

export const UsersContent = () => {
  const [users, setUsers] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      date: new Date(2025, 3, 1 + i).toISOString(),
    }))
  );

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 15;

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="text-white bg-[#0b1739] p-6 rounded-xl">
      <div className="text-2xl font-bold mb-5">User Data</div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-center">
              <th className="p-3">S.No</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentUsers.map((user, index) => (
              <tr
                key={user.id}
                className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors"
              >
                <td className="p-3">#{indexOfFirstUser + index + 1}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  {new Date(user.date).toLocaleDateString()}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm cursor-pointer"
                  >
                    <BiTrash className="mx-auto"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {currentUsers.length === 0 && (
          <div className="text-center text-gray-400 py-10">No users found.</div>
        )}

        {/* Pagination Button */}
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center items-center gap-2 text-white">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded ${
                currentPage === 1
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-white text-black font-bold"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
