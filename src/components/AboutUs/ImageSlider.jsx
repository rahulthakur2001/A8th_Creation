// src/components/ImageSlider.jsx
import React, { useState } from 'react';
import img from "../../assets/third.jpg"
import img1 from "../../assets/second.jpg"
import img2 from "../../assets/first.jpg"
import img3 from "../../assets/fourth.jpg"
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const images = [
  img,
  img1,
  img2,
  img3,
  img,
  img1,
  img2,
  img3,
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[current]}
          alt={`Slide ${current}`}
          className="w-full h-[500px] object-cover transition duration-700"
        />
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-4 rounded-full cursor-pointer"
          onClick={prevSlide}
        >
          <BiLeftArrow size={20}/>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-4 rounded-full cursor-pointer"
          onClick={nextSlide}
        >
          <BiRightArrow size={20}/>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center mt-4 gap-2 overflow-x-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            onClick={() => setCurrent(index)}
            className={`h-16 w-24 object-cover cursor-pointer rounded-md border-2 ${
              index === current ? "border-blue-600" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
