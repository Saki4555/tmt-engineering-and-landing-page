import React, { useState } from 'react';

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative h-[300px] md:h-[500px] overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[currentIndex]}
          alt={`Work ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={goToPrevious}
            className="p-2 cursor-pointer rounded-full bg-te-sec hover:bg-te-sec/80 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="p-2 cursor-pointer rounded-full bg-te-sec hover:bg-te-sec/80 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex mt-4 gap-2 justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-16 md:h-20 aspect-video cursor-pointer rounded-md overflow-hidden transition-all duration-300 ${
              currentIndex === index ? 'ring-2 ring-te-prim' : 'opacity-70 hover:opacity-100'
            }`}
            onClick={() => goToSlide(index)}
          >
            <img
              src={image}
              alt={`Work ${index + 1}`}
              loading='lazy'
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}