import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight, BiSearch } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import Getapi from '../APIs/Getapi';
import { toast } from 'react-toastify';
import Putapi from '../APIs/Putapi';

export const ImageStatusContent = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const ordersPerPage = 10;

  const getAllImages = async () => {
    try {
      const response = await Getapi("image/all-Pending-Images");
      const imageData = response?.data?.images || [];
      setImages(imageData);
    } catch (error) {
      console.log("Failed to fetch pending images:", error);
    }
  };

  const ImageStatus = async ({ imageId, status }) => {
    try {
      const response = await Putapi(`image/approve/${imageId}`, { status });
      toast.success(response?.message || "Status updated successfully!");
      getAllImages();
    } catch (error) {
      const errMsg = error?.response?.data?.message 
                   || error?.message 
                   || "Failed to update status!";
      toast.error(`Update failed: ${errMsg}`);
      console.error("ImageStatus error:", error);
    }
  };
  

  useEffect(() => {
    getAllImages();
  }, []);

  const totalPages = Math.ceil(images.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = images.slice(indexOfFirstOrder, indexOfLastOrder);

  const handleImageClick = (img) => {
    setPopupImage(img);
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
    setPopupImage(null);
  };

  const handleStatusUpdate = (id, status) => {
    ImageStatus({ imageId: id, status });
  };

  return (
    <div>
      <div className="text-3xl font-bold mb-5">Image Status</div>
      <div className="bg-[#0b1739] p-6 rounded-xl text-white w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">All Image Status</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for..."
              className="bg-gray-800 px-3 py-2 pl-8 rounded-md text-white outline-none"
            />
            <BiSearch className="absolute left-2 top-2.5 text-gray-500" />
          </div>
        </div>

        {images.length === 0 ? (
          <div className="text-center text-gray-400 py-10">No pending images found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-400 text-center">
                  <th className="p-3">S.No</th>
                  <th className="p-3">Image</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {currentOrders.map((img, index) => (
                  <tr
                    key={img._id}
                    className={`border-t border-gray-700 ${
                      img.status === "accepted"
                        ? "bg-green-900/30"
                        : img.status === "rejected"
                        ? "bg-red-900/30"
                        : ""
                    }`}
                  >
                    <td className="p-3">#{indexOfFirstOrder + index + 1}</td>
                    <td className="p-3">
                      <img
                        src={img.url}
                        alt={img.title}
                        className="w-16 h-10 object-contain border rounded cursor-pointer"
                        onClick={() => handleImageClick(img.url)}
                      />
                    </td>
                    <td className="p-3">{img.title}</td>
                    <td className="p-3">{img.description || "No Description"}</td>
                    <td className="p-3">
                      {new Date(img.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-3 capitalize">{img.status || "pending"}</td>
                    <td className="p-3 text-center">
                      <div className="flex gap-2 justify-center text-xs">
                        <button
                          className="bg-green-600 py-1 px-3 rounded-lg"
                          onClick={() => handleStatusUpdate(img._id, "accepted")}
                        >
                          Accept
                        </button>
                        <button
                          className="bg-red-600 py-1 px-3 rounded-lg"
                          onClick={() => handleStatusUpdate(img._id, "rejected")}
                        >
                          Decline
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {showPopup && popupImage && (
              <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                <div className="relative bg-white p-4 rounded shadow-lg max-w-[90%] max-h-[90%]">
                  <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    <CgClose className="cursor-pointer" />
                  </button>
                  <img
                    src={popupImage}
                    alt="Full View"
                    className="max-w-full max-h-[80vh] object-contain rounded"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {images.length > ordersPerPage && (
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
        )}
      </div>
    </div>
  );
};
