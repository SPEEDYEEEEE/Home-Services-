import React from 'react';
import MediaObject from '../components/MediaObject';
import { testimonialsData } from '../constants';

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-slate-500 to-slate-400 text-gray-200 px-4 py-12">
      <div className="max-container">
        <h2 className="text-3xl font-bold mb-6 text-center font-montserrat">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <MediaObject
              key={index}
              image={testimonial.image}
              title={testimonial.name}
              description={testimonial.review}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
