import React from 'react';

const ServiceCategory = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-4 font-montserrat text-slate-100">{title}</h2>
      {children}
    </div>
  );
};

export default ServiceCategory;
