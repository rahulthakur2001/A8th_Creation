import React from "react";
import panda from "../../assets/panda.gif";
import { BiHome } from "react-icons/bi";

export const PageNotfound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4 text-center">
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Not Found
        </p>
        <h1 className="text-9xl font-bold">404</h1>
      </div>

      <div className="bg-gray-800 rounded-full p-6 mt-6 flex items-center h-40 justify-center gap-6 max-w-xl w-full">
        <div className="bg-blue-300 p-1 rounded-full w-50 h-50 left-55 absolute">
          <img
            src={panda}
            alt="Red Panda"
            className="w-full h-60 object-contain"
          />
        </div>
        <p className="text-lg w-100">
          Don’t worry, the fearless red panda will guide you back to the start.
        </p>
      </div>

      <button
        onClick={() => (window.location.href = "/")}
        className="flex items-center gap-2 mt-6 cursor-pointer bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-200 transition"
      >
        <BiHome/>Go Back Home
      </button>
    </div>
  );
};
