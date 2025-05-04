import React, { useEffect, useState } from 'react'
import Getapi from '../../APIs/Getapi';

const Collection = () => {
      const [images, setImages] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchSavedImages = async () => {
          try {
            const res = await Getapi('image/userSaved')
            setImages(res.data.saved || []);
          } catch (err) {
            console.error('Error fetching images:', err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchSavedImages();
      }, []);
  return (
    <div>
         <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Saved Images</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : images.length === 0 ? (
        <p className="text-gray-500">No saved images found.</p>
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
              <div className="absolute inset-0 bg-black bg-opacity-50 cursor-pointer opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-items">
                <p className="text-white ml-5 mb-3 text-2xl font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  )
}

export default Collection
