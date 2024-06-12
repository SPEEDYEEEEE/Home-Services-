import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controlsLeft.start({ x: 0, opacity: 1 });
          controlsRight.start({ x: 0, opacity: 1 });
        } else {
          setIsVisible(false);
          controlsLeft.start({ x: -50, opacity: 0 });
          controlsRight.start({ x: 50, opacity: 0 });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controlsLeft, controlsRight]);

  return (
    <div ref={sectionRef} className="bg-gradient-to-b from-slate-200 to-slate-100 text-gray-700 px-4 py-16">
      <div className="max-container flex flex-wrap justify-between items-start">
        {/* Left Column - Contact Form */}
        <motion.div
          className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4"
          initial={{ x: -50, opacity: 0 }}
          animate={controlsLeft}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center font-montserrat">Contact Us</h2>
          <form>
            {/* Add your contact form fields here */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-montserrat">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-montserrat">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-montserrat">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* Add more fields as needed */}
            
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-teal-500 font-semibold font-montserrat"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Right Column - Contact Information */}
        <motion.div
          className="w-full lg:w-1/2 p-4 text-center text-gray-700 -mt-3"
          initial={{ x: 50, opacity: 0 }}
          animate={controlsRight}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4 font-montserrat">Our Office</h3>
          {/* Add office details here */}
          <p className='text-xl font-bold font-montserrat'>Address</p>
          <p className="mb-2 font-montserrat">123 Main Street, Cityville</p>
          <br />
          <p className='text-xl font-bold'>Country</p>
          <p className="mb-2 font-montserrat">Australia</p>
          <br />
          <p className='text-xl font-bold font-montserrat'>Contacts</p>
          <p className='font-montserrat'>Email: info@example.com</p>
          <p className='font-montserrat'>Phone: +123 456 7890</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;