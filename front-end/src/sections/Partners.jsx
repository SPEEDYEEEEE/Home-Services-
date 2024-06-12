import React from 'react';
import Marquee from "react-fast-marquee";
import { partnerLogos } from '../constants';

const Partners = () => {

  return (
    <div className="bg-gradient-to-b from-slate-300 to-slate-200 text-gray-700 px-4 py-10">
      <div className="max-container">
        <h2 className="text-3xl font-bold mb-6 text-center text-white-600 font-montserrat">Our Partners</h2>
        <Marquee direction="right" gradient={true} gradientWidth={50} className='rounded-xl'>
          {partnerLogos.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt='logo'
              style={{ width: 'auto', height: '60px', marginRight: '40px'}}
              className='transition-transform transform scale-100 hover:scale-105  hover:shadow-slate-200 hover:shadow-md'
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
