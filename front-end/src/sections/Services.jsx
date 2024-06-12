import React, {useContext} from 'react';
import { ServiceCard } from '../components/Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../hooks';
import ServiceContext from '../hooks/service-hook';

const Services = () => {

  const services = useContext(ServiceContext);

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-700 text-white pb-8 px-8">
      <div className="max-container text-center">
        <h2 className="text-3xl font-bold mb-8 text-white-400 font-montserrat">SERVICES</h2>
        <Carousel swipeable={true} draggable={true} showDots={false} responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
          {/* Render each ServiceCard inside a div */}
          {services.map((service, index) => (
            <div key={index} className='carousel-item mr-2 ml-2 mb-2'>
              <ServiceCard service={service} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
