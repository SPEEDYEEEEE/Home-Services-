import React, {useState} from "react";
import { Tilt } from "react-tilt";
import { useNavigate } from 'react-router-dom';
import { FaStar, FaWhatsapp, FaPhone } from 'react-icons/fa';
import axios from 'axios';
// import { WorkerModal } from "./Modal";
import {GoogleMap, Marker, InfoWindow, useJsApiLoader} from '@react-google-maps/api';

//Card
const Card = ({ title, content, image }) => {
  return (
    <div className="bg-none rounded-lg hover:border-slate-800 transition-transform transform hover:scale-105">
      <h2 className="text-xl font-bold py-2 text-gray-700 text-center font-montserrat">{title}</h2>
      <p className="text-black text-center font-montserrat pb-3 px-2">{content}</p>
      {image && <img src={image} alt="Card" className="mt-4 rounded-md object-cover w-full h-32 sm:h-48" />}
    </div>
  );
};

//Services Card
const ServiceCard = ({ service }) => {

  // console.log(service.subServices);

  const navigate = useNavigate();
  
  return (
    <div className="relative overflow-hidden aspect-w-1 aspect-h-1 rounded-md hover:shadow-slate-50 hover:shadow-md h-72">
      <img
        src={service.image}
        alt={service.name}
        className="object-cover w-full h-full transition-transform transform scale-100 hover:scale-105 rounded-md"
      />
      <div className="absolute inset-0 flex flex-col bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-md">
        <h3 className="text-xl font-bold mb-2 mt-10 font-montserrat">{service.name}</h3>
        <p className="text-white-400 font-montserrat">{service.details}</p>
        <div className="button-container">
          
            <button className="btn mb-4" onClick={()=>{navigate(service.link,{state:{subServices: service.subServices, serviceName:service.name}})}}>
              <p className="font-montserrat">Search Now</p>
            </button>
          
        </div>
      </div>
    </div>
  );
};

