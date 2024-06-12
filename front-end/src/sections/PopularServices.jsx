import React from 'react';
import { popservicesData } from '../constants';
import { responsive } from '../hooks';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PopularServices = () => {
  return (
    <div className="bg-gradient-to-b from-slate-700 to-slate-600 text-gray-700 px-4 py-14">
      <div className="max-container">
        <h2 className="text-3xl font-bold mb-8 text-center text-white-400 font-montserrat">Popular Services</h2>
        <Carousel responsive={responsive} showDots={true} infinite={true} arrows={false} autoPlay={true} autoPlaySpeed={1500}>
          {/* Render each service inside a carousel item */}
            {popservicesData.map((service, index) => (
              <div key={index} className="relative overflow-hidden aspect-w-1 aspect-h-1 rounded-md hover:shadow-gray-800 hover:shadow-md carousel-item mb-6 mr-2 ml-2 h-72">
                <img
                  src={service.image}
                  alt={service.name}
                  className="object-cover w-full h-full transition-transform transform scale-100 hover:scale-105 rounded-md"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-md">
                  <h3 className="text-xl font-bold mb-2 text-gray-300 font-montserrat">{service.name}</h3>
                  <p className="text-white-400 text-center font-montserrat">{service.details}</p>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularServices;

