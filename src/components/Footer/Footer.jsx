import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div>
      <footer className="py-20" style={{background: "linear-gradient(to top, #10241e, #153027, #1b3c2f, #224838, #295540)"}}>
        <div className="container mx-auto px-3">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-white">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <a href="https://www.facebook.com/profile.php?id=61576366090188">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 cursor-pointer"
                  type="button"
                >
                  <FaFacebook size={25} color="blue" className="hover:scale-150"/>
                </button>
                </a>
                <a href="https://www.instagram.com/a8thcreation/">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 cursor-pointer"
                  type="button"
                >
                  <FaInstagram size={25} color="purple" className="hover:scale-140"/>
                </button>
                </a>
                <a href="https://x.com/A8thCreation">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 cursor-pointer"
                  type="button"
                >
                  <FaXTwitter size={25} color="black" className="hover:scale-130"/>
                </button>
                </a>
                <a href="https://www.youtube.com/@A8thCreation">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 cursor-pointer"
                  type="button"
                >
                  <FaYoutube size={25} color="red" className="hover:scale-130"/>
                </button>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-l font-bold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                  <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="exploreAll"
                      >
                        Explore content
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/contact"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5 w-[90%] border-white" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-3 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © <span id="get-current-year">2025 </span>
                A8th creation. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
