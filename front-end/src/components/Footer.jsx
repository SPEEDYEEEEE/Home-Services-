import React, { useState, useEffect } from 'react';
import { logo } from "../assets/images/index";
import { facebook, instagram } from '../assets/icons/index';
import {useMobileScreen, useDesktopScreen} from '../hooks/index';  

  const Footer = () => {
    const isDesktop = useDesktopScreen();
    const isMobile = useMobileScreen();
  
    return (
      <footer className="bg-gradient-to-r from-slate-950 to-slate-400 p-5">
        <div className={`max-container ${isMobile ? 'flex flex-col items-center' : 'grid grid-cols-2 gap-8'}`}>
          {/* Left Column */}
            <div className={isMobile ? 'mb-8 text-center flex flex-col items-center' : 'flex-shrink-0 pl-10'}>
                <a href='/'>
                  <img src={logo} alt="Footer Logo" className=" w-24 h-20" />
                </a>
                <p className="text-white mt-4 font-montserrat">
                Welcome to <span className='font-bold text-teal-300'>HOME SERVICES</span>! your trusted partner for all your home service needs. With a commitment to excellence and customer satisfaction, we provide a comprehensive range of services including cleaning, electrical work, plumbing, woodworking, and medical assistance. Our team of experienced professionals delivers top-quality craftsmanship and ensures timely and efficient service, guaranteeing your complete satisfaction. Whether it's renovations, repairs, or routine maintenance, we're here to transform your house into a place you're proud to call home. Discover the difference with <span className=' text-teal-300'>Home Services</span> today!
                </p>
            </div>

  
          {/* Middle Column */}
          <div className="text-white grid grid-cols-2 gap-8">
            {/* Follow Us Links */}
            <div className="text-center">
              <h3 className="font-montserrat text-lg font-medium mb-2">Follow Us</h3>
              <div className="flex items-center justify-center">
                <img src={facebook} alt="Facebook Icon" className="w-6 h-6 mr-2" />
                <span className='font-montserrat'>Facebook</span>
              </div>
              <div className="flex items-center justify-center mt-2">
                <img src={instagram} alt="Instagram Icon" className="w-6 h-6 mr-2" />
                <span className='font-montserrat'>Instagram</span>
              </div>
            </div>
  
            {/* Company Links */}
            <div className="text-center">
              <h3 className="font-montserrat text-lg font-medium mb-2">Company</h3>
              <ul className='font-montserrat'>
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>News</li>
                <li>Testimonials</li>
                <li>Partners</li>
              </ul>
            </div>
  
            {/* Customer Links */}
            <div className="text-center">
              <h3 className="font-montserrat text-lg font-medium mb-2">Customers</h3>
              <ul className='font-montserrat'>
                <li>How It Works</li>
                <li>Complaints</li>
                <li>Customer Support</li>
              </ul>
            </div>
  
            {/* Contacts Links */}
            <div className="text-center">
              <h3 className="font-montserrat text-lg font-medium mb-2">Contact</h3>
              <p className='font-montserrat'>Phone: +123 456 789</p>
              <p className='font-montserrat'>Email: info@example.com</p>
              <p className='font-montserrat'>Frequently Asked Questions</p>
            </div>
          </div>
  
          {/* Right Column */}
          {isMobile && (
            <div className="text-center text-white">
              <h3 className="font-montserrat text-lg font-medium mb-2">App and iPhone</h3>
              <div className="flex items-center justify-center">
                <img src={facebook} alt="Facebook Icon" className="w-6 h-6 mr-2" />
                <span className='font-montserrat'>iPhone</span>
              </div>
              <div className="flex items-center justify-center mt-2">
                <img src={instagram} alt="Instagram Icon" className="w-6 h-6 mr-2" />
                <span className='font-montserrat'>Android</span>
              </div>
            </div>
          )}
        </div>
      </footer>
    );
  };
  
  export default Footer;
