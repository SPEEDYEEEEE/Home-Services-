import React from 'react';

const MediaObject = ({ image, title, description }) => {
  return (
    <div className="relative overflow-hidden aspect-w-1 aspect-h-1 rounded-md hover:shadow-slate-50 hover:shadow-md transition-transform transform scale-100 hover:scale-105">
      <img className="object-cover w-full h-full rounded-md" src={image} alt={title} />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-md">
        <h3 className="text-xl font-bold mb-2 font-montserrat">{title}</h3>
        <p className="text-white-400 text-center font-montserrat">{description}</p>
      </div>
    </div>
  );
};

export default MediaObject;
