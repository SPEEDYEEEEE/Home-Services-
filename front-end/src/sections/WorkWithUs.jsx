import React from 'react';
import { Card } from '../components/Card';
import { reasonsToJoin } from '../constants';

const WorkWithUs = () => {
  return (
    <div className="bg-gradient-to-b from-slate-400 to-slate-300 text-gray-800 py-12 px-20">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-montserrat">Why Work With Us?</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reasonsToJoin.map((reason, index) => (
          <Card key={index} title={reason.title} content={reason.content} image={reason.image} />
        ))}
      </div>
    </div>
  );
};

export default WorkWithUs;
