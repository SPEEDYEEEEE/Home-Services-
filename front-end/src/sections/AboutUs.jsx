import React from 'react';
import { cleaningcard, doctorcard, plumberhero, woodhero } from '../assets/images/index';
import { Card } from '../components/Card';

const AboutUs = ({ index }) => {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-800 text-white px-4 py-24">
      <h1 className='text-gray-200 font-montserrat mb-4 text-center text-3xl font-bold'>ABOUT US</h1>
      <div className="max-container flex flex-col lg:flex-row lg:items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold mb-4 text-center lg:text-left animate-typewriter text-gray-200 font-montserrat">
            Welcome to our home services website!
          </h2>
          <div className=' rounded-2xl bg-black-200 p-4 mb-4 hover:shadow-lg hover:transition hover:shadow-slate-200'>
            <p className="text-lg font-montserrat text-center lg:text-left">
              We provide top-notch home services tailored to your needs. Our experienced professionals ensure quality and satisfaction in every job. From renovations to repairs, we've got you covered.
            </p>
          </div>
          <div className=' rounded-2xl bg-black-200 p-4 mb-4 hover:shadow-lg hover:transition hover:shadow-slate-200'>
            <p className="text-lg font-montserrat text-center lg:text-left">
              Our team consists of skilled experts in various fields, including cleaning, healthcare, plumbing, and carpentry. Whether you need a deep cleaning session, medical assistance at home, plumbing repairs, or woodwork services, we're here to help.
            </p>
          </div>
          <div className=' rounded-2xl bg-black-200 p-4 mb-4 hover:shadow-lg hover:transition hover:shadow-slate-200'>
            <p className="text-lg font-montserrat text-center lg:text-left">
              Customer satisfaction is our top priority, and we strive to exceed your expectations with our reliable and efficient services. Let us take care of your home needs, so you can focus on what matters most to you.
            </p>
          </div>
        </div>
        
        {/* Image Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:justify-between gap-5 mt-10 lg:mt-0 lg:w-1/2">
          <Card image={cleaningcard} />
          <Card image={doctorcard} />
          <Card image={plumberhero} />
          <Card image={woodhero} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;




