import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Download = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDownloadedImages = async () => {
      try {
        const response = await axios.get('http://localhost:8000/image/userDownload?page=1&limit=1', {
          withCredentials: true, // Send cookies for authentication
        });
        setImages(response.data.images || []);
      } catch (error) {
        console.error('Error fetching downloaded images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDownloadedImages();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Downloads</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : images.length === 0 ? (
        <p className="text-gray-500">No downloaded images found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image._id}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 cursor-pointer transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.title || 'Untitled'}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Download;
