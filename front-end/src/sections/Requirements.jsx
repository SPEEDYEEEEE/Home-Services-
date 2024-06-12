import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { requirements } from '../constants';

const Requirements = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      // Trigger animation when component is in view
      console.log('In view');
    }
  }, [inView]);

  return (
    <div className="requirements-container bg-gradient-to-b from-slate-300 to-slate-200 overflow-hidden relative" ref={ref}>
      <motion.div
        className="requirements"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-3xl font-bold mb-6 text-gray-800'>Requirements</h2>
        <motion.div
          className="cards grid grid-cols-1 md:grid-cols-2 gap-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -10 }
          }}
        >
          {requirements.map((requirement, index) => (
            <motion.div
              key={index}
              className="card bg-gradient-to-b from-slate-700 to-slate-400 p-4 rounded hover:shadow-xl"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -10 }
              }}
            >
              <h3 className='text-xl font-bold text-slate-200 mb-2'>{requirement.heading}</h3>
              <p className='text-slate-100 font-montserrat'>{requirement.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Requirements;
