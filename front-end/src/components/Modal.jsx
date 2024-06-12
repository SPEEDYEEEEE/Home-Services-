import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, content }) => {
  return (
    <motion.div
      className={`modal ${isOpen ? 'open' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        display: isOpen ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000
      }}
    >
      <motion.div
        drag={true}
        draggable={true}
        initial={{ y: '-100vh' }}
        animate={{ y: isOpen ? '0' : '-100vh' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className=' bg-gradient-to-b from-slate-700 to-slate-500'
        style={{
          // backgroundImage: `url(${modal})`,
          // backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          height: '350px',
          width: '400px'
        }}
      >
        {content}
      </motion.div>
    </motion.div>
  );
};

const WorkerModal = ({ workers, onClose, renderButton }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Worker Details</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2">First-Name</th>
              <th className="p-2">Last-Name</th>
              <th className="p-2">Gender</th>
              <th className="p-2">Skill</th>
              <th className="p-2">Experience</th>
              <th className="p-2">Rating</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Action</th> {/* Add action column */}
            </tr>
          </thead>
          <tbody>
          {workers.map(worker => (
            <tr key={worker._id}>
              <td className="p-2 text-center">{worker.firstName}</td>
              <td className="p-2 text-center">{worker.lastName}</td>
              <td className="p-2 text-center">{worker.gender}</td>
              <td className="p-2 text-center">{worker.skills[0].name}</td>
              <td className="p-2 text-center">{worker.skills[0].experience}</td>
              <td className="p-2 text-center">{worker.rating}</td>
              <td className="p-2 text-center">{worker.phoneNo}</td>
              <td className="p-2 text-center">{renderButton(worker)}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Close</button>
      </div>
    </div>
  );
};

export {Modal, WorkerModal};
