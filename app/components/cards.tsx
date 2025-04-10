// components/SlideShow.tsx
'use client';

import React, { useState, useEffect } from 'react';

const SlideShow = () => {
  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of slide images or content
  const slides = [
    {
      image: '/Next1.jpg',
      alt: 'Slide 1',
    },
    {
      image: '/Next2.png', // Replace with your image path
      alt: 'Slide 2',
    },
    {
      image: '/Next3.png', // Replace with your image path
      alt: 'Slide 3',
    },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Changed to 3 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden mt-10"> {/* Added top margin here */}
      {/* Slide image */}
      <div className="relative w-full h-full">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation buttons */}
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 cursor-pointer z-10"
        onClick={prevSlide}
      >
        &#8592;
      </div>
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 cursor-pointer z-10"
        onClick={nextSlide}
      >
        &#8594;
      </div>

      {/* Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'} transition-colors duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
