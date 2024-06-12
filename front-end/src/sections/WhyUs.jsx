import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // Fire when at least 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-b from-slate-600 to-slate-500 text-gray-300 px-4 py-10"
    >
      <div className="max-container text-center">
        <h2 className="text-3xl font-bold mb-6 text-white-400 font-montserrat">Why Choose Us?</h2>
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Point 1 */}
          <motion.div
            className="p-4 bg-gradient-to-b from-light-blue-300 to-teal-400 rounded-md shadow-md hover:shadow-md hover:shadow-slate-300 transition duration-300"
            initial={{ opacity: 0 }} // Set initial opacity to 0
            animate={{ opacity: isVisible ? 1 : 0 }} // Animate opacity based on visibility
            transition={{duration: 0.5, staggerChildren: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-100 font-montserrat">Experienced Professionals</h3>
            <p className="text-gray-200 font-montserrat">
              Our team consists of highly experienced professionals dedicated to delivering top-notch services. Benefit from their expertise and ensure your projects are in safe hands.
            </p>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            className="p-4 bg-gradient-to-b from-light-blue-300 to-teal-400 rounded-md shadow-md hover:shadow-md hover:shadow-slate-300 transition duration-300"
            initial={{ opacity: 0 }} // Set initial opacity to 0
            animate={{ opacity: isVisible ? 1 : 0 }} // Animate opacity based on visibility
            transition={{duration: 0.5, staggerChildren: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-100 font-montserrat">Quality Craftsmanship</h3>
            <p className="text-gray-200 font-montserrat">
              We pride ourselves on delivering quality craftsmanship in every project. From intricate details to overall execution, our focus is on providing the highest standards of work.
            </p>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            className="p-4 bg-gradient-to-b from-light-blue-300 to-teal-400 rounded-md shadow-md hover:shadow-md hover:shadow-slate-300 transition duration-300"
            initial={{ opacity: 0 }} // Set initial opacity to 0
            animate={{ opacity: isVisible ? 1 : 0 }} // Animate opacity based on visibility
            transition={{duration: 0.5, staggerChildren: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-100 font-montserrat">Customer Satisfaction Guarantee</h3>
            <p className="text-gray-200 font-montserrat">
              Your satisfaction is our priority. We guarantee excellent service and strive to exceed your expectations, ensuring you are fully satisfied with the results.
            </p>
          </motion.div>

          {/* Point 4 */}
          <motion.div
            className="p-4 bg-gradient-to-b from-light-blue-300 to-teal-400 rounded-md shadow-md hover:shadow-md hover:shadow-slate-300 transition duration-300"
            initial={{ opacity: 0 }} // Set initial opacity to 0
            animate={{ opacity: isVisible ? 1 : 0 }} // Animate opacity based on visibility
            transition={{duration: 0.5, staggerChildren: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-100 font-montserrat">Timely and Efficient Service</h3>
            <p className="text-gray-200 font-montserrat">
              We understand the importance of your time. Our commitment is to provide services in a timely and efficient manner, ensuring minimal disruption to your schedule.
            </p>
          </motion.div>

          {/* Point 5 */}
          <motion.div
            className="p-4 bg-gradient-to-b from-light-blue-300 to-teal-400 rounded-md shadow-md hover:shadow-md hover:shadow-slate-300 transition duration-300"
            initial={{ opacity: 0 }} // Set initial opacity to 0
            animate={{ opacity: isVisible ? 1 : 0 }} // Animate opacity based on visibility
            transition={{duration: 0.5, staggerChildren: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-100 font-montserrat">Transparent Pricing</h3>
            <p className="text-gray-200 font-montserrat">
              Our pricing is transparent and straightforward. No hidden fees or surprises. You can trust us to provide clear and honest pricing for our services.
            </p>
          </motion.div>

          {/* Point 6 */}
          <motion.div
            className="p-4 bg-gradient-to-b from-light-blue-300 to-teal-400 rounded-md shadow-md hover:shadow-md hover:shadow-slate-300 transition duration-300"
            initial={{ opacity: 0 }} // Set initial opacity to 0
            animate={{ opacity: isVisible ? 1 : 0 }} // Animate opacity based on visibility
            transition={{duration: 0.5, staggerChildren: 0.1}}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-100 font-montserrat">Wide Range of Services</h3>
            <p className="text-gray-200 font-montserrat">
              We offer a comprehensive range of services to meet all your needs. Whether it's renovations, repairs, or other home services, we've got you covered with our diverse expertise.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;