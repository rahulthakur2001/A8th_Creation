import React, { useEffect, useState } from "react";
import Getapi from "../APIs/Getapi";
import Putapi from "../APIs/Putapi";
import { toast } from "react-toastify";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const UsersContent = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const usersPerPage = 5;

  const fetchUsers = async () => {
    try {
      const res = await Getapi("user/all");
      setUsers(res?.data || []);
    } catch (err) {
      toast.error("Failed to fetch users");
    }
  };

  const handleUserAction = async (userId, status) => {
    try {
      const res = await Putapi(`user/update-status/${userId}`, { status });
      toast.success(res?.message || "User status updated!");
      fetchUsers();
    } catch (err) {
      toast.error("Failed to update user status");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastOrder = currentPage * usersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - usersPerPage;
  const totalUserPages = Math.ceil(filteredUsers.length / usersPerPage);
  const currentUsers = filteredUsers.slice(indexOfFirstOrder, indexOfLastOrder);

  const renderPagination = () => {
    if (totalUserPages <= 1) return null;

    const renderPageButton = (pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => setCurrentPage(pageNumber)}
        className={`relative ${currentPage === pageNumber
          ? "z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
          : "inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-300 ring-1 ring-gray-700 hover:bg-gray-700"
          } focus:z-20`}
      >
        {pageNumber}
      </button>
    );

    const renderEllipsis = (key) => (
      <span
        key={key}
        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-gray-700"
      >
        ...
      </span>
    );

    const buttons = [];

    buttons.push(renderPageButton(1));

    if (currentPage > 3) {
      buttons.push(renderEllipsis("start-ellipsis"));
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalUserPages - 1, currentPage + 1); i++) {
      buttons.push(renderPageButton(i));
    }

    if (currentPage < totalUserPages - 2) {
      buttons.push(renderEllipsis("end-ellipsis"));
    }

    if (totalUserPages > 1) {
      buttons.push(renderPageButton(totalUserPages));
    }

    return (
      <div className="flex justify-between items-center mt-6 text-white">
        <div className="text-sm">
          Showing <span className="font-medium">{indexOfFirstOrder + 1}</span> to{" "}
          <span className="font-medium">
            {Math.min(indexOfLastOrder, filteredUsers.length)}
          </span>{" "}
          of <span className="font-medium">{filteredUsers.length}</span> results
        </div>

        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 ${currentPage === 1
                ? "text-gray-600 cursor-not-allowed"
                : "text-gray-400 hover:bg-gray-700"
                } ring-1 ring-gray-700 focus:z-20`}
            >
              <span className="sr-only">Previous</span>
              <BiChevronLeft className="h-5 w-5" />
            </button>

            {buttons}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalUserPages))}
              disabled={currentPage === totalUserPages}
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 ${currentPage === totalUserPages
                ? "text-gray-600 cursor-not-allowed"
                : "text-gray-400 hover:bg-gray-700"
                } ring-1 ring-gray-700 focus:z-20`}
            >
              <span className="sr-only">Next</span>
              <BiChevronRight className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#0b1739] text-white p-6 rounded-xl w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">User Management</h2>
        <input
          type="text"
          placeholder="Search by name or email..."
          className="bg-gray-800 px-3 py-2 rounded-md text-white outline-none w-72"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {filteredUsers.length === 0 ? (
        <p className="text-center text-gray-400">No users found.</p>
      ) : (
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
              {currentUsers.map((user, idx) => (
                <tr key={user._id} className="border-t border-gray-700 hover:bg-gray-800 transition-colors">
                  <td className="p-3">#{indexOfFirstOrder + idx + 1}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="p-3">
                    <button
                      className="bg-red-600 hover:bg-red-700 py-1 px-3 rounded-lg text-xs"
                      onClick={() => handleUserAction(user._id, "deactivate")}
                    >
                      Deactivate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredUsers.length > 0 && (
            <div className="mt-6">{renderPagination()}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default UsersContent;
