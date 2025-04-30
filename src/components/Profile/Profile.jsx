import React from "react";

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <main className=" p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Profile details
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-28 h-28 rounded-full border object-cover"
          />
          <div className="flex gap-4">
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
              Change photo
            </button>
            <button className="text-red-500 hover:underline">Remove</button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Name */}
          <div className="md:flex items-center gap-4">
            <label className="w-32 text-gray-600">Name</label>
            <input
              type="text"
              value=""
              placeholder="Enter your name"
              disabled
              className="flex-1 border border-gray-300 p-2 rounded-md bg-gray-100 cursor-not-allowed"
            />
            <button className="mt-2 md:mt-0 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
              Edit
            </button>
          </div>

          {/* Username */}
          <div className="md:flex items-center gap-4">
            <label className="w-32 text-gray-600">Username</label>
            <input
              type="text"
              value="user97498626"
              disabled
              className="flex-1 border border-gray-300 p-2 rounded-md bg-gray-100 cursor-not-allowed"
            />
            <button className="mt-2 md:mt-0 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
              Edit
            </button>
          </div>

          {/* Email */}
          <div className="md:flex items-center gap-4">
            <label className="w-32 text-gray-600">Email</label>
            <p className="flex-1 text-gray-800">
              rahulthakurking2017@gmail.com
            </p>
          </div>
        </div>
      </main>{" "}
    </div>
  );
};

export default Profile;
