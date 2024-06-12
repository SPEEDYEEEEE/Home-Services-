import React, { useState, useEffect } from 'react';
import { heroData } from '../constants';
import { servicesvideo } from '../assets/videos';

const Hero = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTextVisible(false);

      setTimeout(() => {
        setCurrentHeroIndex(prevIndex => (prevIndex + 1) % heroData.length);
        setIsTextVisible(true);
      }, 1000); // Duration of fade-out effect + Delay before showing next image and text
    }, 5000); // Change the duration between image changes

    return () => clearInterval(intervalId);
  }, [heroData.length]);

  return (
    <div className="hero-container" style={{ backgroundImage: `url(${heroData[currentHeroIndex].image})`, height: '700px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <div className="hero-content rounded-3xl " style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', fontFamily: 'Montserrat, sans-serif', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', boxSizing: 'border-box', transition: 'opacity 1s ease-in-out', opacity: isTextVisible ? 1 : 0 }}>
        <h1 style={{ fontSize: '2em', margin: 3 }}>{heroData[currentHeroIndex].text}</h1>
      </div>
    </div>
  );
};

const RegisterHero = () => {

  return (
    <div className="register-hero-container">
      {/* YouTube video background */}
      <video autoPlay loop muted >
        <source src={servicesvideo} type='video/mp4'/>
      </video>
    </div>
  );
};


export {Hero, RegisterHero};




