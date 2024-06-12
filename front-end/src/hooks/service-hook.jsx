// ServiceContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/services/get-services')
      .then(response => {
        const data = response.data;
        setServices(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceContext;
