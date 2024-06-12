import React, { useState, useEffect } from 'react';
import { logo } from "../assets/images/index";

const Loader = () => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Simulate the end of loading after 3 seconds (for example)
    const timer = setTimeout(() => {
      setIsFading(true);
    }, 3000); // Change this value to control when the fade-out starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex flex-col inset-0 items-center justify-center h-screen w-screen bg-gradient-to-b from-[#171E30] to-[#8A9FB4] ${isFading ? 'fade-out' : ''}`}>
      <div className="w-52 h-52">
        <img src={logo} alt="logo" className="w-full h-full object-contain" />
      </div>
      <div className="loader mt-4 mb-4 font-montserrat">
        <span>H</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
        <span>-</span>
        <span>S</span>
        <span>E</span>
        <span>R</span>
        <span>V</span>
        <span>I</span>
        <span>C</span>
        <span>E</span>
      </div>
      <div className="loaders">
        <span className="loading font-montserrat">Loading</span>
        <div id="dots" className='font-montserrat'>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
