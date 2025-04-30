import React from "react";
import { Link } from "react-router-dom";

export const PageNotfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-center">
      <h1 className="text-7xl font-bold text-teal-800">404</h1>
      <p className="text-2xl mt-4 text-gray-700">Page Not Found</p>
      <p className="text-md mt-2 text-gray-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-md transition"
      >
        Go to Home
      </Link>
    </div>
  );
};