//Flipping Card
const FlippingCard = ({ frontImage, backImage, frontContent, backContent }) => {
  return (
    <div className="flipping-card">
      <div className="flipping-card-inner">
        <div className="flipping-card-front rounded-xl" style={{ backgroundImage: `url(${frontImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {frontContent}
        </div>
        <div className="flipping-card-back rounded-xl" style={{ backgroundImage: `url(${backImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {backContent}
        </div>
      </div>
    </div>
  );
};

//Project Card
// export const ProjectCard = ({ name, description, image, rating ,serviceName}) => {
//   const [showModal, setShowModal] = useState(false);
//   const [workers, setWorkers] = useState([]);
//   const [selectedWorker, setSelectedWorker] = useState(null); // State to track selected worker
//   const navigate = useNavigate();
//   const [isLoggedIn] = useState(!!localStorage.getItem('token'));

//   const handleBookNowClick = async () => {
//     if (!isLoggedIn) {
//       // Redirect to the login page
//       navigate('/login');
//     } else {
//       try { 
//         console.log(serviceName)
//         // Make API call to fetch workers for the selected service
//         const response = await axios.post(`http://localhost:3000/api/workers/serviceLink`,{
//           name:serviceName
//         });
//         const data = response.data;
        
//         console.log('Received worker data:', data);
  
//         // Check if the response data is an array
//         if (Array.isArray(data)) {
//           // Open the modal to display worker list
//           setShowModal(true);
//           setWorkers(data);
//         } else {
//           console.error('Error fetching workers: Response data is not an array');
//         }
//       } catch (error) {
//         console.error('Error fetching workers:', error);
//       }
//     }
//   };

//   const handleDoneClick = (worker) => {
//     // Mark the selected worker
//     setSelectedWorker(worker);
//   };

//   const renderButton = (worker) => {
//     if (selectedWorker && selectedWorker._id === worker._id) {
//       return <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Booked</button>;
//     } else {
//       return <button onClick={() => handleDoneClick(worker)} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">Confirm ?</button>;
//     }
//   };

//   // Function to generate star icons based on rating
//   const renderStars = (rating = 5) => {
//     const stars = [];
//     for (let i = 0; i < rating; i++) {
//       stars.push(<FaStar key={i} className="text-yellow-400" />);
//     }
//     return stars;
//   };


//   return (
//     <>
//       <Tilt option={{max: 45, scale: 1, speed: 450}} className="bg-slate-800 p-3 rounded-2xl sm:w-[288px] w-full">
//         <div className="relative w-full h-[184px]">
//           <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
//         </div>
//         <div className="mt-3">
//           <h3 className="text-white font-bold text-[18px]">{name}</h3>
//           <p className="mt-1 text-secondary text-[12px] text-white-400 font-montserrat truncate">{description}</p>
//         </div>
//         <div className="flex items-center justify-between mt-2">
//           <div className="flex items-center">
//             {renderStars(rating)}
//             <span className="ml-1 text-sm text-white-400">{rating} out of 5</span>
//           </div>
//           <button onClick={handleBookNowClick} className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md transition-colors">Book Now</button>
//         </div>
//       </Tilt>
//       {showModal && <WorkerModal workers={workers} onClose={() => setShowModal(false)} renderButton={renderButton} />}
//     </>
//   );
// };

export const ProjectCard = ({ name, description, image, rating, serviceName }) => {
  const [showMap, setShowMap] = useState(false);
  const [workers, setWorkers] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);

  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  const userLocation = JSON.parse(localStorage.getItem('location'));

  const userLocationIcon = {
    url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
  };

  const containerStyle = {
    width: '100vw',
    height: '100vh',
  };

  const defaultCenter = {
    lat: 0,
    lng: 0,
  };

  const center = userLocation ? {
    lat: userLocation.latitude,
    lng: userLocation.longitude,
  } : defaultCenter;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCMvaLHw7llfbZBJtCREQFiBxylFqAb6gE',
  });

  const handleBookNowClick = async () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      try {
        const response = await axios.post(`http://localhost:3000/api/workers/serviceLink`, { name: serviceName });
        const data = response.data;

        if (Array.isArray(data)) {
          setShowMap(true);
          setWorkers(data);
        } else {
          console.error('Error fetching workers: Response data is not an array');
        }
      } catch (error) {
        console.error('Error fetching workers:', error);
      }
    }
  };

  const renderStars = (rating = 5) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const haversineDistance = (coords1, coords2) => {
    const toRad = (value) => (value * Math.PI) / 180;

    const R = 6371;
    const dLat = toRad(coords2.lat - coords1.lat);
    const dLng = toRad(coords2.lng - coords1.lng);
    const lat1 = toRad(coords1.lat);
    const lat2 = toRad(coords2.lat);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  return (
    <>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-slate-800 p-3 rounded-2xl sm:w-[288px] w-full">
        <div className="relative w-full h-[184px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="mt-3">
          <h3 className="text-white font-bold text-[18px]">{name}</h3>
          <p className="mt-1 text-secondary text-[12px] text-white-400 font-montserrat truncate">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            {renderStars(rating)}
            <span className="ml-1 text-sm text-white-400">{rating} out of 5</span>
          </div>
          <button onClick={handleBookNowClick} className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md transition-colors">
            Book Now
          </button>
        </div>
      </Tilt>
      {showMap && isLoaded && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-white p-4 rounded-lg">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
              <Marker position={center} icon={userLocationIcon} />
              {workers.map((worker, index) => {
                const workerLocation = { lat: worker.location.latitude, lng: worker.location.longitude };
                const distance = haversineDistance(center, workerLocation).toFixed(2);
                return (
                  <Marker
                    key={index}
                    position={workerLocation}
                    onClick={() => handleActiveMarker(index)}
                    animation={google.maps.Animation.DROP}
                  >
                    {activeMarker === index && (
                      <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                        <div className="font-montserrat max-w-xs px-4 pb-2 leading-6">
                          <h2 className="mb-2 text-lg font-bold">{worker.firstName} {worker.lastName}</h2>
                          <p className="mb-2">Country: {worker.country}</p>
                          <p className="mb-2">City: {worker.city}</p>
                          <p className="mb-2">Shop Address: {worker.homeAddress}</p>
                          <p className="mb-2">Distance: {distance} km</p>
                          <div className="flex items-center space-x-4 mt-4">
                            <a href={`https://wa.me/${worker.countryCode}${worker.phoneNo}`} target="_blank" rel="noopener noreferrer" className="text-3xl text-green-500 hover:text-green-600">
                              <FaWhatsapp />
                            </a>
                            <a href={`tel:${worker.countryCode}${worker.phoneNo}`} className="text-2xl text-blue-500 hover:text-blue-600">
                              <FaPhone />
                            </a>
                            <span className="text-lg">{`${worker.countryCode} ${worker.phoneNo}`}</span>
                          </div>
                        </div>
                      </InfoWindow>
                    )}
                  </Marker>
                );
              })}
            </GoogleMap>
            <button onClick={() => setShowMap(false)} className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
              Close Map
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export {Card, ServiceCard, FlippingCard};