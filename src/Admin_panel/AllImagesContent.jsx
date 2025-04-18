import React, { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight, BiSearch } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import Getapi from '../APIs/Getapi';
import { toast } from 'react-toastify';
import Putapi from '../APIs/Putapi';

export const AllImagesContent = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(''); // Dropdown for Status
  const [selectedCategory, setSelectedCategory] = useState(''); // Dropdown for Category
  const ordersPerPage = 3;

  const getAllImages = async () => {
    try {
      const response = await Getapi("image/admin/allImages");
      const imageData = response?.data?.images || [];
      setImages(imageData);
    } catch (error) {
      console.log("Failed to fetch images:", error);
      toast.error("Failed to fetch images");
    }
  };

  const ImageStatus = async ({ imageId, status }) => {
    try {
      const response = await Putapi(`image/approve/${imageId}`, { status });
      toast.success(response?.message || "Status updated successfully!");
      getAllImages();
    } catch (error) {
      const errMsg = error?.response?.data?.message || error?.message || "Failed to update status!";
      toast.error(`Update failed: ${errMsg}`);
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const filteredImages = images.filter(img => {
    const matchesSearchTerm = img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (img.description && img.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = selectedStatus ? img.status === selectedStatus : true;
    const matchesCategory = selectedCategory ? img.category === selectedCategory : true;

    return matchesSearchTerm && matchesStatus && matchesCategory;
  });

  const totalPages = Math.ceil(filteredImages.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredImages.slice(indexOfFirstOrder, indexOfLastOrder);

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

  const renderPagination = () => {
    if (totalPages <= 1) return null;

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

    // Always show the first page
    buttons.push(renderPageButton(1));

    if (currentPage > 3) {
      buttons.push(renderEllipsis("start-ellipsis"));
    }

    // Show pages around the current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      buttons.push(renderPageButton(i));
    }

    if (currentPage < totalPages - 2) {
      buttons.push(renderEllipsis("end-ellipsis"));
    }

    // Always show the last page (if not already shown)
    if (totalPages > 1) {
      buttons.push(renderPageButton(totalPages));
    }

    return (
      <div className="flex justify-between items-center mt-6 text-white">
        <div className="text-sm">
          Showing <span className="font-medium">{indexOfFirstOrder + 1}</span> to{" "}
          <span className="font-medium">
            {Math.min(indexOfLastOrder, filteredImages.length)}
          </span>{" "}
          of <span className="font-medium">{filteredImages.length}</span> results
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
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 ${currentPage === totalPages
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
    <div>
      <div className="text-3xl font-bold mb-5">Image Status</div>
      <div className="bg-[#0b1739] p-6 rounded-xl text-white w-full">

        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
          <h2 className="text-2xl font-bold">All Image Status</h2>
          <div className="flex gap-4">
            {/* Status Dropdown */}
            <select
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>

            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
            >
              <option value="">All Categories</option>
              <option value="General">General</option>
              <option value="Art">Art</option>
              <option value="Photography">Photography</option>
              <option value="Design">Design</option>
              <option value="Other">Other</option>
            </select>

            {/* Search Input */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search for..."
                className="bg-gray-800 px-3 py-2 pl-8 rounded-md text-white outline-none w-full md:w-64"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <BiSearch className="absolute left-2 top-2.5 text-gray-500" />
            </div>
          </div>
        </div>

        {filteredImages.length === 0 ? (
          <div className="text-center text-gray-400 py-10">No images found.</div>
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
                  <tr key={img._id} className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors">
                    <td className="p-3">#{indexOfFirstOrder + index + 1}</td>
                    <td className="p-3">
                      <img
                        src={img.url || null}
                        alt={img.title}
                        className="w-16 h-10 object-contain border rounded cursor-pointer"
                        onClick={() => handleImageClick(img.url)}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/150?text=No+Image";
                        }}
                      />
                    </td>
                    <td className="p-3">{img.title}</td>
                    <td className="p-3">{img.description || "No Description"}</td>
                    <td className="p-3">{new Date(img.createdAt).toLocaleDateString()}</td>
                    <td className="p-3">
                      <div className="flex items-center justify-center gap-2">
                        {img.status === "accepted" && (
                          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        )}
                        {img.status === "rejected" && (
                          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        )}
                        <span className="capitalize">{img.status || "pending"}</span>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      {img.status === "pending" ? (
                        <div className="flex gap-2 justify-center text-xs">
                          <button
                            className="bg-green-600 hover:bg-green-700 py-1 px-3 rounded-lg transition-colors"
                            onClick={() => handleStatusUpdate(img._id, "accepted")}
                          >
                            Accept
                          </button>
                          <button
                            className="bg-red-600 hover:bg-red-700 py-1 px-3 rounded-lg transition-colors"
                            onClick={() => handleStatusUpdate(img._id, "rejected")}
                          >
                            Decline
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400">Status Updated</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {showPopup && popupImage && (
              <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50" onClick={handleClose}>
                <div className="relative bg-gray-900 p-4 rounded shadow-lg max-w-[90%] max-h-[90%]" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <CgClose className="text-lg" />
                  </button>
                  <img
                    src={popupImage}
                    alt="Full View"
                    className="max-w-full max-h-[80vh] object-contain rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Available";
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {filteredImages.length > 0 && (
          <div className="mt-6">{renderPagination()}</div>
        )}
      </div>
    </div>
  );
};
