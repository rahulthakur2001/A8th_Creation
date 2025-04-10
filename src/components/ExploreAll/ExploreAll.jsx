import React, { useState } from "react";
import pic from "../../assets/trophy.jpg";
import pic1 from "../../assets/logo.png";
import { AiTwotoneHeart } from "react-icons/ai";
import { IoMdImages } from "react-icons/io";
import { FaDownload, FaHeart, FaRegHeart, FaSearch } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";

const ExploreAll = () => {
  const [activetab, setActivetab] = useState("Images");
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [uploader, setUploader] = useState("");

  const handleUpload = () => {
    console.log({
      file,
      category,
      title,
      uploader,
    });
    setIsOpen(false); // Close popup after upload
  };

  const data = {
    title: "Popular",
    categories: ["Filters", "Photos", "PSD", "Vectors", "All Images"],
    images: [
      {
        id: 1,
        src: pic,
        title: "Happy Women's Day",
        postedBy: "A8th Creation",
        date: "27-02-2022",
        premium: false,
      },
      {
        id: 2,
        src: pic,
        title: "Floral Woman Art",
        postedBy: "Graphic Designer",
        date: "27-02-2022",
        premium: true,
      },
      {
        id: 3,
        src: pic1,
        title: "Silhouette Design",
        date: "27-02-2022",
        postedBy: "Creative Hub",
        premium: true,
      },
      {
        id: 4,
        src: pic,
        title: "Silhouette Design",
        date: "27-02-2022",
        postedBy: "Creative Hub",
        premium: true,
      },
      {
        id: 5,
        src: pic1,
        title: "Silhouette Design",
        date: "27-02-2022",
        postedBy: "Creative Hub",
        premium: true,
      },
      {
        id: 6,
        src: pic,
        title: "Silhouette Design",
        date: "27-02-2022",
        postedBy: "Creative Hub",
        premium: true,
      },
    ],
  };

  return (
    <section className="p-6">
      {/* Search Bar */}
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search all assets"
          className="border border-gray-400 bg-gray-200 px-10 py-3 w-full rounded-md relative"
        />
        <FaSearch className="absolute ml-4" />
        <button className="flex items-center gap-2 absolute right-8 bg-teal-700 text-white px-4 py-1 rounded ml-2">
          <FaSearch size={14} />
          Search
        </button>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-4">
          {data.categories.map((category, index) => (
            <button
              key={index}
              className="bg-gray-200 px-4 py-2 rounded text-gray-700 hover:bg-gray-300"
            >
              {category}
            </button>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-cyan-700 px-4 py-2 rounded text-white hover:bg-cyan-900 flex items-center gap-1.5 cursor-pointer"
        >
          <BiSolidImageAdd size={20} />
          Upload
        </button>
      </div>
      {/* Popup for uplaod image */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl h-100 flex flex-col md:flex-row gap-6">
            {/* Left Side - File Upload */}
            <div class="flex flex-col items-center justify-center w-[55%] h-85 my-2 bg-gray-50 sm:rounded-lg sm:shadow">
              <div class="mb-10 text-center">
                <h2 class="text-2xl font-semibold mb-1">Upload your files</h2>
                <p class="text-xs text-gray-500">
                  File should be of format .mp4, .avi, .mov or .mkv
                </p>
              </div>
              <form
                action="#"
                class="relative w-100 h-40 p-10 mb-5 bg-gray-200 rounded-lg shadow-inner"
              >
                <input
                  type="file"
                  id="file-upload"
                  class="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <label
                  for="file-upload"
                  class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                >
                  <p class="z-10 text-xs font-light text-center text-gray-500">
                    Drag & Drop your files here
                  </p>
                  <svg
                    class="z-10 w-8 h-8 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                  </svg>
                </label>
              </form>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex flex-col gap-4 pt-10">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Picture Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border rounded px-3 py-2 w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Uploader Name
                </label>
                <input
                  type="text"
                  value={uploader}
                  onChange={(e) => setUploader(e.target.value)}
                  className="border rounded px-3 py-2 w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border rounded px-3 py-2 w-full"
                >
                  <option value="">Select Category</option>
                  <option value="nature">Nature</option>
                  <option value="tech">Tech</option>
                  <option value="art">Art</option>
                </select>
              </div>

              <button
                onClick={handleUpload}
                className="bg-cyan-700 p-4 rounded text-white hover:bg-cyan-900 mt-2"
              >
                Upload
              </button>
            </div>
          </div>

          {/* Close Button (Optional) */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-27 right-49 text-red-600 text-xl font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Images Section */}
      <div className="flex items-center space-x-4 text-[16px] my-5">
        <div
          className={`flex items-center gap-1 cursor-pointer border-b-2 border-transparent px-5 py-3 hover:border-b-2 ${
            activetab == "Images"
              ? "border-b-black bg-gradient-to-b from-slate-50 to-slate-200 rounded-t-lg"
              : "text-gray-500"
          }`}
          onClick={() => setActivetab("Images")}
        >
          <IoMdImages />
          Images
        </div>
        <div
          className={`flex items-center gap-1 cursor-pointer border-b-2 border-transparent px-5 py-3 hover:border-b-2 ${
            activetab == "Collection"
              ? "border-b-black bg-gradient-to-b from-slate-50 to-slate-200 rounded-t-lg"
              : "text-gray-500"
          }`}
          onClick={() => setActivetab("Collection")}
        >
          <FaRegHeart />
          Collection
        </div>
      </div>
      {activetab === "Images" && (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {data.images.map((image) => (
          <div key={image.id} className="break-inside-avoid overflow-hidden rounded-lg">
            <ImageCard image={image} />
          </div>
        ))}
      </div>
      )}
      {activetab === "Collection" && (
        <div className="grid grid-cols-1 md:grid-cols-3 h-80 gap-6 mt-4">
          <h1>hello</h1>
        </div>
      )}
    </section>
  );
};

const ImageCard = ({ image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-auto object-cover"
      />

      {/* Hover Effects */}
      {hovered && (
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white space-y-2">
          {/* Premium or Free Badge */}
          <span
            className={`absolute top-2 left-2 px-2 py-1 text-sm rounded ${
              image.premium
                ? "bg-yellow-500 text-white"
                : "bg-gray-600 text-white"
            }`}
          >
            {image.premium ? "Premium" : "Free"}
          </span>
          <div className="flex flex-col space-y-4 text-black absolute top-5 right-4">
            {/* Download Button with Tooltip */}
            <div className="relative group">
              <button className="bg-white p-3 rounded shadow-lg active:text-blue-600 cursor-pointer">
                <FaDownload />
              </button>
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="relative">
                  <span className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md text-sm">
                    Download
                  </span>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 rotate-45 bg-white border-t border-l border-white"></div>
                </div>
              </div>
            </div>

            {/* Like Button with Tooltip */}
            <div className="relative group">
              <button className="bg-white p-3 rounded shadow-lg active:text-red-500 cursor-pointer">
                <FaHeart />
              </button>
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="relative">
                  <span className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md text-sm">
                    Like
                  </span>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 rotate-45 bg-white border-t border-l border-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between w-full absolute bottom-0 px-2 py-3 text-white text-sm">
            <div>
              <p className="text-left text-[22px] font-bold mt-2">
                {image.title}
              </p>
              <p className="text-sm font-semibold">{image.postedBy}</p>
            </div>
            <p>Dated On: {image.date}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreAll;
