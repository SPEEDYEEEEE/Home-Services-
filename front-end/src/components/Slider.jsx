import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Card } from "./Card";

export const HeroCustomSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative">
      <div className="w-full flex justify-between items-center">
        <button className="text-white" onClick={handlePrevSlide}>
          <IoIosArrowBack size={30} />
        </button>
        <div className="w-full relative">
          <Card image={images[currentIndex]} />
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between items-center">
            <button className="text-white" onClick={handlePrevSlide}>
              <IoIosArrowBack size={30} />
            </button>
            <button className="text-white" onClick={handleNextSlide}>
              <IoIosArrowForward size={30} />
            </button>
          </div>
        </div>
        <button className="text-white" onClick={handleNextSlide}>
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );
};


