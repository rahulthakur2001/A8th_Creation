import React, { useEffect, useState } from "react";
import { IoMdImages } from "react-icons/io";
import { FaDownload, FaHeart, FaRegHeart, FaSearch } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";
import PostApiFile from "../../APIs/PostApiFile";
import Getapi from "../../APIs/Getapi";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PostApi from "../../APIs/Postapi";

const ExploreAll = () => {
  const [loading, setLoading] = useState(false);
  const [activetab, setActivetab] = useState("Images");
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [uploader, setUploader] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [collection, setCollection] = useState([]);
  const navigate = useNavigate();

  const handleUploadClick = () => {
    const isAuthenticated = localStorage.getItem("token");
    if (isAuthenticated) {
      setIsOpen(true);
    } else {
      navigate("/login");
    }
  };

  const fetchSavedImages = async () => {
    try {
      const res = await Getapi("image/userSaved");
      setCollection(res.data.saved || []);
    } catch (err) {
      console.error("Error fetching saved images:", err);
    }
  };

  useEffect(() => {
    if (activetab === "Collection") {
      fetchSavedImages();
    }
  }, [activetab]);

  const handleUploadImage = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", file);
      formData.append("category", category);
      formData.append("description", uploader);

      const response = await PostApiFile("image/add", formData);

      if (response) {
        toast.success(response?.data?.message || "Upload successful!");
        setTitle("");
        setFile(null);
        setCategory("");
        setUploader("");
        setIsOpen(false);
        setPage(1);
        setImages([]);
        getAllImages(1);
      }
    } catch (error) {
      console.error(error);
      toast.error("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getAllImages = async (currentPage = 1) => {
    try {
      const response = await Getapi(`image/all?page=${currentPage}&limit=18`);
      const newImages = response?.data?.images || [];

      if (newImages.length > 0) {
        setImages((prev) => [...prev, ...newImages]);
        setHasMore(newImages.length === 18);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch images.");
      setHasMore(false);
    }
  };

  useEffect(() => {
    getAllImages(page);
  }, [page]);

  return (
    <section className="p-6">
      {/* Search Bar */}
      <div className="flex justify-between items-center relative mb-4">
        <FaSearch className="absolute ml-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search all assets"
          className="border border-gray-400 bg-gray-200 px-10 py-3 w-full rounded-md"
        />
        <button className="flex items-center gap-2 absolute right-2 bg-teal-700 text-white px-4 py-2 rounded">
          <FaSearch size={14} />
          Search
        </button>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
        {/* Categories Buttons */}
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          {["Filters", "Photos", "PSD", "Vectors", "All Images"].map((cat, index) => (
            <button
              key={index}
              className="bg-gray-200 px-4 py-2 rounded text-gray-700 hover:bg-gray-300 mb-2 md:mb-0"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUploadClick}
          className="bg-cyan-700 px-4 py-2 rounded text-white hover:bg-cyan-900 flex items-center gap-1.5 ml-auto"
        >
          <BiSolidImageAdd size={20} />
          Upload
        </button>
      </div>


      {/* Upload Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl flex flex-col md:flex-row gap-6">
            {/* Upload Box */}
            <div className="flex flex-col items-center justify-center w-[55%] bg-gray-50 rounded-lg shadow p-4">
              <h2 className="text-2xl font-semibold mb-1">Upload your files</h2>
              <p className="text-xs text-gray-500 mb-6">File should be .png, .jpg, .jpeg</p>
              <form className="relative w-full h-40 bg-gray-200 rounded-lg shadow-inner">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <label
                  htmlFor="file-upload"
                  className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                >
                  <p className="z-10 text-xs font-light text-gray-500">Drag & Drop</p>
                  <svg
                    className="z-10 w-8 h-8 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                </label>
              </form>
            </div>

            {/* Input Form */}
            <div className="flex-1 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border px-3 py-2 rounded"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">Select Category</option>
                <option value="General">General</option>
                <option value="Photography">Photography</option>
                <option value="Art">Art</option>
                <option value="Design">Design</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                placeholder="Description"
                value={uploader}
                onChange={(e) => setUploader(e.target.value)}
                className="border px-3 py-2 rounded"
              />
              <button
                onClick={handleUploadImage}
                className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-900"
                disabled={loading}
              >
                {loading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-6 text-white text-2xl"
          >
            ✕
          </button>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center space-x-4 text-[16px] my-5 sticky top-20 z-40 bg-white pb-4 w-full max-w-8xl">
        <div
          className={`flex items-center gap-1 cursor-pointer border-b-2 px-5 py-3 ${activetab === "Images"
            ? "border-black bg-gradient-to-b from-slate-50 to-slate-200 rounded-t-lg"
            : "text-gray-500 border-transparent hover:border-gray-400"
            }`}
          onClick={() => setActivetab("Images")}
        >
          <IoMdImages />
          Images
        </div>
        <div
          className={`flex items-center gap-1 cursor-pointer border-b-2 px-5 py-3 ${activetab === "Collection"
            ? "border-black bg-gradient-to-b from-slate-50 to-slate-200 rounded-t-lg"
            : "text-gray-500 border-transparent hover:border-gray-400"
            }`}
          onClick={() => setActivetab("Collection")}
        >
          <FaRegHeart />
          Collection
        </div>
      </div>

      {/* Gallery */}
      {activetab === "Images" && (
        <>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((image) => (
              <div key={image._id} className="break-inside-avoid overflow-hidden rounded-lg">
                <ImageCard image={image} isCollection={false} savedIds={collection.map(c => c._id)} />
              </div>
            ))}
          </div>
          {hasMore && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="bg-teal-700 hover:bg-teal-900 text-white px-6 py-2 rounded shadow"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}

      {activetab === "Collection" && (
        Array.isArray(collection) && collection.length > 0 ? (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {collection.map((image) => (
              <div key={image._id} className="break-inside-avoid overflow-hidden rounded-lg">
                <ImageCard image={image} isCollection={true} savedIds={[]} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 h-80 gap-6 mt-4">
            <h1 className="text-center">No collections yet.</h1>
          </div>
        )
      )}

      <ToastContainer />
    </section>
  );
};

const ImageCard = ({ image, isCollection, savedIds }) => {
  const [hovered, setHovered] = useState(false);
  const isSaved = savedIds.includes(image._id);

  const handleSaveImage = async (imageId) => {
    try {
      const response = await PostApi(`image/savedImage/${imageId}`);
      toast.success(response.message);
    } catch (error) {
      console.error("Failed to save image", error);
    }
  };

  const handleDownloadImage = async (imageId) => {
    try {
      const response = await PostApi(`image/downloadImage/${imageId}`);
      toast.success(response.message, {
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image.image || image.url}
        alt={image.title}
        className="w-full h-auto object-cover"
      />
      {hovered && (
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <span
            className={`absolute top-2 left-2 px-2 py-1 text-sm rounded ${image.premium ? "bg-yellow-500" : "bg-gray-600"}`}
          >
            {image.premium ? "Premium" : "Free"}
          </span>
          <div className="absolute top-5 right-4 flex flex-col gap-3 text-black">
            <button
              onClick={() => handleDownloadImage(image?._id)}
              className="bg-white p-3 rounded shadow hover:text-blue-600">
              <FaDownload />
            </button>
            {!isCollection && (
              <button
                onClick={() => handleSaveImage(image?._id)}
                className={`bg-white p-3 rounded shadow ${isSaved ? "text-red-500" : "hover:text-red-500"}`}
              >
                {isSaved ? <FaHeart /> : <FaRegHeart />}
              </button>
            )}
          </div>
          <div className="absolute bottom-0 px-3 py-3 w-full bg-black/40 text-sm text-left">
            <p className="text-lg font-bold">{image.title}</p>
            <p className="text-xs">{image.description || image.postedBy}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreAll;
